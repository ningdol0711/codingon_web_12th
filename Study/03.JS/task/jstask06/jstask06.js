let spanbtns = document.querySelectorAll(".span");

for(let span of spanbtns) {
  span.addEventListener("click", changebg());
}

function changebg() {
  $(".span").backgroundColor = "skyblue";
}