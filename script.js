let inpt = document.getElementById("inpt");

let button = document.getElementsByTagName("button");

let sepBtn = Array.from(button);
let str = "";
sepBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.innerHTML === "DEL") {
      str = str.substring(0, str.length - 1);
      inpt.value = str;
    } else if (e.target.innerHTML === "AC") {
      str = "";
      inpt.value = str;
    } else if (e.target.innerHTML === "=") {
      str = eval(str);
      inpt.value = str;
    } else {
      str += e.target.innerHTML;
      inpt.value = str;
    }
  });
});
