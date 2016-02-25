---
layout: post
title: The PHP hate
comments: true
date:   2016-02-25 13:30:00
author: Eric Dupertuis
tags:
- programming
- php
---

If you take a look at some results on google or if you browse reddit on a regular basis, you've probably came accross a blog post or a forum thread entitled *Why PHP sucks* or *PHP is the worst programming language ever*, *Stop using PHP please...* etc....

In fact, if you type *PHP is bad* in google , this is what you get :

![A screenshot of the menu](/images/phphate/1.png)

As Google say : It's about 367'000'000 results but if you take a look at the results on the first page you get the idea, a lot of people hate PHP. Some hate it for valid reasons and others are just plain stupid elitists who rant on every other software than their own.

## Yes, PHP used to be bad

Just to make things clear, I started tinkering with PHP with version 5.3 in 2010 I think, so I never worked with older versions of the language. (No I don't use PHP4 constructors) But, it is not difficult to find old PHP code on the internet, just take a look at the PEAR libraries which are full of version 4 code.

The fact is, PHP didn't really start as a full-blown programming language, It was just a set of tools named *Personal Home Page Tools* which have grown over time in a programming language. That explains the inconsistent naming and weird ordering of functions parameters. And I must admit there is some stuff I don't like about this language :

- The names of built-in functions are inconsistent (isset(), is_null())
- Functions arguments are inconsistent
- Case-insensitive functions but case-sensitive variables

## PHP is popular

Yes, this is something you can't deny, PHP is very popular on the web thanks to a lot of hosting companies. What makes the language so popular in my opinion is the combo : Shared hosting providers / Wordpress. Most hosting providers support the LAMP stack by default and even offer those one-click install of Wordpress and other CMS. This contribute to this high "Market share".

## Legacy projects

This is one of the things that gives PHP a bad reputation : The old, crappy, poorly coded, bug ridden legacy project. At my current job, I'm in charge of an old project written in PHP that doesn't use any framework or libraries (completely built from scratch), has no correct routing (every page is a subfolder), and doesn't use a templating engine. The tweet below pretty much sums it up.

<blockquote class="twitter-tweet" data-lang="fr"><p lang="en" dir="ltr">Current status : pulling my hair out and loading my shotgun.... <a href="https://twitter.com/hashtag/code?src=hash">#code</a> <a href="https://twitter.com/hashtag/codinghorror?src=hash">#codinghorror</a> <a href="https://twitter.com/hashtag/programming?src=hash">#programming</a> <a href="https://twitter.com/hashtag/horror?src=hash">#horror</a> <a href="https://twitter.com/hashtag/wtf?src=hash">#wtf</a> <a href="https://t.co/pYeZRslvRi">pic.twitter.com/pYeZRslvRi</a></p>&mdash; $this-getCthulhu(); (@dupertuiseric) <a href="https://twitter.com/dupertuiseric/status/683970594145198080">4 janvier 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Sadly, the internet is filled with such legacy crap and I can't blame anyone who worked on such project to develop nothing but hatred for PHP.

## If the code is bad, there's a reason