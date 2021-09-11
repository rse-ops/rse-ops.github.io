---
layout: default
title: Archive
description: News Archive
permalink: /archive/
---


<div class="page-section markdown-body {% if page.wide == 'false' %}container-lg-home{% else %}container-lg{% endif %} px-4">
{% include scrolltop.html %}
<div class="gut-lg">
  <nav class="side-nav col-md-3 float-md-left js-side-nav">
    <ul class="list-style-none">
   {% for post in site.posts %}
       {% assign currentDate = post.date | date: "%Y" %}
       {% if currentDate != myDate %}
      <li class="side-nav-item border-bottom m-0 js-side-nav-item"><a href="#div-{{ currentDate }}" class="side-nav-link py-2 d-block">{{ currentDate }}</a></li>
       {% assign myDate = currentDate %}
       {% endif %}
   {% endfor %}      
    </ul>
  </nav>

  <div class="col-md-9 float-md-left">
   {% for post in site.posts %}
       {% assign currentDate = post.date | date: "%Y" %}
       {% if currentDate != myDate %}
       {% unless forloop.first %}</ul>{% endunless %}
       <br><h1 id="div-{{ currentDate }}" style="margin-top:20px; margin-bottom:10px">{{ currentDate }}</h1>
       <ul>
       {% assign myDate = currentDate %}
       {% endif %}
       <li><a href="{{ site.baseurl }}{{ post.url }}"><span>{{ post.date | date: "%B %-d, %Y" }}</span> - {{ post.title }}</a></li>
       {% if forloop.last %}</ul>{% endif %}
   {% endfor %}
   </div>
</div>
</div>

