Hola, {{ user['fullname'] }}!

Notamos que te registraste para {{config.BRAND}} hace algún tiempo pero nunca contribuiste.
Sería genial si pudieras venir y ayudarnos a mejorar el acceso al
colecciones de la Biblioteca Nacional de España!

[Haga clic aquí para ver los proyectos que necesitan su ayuda.]({{ url_for('project.index') }})

Gracias,

El equipo de {{ config.BRAND }}