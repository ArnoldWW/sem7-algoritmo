const input = document.querySelector("input");
const headingX = document.querySelector(".headingX");

input.addEventListener("change", (e) => {
  const a = Number(e.target.value);
  let x;

  if (a >= 0) {
    x = a;
    console.log("X:", x);
  } else {
    x = -a;
    console.log("X:", x);
  }

  headingX.textContent = `Valor de X: ${x}`;
});
