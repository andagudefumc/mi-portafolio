# Entregables de la actividad: Mi Portafolio Web Interactivo

**Estudiante:** Andrés Agudelo  
**Unidad:** 1 — Fundamentos de los Lenguajes de Programación y Programación Declarativa  
**Metodología:** CDIO (Conceive–Design–Implement–Operate) y ABP.

> Nota de honestidad académica: el sitio y las propuestas de proyecto son una base demostrativa personalizable. Antes de entregar, revisa el código, pruébalo en tu equipo y reemplaza los datos de ejemplo por información real que puedas divulgar.

## Fase 1. CONCEIVE

### Entregable 1.1 — Requerimientos funcionales

| ID | Requerimiento funcional | Criterio de aceptación |
|---|---|---|
| RF-01 | El sitio presenta el nombre y perfil profesional del autor. | El bloque de bienvenida muestra nombre, rol y descripción. |
| RF-02 | La navegación permite ir a Sobre mí, Proyectos y Contacto. | Cada enlace desplaza a la sección correspondiente. |
| RF-03 | El sitio muestra al menos tres proyectos. | Se ven tres tarjetas con título, descripción y tecnologías. |
| RF-04 | Los proyectos se generan desde un arreglo JavaScript. | `renderizarProyectos()` crea las tarjetas en `#proyectos-grid`. |
| RF-05 | El menú se adapta a móvil. | El botón hamburguesa abre/cierra la navegación y actualiza `aria-expanded`. |
| RF-06 | El formulario valida nombre, correo y mensaje. | Muestra errores cuando hay campos vacíos o datos inválidos. |
| RF-07 | El formulario muestra confirmación simulada si los datos son válidos. | Se anuncia el resultado en una región `role="status"`; no se transmiten datos. |
| RF-08 | El usuario puede alternar tema claro y oscuro. | El botón cambia la clase de tema y su etiqueta accesible. |
| RF-09 | El pie de página muestra redes y copyright. | Se visualizan enlaces a GitHub, LinkedIn y año actualizado por JS. |
| RF-10 | Los botones y enlaces permiten llegar a áreas relevantes. | Los enlaces del portafolio apuntan a secciones existentes. |

### Entregable 1.1 — Requerimientos no funcionales

| ID | Requerimiento no funcional | Criterio de aceptación |
|---|---|---|
| RNF-01 | Diseño responsivo mobile-first. | El contenido se adapta a móvil, tableta y escritorio sin desbordamiento horizontal. |
| RNF-02 | HTML semántico. | Usa `header`, `nav`, `main`, `section`, `article`, `form` y `footer`. |
| RNF-03 | Accesibilidad básica. | Campos con `label`, foco visible, textos alternativos o `aria-hidden` cuando aplica y estado accesible. |
| RNF-04 | Mantenibilidad. | Variables CSS centralizadas y archivos CSS/JS separados por responsabilidad. |
| RNF-05 | Rendimiento. | No utiliza librerías externas ni imágenes pesadas; carga scripts con `defer`. |
| RNF-06 | Compatibilidad. | Funciona en navegadores modernos con soporte de HTML5, CSS Grid y JavaScript ES6. |
| RNF-07 | Privacidad. | La demostración no transmite ni guarda la información del formulario. |
| RNF-08 | Usabilidad. | Navegación visible, llamadas a la acción claras y mensajes de validación comprensibles. |
| RNF-09 | Seguridad básica. | Los datos de proyectos se insertan con `textContent` en vez de interpretar HTML arbitrario. |
| RNF-10 | Despliegue sencillo. | Sitio estático sin compilación, apto para GitHub Pages. |

### Entregable 1.2 — Wireframe de baja fidelidad

El wireframe de referencia es la imagen generada en la conversación. Debe dibujarse o insertarse como imagen en el documento de entrega. Estructura que debe mostrar:

```text
┌────────────────────────────────────────────────────────────┐
│ AA / Andrés Agudelo     Sobre mí  Proyectos  Contacto  [☰] │
├────────────────────────────────────────────────────────────┤
│ HERO: Hola, soy Andrés            [Escudo / servidores]     │
│ CISO y administrador de infraestructura                     │
│ Descripción breve        [Ver proyectos] [Hablemos]         │
├────────────────────────────────────────────────────────────┤
│ PROYECTOS                                                    │
│ ┌────────────┐  ┌────────────┐  ┌────────────┐              │
│ │ Proyecto 1 │  │ Proyecto 2 │  │ Proyecto 3 │              │
│ └────────────┘  └────────────┘  └────────────┘              │
├────────────────────────────────────────────────────────────┤
│ CONTACTO: texto/correo       Nombre                         │
│                              Correo electrónico             │
│                              Mensaje       [Enviar]          │
├────────────────────────────────────────────────────────────┤
│ GitHub   LinkedIn                    © Andrés Agudelo        │
└────────────────────────────────────────────────────────────┘
```

**Puntos de interacción JavaScript:** menú hamburguesa; botón de tema; tarjetas renderizadas desde un arreglo; validación de campos; mensaje de estado al enviar; actualización del año; aparición progresiva de tarjetas. En móvil, las columnas pasan a una sola y el menú se abre con el botón.

## Fase 2. DESIGN

### Entregable 2.1 — Arquitectura de archivos y separación de responsabilidades

```text
mi-portafolio/
├── index.html
├── css/
│   ├── reset.css        # normalización y reglas base
│   ├── variables.css    # colores, tipografía, espacios y radios
│   ├── layout.css       # estructura, secciones y media queries
│   └── components.css   # botones, tarjetas, formularios y estados
├── js/
│   ├── main.js          # menú, tema, año y tarjetas dinámicas
│   ├── form-handler.js  # validación del formulario
│   └── animations.js    # aparición progresiva accesible
├── assets/
│   ├── images/          # imágenes del proyecto (si se agregan)
│   └── icons/           # iconos locales (si se agregan)
├── docs/
│   └── entregables.md
└── README.md
```

**Justificación:** separar CSS permite localizar cambios: reset para reglas generales, variables para identidad visual, layout para composición responsiva y components para estilos reutilizables. Separar JavaScript mantiene independientes las responsabilidades de navegación/contenido, validación y animación; facilita probar y mantener el código. Para este sitio estático, los archivos se cargan directamente desde HTML, sin proceso de compilación.

### Entregable 2.2 — Guía de estilos

| Elemento | Decisión |
|---|---|
| Color de fondo oscuro | `#0b1220` |
| Superficie de tarjetas | `#121d30` |
| Superficie alternativa | `#17243a` |
| Texto principal | `#eef4ff` |
| Texto secundario | `#a7b4c9` |
| Acento | `#69e0c1` |
| Tipografía | `Inter`, con alternativas del sistema sans-serif |
| Ancho máximo | `1120px` |
| Radios | `18px` para tarjetas; `10px` para controles |
| Espaciado base | múltiplos de `0.5rem` |
| Componentes reutilizables | botones primario/secundario, tarjetas de proyecto, tarjetas de competencia, campos y etiquetas tecnológicas |
| Interacciones | transiciones cortas, hover, foco visible, menú móvil, tema claro/oscuro |

Las decisiones se definen como variables CSS en `css/variables.css`. No se usan más de dos familias tipográficas: una familia sans-serif con fallback del sistema.

## Fase 3. IMPLEMENT

### Entregable 3.1 — HTML5 semántico

Implementado en `index.html`: estructura HTML5 con `lang="es"`, `charset`, `viewport`, descripción, título, `header`, `nav`, `main`, `section`, `article` (generados para proyectos), `form` y `footer`. Los campos del formulario tienen etiquetas asociadas, tipos apropiados y restricciones `required`/`minlength`. El documento enlaza hojas CSS y scripts externos con `defer`.

### Entregable 3.2 — CSS3 responsivo

Implementado en `css/`. Utiliza variables CSS, Flexbox y CSS Grid, con media queries para escritorio/tableta y móvil (corte principal de 700 px y ajuste adicional a 900 px). El diseño móvil muestra navegación desplegable y tarjetas en una columna; en escritorio las tarjetas se distribuyen en tres columnas. Incluye transición, foco visible y preferencia `prefers-reduced-motion`.

### Entregable 3.3 — JavaScript

- `main.js`: arreglo de tres objetos, renderizado de tarjetas mediante el DOM, menú responsive, alternancia de tema y actualización del año.
- `form-handler.js`: validación en tiempo real y al enviar; muestra mensajes de error y confirmación simulada.
- `animations.js`: revela tarjetas al entrar en pantalla con `IntersectionObserver` y alternativa para navegadores que no lo soportan.

**Importante:** el formulario no es un envío real porque no existe backend. La interfaz lo indica para no hacer creer que el mensaje fue enviado a un destinatario.

## Fase 4. OPERATE

### Entregable 4.1 — Despliegue y commits

Pasos para desplegar:
1. Crear repositorio GitHub `mi-portafolio`.
2. Copiar todos los archivos conservando la estructura de carpetas.
3. Registrar al menos cinco commits descriptivos (se proponen seis en el README).
4. En Settings → Pages seleccionar despliegue desde la rama `main`, carpeta raíz `/`.
5. Abrir la URL que genere GitHub Pages y comprobar que carga en HTTPS.
6. Probar la página en móvil y escritorio, revisar enlaces, menú, tema y formulario.

**Evidencias que debe añadir el estudiante:** URL pública real, captura de GitHub Pages activo y captura del historial con al menos cinco commits. Estas evidencias no se pueden inventar; deben obtenerse después del despliegue propio.

### Entregable 4.2 — README

El archivo `README.md` incluido documenta descripción, tecnologías, estructura, ejecución local, personalización, limitación del formulario, despliegue, commits sugeridos y licencia.

### Entregable 4.3 — Autoevaluación y reflexión

**1. ¿Qué fue lo más difícil de implementar y por qué?**
Lo más retador fue coordinar la estructura, los estilos adaptables y los eventos de JavaScript para que funcionaran juntos. El menú debe cambiar según el tamaño de pantalla, las tarjetas deben generarse cuando el DOM está disponible y el formulario debe comunicar errores claros sin recargar la página. Separar el código por responsabilidad ayudó a mantenerlo organizado.

**2. ¿Cómo se relaciona la arquitectura del proyecto con los conceptos de programación estructurada vistos en clase?**
El proyecto divide el problema en tareas pequeñas y ordenadas: HTML define la estructura, CSS presenta el contenido y JavaScript controla el comportamiento. Las funciones como `renderizarProyectos()` y `validar()` encapsulan responsabilidades; las condiciones permiten decidir si los datos son válidos y los ciclos recorren los proyectos y sus tecnologías. Los eventos conectan las acciones del usuario con las funciones correspondientes.

**3. ¿Qué mejoraría si tuviera más tiempo?**
Conectaría el formulario a un backend o servicio seguro con protección contra spam y aviso de privacidad; reemplazaría los proyectos de ejemplo por trabajos reales con evidencias; agregaría pruebas automatizadas, análisis de accesibilidad, optimización de recursos y un flujo de integración continua. También revisaría los enlaces y perfiles antes de publicar.

## Checklist de entrega

- [ ] Revisé y comprendí el HTML, CSS y JavaScript.
- [ ] Reemplacé correo, enlaces y proyectos de ejemplo cuando corresponde.
- [ ] Probé el menú en móvil y escritorio.
- [ ] Probé tema claro/oscuro.
- [ ] Probé campos vacíos, correo inválido y mensaje corto; luego un formulario válido.
- [ ] Confirmé que el formulario se identifica como simulación.
- [ ] Verifiqué accesibilidad básica y ausencia de desbordamiento horizontal.
- [ ] Publiqué en GitHub Pages y copié la URL real.
- [ ] Realicé al menos cinco commits descriptivos.
- [ ] Añadí capturas reales del despliegue y del historial de commits.
