---
date: 2013-01-01 00:00:00
layout: secret
published: true

title: Export the Network Timeline as HAR File
order: 60-00250
browsers:
- chrome
categories:
- performance
parent: performance
tags:
- secret
---

<p class="chrome">We can export our network tab timeline to HAR (HTTP Archive) from the Chrome Developer Tools by right clicking on the network output and seleving "Save as HAR with Content".</p>

<p>HAR files can be used for a variety of performance analysis techniques, and also for debugging. HAR files can be attached to bug raised during testing - the developer then can run the HAR data locally to find out what went wrong. <a href="http://ericduran.github.io/chromeHAR/">chromeHAR</a> is an online tool that provides the same timeline interface as Chrome and can be used for this purpose.</p>
