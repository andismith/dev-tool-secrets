---
date: 2013-01-01 00:00:00
layout: secret
published: true

title: Sort Network Requests to Find Bottlenecks
order: 60-00200
browsers:
- chrome
- firefox
- internet-explorer
- safari
categories:
- performance
parent: performance
tags:
- secret
---

<p>The Network tab shows resources in the order each network request was started, clicking a column within the Network tab, you can reorganise data based the column value.</p>

<p>Most of the browsers share common fields in their Network tabs. You can sort by fields such as the filename; domain; the type of resource; the HTTP status; the method and the size of the resource.</p>

<p class="internet-explorer">Filename and Domain are combined in Internet Explorer.</p>

<p class="chrome">Chrome takes this a step further and allows you to click on the "Timeline" header to show an additional range of sorting options.</p>

<ul class="chrome">
    <li><b>Start Time</b> is the default option and sorts by the time each network request was started.</li>
    <li><b>Response Time</b> sorts by the time it took to get a response from the network request.</li>
    <li><b>End Time</b> sorts by the time the request was completed.</li>
    <li><b>Duration</b> sorts by the time the request took to complete.</li>
    <li><b>Latency</b> is the amount of time it takes for the browser to receive a response after the initial request. This option allows you to sort by latency to see which resources are taking the longest to respond. Latency can depend on the distance the user is from the server, and can be improved by setting up Content Delivery Networks (CDNs) closer to the user. Using concatenation for CSS and JavaScript files, and image spriting we can reduce the number of resources required, and therefore reducing the total latency.</li>
</ul>

