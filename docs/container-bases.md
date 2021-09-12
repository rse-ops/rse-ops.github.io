---
title: Container Bases
layout: page
permalink: /docs/container-bases/
wide: false
---

<img src="{{ site.baseurl }}/assets/img/radius-docker.png" class="centered">

## Container Bases

We are working on a set of <a href="https://github.com/rse-radiuss/docker-images" target="_blank">Docker image container bases</a>
that will be useful as base images for your projects. The repository:

 - Uses the <a href="https://vsoch.github.io/uptodate" target="_blank">uptodate</a> tool to ensure that OS base images use the latest digest, which might include security fixes.
 - Runs a nightly job to check for updates relevant to tags or digests
 - Automatically deploys the listing of containers to the docker-images site (coming soon)
 
You can view an updated table of container images at the <a href="https://rse-radiuss.github.io/docker-images" target="_blank">docker-images</a> repository interface.
