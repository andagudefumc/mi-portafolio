# Mi Portafolio Web Interactivo

**Autor:** Andrés Agudelo  
**Actividad:** AEA Unidad 1 — Fundamentos de los Lenguajes de Programación y Programación Declarativa  
**Tecnologías:** HTML5, CSS3 y JavaScript vanilla.

## Descripción
Portafolio profesional adaptable para un perfil de CISO y administrador de infraestructura. Incluye presentación, tres proyectos de ejemplo renderizados desde un arreglo JavaScript, competencias, navegación móvil, cambio de tema y validación de formulario en cliente.

## Ejecutar localmente
1. Descarga o clona el repositorio.
2. Abre `index.html` en un navegador moderno. Para una experiencia más consistente, usa la extensión Live Server de VS Code.
3. Prueba la navegación, el botón de tema, las tarjetas y el formulario.

No requiere dependencias ni compilación.

## Estructura
```text
mi-portafolio/
├── index.html
├── css/
│   ├── reset.css
│   ├── variables.css
│   ├── layout.css
│   └── components.css
├── js/
│   ├── main.js
│   ├── form-handler.js
│   └── animations.js
├── assets/
│   ├── images/
│   └── icons/
├── docs/
│   └── entregables.md
└── README.md
```

## Personalización pendiente
- Cambiar `andres@example.com` por el correo real.
- Sustituir los ejemplos por proyectos propios y enlaces reales.
- Añadir URL reales de perfiles GitHub y LinkedIn.
- No publicar información confidencial de clientes, infraestructura o incidentes.

## Formulario
La validación es una simulación en JavaScript. No envía, almacena ni procesa datos en un backend. Para recibir mensajes reales se requiere un servicio o backend seguro.

## Despliegue en GitHub Pages
1. Crea un repositorio público llamado `mi-portafolio` en GitHub.
2. Sube los archivos manteniendo las carpetas.
3. Abre **Settings → Pages**.
4. En **Build and deployment**, elige **Deploy from a branch**, rama `main`, carpeta `/ (root)` y guarda.
5. Espera la publicación y abre la URL que GitHub Pages muestra en esa pantalla.

## Historial sugerido de commits
1. `chore: crear estructura inicial del portafolio`
2. `feat: agregar estructura semántica HTML5`
3. `style: implementar diseño responsivo y tokens CSS`
4. `feat: renderizar proyectos dinámicamente`
5. `feat: agregar menú móvil, tema y validación de formulario`
6. `docs: documentar instalación y entregables`

## Licencia
Uso académico. Ajustar si se requiere una licencia distinta.
