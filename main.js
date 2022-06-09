var elForm = document.querySelector('.form');
var elInput = document.querySelector('.form__input');
var elOption = document.querySelector('.form__select');
var elButton = document.querySelector('.form__button');
var elText = document.querySelector('.form__result');


elForm.addEventListener('submit', function(evt) {
  evt.preventDefault();

  var elMoney = elInput.value;

  if(elOption.value == 'usd') {
    var usdResult = elMoney / 11000 
    elText.textContent = `${usdResult} $`
  }
  else if(elOption.value == 'euro') {
    var euroResult = elMoney / 11800 
    elText.textContent = `${euroResult} €`
  }
  else if(elOption.value == 'rub') {
    var rubResult = elMoney / 150 
    elText.textContent = `${rubResult} ₽`
  }
})