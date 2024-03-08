// ready() : 모든 요소들이 준비 되면 실행
$(document).ready(function() {
  console.log("start when documents dom is complite loading");
});

$(function() {
  console.log("loding");
})

// 로딩에 관련된 에빈트
document.addEventListener("load", function() {
  // 요소를 모두 읽어오고, 외부 파일등등의 로딩이 모두 마치면 실행
  // window와 함께 사용
})
document.addEventListener("DOMContentLoaded", function() {
  // DOM 내부 요소가 전부 로딩 되면 실행
  // document와 함께 사용
})

// 마우스 이벤트
$(".p-msg").click(function() {
  $(".p-msg").css("color", "blue");
})

$(".num").click(function() {
  $(".num").css("color", "orange");
})

$(".num").on("click", function() {
  $(this).css("color", "yellow");
})

$(".numbers").mouseover(function() {
  $(this).css("background-color", "skyblue");
})

// .hover(hover 일때, hover가 종료되었을때)
$(".div-hover").hover(function() {
  $(this).addClass("hover");
}, function() {
  $(this).removeClass("hover");
})

$(window).scroll(function() {
  console.log("scroll")
})

// key Event
$(".input-key").keydown(function(a) {
  if(a.code === "ArrowRight") {
    console.log("Right");
  }
  else if(a.code === "ArrowLeft") {
    console.log("Left");
  }
  else if(a.code === "ArrowUp") {
    console.log("Up");
  }
  else if(a.code === "ArrowDown") {
    console.log("Down");
  }
})

// form
$('#todo-form').submit(function(a) {
  a.preventDefault();
  const todo = $("input[name=todo]").val();
  $(".todos").append(`<li>${todo}</li>`);
  $("input-todo").val = "";
})

// this
const btns = document.querySelectorAll(".btn");
const spans = document.querySelectorAll(".span");

function setBgColor() {
  let colorval = Math.floor(Math.random()*100)
  this.style.backgroundColor = "#FF00" + colorval;
}

for(let btn of btns) {
  // btn.style.backgroundColor = "skyblue";
  // btn.addEventListener("click", function() {
  //   this.style.backgroundColor = "yellowgreen";
  // })
  btn.addEventListener("click", setBgColor);
}

$("a#inactive").on("click", function(event) { 
  event.preventDefault();
  $("#text").append("해당 링크는 작동하지 않습니다.");
})