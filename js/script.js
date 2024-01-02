
var element = document.querySelector('#card-switch');
element.addEventListener('change', (e) => {
    var card = document.querySelector('.card')
    e.target.checked ? card.classList.add('is-flipped') : card.classList.remove('is-flipped')
})