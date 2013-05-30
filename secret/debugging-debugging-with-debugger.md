---
date: 2013-01-01 00:00:00
layout: secret
published: true

title: Debugging With debugger;
order: 20-00420
browsers:
- chrome
- firebug
- firefox
- internet-explorer
- opera
- safari
categories:
- debugging
parent: debugging
tags:
- secret
---

<p>You can automatically create a breakpoint in your code by adding the following line to your JavaScript: <code>debugger;</code> . This will automatically create a breakpoint in the code when it is run with Developer Tools open.</p>

<p>Although useful for quickly adding breakpoints without having to find the line in the Developer Tools, be careful not to send code with <code>debugger;</code> live.</p>