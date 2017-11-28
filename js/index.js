$(document).ready(function() {
  $('select').material_select();
});


let app = new Vue({
    el: 'main',
    data: {
        logo: 'http://tuapplicacion.com/assets/img/logo.png',
        preference: ['Arte', 'Cine', 'Música'],
         form: {
          nombre: null, apellidos: null, telefono: null,
          email: null, direccion: null,  
         }
      } 
});

const apiRest = 'https://jsonplaceholder.typicode.com/posts';

let Registrar = () => {
  Post(apiRest, app.form);
}

function Post(ApiRes, objet_form) {
  objet_form.preference = $('#preferencias').val();
  fetch(ApiRes, {
    method: 'POST',
    body: JSON.stringify(objet_form),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(data => {
    Materialize.toast(`Usuario Registrado <i class="material-icons">check_box</i>`, 2000, 'rounded');
    console.log(data);
  })
  .catch(error => {
    console.log('Fetch Error :-S', error);
    Materialize.toast(`Por favor verfique sus datos. <i class="material-icons">delete_forever</i>`, 2000, 'rounded');
  });
  
}