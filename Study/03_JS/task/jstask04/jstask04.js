function clac() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let operator = document.getElementById("operator").value;

  if(operator === "+") {
    let result = Number(num1)+Number(num2);
    document.getElementById("result").value = result;
  }

  else if(operator === "-") {
    let result = Number(num1)-Number(num2);
    document.getElementById("result").value = result;
  }
  
  else if(operator === "*") {
    let result = Number(num1)*Number(num2);
    document.getElementById("result").value = result;
  }

  else if(operator === "/") {
    let result = Number(num1)/Number(num2);
    document.getElementById("result").value = result;
  }

  else if(operator === "%") {
    let result = Number(num1)%Number(num2);
    document.getElementById("result").value = result;
  }

  else {
    document.getElementById("result").value = "잘못된 연산자";
  }
}

function reset() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("operator").value = "";
  document.getElementById("result").value = "";
}