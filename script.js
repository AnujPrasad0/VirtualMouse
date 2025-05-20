document.getElementById("runPython").addEventListener("click", async () => {
    await fetch("http://localhost:5000/run-script");
});

document.getElementById("stopPython").addEventListener("click", async () => {
    await fetch("http://localhost:5000/stop-script");
});