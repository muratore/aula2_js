//const name = document.querySelector('#name').value;
const showTxt = document.querySelector('.showTxt h2');
const validarBtn = document.querySelector("#checkEntrance")

validarBtn.addEventListener('click', (e) =>{
  e.preventDefault()
  const name = String(document.querySelector('#name').value);
  const age = Number(document.querySelector('#age').value);
  checkAccess(age, name)
})
// age, name
function checkAccess(age, name) {
  
  if (age === "" || name === "") {
    showTxt.innerText=`💥 Preencha os campos de idade e nome`;
    showTxt.style.color='tomato'
  } else if (age >= 60) {
    showTxt.innerText=`${name}, sua entrada gratuita 🍹 `;
    showTxt.style.color='black'
  } else if(age >= 18 && age < 60){
    showTxt.innerText= `Pode entrar ${name}. Enjoy it!!!! 🍹 🍾`;
    showTxt.style.color='green';
  } else if(!age || !name){
    showTxt.innerText="Apenas caractéres para nome e apenas dígitos para idade";
    }
  else {
    showTxt.innerText=`${name} você é menor de idade`;
    showTxt.style.color='tomato'
  }
}

// limpar mensagem
const reset = document.querySelector('#reset').addEventListener('click', ()=>{
  showTxt.innerText="";
})