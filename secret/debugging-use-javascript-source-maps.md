---
date: 2013-06-01 09:00:00
layout: secret
published: true

title: Use JavaScript Source Maps
authors:
- Andi Smith
order: 20-00650
browsers:
- chrome
categories:
- debugging
- editing
parent: debugging
tags:
- secret
---

<p>When we deploy code to production, it's advisable to minify our code to reduce load times. Minification removes unnecessary characters such as comments, newlines and whitespace. However, minification makes it difficult for developers to debug code as we can no longer step through and read the code. JavaScript source maps are useful for debugging minified JavaScript files as they provide a map back to the original source.</p>

<p>To create a JavaScript source map, download <a href="https://code.google.com/p/closure-compiler/" target="_blank">Google Closure Compiler</a> which will build the .map file for you.</p>

<p>Run Closure Compiler with Source Map Properties.</p>
<code>java -jar compiler.jar --js common.js --create_source_map ./common.js.map --source_map_format=V3 --js_output_file common.min.js</code>
<p>Add a sourceMappingURL with the name for a map file to the bottom of your JS minified file.</p>
<code>//@ sourceMappingURL=common.js.map</code>

<p class="chrome">In Chrome Developer Tools, go to the "Settings" menu and within the "General" tab activate "Enable Source Maps".</p>

<p>Now when you debug your JavaScript, you can use the unminified version to see what's really going on.</p>
