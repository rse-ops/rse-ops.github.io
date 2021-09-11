---
title: Documentation
layout: page-two-col
parent: Policy
active: Policy
---

# Documentation
{:.no_toc}

Documentation is essential for not just user accessibility of software, but for branding and awareness.

* TOC
{:toc}


<hr />

{% include policy/legend.html %}
<hr />

<main class="accordion">
{% for rule in site.data.policy.documentation.rules %}
    {% include policy/rule.html %}
{% endfor %}
</main>

{% include accordion.html %}
