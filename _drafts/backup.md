---
layout: post
title: Working on a new backup strategy
comments: true
author: Eric Dupertuis
tags:
- System administration
- linux
- backup
---
# What do I need

- redundant on-site backups for all files (personal files, movies, music and stuff...)

- off-site backups for critical files, personal data and work related informations

- data encryption for both off-site and on-site backups (only for personal data and photos, movies and music don't need encryption)

- Low power solution (no need for a Dell PowerEdge rack here)

- 4TB of available space or more (I currently have 1.5 - 1.8TB of data without counting CDs)

# System backup

I don't really care about my system, I don't really need to backup my OS. I always carry around USB sticks in my backpack with different OS on them. So if my SSD dies, I can still work.

# Available options

### On-site backups

- _Synology_ : Good turnkey solution. Easy to set-up, pretty good UI, management is a breeze. A bit expensive and almost no evolution over time. Once you reach it's limit (in term of power only, storage is upgradable) you need a new NAS but when you go for that kind of solution you don't usually need a lot of processing power.

- _Homemade NAS_ (using FreeNAS) : Perfect custom solution and allows great flexibility and evolution. You can adapt everything to your needs. But it requires some time to get all the needed hardware and to install and configure all of this.

- _External hard drive with RAID function_ : Offers external backup redundancy for a pretty good price (4TB version can be found for ~ 350CHF with drives), can be shut down when not in use which is perfect for power consumption, some offers USB3 interfaces to add a third redundant drive, and most of them have swapable drives. Good solution for simple backup needs but lacks network share, hardware is often proprietary and warrant rarely exceeds 2 years.

- _The Raspberry Pi_ : create a NAS based on a raspberry pi. Saw that multiple times. Good exercise if you want to learn how to set-up shared folders etc. but performances aren't good enough (in my own opinion)

- _Raid Enclosure_ : Basically turns two drives with a RAID 1 setup into one external drive. Makes automated backups really easy with hardware raid and a simple rsync script.

- _Manual backups_ : Two external drives and set a script that saves data on both of them. Cheap, easy to carry your backups around (who said off-site backups ?) but a pain in the a** to manage (in my opinion).

### Off-site backups

- _Cloud-based solutions_ : Some people don't trust Cloud-based services and I must say I don't trust them either. That's why all the data stored on the cloud MUST be encrypted *beforehand*. When they say that "they" encrypt data on their side it also means they can decrypt it so... thanks but no thanks.

- _Off-site hard drive_ : Take a hard drive home one night, backup everything and bring it to work the next morning and do that every week. In case you lose your data at home (fire, theft) you still have a backup somewhere which isn't too old (one week old tops)

- _Dedicated server_ : Too expensive for me right now so this is out of the picture

- _VPS_ : Most VPS providers don't offer hugh storage so I'll keep this option to backup very important files.

# Backup levels

- Level 1 (red level) : Very important files such as private documents, bills, bank related stuff, password database, ssh and other keys, configuration files and other things I can't live without. (so pretty much all of my /home folder and more). Also, programming projects (most are hosted on Github but, still...).

- Level 2 (green level) : Personal photos and videos, video projects, school related files and projects and my emails

- Level 3(blue level) : Music, movies, series, e-books and other media stuff.

# ~~Why I won't go with a NAS (old decision)~~

_nah, forget that part, I'm going with a nas_

# Why I'm going for a NAS (new decision)

_to be completed_

## Which solution ?

_to be completed_

## How many disks ?

_to be completed_

# Tools, scripts or manual backups ?

I took a quick look at some backup softwares but I wasn't thrilled by any of them for a few reasons : Most of them are proprietary, most of them only work on Windows and/or Mac OS and most of them don't offer a lot of options.

I decided to go with home made scripts (mainly Bash) because it gives me a great flexibility. I can set things up however I want, I can launch them manually or using a CRON etc...

I'm not going to talk about manual backups. This is 2015, not 1999.
