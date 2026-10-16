/* Menú móvil, tema y renderizado dinámico de tarjetas. */
const proyectos = [
  {titulo:"Matriz de controles y riesgos",descripcion:"Modelo demostrativo para organizar controles, responsables, evidencias y tratamiento de riesgos de seguridad.",tecnologias:["GRC","ISO 27001","Excel"],icono:"▦",enlace:"#contacto"},
  {titulo:"Infraestructura en la nube",descripcion:"Propuesta de arquitectura con foco en disponibilidad, acceso seguro, monitoreo y continuidad operativa.",tecnologias:["Cloud","IAM","Monitoreo"],icono:"☁",enlace:"#contacto"},
  {titulo:"Monitoreo de seguridad",descripcion:"Flujo conceptual para registrar alertas, priorizar incidentes y documentar acciones de respuesta.",tecnologias:["SIEM","Logs","Respuesta"],icono:"⌁",enlace:"#contacto"}
];

function renderizarProyectos(){
  const contenedor=document.querySelector('#proyectos-grid');
  if(!contenedor) return;
  contenedor.replaceChildren();
  proyectos.forEach((proyecto,indice)=>{
    const card=document.createElement('article'); card.className='project-card reveal';
    const visual=document.createElement('div'); visual.className='project-visual'; visual.setAttribute('aria-hidden','true'); visual.textContent=proyecto.icono;
    const titulo=document.createElement('h3'); titulo.textContent=proyecto.titulo;
    const descripcion=document.createElement('p'); descripcion.textContent=proyecto.descripcion;
    const tags=document.createElement('div'); tags.className='tech-list';
    proyecto.tecnologias.forEach(tech=>{const tag=document.createElement('span');tag.textContent=tech;tags.append(tag)});
    const link=document.createElement('a'); link.className='project-link';link.href=proyecto.enlace;link.textContent='Conocer más →';link.setAttribute('aria-label',`Conocer más sobre ${proyecto.titulo}`);
    card.append(visual,titulo,descripcion,tags,link);contenedor.append(card);
  });
  document.dispatchEvent(new CustomEvent('projects:rendered'));
}

document.addEventListener('DOMContentLoaded',()=>{
  renderizarProyectos();
  const toggle=document.querySelector('#menu-toggle'); const nav=document.querySelector('#nav-links');
  toggle?.addEventListener('click',()=>{const abierto=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(abierto));toggle.setAttribute('aria-label',abierto?'Cerrar menú':'Abrir menú')});
  nav?.querySelectorAll('a').forEach(enlace=>enlace.addEventListener('click',()=>{nav.classList.remove('open');toggle?.setAttribute('aria-expanded','false')}));
  const theme=document.querySelector('#theme-toggle');
  theme?.addEventListener('click',()=>{document.body.classList.toggle('light-theme');const claro=document.body.classList.contains('light-theme');theme.setAttribute('aria-label',claro?'Cambiar a tema oscuro':'Cambiar a tema claro');theme.textContent=claro?'◑':'◐'});
  const year=document.querySelector('#year');if(year)year.textContent=new Date().getFullYear();
});
