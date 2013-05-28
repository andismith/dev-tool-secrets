---
date: 2013-01-01 00:00:00
layout: secret
published: true

title: Referencing the Current and Previous Element
order: 05-console-beginner-8000
browsers:
- chrome
- firebug
- firefox
- opera
- safari
categories:
- console
parent: console
tags:
- secret
---

<p class="chrome firefox opera safari">If you have an element currently selected in your "Elements" tab, you can use the reference <code>$0</code> to call it within your code. For example, to see the elements' contents you would type <code>$0.innerHTML</code>.</p>

<p class="firebug opera">In Firebug and Opera, you can select the previous element you had highlighted using <code>$1</code>.</p>

<p class="chrome safari">In Chrome and Safari, you can select further previous elements you have highlighted using <code>$1</code> - <code>$4</code>.</p>

<p class="firebug">In Firebug, you can select further previous elements you have highlighted using <code>$n(2)</code> - <code>$n(5)</code>.</p>
