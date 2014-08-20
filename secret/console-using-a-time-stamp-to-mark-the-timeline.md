---
date: 2013-08-23 15:19:00
layout: secret
published: true

title: Using a Time Stamp to Mark the Timeline
authors:
- Jan Odvarko
order: 05-00200
browsers:
- firebug
- chrome
categories:
- console
parent: console
tags:
- secret
---
<p>A time stamp label can be created by using <code>console.timeStamp(label)</code>. A time stamp can be used together with HTTP traffic timing to measure when a certain piece of code was executed.</p>

<div class="firebug image"><img src="/assets/img/placeholder.gif" data-src="/assets/img/secrets/firebug-timestamp.png" /></div>

<p>You can also <a href="https://developers.google.com/chrome-developer-tools/docs/timeline#user-produced_timeline_events">add events to Chrome's timeline</a> although it doesn't look quite like the photo in the documentation as it is wrapped in "Function Call (InjectedScript:1)", but they are visible as yellow markers in the timeline at the top of the lower "records" frame that will show the message in a tooltip if you hover over them.</p>
