---
title: Build
layout: page-two-col
parent: Policy
active: Policy
---

# Build
{:.no_toc}

Good build practices can make development easier for developers. We provide two mandatory points, and one
strongly recommended.

* TOC
{:toc}


<hr />

{% include policy/legend.html %}
<hr />

<main class="accordion">
{% for rule in site.data.policy.build.rules %}
    {% include policy/rule.html %}
{% endfor %}
</main>

{% include accordion.html %}
