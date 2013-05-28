---
date: 2013-01-01 00:00:00
layout: secret
published: true

title: Emulate a User Agent
order: 20-00850
browsers:
- chrome
- opera
- safari
categories:
- debugging
parent: debugging
tags:
- secret
---

<p>Sometimes it can be useful to pretend to be a different browser or device for debugging, especially if you are working on a site that employs device detection.</p>

<p class="chrome">In Chrome, open the Settings panel (the cog icon in the bottom right) and select the "Overrides" option to find the "User Agent" option. You can either select one of the built in options or select "Other" to write your own. Helpfully, Chrome will resize it's browser to the correct dimensions if you select a mobile or tablet device - this can easily be turned off by unticking "Device Metrics" if this is a problem.</p>

<p class="opera">In Opera, click the "Panels" arrow at the bottom left of the browser window (above the Developer Tools). Select + and then "Customise". Go to the "Buttons" tab, select "Preferences" and drag the "Identify as Opera" drop down on to the browser toolbar.</p>

<p class="safari">Safari offers the ability to change "User Agent" in the "Develop" menu bar. Here you will find a list of default devices together with the "Other..." option to add your own.</p>