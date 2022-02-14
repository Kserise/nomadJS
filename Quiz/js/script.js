const inputForm = document.getElementById("inputForm");
const chose = document.getElementById("chose");
const result = document.getElementById("result");

function paintNumber(inputNumber) {
  const value = inputNumber.value;
  const mChose = inputNumber.mChose;
  let resultText = "";
  chose.innerText = `You chose:  ${value}, the machine chose: ${mChose}`;
  if (value === mChose) {
    resultText = "You win!";
  } else {
    resultText = "You lose...";
  }
  result.innerText = resultText;
}

function inputFormHandler(event) {
  event.preventDefault();
  const range = Number(inputForm.range.value);
  const value = Number(inputForm.value.value);
  if (range < value) {
    alert("범위 내의 숫자를 입력해주세요.");
    return;
  }
  const mChose = Math.floor(Math.random() * range + 1);
  const inputNumber = {
    range: range,
    value: value,
    mChose: mChose
  };
  paintNumber(inputNumber);
}

inputForm.addEventListener("submit", inputFormHandler);
