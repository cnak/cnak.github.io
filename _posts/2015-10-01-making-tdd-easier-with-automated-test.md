---
layout: post
title: Making TDD easier in Ruby by automating your tests
date: 2015-10-01 19:30:26.000000000 +01:00
type: post
published: true
status: publish
categories:
- Ruby
tags:
- Ruby
- TDD
meta:
  _wpcom_is_markdown: '1'
  _rest_api_published: '1'
  _rest_api_client_id: "-1"
  _publicize_job_id: '15372052345'
---

I'm a fan of test driven development, in order to speed up my turnaround time from writing functionality to testing the functionality, I use Guard(https://github.com/guard/guard) tool to automatically run my test any time I make a change.

This greatly speeds up my development time and hopefully it'll help you too.

This is going to be our final files and folder structure.

{% highlight ruby %}
Gemfile  
Gemfile.lock  
Guardfile  
lib  
spec  
{% endhighlight %}

## Dependencies Setup

First step is to setup a gem file with the dependencies that we will be using.

Create a new file named 'Gemfile' in your main project directory with the following contents

{% highlight ruby %}

#Gemfile  
source "https://rubygems.org"

gem "rspec"

group :development do  
gem 'guard'  
gem 'guard-rspec'  
end  
{% endhighlight %}

Once done, run the bundle install commind in the terminal to install the dependencies, like so.

{% highlight ruby %}
bundle install  
{% endhighlight %}

## Seting up Guard

Create a new file named 'Guardfile' with the following content

{% highlight ruby %}
#Guardfile

guard :rspec, cmd: "bundle exec rspec --color" do

#Guardfile  
# watch /lib/ files  
watch(%r{^lib/(.+).rb$}) do |m|  
"spec/#{m[1]}_spec.rb"  
end

# watch /spec/ files  
watch(%r{^spec/(.+).rb$}) do |m|  
"spec/#{m[1]}.rb"  
end  
end  
{% endhighlight %}

This file configures the Guardfile tool to watch for any changes to ruby files within the lib and spec directories and runs rspec.

Note: We have taken this route of manually creating a Guardfile rather than running "guard init" so we more easily see what the guard file is doing. Guard init generates a lot of code that we won't be using in this guide.

Finally we launch our Guard instance to start watching our files by running the following command in the terminal.

{% highlight ruby %}
guard  
{% endhighlight %}

That's it, hopefully this helps speeds up your development time.

Here is the completed [repo](https://github.com/cnak/ruby_boilerplate).

Cedric
