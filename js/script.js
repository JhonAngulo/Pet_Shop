function send() {
  console.log('12345')
  document.getElementById('name').setAttribute('type', 'hidden')
  document.getElementById('email').setAttribute('type', 'hidden')
  document.getElementById('phone').setAttribute('type', 'hidden')
  document.getElementById('form_paid').submit()
}
