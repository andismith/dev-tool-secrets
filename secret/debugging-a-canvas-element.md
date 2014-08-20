---
date: 2013-01-01 00:00:00
layout: secret
published: true

title: Debugging a Canvas Element
order: 20-09000
browsers:
- chrome
categories:
- debugging
- performance
parent: debugging
tags:
- secret
---

<p class="chrome">Chrome allows you to profile and debug canvas elements from the Developer Tools. It can be used for both 2D and WebGL canvas projects.</p>

<p class="chrome">To be able to do this, you need to have enabled the "Experiments" tab. If you haven't already, navigate to <a href="chrome://flags" target="_blank">chrome://flags</a> and enable the option marked "Enable Developer Tools experiments". You'll need to press "Relaunch Now" button at the bottom of the page to apply your changes. Go to the Settings panel of Chrome Developer Tools by clicking the cog on the bottom right. Click the "Experiments" tab and check the option "Canvas inspection".</p>

<p class="chrome">Now visit the "Profile" tab and you will see an option called "Capture Canvas Frame". The Developer Tools may ask you to Reload the page to use the canvas. Pressing "Start" captures a single frame of the canvas application. Alternatively, you can click the box below to switch to "Consecutive Frames" which allows for capture of multiple frames.</p>

<p class="chrome">Chrome creates a log of each call to canvas, providing a list of each call to the context and a screenshot. You can click one of the log items to replay the frame in the Developer Tools and see which commands were called in the order they were called and from which line.</p>

<div class="video"><iframe src="about:blank" data-src="http://player.vimeo.com/video/67069011?title=0&amp;byline=0&amp;portrait=0&amp;color=ededed" width="500" height="313" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div>

<p class="firefox">Firefox has Canvas and WebGL Shader debugger, giving you features to inspect frames, fps, modify shaders and more.</p>

<p class="firefox">In order to enable these tools, go to Devtools settings (the cog icon in devtools) and check "Canvas" and "Shader Editor".</p>
