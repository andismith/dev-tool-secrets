---
date: 2013-01-01 00:00:00
layout: secret
published: true

title: XHR Breakpoints
order: 20-00450
browsers:
- chrome
categories:
- debugging
parent: debugging
tags:
- secret
---

<p class="chrome">Within Chrome, it's possible to place a breakpoint on a XmlHttpRequest allowing you to debug AJAX requests. You can add a breakpoint by going to the "Sources" tab and selecting "XHR Breakpoints". Click the plus icon and type part or all of the URL you wish to add a breakpoint for. The breakpoint will occur once the request has been returned, allowing you to find out what data has been returned and step through what happens next.</p>

<p class="chrome">The breakpoint can be turned off by unchecking the box, or deleted by right clicking and selecting "Delete Breakpoint".</p>
