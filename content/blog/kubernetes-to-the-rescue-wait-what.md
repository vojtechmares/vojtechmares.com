---
title: Kubernetes to the rescue! Wait what?!
date: 2220-02-12T13:35:00.000Z
description: >-
  How are we managing and operating our systems (microsites, legacy apps, new
  apps) at [IAESTE](https://www.iaeste.cz).
tags:
  - kubernetes
  - devops
  - gitlab ci/cd
  - websites
image: /images/uploads/k8s.png
---
# The Origin Story

It has been a while now since I joined a non-for-profit organisation[IAESTE](https://www.iaeste.cz)and in fall I was offered a IT Manager position at National Committee. First I was warned about the state of our IT, I was like "nah, it can't be \*that\* bad". And as you may expect, it kind a is that bad.\
\
We have mostly legacy apps and systems created by former IAESTE Members, without documentation or even a clue how it works - espetialy our Intranet. It is Java monster with 2-3 databases (knowone really knows) and even doing `apt-get update; apt-get upgrade` is scary as hell.\
So some time ago (about two years), someone decided to use **Kubernetes** with GitLab CI/CD to reduce maintenance costs and make it easier to create temporary microsites for seasonal events and long-term projects.

# Discovering the cloud

### Pricing and other managed Kubernetes providers

We are using Digital Ocean's managed Kubernetes, which is at a decent price. Yes, you need to use their Load Balancer as well, but that is still fine compared to other Managed Kubernetes providers. At AWS you pay for the Kubernetes cluster fixed fee + price of resources taken, at GCP you pay only for used resources, but at quite high price. Azure looks quite good, but in terms of price Digital Ocean is still by far the winner.

### How to do ... anything ?
