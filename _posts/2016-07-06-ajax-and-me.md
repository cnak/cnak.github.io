---
title: Starting with Ajax
comments: true
layout: post
date: 2016-07-06
category: 
---

Ajax... it took a while for me to pronounce it A-Jax and not I-YAX( like the football team). :)

AJAX the way to do some asynchronous javascripting. Although it stands for asynchronous JavaScript and XML, I get the sense that less and less XML is actually used.

AJax makes it easier to send and retrieve from a server asynchronously, without having to refresh a web page. In my Tic-tac-toe(https://tic-tac-toe-rack.herokuapp.com) rack version, each mark on the board is a anchor link which makes a http request which would looks like this for board mark on the top left.

{% highlight HTML %}
  <a href="/play?move=#1&board=#---------&game-type=#hvh"></a>
{% endhighlight %}

This request sends the move, an empty board and a human vs human game type as part of the http parameter string.

Once the button is click it directs to the specified URL, causing the page to refresh.

This works but it isn't as nice of a user experience. That's where Ajax comes in.

Traditional web applications communicates with the server through synchronous requests. Hence why the page has to refresh to get the latest information. 
Ajax works asynchronously. Javascript code makes a request to the server, the server handles the request, then sends that result back. Once the result is ready, the Ajax code then executes a second action with the results

Lets go more low level..

Here are overview steps of AJAX Operation
A client event occurs.

1. An XMLHttpRequest object is created.
2. The XMLHttpRequest object is configured.
3. The XMLHttpRequest object makes an asynchronous request to the Webserver.
4. The Webserver returns the result containing XML document.
5. The XMLHttpRequest object calls the callback() function and processes the result.
5. The HTML DOM is updated.
 
## A Basic Example with Rack

Here below is my Rack back end which takes a request and responds with a converted arabic string.
{% highlight ruby %}

module TicTacToeRack
  class Application
    def rack_up
        map"/roman" do
          run(Proc.new do |roman_env|
            [200, {}, [display.roman]]
          end)
          end
        end

        map"/convert-roman" do
          run(Proc.new do |my_env|
            converter = TicTacToeRack::RequestConverter.new(Rack::Request.new(my_env))
            [200, {}, [converter.arabic]]
          end)
        end
    end
end
{% endhighlight %}

To convert the arabic parameters, I've created a simple converter that takes the arabic parameter from the query string and returns the roman value. 
Careful to note that the Rack::Request object is a convenient interface to the rack environment, which makes it easier to access the query string as key value pairs.

Next we use the request converter to convert into something that the back end can understand, calculate and return. This is being done through the rudimentary "arabic" method, which is reading the parameters hash given through the constructor.

{% highlight ruby %}
module TicTacToeRack
  class RequestConverter
    def initialize(request)
      @parameters = request
    end

    def arabic
      arabic = (@parameters["arabic"].to_i)
      return "I" if arabic == 1
      return "IV" if arabic == 4
      return "V" if arabic == 5
      return "X" if arabic == 10
    end
  end
end
{% endhighlight %}

In the client side, we have a script that adds an event handler to a button, which makes a request by the value held in the input box.

{% highlight javascript %}
(function() {
  var httpRequest;

  document.getElementById("ajaxButton").onclick = function() { 
    var arabicNumber = document.getElementById("ajaxTextbox").value;
    makeRequest('/convert', arabicNumber); 
  };
{% endhighlight %}

{% highlight javascript %}
  function makeRequest(url, arabic) {
    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
          alert('Cannot create an XMLHTTP instance');
          return false;
    }
    httpRequest.onreadystatechange = alertContents;
    // Once the state has change the callback is activated.

    httpRequest.open("POST", url);
    httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    httpRequest.send('arabic=' + encodeURIComponent(arabic));
    // Send arbic value as part of the query string
    }

    function alertContents() {
      if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200) {
          var response = httpRequest.responseText;
          document.getElementById("romanSymbol").innerHTML = response;
          // Updates the html element with the response
      }
    }
})();
  </script>
{% endhighlight %}

That's it for making a Ajax request with a callback. 
