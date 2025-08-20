//document.getElementById('ano').textContent = new Date().getFullYear();
// Código do Formulario do Site...
var fields = document.querySelectorAll("#form-user-create [name] " );

var user = {};

fields.forEach(function( field, index ){
    //console.log(field);

    user[field.name] = field.value;

});
console.log(user);
