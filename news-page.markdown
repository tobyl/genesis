---
layout: with-sidebar
title: Latest News
permalink: /news-page/
---

<div>
{% for post in site.posts %}
  <div class="post-excerpt">
    <header class="clearfix">
      <time class="updated">
        <span class="month-day">
          {% assign m = post.date | date: "%B" %}
          {% case m %}
            {% when 'May' %}
              {{ m }}
            {% when 'September' %}
              Sept.
            {% else %}
              {{ post.date | date: "%b" }}
          {% endcase %}
          {{ post.date  | date: "%d" }}
        </span>
        <span class="full-year">
          {{ post.date  | date: "%Y" }}
        </span>
      </time>
      <a href="{{ post.url }}">
        <h2 class="entry-title">{{ post.title }}</h2>
      </a>
    </header>
    {{ post.content | strip_html | truncatewords: 50 }}
    <a href="{{ post.url }}">Continued</a>
  </div>
{% endfor %}
</div>