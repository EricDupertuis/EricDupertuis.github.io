---
layout: post
title: Setting up a PHP dev environment with vagrant
comments: true
author: Eric Dupertuis
tags:
- linux
- vagrant
- dev
---

For quite some time now I've wanted to setup a vagrant box for my personal projects. Mainly, it was about creating a single box that I could fire up whenever I would need to dev myself some PHP. There is plenty of good vagrant box out there for php developers (such as [Homestead](https://github.com/laravel/homestead) for Laravel or [Scotch Box](https://box.scotch.io/) for a more general purpose box) but what is the fun in downloading a pre-made solution, isn't it more exciting to build your own stuff ?

First of all, let's create a folder and create a Vagrantfile

{% highlight Bash %}
mkdir php-dev-env
cd php-dev-env
vagrant init
{% endhighlight %}

Let's open the newly created Vagrantfile and take a look at these two lines

{% highlight Bash %}

Vagrant.configure("2") do |config|
    config.vm.box = "base"

{% endhighlight %}

Let's start by removing the  base box by the latest ubuntu LTS (16.04 at the time of writing)

{% highlight Bash %}
config.vm.box = "ubuntu/xenial64"
{% endhighlight %}

Then let's setup the synced folder (data shared between the host and the VM)
The first argument is a directory on the host system and the second one is a folder on the VM

{% highlight Bash %}
config.vm.synced_folder "../", "/vagrant/projects/"
{% endhighlight %}

Then, let's just setup some networking stuff so we can access the VM later on. I just used the IP 192.168.33.10 because it his the same as the Scotch-box's default IP, which I'm used to.

{% highlight Bash %}
config.vm.network "private_network", ip: "192.168.33.10"
{% endhighlight %}

We'll then take care of our provision files. Those will be simple bash scripts used to install all the needed softwares and tools on our VM. Just really simple stuff.

{% highlight Bash %}
mkdir provisions
{% endhighlight %}

In this folder we'll add a bash file for every software that we will install.
