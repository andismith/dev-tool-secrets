---
date: 2013-06-16 00:00:00
layout: secret
published: true

title: Changing Frame Focus
authors:
- Andi Smith
order: 05-04000
browsers:
- chrome
- firebug
- opera
categories:
- console
parent: console
tags:
- secret
---

<p>Running JavaScript commands from the console command line is incredibly useful, but if you have an iframe to contend with it can be a problem if you don't know how to target your frame.</p>

<p class="firebug">In Firebug, you can use the following command to focus on the frame in question and execute your commands against:</p>
<code class="firebug">cd(window.frames['frameName']);</code>

<p class="chrome">Chrome allows you to change frame from a dropdown list found at the bottom of the console window.</p>

<p class="opera">Opera has a dropdown for changing frame which is available from the “Console” and “Documents” tab. The dropdown will only appear on the “Console” tab if there are frames to select.</p>

<p>You can also get a list of any iframes on your page by using <code>document.getElementsByTagName("iframe");</code> in the console.</p>