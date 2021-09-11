---
title: Packaging
layout: page-two-col
parent: Policy
active: Policy
---

# Packaging
{:.no_toc}

Packaging refers to the method(s) that you use to distribution your software. We provide
three mandatory points for this area.


* TOC
{:toc}

<hr />

{% include policy/legend.html %}
<hr />

<main class="accordion">
{% for rule in site.data.policy.packaging.rules %}
    {% include policy/rule.html %}
{% endfor %}
</main>

{% include accordion.html %}
