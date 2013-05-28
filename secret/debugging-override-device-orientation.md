---
date: 2013-01-01 00:00:00
layout: secret
published: true

title: Override Device Orientation
order: 20-01000
browsers:
- chrome
categories:
- debugging
parent: debugging
tags:
- secret
---

<p class="chrome">Device Orientation changes can be emulated in Chrome. Simply go to the "Settings" menu, which can be opened using the cog icon at the bottom right of the Developer Tools and select the "Overrides" tab. Select the "Override Device Orientation" checkbox and enter new values in to the input boxes.</p>

<ul>
    <li>Alpha represents the motion of the device around the z axis from 0 to 360 degrees.</li>
    <li>Beta represents the motion of the device around the x axis from -180 to 180 degrees - a front to back motion.</li>
    <li>Gamma represents the motion of the device around the y axis from -90 to 90 - a left to right motion.</li>
</ul>

<p>Changing the values will trigger a <code>deviceorientation</code> event.</p>