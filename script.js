const bgBtn = document.getElementById("bgBtn");
const bgColors = ["#ffff","#7bbaf1ff","#eee094ff", "#f7a6e5ff"];

bgBtn.addEventListener("click", () => {
    const randomColor = bgColors[Math.floor(Math.random() * bgColors.length)];
    document.body.style.backgroundColor = randomColor;
});

const txtBtn = document.getElementById("txtBtn");

txtBtn.addEventListener("click", () => {
    document.body.style.color = "white";
});

const resetBtn = document.getElementById("resetBtn");

resetBtn.addEventListener("click", () => {
    document.body.style.backgroundColor = "white"; 
    document.body.style.color = "black";           
});