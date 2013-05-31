---
date: 2013-01-01 00:00:00
layout: secret
published: true

title: Assert
authors: Andi Smith
order: 05-00150
browsers:
- chrome
- firebug
- internet-explorer
- opera
- safari
categories:
- console
parent: console
tags:
- secret
---

<p><code>console.assert()</code> can be used to test whether expressions are true or false.</p>

<p>It takes two parameters: the expression and the message to display. The message will only be shown in the console if the expression is FALSE.</p>

<p>For example, <code>console.assert(!true, 'This is not true');</code> will output 'This is not true' to the console.While <code>console.assert(true, 'This is not true');</code> will not output anything to the console.</p>