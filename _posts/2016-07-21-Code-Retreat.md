---
title: Thoughts on first full code retreat
comments: true
layout: post
date: 2016-07-21
category: 
---

Wednesday this week we had an all day code retreat with Eric Meyer in the office.

A code retreat is usually an all day event whereby a group of developers pair program on Conway's game of life. The day is split up in intervals. At the end of each interval, the developers pair with someone new and solve the problem with a new language and a new constraint.

I previously attended a half day one over 6 months ago,  but to be honest I didn't learn as much as I would've liked on that one because of its short length. 

We had the following constrains for each interval:

- No primitives on method boundaries. In the input arguments or return statement 
- No conditional branching.  No switch statements, no ifs etc. 
- No verbal communication. 
- Baby steps. Must commit within a 2 minute time frame otherwise throw away the uncommitted code. 

### No Primitives on method boundaries 

After having a brief chat with Priya (my pair),  we settled on Java as our language of choice for this interval.

It was interesting how  dependent we are on primitive types.  Eric said it was fine to pass primitives into the constructor but the other general constraint on method boundaries still applied. Priya and I solved the issue by using Enums, which we would never have thought of using if we were allowed to use primitives. The enums approach ended up being better because it improved readability and lessened the chance of passing an invalid constants.

### No Verbal Communication

Next up was no verbal communication. I found this one the most challenging of all the constraints as I'm used to speaking to my pair, for example discussing decisions, method names etc. Due to the odd numbers of participants, it was even more difficult as we were pairing with a group of three. 

Not being able to verbally communicate with your pairs meant we had to communicate through code. This resulted in our test spec method signature being a lot more descriptive. An example would be like 'checksNumberOfNeighbours'. I liked this side effect as I could see myself looking at someone else's specs and having a clearer idea what the test is about. At times I see a test method signature and it's not clear what the test does without having to look at the method body. 

Another side effect of having this constraint is that the design of the app was all over the place, we no longer could discuss the design up front. However at the same time we ended up writing more code than previous intervals combined.

### 2 minute Commit 

I paired with Nick on this interval which requires you to only keep the code you commit.  When we started, Nick and I thought we had a clear idea of where we were heading, what became evidently clear was that some of the tests could not be satisfied within a 2 minute period due to the amount of code required. So we decided to alternate between using a 2 minute interval for design discussion and code implementation.

I believe Nick and I ended up being more productive due to this particular constraint, but there were times when the pressure would get to us so much that we would make typos, overall a fun experience.

I would recommend a Code Retreat to anyone looking to improve their skills. Coding under certain constraints brings about different solutions that you may not have normally considered. Not having the pressure of delivering a finished product, gives the opportunity to concentrate on experimentation.
