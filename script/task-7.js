const barRef = document.querySelector("#font-size-control");

const textRef = document.querySelector("#text");
// console.log(textRef.style.fontSize);
// textRef.style.fontSize = "30px";
barRef.addEventListener("input", () => {
  textRef.style.fontSize = `${barRef.value}px`;
});
