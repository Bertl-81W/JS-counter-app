let add = document.querySelector("#add");
let subtract = document.querySelector("#subtract");
let reset = document.querySelector("#reset");

console.log(add, subtract);

add.addEventListener("click", function() {    
  let output = document.querySelector("#output");
  let result = Number(output.innerText) + 1;

  if (result > 10) {
    result = 0;
  }

  output.innerText = result;
});

subtract.addEventListener("click", function() {
  let output = document.querySelector("#output");
  let result = Number(output.innerText) - 1; 
  
  if (result < 0) {
    result = 0;
  }

  output.innerText = result;
});

reset.addEventListener("click", function reset() {
let output = document.querySelector("#output");
let result = 0;
output.innerText = result;

});

 


