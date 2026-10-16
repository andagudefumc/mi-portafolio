/* Validación de formulario del lado del cliente. No transmite ni almacena datos. */
document.addEventListener('DOMContentLoaded',()=>{
  const form=document.querySelector('#contact-form'); if(!form)return;
  const fields={nombre:document.querySelector('#nombre'),email:document.querySelector('#email'),mensaje:document.querySelector('#mensaje')};
  const status=document.querySelector('#form-status');
  const mensajes={nombre:'Escribe tu nombre (mínimo 2 caracteres).',email:'Ingresa un correo electrónico válido.',mensaje:'El mensaje debe tener al menos 10 caracteres.'};
  function validar(campo){
    const input=fields[campo];let error='';
    if(!input.value.trim())error='Este campo es obligatorio.';
    else if(campo==='nombre'&&input.value.trim().length<2)error=mensajes.nombre;
    else if(campo==='email'&&!input.validity.valid)error=mensajes.email;
    else if(campo==='mensaje'&&input.value.trim().length<10)error=mensajes.mensaje;
    input.classList.toggle('is-invalid',Boolean(error));input.setAttribute('aria-invalid',String(Boolean(error)));
    document.querySelector(`#${campo}-error`).textContent=error;return !error;
  }
  Object.keys(fields).forEach(campo=>fields[campo].addEventListener('input',()=>{validar(campo);status.textContent=''}));
  form.addEventListener('submit',event=>{event.preventDefault();const valido=Object.keys(fields).map(validar).every(Boolean);
    if(valido){status.textContent='¡Validación correcta! Este formulario es una simulación académica: no se enviaron datos a ningún servidor.';form.reset();Object.values(fields).forEach(input=>{input.classList.remove('is-invalid');input.setAttribute('aria-invalid','false')});}
    else{status.textContent='Revisa los campos marcados antes de continuar.';form.querySelector('[aria-invalid="true"]')?.focus();}
  });
});
