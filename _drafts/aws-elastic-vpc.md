---
layout: post
title: Create an Elasticsearch cluster in aws and restrict it to your VPC
comments: true
author: Eric Dupertuis
tags:
- Cloud
- Amazon
- aws
- Elasticsearch
---

When deploying a new web app recently at work, I needed to setup an Elasticsearch cluster but I faced quite a problem : It's impossible to create a cluster inside a VPC (virtual private cloud). And this is really problematic because all my instances, my RDS instance and my Memcached cluster all run inside the same VPC for obvious reasons.

So how do you tackle this problem ?

While searching on Google and DuckDuckGo for an answer, I came accross [this article](https://eladnava.com/secure-aws-elasticsearch-service-behind-vpc/) from [Elad Nava](https://twitter.com/eladnava) and decided to use the same setup (kinda). That's how I got inspired to write a similar article but with a few differences.

There's multiple ways you can grant access to your Elasticsearch (ES) cluster :

- You can allow or deny access to one or more AWS accounts or IAM users
- Allow access to the domain from specific IP(s)
- Allow open access to the domain (really ?)
- Deny access to the domain (totally useless)
- Copy an access policy from another domain (not useful in our case)

The first option seems nice when you first look at it but it can't be done for my project, because the library that we are using to make requests to Elasticsearch doesn't support signed requests. Denying access to the domain is just plain ridiculous and allowing open access to the domain would be equivalent to giving my resignation letter. So what options do we have left ?

That's right, access using specific IP(s).

But that's where you stop me and say: "But Eric, the number of instances will scale, so how would I know which IPs I'm gonna get"

Well my dear, that's where a nifty little trick is gonna come into play : We are going to create a reverse proxy with Nginx.

It's pretty simple

- We create an EC2 instance in an auto-scaling group with an Elastic Load Balancer (ELB) in the VPC
- We install nginx in it and we configure it as a proxy pointing to your ES cluster.
- We modify the access policy of the ES cluster to accept requests coming only from the IP of the Elastic Load Balancer
- We edit the EC2 security group associated with your nginx instance and add security rules that allows HTTP connections coming from your VPS's subnets

Easier said than done right ? Well let me show you how I did it.
