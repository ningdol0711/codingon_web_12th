function submitjs() {
  const colors = document.querySelectorAll(".color");
  for(let i=0;i<colors.length;i++) {
    colors[i].addEventListener("click", function() {
      colors[i].style.color = "aqua";
    })
  }
  // colors.forEach((color) => {
  //   color.addEventListener("click", function() {
  //     this.style.color = "lightgreen"
  //   })
  // })
}

function submitjsquery() {
  const colorsq = $(".color");

  colorsq.on("click", function() {
    $(this).css("background-color", "gray");

  })
}