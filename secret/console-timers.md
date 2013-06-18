---
date: 2013-06-18 15:51:00
layout: secret
published: true

title: Using the console's timing functions
authors:
- Aptary
order: 05-00175
browsers:
- chrome
- firebug
- firefox
- opera
- safari
categories:
- console
parent: console
tags:
- secret
---

<p>A timer can be started in the console by using <code>console.time(label)</code>. The string <code>label</code> is needed so we have a reference to the timer when we want to stop it. The timer is stopped by calling <code>console.timeEnd(label)</code>, which will output to the console the time in milliseconds since the timer (identified by <code>label</code>) was started.</p>




