---
title: Portability
layout: page-two-col
parent: Policy
active: Policy
---

# Portability
{:.no_toc}

Portable software can be easily moved from one system to another.

* TOC
{:toc}


<hr />

{% include policy/legend.html %}
<hr />

<main class="accordion">
{% for rule in site.data.policy.portability.rules %}
    {% include policy/rule.html %}
{% endfor %}
</main>

{% include accordion.html %}
