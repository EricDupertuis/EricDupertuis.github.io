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

# Available options

### On-site backups

- _Synology_ : Good turnkey solution. Easy to set-up, pretty good UI, management is a breeze. A bit expensive and almost no evolution over time. Once you reach it's limit you need a new NAS.

- _Homemade NAS_ (using FreeNAS) : Perfect custom solution and allows great flexibility and evolution. You can adapt everything to your needs. But it requires some time to get all the needed hardware and to install and configure.

- _External hard drive with RAID function_ : Offers external backup redundancy for a pretty good price (4TB version can be found for ~ 350CHF with drives), can be shut down when not in use which is perfect for power consumption, offers USB3 interfaces to add a third redundant drive, swapable drives etc... Good solution for simple backup needs but lacks network share, hardware is often proprietary and warrant rarely exceeds 2 years.

- _The Raspberry Pi_ : create a NAS based on a raspberry pi. Saw that multiple times. Good exercise if you want to learn but performances aren't good enough (far from enough)

### Off-site backups

- _Cloud-based solutions_ : Some people don't trust Cloud-based services and I must say I don't trust them either. That's why all the data stored on the cloud MUST be encrypted *beforehand*. When they say that "they" encrypt data on their side it also means they can decrypt it so... thanks but no thanks.

- _Off-site hard drive_ : Take a hard drive home one night, backup everything and bring it to work the next morning and do that every week. In case you lose your data at home (fire, theft) you still have a backup somewhere which isn't too old (one week old tops)

- _Dedicated server_ : Too expensive for me right now so this is out of the picture

# Backup levels

- Level 1 : Very important files such as private documents, bills, bank related stuff, password database, ssh and other keys, configuration files and other things I can't live without. (so pretty much all of my /home folder and more). Also, programming projects (Github hosted but still).

- Level 2 : Personal photos and videos, video projects, school related files and projects.

- Level 3: Music, movies, series, e-books and other media stuff.
