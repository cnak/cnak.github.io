---
title: Programming in a functional way
comments: true
layout: post
date: 2016-06-24
category: 
---

## Intro

It's been a great  experience learning Clojure, lisp and functional style programming. This is just a short list of some principles I've learned about Functional Programming (FP) design.

## Learning from my previous paradigm

It's only natural to bring your previous experiences along with you when learning something new.
Usually it's a positive, but coming into FP with my OOP background felt at times as a hinderance.

Ideas such as..

- SOLID principle
- DRY
- Design patterns e.g. Strategy, MVC, Factory.  
- Classes and objects
- Methods

But not all of these were a hinderence. For example Functions are simply methods. Well that's not a 100% accurate.

A method is associated with an object and a function is independent of an object. Then again it depends if you're using C++ where it depends whether you're in a class.

I feel DRY principle can still be applied in Functional Programming, in fact DRY can probably be apply in so many parts of anyone's life outside programming.

## Functions as parameters 

- preserve the distinction
- remove the duplication

OOP uses interfaces to force you to program to a contract.

Functional version of a strategy pattern is kind of built in. You simply pass in the function that you would like to call

### Function composition - they're like Lego piece

* We don't care how functions work, just the input and the output
* No Side effects - Given a certain input, no matter how many times that repeated function is called, the function should return the same result.
* Immutable values - Variables cannot be changed. Period. So really they're no longer really variables, as they don't vary. They're really constants.
* Higher order functions - Functions are treated as first class citizen, so they can passed in as an argument.
* Currying - Transforming a function that has 2 ore more arguments into a function that takes only one function.
* Recursion - Traditional looping 
* Lazy Evaluation - Not processing values until the moment that you need it. An example is when you're generating a list, the result would be evaluated until called by another function.

## Meanwhile in Ruby land

### Side effects

{% highlight ruby %}
def square(int x)
  x * x
end
{% endhighlight %}

A small example of a function with no side effects. If x is 5, then 25 will return, every single time. It's result only depends on it's input arguments and nothing else. In addition it doesn't modify anything outside of it's scope.

{% highlight ruby %}
def processEmailMessage
  latest_message = Server.latest_message
  return process(latest_message)
end
{% endhighlight %}

The method signature indicates there's no input, which is a bit deceiving. It does have an input. A hidden input, the latest message. Calling this method more than once will cause side effects. It has an effect on object(s) or variable(s) outside it's origin intended purpose.
Another aspect of this function is that if we knew the inputs of this method like below then if we were to send the same latest_message object as an input parameter, then we should get the same processed message as an output.

{% highlight ruby %}
def processEmailMessage(latest_message)
  return process(latest_message)
end
{% endhighlight %}
### Functions within functions

In ruby you can do this...

{% highlight ruby %}

def my_function
	def returned_function
	end
end

my_function

=>  :returned_function
{% endhighlight %}

a function has been declared within a function! When we call "my_function" we get a symbol back but not the function. Strange behaviour I find. I would expect to get a function back, so maybe ruby doesn't treat functions as first class citizens.

But what about higher order functions?

### Higher order functions

Higher order functions follows these two rules

- Accepts a function as an input argument.
- Return a functions as the return value


Ruby accepts functions as input argument. The ruby core library has a examples of this.
The map, reduce and each methods are examples of this.

{% highlight ruby %}
names = ["Cedric", "Jim", "Chris"]
names.map do |name|
  name.capitalize
end

# => ["CEDRIC", "JIM", "CHRIS"]
{% endhighlight %}

The map methods takes any kind of class that includes enumberable mixin, such as an Array. Then runs the block for every single element and returning the result into a new collection. Within that block we can pass in our function or do other operations

How about returning functions as value?  Not so many examples in the ruby core library but we can still achieve it.

{% highlight ruby %}
def add_together(a, b)
  lambda { a + b }
end

add_together_func = add_together(2, 3)

add_together_func.call  

# =>  5
{% endhighlight %}

Once we have returned this function, we can pass it along to other functions as input. Functions being pass around is one of the tenets of functional programming.

This also allows us to use partial application in our code, something that I will talk about in a upcoming post.

until next time..
