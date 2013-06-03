---
date: 2013-01-01 00:00:00
layout: secret
published: true

title: Use SASS Source Maps
authors:
- Andi Smith
- Addy Osmani
order: 15-05000
browsers:
- chrome
categories:
- editing
beta: true
parent: editing
tags:
- secret
---

<p>Authoring CSS with a preprocessor comes with a number of advantages, but can be tricky to work with when you want to play with changes in your browser DevTools. For example, changes saved to the compiled CSS in the DevTools can be overwritten when you run Sass again which isn't ideal. With SASS 3.3 and above (which you can currently install using `sass gem install sass --pre`), it's easy to create mappings to your SASS files so you can easily save changes on the fly without needing to worry.</p>

<p>Firstly, add the <code>--sourcemap</code> to your SASS watch command. Like so:</p>

<code>sass --watch scss/devtoolsecrets.scss:css/devtoolsecrets.min.css --style compressed --sourcemap</code>

<p>Next, add a sourceMappingURL with the name of map file to the bottom of your SASS file. For example:</p>

<code>/*@ sourceMappingURL=devtoolsecrets.css.map */</code>

<p>Next, you need to have enabled the "Experiments" tab. If you haven't already, navigate to <a href="chrome://flags" target="_blank">chrome://flags</a> and enable the option marked "Enable Developer Tools experiments". You'll need to press "Relaunch Now" button at the bottom of the page to apply your changes. Go to the "Settings" panel of Chrome Developer Tools by clicking the cog on the bottom right.</p>

<p>Click the "General Tab" and activate "Enable Source Maps". Click the "Experiments" tab and check the option "Support for SASS".</p>

<p>After restarting your browser, you will now be able to view the line numbers of the SASS files directly.</p>

<div class="video"><iframe src="about:blank" data-src="http://player.vimeo.com/video/67091490?title=0&amp;byline=0&amp;portrait=0&amp;color=ededed" width="500" height="313" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div>
