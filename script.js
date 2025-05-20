// document.getElementById("runPython").addEventListener("click", async () => {
//     await fetch("http://localhost:5000/run-script");
// });

// document.getElementById("stopPython").addEventListener("click", async () => {
//     await fetch("http://localhost:5000/stop-script");
// });

let str = "";

btn = document.querySelector("button");
let num = 1;

btn.addEventListener("click", async () => {
  if (num == 1) {
      str = "Stop";
      btn.innerHTML = str;
      num = 0;
      await fetch("http://localhost:5000/run-script");
  } else {
      str = "Start";
      btn.innerHTML = str;
      num = 1;
      await fetch("http://localhost:5000/stop-script");
  }
});

