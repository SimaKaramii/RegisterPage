
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
function CheckValidEmail(email , text){
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    var flag = true;
    if (email.value.match(pattern)) {
        text.innerHTML = " "
        flag = true
    } else {
        text.innerHTML = "Please Enter Valid Email Address"
        flag = false
    }
    return flag
}
function SendResetEmail(){
    CheckValidEmail(email , text)
}
var user = document.getElementById('user');
let emailadderss = document.getElementById('emailadderss');
let Password = document.getElementById('Password');
let rePassword = document.getElementById('rePassword');
let TextSignUp = document.getElementById('TextSignUp');
var checkboxTerms = document.getElementById("checkboxTerms");
function SendSignUp(){
    var flag= true;
    if(!user.value||!emailadderss.value||!Password.value||!rePassword.value){
        TextSignUp.innerHTML = "Please fill in all information"
        flag = false;
    }
    else{

        if(emailadderss.value){
             CheckValidEmail(emailadderss , TextSignUp)
            flag = CheckValidEmail(emailadderss , TextSignUp);
        }
        if(CheckValidEmail(emailadderss , TextSignUp) && Password.value !== rePassword.value){
            TextSignUp.innerHTML = "Password and repeat password are not the same"
            flag = false;
        }
        if (flag && !checkboxTerms.checked) {
            TextSignUp.innerHTML = "Please check box if you want to proceed"
        }
    }
}