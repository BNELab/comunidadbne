Weekly update of your project: {{project.name}}

Hola {{ project.owner.fullname }},

Aquí hay algunas ideas sobre cómo se ha estado ejecutando su proyecto durante la última semana.

Número de tareas completadas: {{n_completed_tasks}}.

Día más activo de la semana: {{active_day[0]}} with {{active_day[1]}} respuestas enviadas.

Top 5 usuarios registrados
{% for u in users_stats.auth.top5 %}
    * {{u.fullname}}.
{% endfor %}

{% block body %}

{% endblock %}
