---
layout: post
title: Working on a new backup strategy
tags:
- System administration
- linux
- backup
---
# What do I need
- redundant on-site backups for all files (personal files, movies, music and stuff...)
- off-site backups for critical files, personal data and work related informations
- data encryption for both off-site and on-site backups (only for)
- Low power solution (no need for a Dell PowerEdge rack here)
- 4TB of available space or more

#Available options

### On-site backups

- _Synology_ : Good turnkey solution. Easy to set-up, pretty good UI, management is a breeze. A bit expensive ans limits evolution over time. Once you reach it's limit you need a new NAS.

- _Homemade NAS_ (using FreeNAS) : Perfect custom solution and allows great flexibility and evolution.

- _External hard drive with RAID function_ : Offers external backup redundancy for a pretty good price (4TB version can be found for ~ 350CHF with drives), can be shut down when not in use which is perfect for power consumption, offers USB3 interfaces to add a third redundant drive, swapable drives etc... Good solution for simple backup needs but lacks network share.

- _The Raspberry Pi_ : create a NAS based on a raspberry pi. Saw that multiple times. Good exercise but performances aren't good enough (far from that)
