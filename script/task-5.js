const inputRef = document.querySelector("input#name-input");
const outputRef = document.querySelector("span#name-output");

inputRef.addEventListener("input", getInputValue);

function getInputValue() {
  inputRef.value === ""
    ? (outputRef.textContent = "незнакомец")
    : (outputRef.textContent = inputRef.value);
  console.log(outputRef.textContent);
}
