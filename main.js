//const name = document.querySelector('#name').value;

const showTxt = document.querySelector('.showTxt h2');
const validar = document.querySelector("#btn")

// validar.addEventListener('click', (e) =>{
//   e.preventDefault()
//   const name = document.querySelector('#name').value;
//   const age = document.querySelector('#age').value;
//   checkAccess(age, name)
// })
// age, name
function checkAccess() {
  let name = document.querySelector('#name').value;
  let age = document.querySelector('#age').value;
  

  if (age === "" || name === "") {
    alert("Insira seu nome") 
  } else if (age >= 60) {
    showTxt.innerText=`${name}, sua entrada gratuita`;
  } else if(age >= 18 && age < 60){
    showTxt.innerText= `Pode entrar ${name}`;
  } else {
    showTxt.innerText=`${name}você é menor de idade`;
  }
}


