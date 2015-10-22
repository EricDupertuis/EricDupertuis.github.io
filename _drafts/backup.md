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

- data encryption for both off-site and on-site backups (only for personal data and photos)

- Low power solution (no need for a Dell PowerEdge rack here)

- 4TB of available space or more (I currently have 1.5 - 1.8TB of data without counting CDs)

# Available options

### On-site backups

- _Synology_ : Good turnkey solution. Easy to set-up, pretty good UI, management is a breeze. A bit expensive and almost no evolution over time. Once you reach it's limit you need a new NAS.

- _Homemade NAS_ (using FreeNAS) : Perfect custom solution and allows great flexibility and evolution. You can adapt 

- _External hard drive with RAID function_ : Offers external backup redundancy for a pretty good price (4TB version can be found for ~ 350CHF with drives), can be shut down when not in use which is perfect for power consumption, offers USB3 interfaces to add a third redundant drive, swapable drives etc... Good solution for simple backup needs but lacks network share, hardware is often proprietary and warrant rarely exceeds 2 years.

- _The Raspberry Pi_ : create a NAS based on a raspberry pi. Saw that multiple times. Good exercise if you want to learn but performances aren't good enough (far from enough)

### Off-site backups

- _Cloud-based solutions_ : Some people don't trust Cloud-based services and I must say I don't trust them either. That's why all the data stored on the cloud MUST be encrypted beforehand. When they say that "they" encrypt data on their side it also means they can decrypt it so... thanks but no thanks.

- _Off-site hard drive_ : Take on of your hard drive with you to work on monday and bring it back friday night to sync the data of the week. There's still a point of failure here : It stays the whole week-end at your house, so if your house burns, everything is destroyed, even your off-site hard drive...great situation there.

- _Dedicated server_ : Too expensive for me right now so this is out of the picture