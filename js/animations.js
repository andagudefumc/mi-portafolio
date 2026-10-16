/* Animación progresiva con alternativa para navegadores sin IntersectionObserver. */
function activarRevelado(){
  const elementos=document.querySelectorAll('.reveal');
  if(!('IntersectionObserver' in window)){elementos.forEach(el=>el.classList.add('visible'));return;}
  const observer=new IntersectionObserver((entradas)=>entradas.forEach(entrada=>{if(entrada.isIntersecting){entrada.target.classList.add('visible');observer.unobserve(entrada.target)}}),{threshold:.12});
  elementos.forEach(el=>observer.observe(el));
}
document.addEventListener('DOMContentLoaded',activarRevelado);
document.addEventListener('projects:rendered',activarRevelado);
