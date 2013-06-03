---
date: 2013-06-03 00:20:00
layout: secret
published: true

title: Using Developer Tools on Android
authors:
- Andi Smith
order: 80-02000
browsers:
- chrome
categories:
- mobile
parent: mobile
tags:
- secret
---

<p class="chrome">You can use Chrome Canary's Developer Tools on your Mac to debug public and locally hosted websites on your Android device, allowing you access on your mobile phone to all of Chrome Developer Tools' extensive feature set.</p>

<p class="chrome">First, you need to install <a href="https://play.google.com/store/apps/details?id=com.chrome.beta&hl=en" target="_blank">Chrome BETA</a> on your Android device.</p>

<p class="chrome">Next, you will need to download the <a href="https://github.com/repenaxa/ADBPlugin/raw/master/out/npADBPlugin-crx.crx" target="_blank">ADB plugin extension</a> and install it on your Chrome Canary instance. As it has not been downloaded from the Google Play store, you will need to drag the file in to the Extensions page found at <a href="chrome://extensions/" target="_blank">chrome://extensions/</a> within Chrome Canary.</p>

<p class="chrome">Ensure you have "Enable Developer Tools experiments" turned on within <a href="chrome://flags" target="_blank">chrome://flags</a>.</p>

<p class="chrome">Plug your mobile phone in to the USB port on your machine. Now on your mobile phone go to the "Settings" app. Select "Developer Options" and ensure "USB debugging" is checked. If it is already checked and you have not used USB debugging on this computer before, uncheck it and check it again to ensure it has this computers' MAC address.</p>

<div class="chrome image"><img src="/assets/img/placeholder.gif" data-src="/assets/img/secrets/chrome-mobile-using-developer-tools-on-android-phone-settings.png" /></div>

<p class="chrome">Now go in to Chrome BETA for Android and click the menu icon and "Settings". Under "Developer tools" ensure "Enable USB Web debugging" is enabled. Open a new tab.</p>

<div class="chrome image"><img src="/assets/img/placeholder.gif" data-src="/assets/img/secrets/chrome-mobile-using-developer-tools-on-android-browser-settings.png" /></div>

<p class="chrome">In Chrome Canary, click on the ADB plugin icon and click "Start ADB". You may need to restart your browser for it to work.</p>

<div class="chrome image"><img src="/assets/img/placeholder.gif" data-src="/assets/img/secrets/chrome-mobile-using-developer-tools-on-android-adb.png" /></div>

<p class="chrome">Visit the Inspect page found at <a href="chrome://inspect" target="_blank">chrome://inspect</a>. Find the device (which should be running Chrome Canary 28 or abobe) and find the tab you were looking for. Click the "Inspect" link that appears to the right of the page URL.</p>

<div class="chrome image"><img src="/assets/img/placeholder.gif" data-src="/assets/img/secrets/chrome-mobile-using-developer-tools-on-android-inspect.png" /></div>

<p class="chrome">In the window that pops up, go to "Settings", and click the "Experiments" tab. Enable "Reverse Port Forwarding". You may need to restart your Dev Tools by closing the window and re-clicking the "Inspect" link before the "Port Forwarding" tab appears.</p>

<div class="chrome image"><img src="/assets/img/placeholder.gif" data-src="/assets/img/secrets/chrome-mobile-using-developer-tools-on-android-settings.png" /></div>

<p class="chrome">In the Port Forwarding tab, enter the port you wish to forward (e.g. 9000) and the address and port it should map to on your local machine. Now, on your mobile device type in the URL localhost:port (e.g. localhost:9000). Your local site should now load on the device and be available for debugging.</p>

<div class="chrome image"><img src="/assets/img/placeholder.gif" data-src="/assets/img/secrets/chrome-mobile-using-developer-tools-on-android-result.png" /></div>