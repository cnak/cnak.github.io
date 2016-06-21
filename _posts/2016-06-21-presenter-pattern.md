---
title: Presenter Pattern
comments: true
layout: post
date: 2016-06-21
category: 
---


## The Problem

Spending time in the Ruby on Rails world, I find that controller objects have a habit of doing too much and violating the Single Responsibility Principle. Another issue I often see is that logic creeps into view templates.

Here is a snippet of from a view that displays a tic-tac-toe board. It contains logic to determine whether a cell should display a cell or a button.

{% highlight ruby %}
 - unless board.game_over?
#board_container
#a table using Slim template engine
table#board
tr
          - 0.upto(2).each do |cell|
              td.mark
              - if board.position_at(cell).nil?
                  a.button href="/play?move=#{cell+1}&board=#{board_to_display}" 
              - else
                  = board.position_at(cell)
#omitted code 
{% endhighlight %}

## Possible Solution
The question I find myself asking myself how much logic in a view template is okay. The above code doesn't look so bad to me. Yes we could extract the each loop to a method elsewhere.

Extracting the method is a similar solution that rails take calls Helpers.

### Helpers
Helpers are functions which Rails mixes in with your view so all the methods are available.
{% highlight ruby %}
#in the Helper
module StringHelper
  def capitalize(string)
    string.capitalize
  end
end

{% endhighlight %}
{% highlight ERB %}
<!-- In the View -->
<h2>
Hello, <%= capitalize @user.name %>
</h2>
{% endhighlight %}

Following this approach means that we no longer have the "how" of a method and instead we get the result of the method. Because really what we want is the result afterall, we don't need to code logic poluting the view template.

Granted this is a simple example, lets look at a more complex Helper.

### Rendering a view components in a Helper method.

We can render a component instead of returning a string. 

{% highlight ruby %}
# In the Helper
def display_row(board) 
  0.upto(2).each do |cell|
    "td.mark"
    if board.position_at(cell).nil?
      "a.button href=#{make_move(cell, board)}"
    else
      board.position_at(cell)
    end
  end
end
{% endhighlight %}

{% highlight ERB %}
<!-- In the View -->
<table class="board">
  <tr>
    <%= display_row(board) %>
  </tr>
</table>
{% endhighlight %}

The above code this simplify our view template, making cleaner. 

The important part of the presenter pattern is to make sure that you pass a presenter object to the view, thus the view is only dependent on methods from the presenter object. Above we had Rails helper module but we could achieve a similar behaviour in Rack.

{% highlight ruby %}
module TicTacToeRack
  class DisplayPresenter

    def move_link(move, board)
      "/play?move=#{move+1}&board=#{board}"
    end

    def game_over?(board_obj)
      board_obj.game_over?
    end

    def available_at?(cell, board)
      board.position_at(cell).nil?
    end
#...omitted code
{% endhighlight %}

Here is our Display presenter object with a few helpful method that we plan on using in a view.
And it is this presenter that has associated test specs for each method.

Within our Display class we pass a presenter object on initialization which can then be passed on to our erb template view through bindings.

{% highlight ruby %}

module TicTacToeRack
  class Display

    def initialize(presenter = TicTacToeRack::DisplayPresenter.new)
      @presenter = presenter
    end

    def index_view(board = TicTacToe::Board.empty_board)
      path = File.expand_path("view/index.html.erb")
      template = File.read(path)

      my_binding = binding
      my_binding.local_variable_set(:presenter, presenter)

      ERB.new(template).result(my_binding)
    end
  end
end

{% endhighlight %}

Now that the presenter is within our view, we can call all those handy method from the presenter.

{% highlight ERB %}
#omitted code

              <% 0.upto(2).each do |cell| %>
                <td class="mark">
                  <% if presenter.available_at?(cell, board) %>
                    <a class="button" href=<%= presenter.move_link(cell, presenter.to_display(board))%>></a>
                  <% else %>
                    <%= board.position_at(cell) %>
                  <% end %>
                </td>
              <% end %>

#omitted code
{% endhighlight %}

I went back and forth on whether to leave the each loop inside the view or instead move it to presenter object and create a view component method. I thought to leave it here as the loop isn't duplicated in other views. Avoiding premature optimizations.

It's usually not advisable to test the view, as it's the part of a system that will change the most during the course of the application's lifetime. Introducing a presenter objects, allows you to validate the parts of the content of view that are less likely change, while not testing visual elements such as content widths, images etc.

Admittedly Presenters do add an additional level of complexity. They should only be introduced when you feel when that the abstraction is neccessary, when you feel that the class will be reused again and again. 


