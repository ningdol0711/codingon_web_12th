// val() : input vlaue 가져오기
function getValue() {
  // let inputValue = document.querySelector("input").value;
  let inputVal = $("input").val();
  console.log(inputVal);
}

function setValue() {
let setVal = $("input").val("Jquery used");
}

function changeCssJS() {
  let span = document.querySelector("span");
  span.style = "font-size: 20px; color: hotpink;";
}

function changeCssJquery() {
  // css로 여러 값을 변경할때
  $("span").css({fontWeight: "bold", backgroundColor: "skyblue"});
}

function getCssJquery() {
  alert($("span").css("color"));
}

function changeAttrJS() {
  let a = document.querySelector("a");
  a.setAttribute("href", "https://www.naver.com");
}

function changeAttrJquery() {
  $("a").attr("href", "https://www.daum.net");
}

function changeTextJS() {
  let a = document.querySelector(".p-text");
  a.textContent = "JS로 변경";
}

function changeTextJquery() {
  $(".p-text").text("Jquery로 변경");
}

function changeHtmlJS() {
  let a = document.querySelector(".p-html");
  a.innerHTML = "Changed by JS"
}

function changeHtmlJquery() {
  $(".p-html").html("changed by html");
}

function appendJS() {
  let ul = document.querySelector(".colors");
  let li = document.createElement("li");
  li.innerText = "마지막에 추가된 요소JS"
  ul.append(li);
}

function appendJquery() {
  $(".colors").append("<li>마지막에 추가된 요소JQ</li>");
}

function prependJS() {
let ul = document.querySelector(".colors");
let li = document.createElement("li");
li.innerText = "첫줄에 추가된 요소JS";
ul.prepend(li);
}

function prependJquery() {
  $(".colors").prepend("<li>첫줄에 추가된 요소JQ</li>");
}

function beforeJS() {
  let green = document.querySelector(".green");
  let li = document.createElement("li");
  li.innerText = "beforeJS";
  green.before(li);
}

function beforeJquery() {
  $(".green").before("<li>beforeJQ</li>");
}

function afterJS() {
  let navy = document.querySelector(".navy");
  let li = document.createElement("li");
  li.innerText = "afterJS";
  navy.after(li);
}

function afterJquery() {
  $(".navy").after("<li>afterJQ</li>")
}

// -----------------------------------------------------------------
function removeJS() {
  let li2 = document.querySelector("#li2");
  li2.remove();
}

function removeJquery() {
  $("#li2").remove();
}

function emptyJS() {
  let nums = document.querySelector("ul.nums");
  nums.innerHTML = "";
}

function emptyJquery() {
  $("ul.nums").empty();
}

function findParent() {
  console.log(document.querySelector(".child2").parentElement);
  console.log($(".child2").parent());
}

function findParents() {
  console.log($(".child2").parents());
}

function findNext() {
  console.log($(".child2").next());
}

function findPrev() {
  console.log($(".child2").prev());
}

function findChildren() {
  console.log($(".parent").children());
}

function addClass() {
  let hi = document.querySelector("#hi");
  hi.classList.add("color-blue");
  $("#hi").addClass("fs-50");
}

function removeClass() {
  hi.classList.remove("color-blue");
  $("#hi").removeClass("fs-50");
}

function hasClass() {
  console.log(hi.classList.contains("color-blue"));
  console.log($("#hi").hasClass("fs-50"));
}

function toggleClass() {
  hi.classList.toggle("color-blue");
  $("#hi").toggleClass("bg-pink");
}