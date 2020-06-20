let counterValue = 0;

const increaseButton = document.querySelector(
  'button[data-action="increment"]'
);

const decreaseButton = document.querySelector(
  'button[data-action="decrement"]'
);
const counterAcc = document.querySelector("div#counter span#value");

const increment = () => {
  counterValue += 1;
  counterAcc.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  counterAcc.textContent = counterValue;
};

increaseButton.addEventListener("click", increment);
decreaseButton.addEventListener("click", decrement);
