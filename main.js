//const name = document.querySelector('#name').value;
const showTxt = document.querySelector('.showTxt h2');
const validarBtn = document.querySelector("#checkEntrance")


validarBtn.addEventListener('click', (e) =>{
  e.preventDefault()
  const name = String(document.querySelector('#name').value);
  const age = Number(document.querySelector('#age').value);
  
  if (age === "" || name === "") {
    showTxt.innerText=`💥 Preencha os campos de idade e nome`;
    showTxt.style.color='tomato'
    console.log('age === "" || name === "');
  }else if(!age || !name){
    showTxt.innerText="Apenas caractéres para nome e dígitos para idade";
    showTxt.style.color='tomato'
    console.log('age || name');
  } else if(age >= 18 && age < 60){
    showTxt.innerText= `Pode entrar ${name}. Enjoy it!!!!  🍹 🍾`;
    showTxt.style.color='green';
    console.log('age >= 18 && age < 60');
  }else if (age >= 60) {
    showTxt.innerText=`${name}, sua entrada é gratuita 🍹 🍾 🎉`;
    showTxt.style.color='green'
  } else {
    showTxt.innerText=`${name} você é menor de idade`;
    showTxt.style.color='tomato'
  }
})


// limpar mensagem showTxt
const reset = document.querySelector('#reset').addEventListener('click', ()=>{
  showTxt.innerText="";
})