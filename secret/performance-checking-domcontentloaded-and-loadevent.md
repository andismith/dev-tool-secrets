---
date: 2013-01-01 00:00:00
layout: secret
published: true

title: Checking DOMContentLoad and Load Event
order: 60-00260
browsers:
- firebug
- chrome
- safari
categories:
- performance
parent: performance
tags:
- secret
---

<p class="chrome safari firebug">The network timeline for Chrome and Safari (and Net panel for Firebug) displays information to show how quickly the page has loaded, displaying lines for both when DOMContentLoaded is fired and when the load event is fired.</p>

<ul class="chrome safari firebug">
    <li><p>DOMContentLoaded indicates when the browser has finished parsing the document (but other resources such as images and stylesheets may/may not have been downloaded). It is represented as a blue line.</p></li>
    <li><p>The load event fired will occur once all the initial resources (images, stylesheets, JavaScript) have been downloaded. It is represented as a red line.</p></li>
    <li><p>If the two events fire at the same time, the line will be purple.</p></li>
</ul>

<div class="image chrome"><img src="/assets/img/placeholder.gif" data-src="/assets/img/secrets/chrome-checking-domcontentloaded-and-loadevent.png" /></div>

<p class="safari">In Safari, the lines are dashed rather than solid.</p>
