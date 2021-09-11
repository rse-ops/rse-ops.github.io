---
title: Version Control
layout: page-two-col
parent: Policy
active: Policy
---

# Version Control
{:.no_toc}

Version Control refers to how you track and manage changes to your source code. Good version
control practices can hugely help to streamline development.

* TOC
{:toc}


<hr />

{% include policy/legend.html %}
<hr />

<main class="accordion">
{% for rule in site.data.policy.version-control.rules %}
    {% include policy/rule.html %}
{% endfor %}
</main>

{% include accordion.html %}
