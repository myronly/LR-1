const result = document.querySelector("button");

const t1 = document.querySelectorAll(".t1 span");
const t2 = document.querySelectorAll(".t2 span");

result.addEventListener("click", () => {
  const x = +document.getElementById("x").value;
  const y = +document.getElementById("y").value;
  const a = +document.getElementById("a").value;
  const b = +document.getElementById("b").value;
  const c = +document.getElementById("c").value;
  const d = +document.getElementById("d").value;

  for (let i = 0; i < t1.length; i++) {
    if (t1[i].parentElement.parentElement.classList.contains("Zeka")) {
      t1[i].textContent = ((1 / c) * ((b / a) * Math.log(a * x + b) + (d / y) * Math.log(y * x + d))).toFixed(2);
      t2[i].textContent = ((1 / (2 * a * b)) * Math.log((x * Math.sqrt(Math.pow(c, 2) - Math.pow(b, 2))) / (2 * y * Math.sqrt(Math.pow(c, 2) + Math.pow(b, 2))))).toFixed(2);
    } else {
      t1[i].textContent = ((1 / Math.pow(a - b, 2)) * (1 / (a + x) - 1 / Math.pow(1 - x, 2)) + (2 / Math.pow(a - y, 3)) * Math.sqrt(y / a) * x).toFixed(2);
      t2[i].textContent = ((b / (2 * a)) * (Math.sin(a * x) / Math.pow(Math.cos(a * x), 2)) + ((2 * a) / b) * Math.cos(a * x)).toFixed(2);
    }
  }
});
