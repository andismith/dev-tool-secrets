---
date: 2013-13-06 00:00:00
layout: secret
published: true

title: Inspect Scope During a Breakpoint
authors:
- Kaizhi Wei
- Andi Smith
order: 20-00480
browsers:
- chrome
- firebug
categories:
- debugging
parent: debugging
tags:
- secret
---

<p class="chrome">In Chrome, when your Javascript execution is paused during a breakpoint, you can interact with and inspect all variables and objects in the current scope, either by hovering over to inspect or by using the console.</p>

<p class="chrome">Firebug has the same option, but requires selecting "show closures" in the DOM menu.</p>

<p class="firebug chrome">This powerful feature enables you to easily inspect variables inside closures if you set your breakpoint appropriately.</p>

<p class="firebug">Firebug has the additional feature of not having to be stopped at a breakpoint to access hidden closure variables. Take this example code:<br><br>

<code>function Person(name)
{
    this.introduce = function()
    {
        console.log("Hello, my name is %s", name);
    }
}
 
// create an instance of Person:
var someone = new Person("Arthur");
 
// we call a closure!
someone.introduce(); // prints "Hello, my name is Arthur"
</code>
<br><br>
The syntax to access the closure variables is as follow: <code>closure.%variable</code>. In the above example, you would access name using this expression: <code>someone.introduce.%name // ==> "Arthur"</code>. Note that you can also change values:<br><br>
<code>someone.introduce.%name = "Trillian";
someone.introduce(); // prints "Hello, my name is Trillian"
</code>
<br><br>
The same syntax works everywhere in Firebug where JavaScript is required, such as in the Watch Panel and conditional breakpoints.
</p>
