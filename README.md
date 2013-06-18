Secrets of the Browser Developer Tools
======================================

A site providing a list of Browser Developer Tool 'secrets' for Chrome, Firebug, Firefox, Internet Explorer, Opera and Safari.

http://www.devtoolsecrets.com/

How to Run SotBDT Locally
-------------------------

At the heart of *Secrets* is Jekyll, a static site publisher.

To run the site:

* Go to your usual Workspace/Projects folder
* git clone https://github.com/stubben/dev-tool-secrets.git
* You'll need to install Jekyll:

        gem install jekyll

* You'll also need rdiscount, if Jekyll does not download it as a dependency:

        gem install rdiscount

* Jekyll can be run with the following command from the cloned directory:

        jekyll serve -w

* The site should load at http://localhost:4000