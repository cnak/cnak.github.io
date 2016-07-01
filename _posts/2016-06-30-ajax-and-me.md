---
title: Ajax and me
comments: true
layout: post
date: 2016-06-24
category: 
---

#Ajax and me

Ajax... it took a while for me to pronounce it A-Jax and not I-YAX( like the football team).

AJAX the way to do some asynchronous javascripting. Although it stands for asynchronous JavaScript and XML, I get the sense that less and less XML is actually used.

AJax makes it easier to send and retrieve from a server asynchronously, without having to refresh a web page. In my Tic-tac-toe(https://tic-tac-toe-rack.herokuapp.com) rack version, each mark on the board is a anchor link which makes a http request which would looks like this for board mark on the top left.

{% highlight HTML %}
  <a href="/play?move=#1&board=#---------&game-type=#hvh"></a>
{% endhighlight %}

This request sends the move, an empty board and a human vs human game type as part of the http parameter string.

Once the button is click it directs to the specified URL, causing the page to refresh.

{% highlight ruby %}

module TicTacToeRack
  class Application
    def rack_up
        map"/convert-roman" do
          run(Proc.new do |my_env|

            converter = TicTacToeRack::RequestConverter.new(Rack::Request.new(my_env))

            [200, {}, [converter.arabic]]
          end)
        end

        map"/roman" do
          run(Proc.new do |roman_env|
            [200, {}, [display.roman]]
          end)
        end

        end
    end
end

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

{% highlight javascript %}
(function() {
  var httpRequest;

  document.getElementById("ajaxButton").onclick = function() { 
    var userName = document.getElementById("ajaxTextbox").value;
    makeRequest('/username',userName); 
  };

  function makeRequest(url, userName) {
    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
      alert('Cannot create an XMLHTTP instance');
          return false;
          }
          httpRequest.onreadystatechange = alertContents;
          httpRequest.open("POST", url);
          httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
          httpRequest.send('arabic=' + encodeURIComponent(userName));
          }

          function alertContents() {
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
              if (httpRequest.status === 200) {
                var response = httpRequest.responseText;
                document.getElementById("romanSymbol").innerHTML =response;
              } else {
                document.getElementById("romanSymbol").innerHTML ="ERROR!!";
              }
            }
          }
})();
  </script>
{% endhighlight %}
