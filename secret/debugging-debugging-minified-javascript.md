---
date: 2013-01-01 00:00:00
layout: secret
published: true

title: Debugging Minified JavaScript
order: 20-00600
browsers:
- chrome
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

<p>Placing breakpoints on JavaScript makes debugging much easier, but if your code has already made it to production then it's probably been minified. How can you debug minified code? Helpfully, some of the browsers have an option to un-minify your JavaScript.</p>

<p class="chrome safari">In Chrome and Safari, simply select the 'Scripts' tab, find the relevant file and then press the "{ }" (pretty print) icon located in the bottom panel.</p>

<p class="internet-explorer">In Internet Explorer, click the tool icon by the script selection drop down to find the option to format the JavaScript.</p>

<p class="opera">Opera will automatically prettify minified JavaScript.</p>