---
date: 2013-06-01 09:00:00
layout: secret
published: true

title: Navigating the DOM with Breadcrumbs
authors:
- Andi Smith
order: 10-00400
browsers:
- chrome
- firefox
- opera
- safari
- firebug
categories:
- inspecting
parent: inspecting
tags:
- secret
---

<p>When you are inspecting nodes in the DOM tree, a breadcrumb list of the nodes' DOM path is displayed within the Developer Tools.</p>

<p class="chrome opera">In Chrome and Opera, this is displayed at the bottom of the DOM inspector.</p>

<div class="chrome image"><img src="/assets/img/placeholder.gif" data-src="/assets/img/secrets/chrome-breadcrumbs.png" /></div>

<p class="firebug firefox safari">In Firebug, Firefox and Safari, this is displayed at the top of the DOM inspector.</p>

<div class="firefox image"><img src="/assets/img/placeholder.gif" data-src="/assets/img/secrets/firefox-breadcrumbs.png" /></div>

<p>You can navigate the breadcrumb either directly by clicking on one of the nodes, or by pressing the arrow keys. Pressing the left arrow key will take you to the parent, while pressing the right arrow key will navigate to the first child item. You can move to the next or previous child by pressing the up and down arrow keys. If there are no more children, the up and down arrows will navigate back up to DOM tree.</p>

<p class="firefox">In Firefox, you can right click on a breadcrumb to see a list of all sibling nodes allowing you to quickly navigate to a sibling.</p>

<p class="safari">In Safari, you can left click on a breadcrumb to see a list of all sibling nodes.</p>
