---
---

  {% if site.paginate %}
    {% assign posts = paginator.posts %}
  {% else %}
    {% assign posts = site.posts %}
  {% endif %}
var map = L.map('map').setView([38.3489, 26.6781], 12);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap'
}).addTo(map);
{% for post in posts %}
var marker = L.marker([{{post.x}}, {{post.y}}]).addTo(map);
marker.bindPopup("<b>{{post.title}}</b><br><b>Yer</b>: {{post.location}}<br><b>Tarih</b>: {{post.date}}<br><a href=\"{{post.url}}\">Hikayeyi oku</a>");
{% endfor %}