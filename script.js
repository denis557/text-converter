const body = document.getElementById("body");
const textInput = document.getElementById("text-input");
const select = document.getElementById("select-type");
const button = document.getElementById("submit");
const form = document.getElementById("form");
const result = document.getElementById("result");
const changeThemeButton = document.querySelector(".change-theme");
const sun = document.getElementById("sun");
const moon = document.getElementById("moon");
const gitWhite = document.getElementById("git-white");
const gitBlack = document.getElementById("git-black");

const mockedText = () => {
  const lowerCase = textInput.value.toLowerCase();
  const textArr = [...lowerCase];

  for (let i = 0; i < textArr.length; i += 2) {
    textArr[i] = textArr[i].toUpperCase();
  }
  const mockedResult = textArr.join("");
  return mockedResult;
};

const camelCase = () => {
  const string = textInput.value;
  const textArr = [...string];

  let upperCaseNext = false;

  for (i in textArr) {
    if (textArr[i] == " ") {
      upperCaseNext = true;
      textArr.splice(i, 1);
    } else if (upperCaseNext) {
      textArr[i - 1] = textArr[i - 1].toUpperCase();
      upperCaseNext = false;
    }
  }

  const camelResult = textArr.join("");
  return camelResult;
};

const changeTheme = () => {
  body.classList.toggle("light");
  textInput.classList.toggle("light");
  select.classList.toggle("light");
  button.classList.toggle("light");
  result.classList.toggle("light");
  sun.classList.toggle("hidden");
  moon.classList.toggle("hidden");
  gitWhite.classList.toggle("hidden");
  gitBlack.classList.toggle("hidden");
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (textInput.value) {
    switch (select.value) {
      case "lower-case":
        result.innerText = textInput.value.toLowerCase();
        result.classList.remove("hidden");
        break;
      case "upper-case":
        result.innerText = textInput.value.toUpperCase();
        result.classList.remove("hidden");
        break;
      case "camel-case":
        const camelResult = camelCase();
        result.innerText = camelResult;
        result.classList.remove("hidden");
        break;
      case "mocked":
        const mockedResult = mockedText();
        result.innerText = mockedResult;
        result.classList.remove("hidden");
        break;
      default:
        alert("Select type!");
    }
  } else {
    alert("Input a value!");
  }
});

sun.addEventListener("click", () => {
  changeTheme();
});

moon.addEventListener("click", () => {
  changeTheme();
});
