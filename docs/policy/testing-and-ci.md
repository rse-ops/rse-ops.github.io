---
title: Testing and Continuous Integration
layout: page-two-col
parent: Policy
active: Policy
---

# Testing and Continuous Integration
{:.no_toc}

Having Continuous Integration means that you continually test your software when a new change
is added. 

* TOC
{:toc}


<hr />

{% include policy/legend.html %}
<hr />

<main class="accordion">
{% for rule in site.data.policy.testing-and-ci.rules %}
    {% include policy/rule.html %}
{% endfor %}
</main>

{% include accordion.html %}
