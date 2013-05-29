---
date: 2013-01-01 00:00:00
layout: secret
published: true

title: Log, Info, Debug, Warn, Error
order: 05-00100
browsers:
- chrome
- firebug
- firefox
- internet-explorer
- opera
- safari
categories:
- console
parent: console
tags:
- secret
---

<p><code>console.log()</code> is an extremely useful tool for outputting debug without having to use alerts; but there are some other methods that you can use to output information to ease viewing in the console.</p>

<p>You can use <code>console.info()</code> to output information messages; <code>console.debug()</code> to output debug messages; <code>console.warn()</code> to output warning messages and <code>console.error()</code> to output error messages.</p>

<p class="firefox">Firefox will show a small grey icon next to info, warn and error messages to signal that they may require further attention. Firefox does not show anything different for debug - according to MDN it has been deprecated in Firefox in favour of <code>console.log()</code></p>

<p class="chrome safari">Chrome and Safari (nightly) will not show an icon for info, but will show a blue icon for debug; a yellow icon for warn and a red icon for error.</p>

<p>You can output multiple values to any of these logging methods by separating your values with a comma, which can be handy for including objects and arrays on the same line. For example: <code>console.log('Kings: ', kings);</code>.</p>

<div class="video"><iframe src="about:blank" data-src="http://player.vimeo.com/video/66605883?title=0&amp;byline=0&amp;portrait=0&amp;color=ededed" width="500" height="313" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div>