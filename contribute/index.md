---
title: Contribute
layout: site
section: contribute
order: none
---

# Contribute! #

## Thanks to: ##

Thanks to the following contributors:

*Your name goes here!*

## How to Contribute ##

The <a href="https://github.com/andismith/dev-tool-secrets" target="_blank">Github Repo for this site is available here</a>!

You can either contribute new tips by:

* Creating a Markdown (.md) file in the folder 'secret' as described below and sending a pull request (the template is below).
* Or if Github isn't your usual cup of tea - <a href="https://github.com/andismith/dev-tool-secrets/issues">adding an issue to Github issues (marked enhancement)</a>. This is a slower route - so please be patient if you submit a tip.

We are also looking for an experienced proof reader, if you'd be interested in helping out please <a href="http://www.andismith.com/contact" target="_blank">contact me</a>.

Regardless of the method you choose to submit, please include the following information:
* Browsers (Chrome, Firebug, Firefox, Internet Explorer, Opera, Safari)
* Category (General, Console, Inspect, Editing, Debugging, Performance, Storage, Mobile)
* The tip, including any specific browser information.

Contributors will be achknowledged/credited on this page rather than on individual tips, as well as in the Markdown file.

If you are creating a Markdown file, here is an example template. Feel free to clone one already in the repo.

    ---
    date: {{ site.time | date: "%Y-%M-%d %H:%m:%S" }}
    layout: secret
    published: true

    title: Title goes here.
    authors:
    - Andi Smith # Your name.
    order: 99-99999
    browsers:
    - chrome
    - firebug
    - firefox
    - internet-explorer
    - opera
    - safari
    parent: console # must be one of the categories above
    categories:
    - console # can be multiple
    tags:
    - secret # do not remove
    ---
    <p>Content should go here.</p>
    <p class="chrome">To provide information for a particular browser, add a class (lowercase, hyphen for internet-explorer).</p>
    <p><code>// code should be wrapper in these</code></p>
    <div class="firefox image"><img src="/assets/img/placeholder.gif" data-src="/assets/img/secrets/firefox-image-name.png" /></div>
