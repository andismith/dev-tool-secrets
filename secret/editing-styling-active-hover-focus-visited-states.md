---
date: 2013-01-01 00:00:00
layout: secret
published: true

title: Styling :active, :hover, :focus, :visited States
order: 15-00600
browsers:
- chrome
- firebug
- firefox
- opera
- safari
categories:
- editing
parent: editing
tags:
- secret
---

<p>Styling CSS in the Developer Tools is great, but becomes a little more tricky when testing other psuedo-classes such as hover. Thankfully, there is a solution.</p>

<p class="chrome">Chrome has a button built for this purpose. In the “Elements” tab’s right hand column look for the dotted element/cursor icon which allows you to try other states.</p>

<div class="image"><img src="/assets/img/placeholder.gif" data-src="/assets/img/secrets/chrome-active-hover-focus-visited.png" /></div>

<p class="firebug">For Firebug, in the right hand column click the arrow menu beside the Style tab and selected your desired state. Firebug does not offer a :visited state option.</p>

<div class="image"><img src="/assets/img/placeholder.gif" data-src="/assets/img/secrets/firebug-active-hover-focus-visited.png" /></div>

<p class="firefox">Firefox provides a small drop down next to the DOM element selected when it is clicked in "inspect" mode. Alternatively, you can right click on the element in the DOM. Firefox does not offer a :visited state option.</p>

<div class="image"><img src="/assets/img/placeholder.gif" data-src="/assets/img/secrets/firefox-active-hover-focus-visited.png" /></div>

<p class="opera">In Opera, it’s the icon that looks like a list under “Styles”. In addition, Opera offers a :link and ::selection option. In Opera Next, it is found in the same place as Chrome.</p>

<div class="image"><img src="/assets/img/placeholder.gif" data-src="/assets/img/secrets/opera-active-hover-focus-visited.png" /></div>

<p class="safari">In Safari, right clicking on an element in the DOM view will show a meny bar where "Force Psuedo-Classes" is an option.</p>

<div class="image"><img src="/assets/img/placeholder.gif" data-src="/assets/img/secrets/safari-active-hover-focus-visited.png" /></div>
