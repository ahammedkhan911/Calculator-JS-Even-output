// alert("Hello world")
var form=document.getElementById('form')
form.addEventListener('submit',function(event){
    event.preventDefault()
    var username=document.getElementById('username').value
    var email=document.getElementById('email').value
    var pass=document.getElementById('pass').value
    console.log(username)
    console.log(email )
    console.log(pass)
})