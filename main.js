//const name = document.querySelector('#name').value;
const showTxt = document.querySelector('.showTxt h2');
const validarBtn = document.querySelector("#checkEntrance")

validarBtn.addEventListener('click', (e) =>{
  e.preventDefault()
  const name = document.querySelector('#name').value;
  const age = document.querySelector('#age').value;
  checkAccess(age, name)
})
// age, name
function checkAccess(age, name) {
  if (age === "" || name === "") {
    showTxt.innerText=`Preencha os campos de idade e nome`;
    showTxt.style.color='tomato'
  } else if (age >= 60) {
    showTxt.innerText=`${name}, sua entrada gratuita`;
  } else if(age >= 18 && age < 60){
    showTxt.innerText= `Pode entrar ${name}. Enjoy it!!!! 🍹`;
  } else {
    showTxt.innerText=`${name} você é menor de idade`;
  }
}

// limpar mensagem
const reset = document.querySelector('#reset').addEventListener('click', ()=>{
  showTxt.innerText="";
})