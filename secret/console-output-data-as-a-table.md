---
date: 2013-06-13 11:12:00
layout: secret
published: true

title: Output Data as a Table
authors:
- Aptary
order: 05-00125
browsers:
- chrome
- firebug
categories:
- console
parent: console
tags:
- secret
---

<p><code>console.table()</code> can be used to output data from an array of arrays or a list of objects in a sortable, tabular format.</p>

<p>For example, <code>console.table([[10, true, "blue"],[5, false]])</code> will output the following:</p>

<div class="chrome image"><img src="/assets/img/placeholder.gif" data-src="/assets/img/secrets/chrome-table-basic.png" /></div>

<p>If the number of elements in each object is not equal, the table will display <code>undefined</code> in cells for which there is no data.</p>

<p>To give the table custom column names, property names must be assigned to the elements in the object. Likewise, custom values for the <code>(index)</code> column can be set by naming each set of properties.</p>

<p>There is an optional second argument which allows you to explicity specify which columns to output. <code>console.table({"London":{population:8173194, country:"UK", elevation:"24m"},"New York":{population:8336697, country:"USA", elevation:"10m"}},["population", "country", "elevation"])</code> will output the following.</p>

<div class="chrome image"><img src="/assets/img/placeholder.gif" data-src="/assets/img/secrets/chrome-table-custom-headings.png" /></div>

