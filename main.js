/* 
DOM "Create Elements"

*/

// let myElement = document.createElement("div");

// myElement.className = "product";

// myElement.setAttribute("data-custom", "Test");

// let myText = document.createTextNode("Product One");

// myElement.appendChild(myText);

// document.body.appendChild(myElement);

// console.log(myElement);

/*
///////////////////////////////////////////////
DOM --- Dealing with childrens

-children
-childNodes
-firstChild
-lastChild
-firstElementChild
-lastElementChild
*/

// let myElement = document.querySelector("div");

// console.log(myElement);
// console.log(myElement.children);
// console.log(myElement.children[0]);
// console.log(myElement.childNodes);
// console.log(myElement.childNodes[0]);

// console.log(myElement.firstChild); // first node
// console.log(myElement.firstElementChild); // first html tag

// console.log(myElement.lastChild); // last Node
// console.log(myElement.lastElementChild); // last html tag

///////////////////////////////////////////////////////////

// let myBtn = document.getElementById("btn");

// myBtn.onclick = function () {
//   console.log("Clicked");
// };

// myBtn.oncontextmenu = function () {
//   console.log("Clicked");
// };

// myBtn.onmouseenter = function () {
//   console.log("Clicked");
// };

// myBtn.onmouseleave = function () {
//   console.log("Clicked");
// };

///////////////////////////////////////////

/*
Validate Form
preventDefault()
*/

// document.links[0].onclick = function (event) {
//   console.log(event);
//   event.preventDefault();
// };

// let userInput = document.querySelector("[name='username']");
// let ageInput = document.querySelector("[name='age']");

// document.forms[0].onsubmit = function (e) {
//   let userValid = false;
//   let ageValid = false;

//   if (userInput.value !== "" && userInput.value.length <= 10) {
//     userValid = true;
//   }

//   if (ageInput.value !== "") {
//     ageValid = true;
//   }

//   if (userValid === false || ageValid === false) {
//     e.preventDefault();
//   }
// };

// function plusClick() {
//   let quantity = document.getElementById("q1");
//   quantity.innerHTML = parseInt(quantity.innerHTML) + 1;
// }
