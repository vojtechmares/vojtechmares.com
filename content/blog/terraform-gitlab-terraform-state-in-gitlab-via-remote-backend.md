---
title: "Terraform & GitLab: Terraform State in GitLab via remote backend"
date: 2029-12-30T15:50:35.596Z
description: Terraform state in GitLab with Terraform's remote backend. And the
  new feature of GitLab 13.1
tags:
  - gitlab
  - terraform
  - gitlab ci/cd
  - terraform state
  - ci/cd
  - ci
image: /images/uploads/carbon.png
---
Lately I was able to get my hands on Terraform and many different providers. Such as Cloudflare, AWS, Hetzner Cloud and Digital Ocean. And it has been a pleasure.\
\
Yes, they all have "clickable" UI, but for creating same environment again and again it is a huge difference between clicking it or executing a single command. So far, I think Terraform is my new thing at my Swiss army knife along with Git, GitLab/GitHub and Docker.

# The Terraform problem

Even though I love Terraform since my first `terraform apply` I see a small issue while using it on my own. The `terraform.tfstate` file. The issue comes to the surface while using more than one computer to work from. Sharing the state is difficult and knowing which one is the last and valid is hard to keep track of. So I started keeping the state file in git with terraform itself. It works, but it doesn't. At least for my, I really did not like doing it this way.

So multi-repo for the rescue! One for Terraform definitions and the second one for the state. It works, but it brings a need for unified tooling to keep it together. A great tool is Ondřej Sika's