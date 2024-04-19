const instinput = document.querySelector('#inputkey');
const instvalue = document.querySelector('#inputvalue');
const instbtn = document.querySelector('#btninsert');
const result = document.querySelector('#result');

instbtn.onclick= () => {
  const key = instinput.value;
  const value = instvalue.value;

  if(key && key) {
    localStorage.setItem(key, value);
    localtion.reload();
  }

  for(let i = 0;i<localStorage.length;i++) {
    result.innerHTML += `${key} : ${value} <br>`;
  }
}