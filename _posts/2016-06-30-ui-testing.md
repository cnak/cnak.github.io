---
title: User testing with Capybara
comments: true
layout: post
date: 2016-06-24
category: 
---


#User testing with Capybara

#Cucumber

Writing unit test is important for less stress and more productivity in the long run, why shouldn't we have the same love for UI testing?

That's where Cucumber comes in.

Cucumber is a BDD, acceptance testing tool written in Ruby. It makes it easier to run business style rules which then get turn into an acceptance test.

## What is Gherkin

The language used to write Scenario, it's easy to read for programmers and non-programmers alike.

{% highlight gherkin  %}

Feature: Refund item

  Scenario: Jeff returns a faulty microwave
    Given Jeff has bought a microwave for $100
    And he has a receipt
    When he returns the microwave
    Then Jeff should be refunded $100

{% endhighlight %}

## But perhaps we are going the wrong way?

After speaking to Jim, he suggested that you really shouldn't UI through cucumber. Kevin Liddle in his blog plot repeat a sentiment.
I find it difficult to believe that business people would want to get close to the code, even if the code looks as plain english as Gherkin.
However Cucumber may still have it's use for developers in the initial stages, almost like a guideline on how the app UX should be like. A way to gather the feature requirements. I can even imagine being in a meeting discuss feature requirements and taken notes using Gherkin.

## But... Why not just use Capybara with Rspec...?

That's what I ended up thinking. Removing Cucumber from the equation, removes the extra level of complexity. Making our code look like the below.

{% highlight ruby %}

Capybara.configure do |config|
  config.run_server = false
  config.default_driver = :selenium
  config.app_host = 'http://localhost:9292' 
end

describe "game options page", :type => :feature do
  it "navigates to the human vs human page" do
    visit '/game-options'
    click_button 'Human Vs Human'
    expect(page).to have_content 'Human Vs Human'
  end
end
  
{% endhighlight %}

Using it alongside selenium as the driver to test the ui, we can use Capybara syntax to visit a link and click on a button on the page.
The great thing about capybara with Selenium is that the specs act like the users, navigating through the app, playing a complete game even.
The downside is that you are tightly coupled with the view.  Let say we remove or renamed the game options button, we will have to test the button.
or even if the URLs change then it requires changing the spec.   
Another thing is that driver (in this case Selenium) is tightly tied to a version of Firefox, so you have to be aware of which version you are running on your machine. This can be solved by not updating your Firefox until you have updated your driver, but then you won't be getting latest security updates

My next task will be figuring out how to run the UI tests headless....


Kevin Liddle - Case against Cucumber (https://blog.8thlight.com/kevin-liddle/2013/09/18/a-case-against-cucumber.html)
