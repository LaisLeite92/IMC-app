function start() {
  var buttonCalculateImc = document.querySelector('#button-calculate-imc');
  buttonCalculateImc.addEventListener('click', handleButtonClick);

  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');

  inputWeight.addEventListener('input', handleButtonClick);
  inputHeight.addEventListener('input', handleButtonClick);

  handleButtonClick();
}

function calculateImc(weight, height) {
  return weight / (height * height);
}

function handleButtonClick() {
  //console.log("cliquei");
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');
  var imcResult = document.querySelector('#imc-result');

  var weight = Number(inputWeight.value);
  var height = Number(inputHeight.value);

  /*console.log(inputHeight);
  console.log(inputWeight);*/

  /*console.log(weight);
  console.log(height);*/

  var imc = calculateImc(weight, height);
  //console.log(imc);
  var formattedImc = imc.toFixed(2).replace('.', ',');

  imcResult.textContent = formattedImc;
}

start();
