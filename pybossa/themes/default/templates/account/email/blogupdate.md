# Update Project: {{blog['title']}} by {{blog['owner']['name']}} [1]
{{blog['body'] | striptags }}
***
[1]{{url_for('project.show_blogpost', short_name=blog.project.short_name, id=blog.id, _external=True)}}
***
***