// (() => {
//   'use strict'
//   const forms = document.querySelectorAll('.needs-validation')
//   Array.from(forms).forEach(form => {
//     form.addEventListener('submit', event => {
//       if (!form.checkValidity()) {
//         event.preventDefault()
//         event.stopPropagation()
//       }
//       form.classList.add('was-validated')
//     }, false)
//   })
// })()
const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
  const msg = document.createElement('p')
  document.querySelector('form').append(msg)
  const nome = document.querySelector('#nome').value
  if (nome.length < 5 || nome.indexOf(' ')<0) {
    msg.innerHTML = 'Digite um nome válido!'
  } else {
    msg.innerHTML = 'Dados preenchidos com sucesso!'
  }
  e.preventDefault()
})