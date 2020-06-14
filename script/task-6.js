const inputRef = document.querySelector("input#validation-input");
inputRef.addEventListener("input", validation);

function validation() {
  if (inputRef.value.length >= 1 && inputRef.value.length <= 6) {
    inputRef.classList.add("valid");
  } else {
    inputRef.classList.add("invalid");
  }
}
