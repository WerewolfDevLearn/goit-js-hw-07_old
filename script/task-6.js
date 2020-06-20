const inputRef = document.querySelector("input#validation-input");
inputRef.addEventListener("blur", validation);
console.log(inputRef.value);
function validation() {
  console.log(inputRef.value);
  if (inputRef.value.length === 6) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
}
