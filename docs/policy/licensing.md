---
title: Licensing
layout: page-two-col
parent: Policy
active: Policy
---

# Licensing
{:.no_toc}

Licenses are important because they dictate the degree to which your project can be freely used,
modified, or shared. We have two strong, mandatory points, and one recommended point for this area.

* TOC
{:toc}


<hr />

{% include policy/legend.html %}
<hr />

<main class="accordion">
{% for rule in site.data.policy.licensing.rules %}
   {% include policy/rule.html %}
{% endfor %}
</main>

{% include accordion.html %}
