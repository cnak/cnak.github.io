---
title: Starting Behaviour Driven Development with Javascript & Jasmine
comments: true
layout: post
date: 2016-07-15
category: 
---

In this style of test driven development, we describe what the code should be doing, then our expectation on the code. This is important of BDD. Test behaviour, not implementation.

We first describe the group of specs that we are going to define. I like using a kata for my examples, so here are the first couple of steps of [fizz buzz](https://en.wikipedia.org/wiki/Fizz_buzz).

Lets have a look at an example of a spec.

{% highlight javascript %}
describe ( 'the group of specs' , function(){
//what it should do
it ( 'should be useful information', function(){
  expect(presentation.inform()).toBeTruthy();
)};
} );
{% endhighlight %}

It reads like plain English which is nice.

When we test drive our code, we first write a failing test , then write as little bit of code to get the test to pass then finally refactor.

This approach leads to better code because:

- only the minimum amount of code is written to make the test pass.
- it makes it easier to refactor the code (associated specs)
- it makes it easier for the developer to think about code design

## Start in the Red phase

The first step is to write a failing test in our spec file. We will be using Jasmine, a BDD framework for testing Javascript code. I personally like it as it offers quite a lot out of the box. It does not require a DOM. And if you have experience with RSpec in ruby land, you'll feel right at home.

{% highlight javascript %}
//Spec, fizzBuzzSpec.js
describe ( 'fizzbuzz' , function(){
it ( 'returns Fizz for input 3', function(){
  expect(fizzBuzz(3)).toEqual('Fizz');
)};
// Implementation code,  fizzBuzz.js
  var fizzBuzz : function( number ){
    return "Fizz";
}
{% endhighlight %}

That's right, this takes in nothing. Then we run the test. This is where things get interesting. It's possible to run the tests with Jasmine's specRunner.html or set up [karma](https://karma-runner.github.io/1.0/index.html).

### Setting up SpecRunnerHtml

First download all required Jasmine dependencies, which can be retrieved from the official Jasmine website. I placed my one in a lib directory.

Make sure to reference your implementation files and spec files that will be used by Jasmine.

{% highlight html %}
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Jasmine Spec Runner v2.4.1</title>

<link rel="shortcut icon" type="image/png" href="lib/jasmine-2.4.1/jasmine_favicon.png">
<link rel="stylesheet" href="lib/jasmine-2.4.1/jasmine.css">

<script src="lib/jasmine-2.4.1/jasmine.js"></script>
<script src="lib/jasmine-2.4.1/jasmine-html.js"></script>
<script src="lib/jasmine-2.4.1/boot.js"></script>

<!-- include source files here... -->
<script src="fizzBuzz.js"></script>

<!-- include spec files here... -->
<script src="fizzBuzzSpec.js"></script>
</head>
<body>
</body>
</html>
{% endhighlight %}

With the specRunner.html set up, open the file in your favourite browser and viola! Jasmine runs all the specs and gives us a nice User Interface.

What we see is the first failing test. Next step is to write as little code to get the spec to pass (to be in the green phase).

## Green phase

{% highlight javascript %}
var fizzBuzz : function( number ){
  return "Fizz";
} 
{% endhighlight %}

The simplest code to get the code to pass is to return a constant. Which may seem too simple, but it allows us to move forward to the next phase, probably one of my favourite parts of coding...

## The Refactor phase

Oh but wait... there's not much to refactor at the moment, so we write our next spec.  The next spec will force us to change our implementation.

note: I've omitted the spec declaration for brevity.

{%highlight javascript %}
  expect(fizzBuzz(0)).toEqual("");
{% endhighlight %}

We run spec runner again. The test fails, which is exactly what we want.

Now we write as little code as possible to get to green. At this point we introduce a conditional to pass the spec.

{%highlight javascript %}
var fizzBuzz : function( number ){
  if (number % 3 === 0) {
    return "Fizz";
  }
  return "";
} 
{% endhighlight %}

Again we run the test and we should now be in green. The implementation might not look much but it satisfies the specs, no need to more.

We repeat these small steps of adding a spec, writing enough to pass and if we need to, refactor the code. Slowly testing the function. But when do we refactor? When I feel some pain.

I refactor when I feel the code is causing me some discomfort. 
There are different reasons why you might feel some pain in your code. It could be because of code duplication, knowledge duplication, or you figure that you are at the wrong level of abstraction.
It could be for various reasons, whatever it may be, the moment you feel the pain, refactor your code.

Let's get to a stage where the code could cause some discomfort

We've added plenty of tests and we are now at a point in the refactor phase where we will see code duplication, as shown below.

{%highlight javascript %}
var fizzBuzz : function( number ){
  if (number % 3 === 0) {
    return "Fizz";
  }
  if (number % 5 === 0) {
    return "Buzz";
  }
  if (number % 15 === 0) {
    return "FizzBuzz";
  }
  return number;
} 
{% endhighlight %}

We see the three if statements, we check if the number is divisible by some number, 3, 5 or 3 and 5 (I've used to 15 to cover this case). Knowing we have our specs in place, any refactoring should still leave us in the green phase.

{% highlight javascript %}
var fizzBuzz : function( number ){
  var fizz = number % 3 == 0, buzz = number % 5 == 0;
  return (fizz ? buzz ? "FizzBuzz" : "Fizz" : buzz ? "Buzz" : number);
}
{% endhighlight %}

We've refactor this into smaller lines of code. 

This was a short introduction to Jasmine and BDD.  Jasmine comes with a lot of different matchers that can be viewed on the [homepage](http://jasmine.github.io/2.0/introduction.html), it can also be expanding with jasmine-jquery for DOM testing.
