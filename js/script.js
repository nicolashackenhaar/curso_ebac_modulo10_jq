$(document).ready(function () {


  $('#cpf').mask('000.000.000-00')
  $('#telefone').mask('(00) 00000-0000')  
  $('#cep').mask('00000-000')  


  $('form').validate({
    rules: {
      nome: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      telefone: {
        required: true,
        minlength: 11
      },
      cpf: {
        required: true,
        minlength: 11
      },  
      endereco: {
        required: true
      },
      cep: {
        required: true,
        minlength: 8
      }
    },
      submitHandler: function(form) {
        alert('formulario enviado')
      },
      invalidHandler: function (evento, validador) {
        let camposIncorretos = validador.numberOfInvalids();
        if (camposIncorretos) {
          alert(`existem ${camposIncorretos} campos incorretos`)
        }
      }
  })
})