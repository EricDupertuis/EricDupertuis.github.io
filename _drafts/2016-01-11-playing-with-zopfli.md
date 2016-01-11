---
layout: post
title:  "Playing with the Zopflipng library"
date:   2016-01-11 13:30:00
comments: true
tags:
- compression
- linux
---

I saw [This blog post](http://blog.codinghorror.com/zopfli-optimization-literally-free-bandwidth/) on [codinghorror.com](http://codinghorror.com) about PNG images optimisation using Zopfli. And i decided to try it out and make some experiments with it.

## What is Zopfli ?

Zopfli is a data compression algorithm that encodes data into Deflate, gzip and zlib formats. It is based on an algorithm developed by Jyrki Alakuijala. A [first reference implementation](https://github.com/google/zopfli) was released to the public in february 2013.

What really interests us here it the ZopfliPNG tool, implemented by Google in May 2013. This tool allow lossless compression for PNG images.

## installing ZopfliPNG

first, you'll need to clone the [repository](https://github.com/google/zopfli) and cd into the newly created folder

    git clone https://github.com/google/zopfli.git
    cd zopfli

And the you simply have to build it (you may need to install build-essential if you're using ubuntu)

    make zopflipng

Then, to use it just type

    ./zopflipng input.png output.png

Personally I like having the tool available system-wide so :

    sudo mv zopflipng /usr/bin/

## Playing with zopfli

For my little test, I download a pack of icon from [Flaticon.com](http://www.flaticon.com/) So I have now 50 small png images to compress. A little `du -h` gives us a size of 340K

Now I'll juts use a simple bash script to compress all of them and output them in another folder

{% highlight Bash %}
#!/bin/bash
for file in original/*.png
do
    zopflipng "${file}" compressed/$(basename "${file}")
done
{% endhighlight %}

Now if we take a look at the size difference.

    340K	./original
    296K	./compressed

Hell yeah, we just saved 44k right there. It might not seem like a big deal but the compressed folder is 13% smaller (87% of the original size). If the images are 13% smaller on average, that's a lot of bandwidth that you just saved right there and the page load is going to be faster for the end user.

And if we compare the two images :
![Original image]({{ site.url }}/assets/images/zopfli_original.png)
![Original image]({{ site.url }}/assets/images/zopfli_compressed.png)

The downside is that it took quite a lot of time and power. Compressing the images took my computer 293 seconds using one core at 100% (zopfli doesn't use multiple cores). Now keep in mind that i'm running this on a desktop computer and I used a single instance of Zopfli. This
