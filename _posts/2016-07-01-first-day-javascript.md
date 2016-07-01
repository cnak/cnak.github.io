---
title: First days of Javascript
comments: true
layout: post
date: 2016-07-01
category: 
---

I've recently started delving into the world of Javascript. I've developed in Javascript briefly in various Rails project and other front end project but I never really got too deep into it. 
I'm required to add some Ajax functionality to my Tic tac toe so this is a great opportunity to learn how to test drive javascript code and at the same time improve my knowledge of the language and the world.

First of all....

## What is Karma?

A test runner for Javascript, it increasing productivity by running tests any time there's a file change. It's completely testing framework agnostic enabling the use of a framework as Jasmine, Mocha etc. It's even used by Google.

## What is Jasmine

A testing framework very much like RSpec, if we were to look at the two the similarities are clear.

The first example is in Ruby, the second is in Javascript.

{% highlight ruby %}
  describe RomanNumerals do
      it 'convert arabic to roman' do
        result = RomanNumerals.convert(1)
        expect(result).to eq "I"
      end
  end
{% endhighlight %}

{% highlight javascript %}
describe('convert arabic to roman', function() {
  it('converts 1 to I', function() {
    expect(convert(1)).toBe("I");
  });
});
{% endhighlight %}

 I've grown fond of Behaviour driven development, so when I'm learning new languages, I naturally gravitate to the languages BDD testing framework. I did the same thing when learning Clojure.

### Installing Karam and Jasmine
The recommended approach is to install Karma (and all the plugins your project needs) locally in the project's directory.

{% highlight bash %}
$ npm install karma --save-dev
$ npm install jasmine --save-dev
{% endhighlight %}

That's it really. You could also install the two globally by adding "-g" option on the npm command.

## Vim plugin

I found the following plugin useful for Javascript development in vim.

'pangloss/vim-javascript'
Improves JS syntax highlighting and improves indentation.

If anyone has other plugins for a more productive Javascript environment, please let me know.

