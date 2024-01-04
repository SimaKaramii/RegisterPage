
var element = document.querySelector('#card-switch');
element.addEventListener('change', (e) => {
    var card = document.querySelector('.card')
    e.target.checked ? card.classList.add('is-flipped') : card.classList.remove('is-flipped')
})

//open modal
var modal = document.getElementById('modal');
let email = document.getElementById('email');
let text = document.getElementById('text');
function OpenModal(){
    modal.style.display = 'block';
}
function CloseModal(){
    modal.style.display = 'none';
    email.style.borderColor = '#424874'
    text.innerHTML = " ";
    email.value = " ";
}
function SendResetEmail(){
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.value.match(pattern)) {
        email.style.borderColor = '#424874'
        text.innerHTML = " "
    } else {
        text.innerHTML = "Please Enter Valid Email Address"
        email.style.borderColor = 'red'
    }
}