// script.js
function changeText(){
  const text = document.getElementById("demo");

  if(text.innerHTML === "Готовий до пригод?"){
    text.innerHTML = "Час вирушати у подорож!";
  } else {
    text.innerHTML = "Готовий до пригод?";
  }
}