---
date: 2013-01-01 00:00:00
layout: secret
published: true

title: Conditional Breakpoints
order: 20-00430
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

<p>Conditional breakpoints are useful for adding breakpoints to the code without having to hit them every time. For example, if you know there is a bug in your code at the last item you can use a conditional comment to check whether it is the last item before activating the debugger. The breakpoint will fire whenever the condition is TRUE.</p>

<p class="chrome">To create a conditional breakpoint in Chrome, create a normal breakpoint and then right click on the breakpoint and select "Edit Breakpoint" to add a condition.</p>

<p class="firebug">In Firebug, conditional breakpoints can be created by first creating a normal breakpoint and then right clicking. A input box will appear allowing you to add a condition.</p>

<p class="firefox">In Firefox, right click on the line of JavaScript you wish to break on and select "Add Conditional Breakpoint".</p>

<p class="internet-explorer">In Internet Explorer, create a normal breakpoint. Right click on the breakpoint and select "Condition...".</p>

<p class="opera">In Opera, create a normal breakpoint and then right click on the breakpoint before selecting "Add Condition".</p>

<p class="safari">In Safari, ensure both the script and "Debugger" panel are open. Create a breakpoint by selecting the line of code you wish to debug. Then in the "Debugger" panel, right click on the same breakpoint and choose "Edit Breakpoint".</p>