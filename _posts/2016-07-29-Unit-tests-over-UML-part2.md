---
title: Does modern software development practices prefer unit tests over UML diagrams? (part 2)
comments: true
layout: post
date: 2016-07-28
category: 
---

## Agile methodologies

The [Agile manifesto](http://agilemanifesto.org) was created by a group of prominent individuals in the software industry,  individuals such as Kent Beck, Martin Fowler and Bob Martin.

One of the core principles of the manifesto is, “Working software over Comprehensive documentation”. Unlike other methodologies that have an over reliance on documentation, Agile places more importance on software.

There are few methodologies based off this manifesto, I'll be looking at Extreme Programming(XP) as it is one that promotes test driving your code with unit tests. In facts it's one the 12 key practices.

## Surveys

In a large survey conducted by Analysis.net Research[1], “State of Agile” found that of the 3,501 respondents, 72% used Unit testing. In the survey, there’s no mention of UML. I can only speculate with 66% using some form of Scrum that UML diagrams were not being used. However the survey does highlight that the majority do see Unit Testing as an important practice.

According to "UML in Practice"[8]..

“A survey of 226 developers conducted in 2002 by BZ Research found that “In fact, only about one-third of developers recently surveyed said they use UML – and not a single respondent believes that code generated from models is production-ready.” In the same paper, a study conducted over a 2 year period found that out of the 50 developers interviewed, 35 did not use any form of UML, and the rest of 15 interviewed reported to only rarely using it.

The developers interviewed stated various reasons for this, first issue was that they believed UML provides a lack of context as the diagrams describe “software architecture rather than the ‘whole’ system”. Secondly they believed that there’s too much overhead in understanding UML notation. This made it difficult for various different stakeholders to effectively communicate with one and another using UML.  

## Conclusion

My opinion is that unit tests are preferred to UML is based on the assumption that over the years the adoption of UML has decreased while the use of agile methodologies have increased. 

Most agile methodologies have unit testing as part of their core principles. Most of these methodologies preach less documentation and more focus on software.,  These methodologies recommend an iterative approach whereby code is constant improved and refactored, I can see how this can be more easily achieve when unit tests are at the core of your system development’s process.

I personally believe that UML diagrams become quickly out of date, whether it's due to developers lack of desire to update them when the system changes, or produce them each time a new business requirements comes in.

For me, unit tests are almost a form of documenting the system, albeit not as graphical and not in the traditional sense. I sometimes will look at the systems unit tests to get a rough idea how the system works and usually if a unit test passes, you then know it's not out of date, not the same can be said when viewing a UML diagram.

In conclusion the majority of modern software methodologies place an importance on unit tests and not as much on UML diagrams.

<br />
<br />
<br />
<br />

## References
[03] State of agile http://www.versionone.com/pdf/2013-state-of-agile-survey.pdf
[04]Petre, Marian (2013). UML in practice. In: 35th International Conference on Software Engineering (ICSE 2013), 18-26 May 2013, San Francisco, CA, USA (forthcoming), pp. 722–731. 
