const bgColors = ["#7bbaf1ff","#eee094ff", "#19ffcdff"];
const txtColors = ["#ffffffff","#000000ff"];
let bgColorIndex = null;
let txtColorIndex = null;

document.getElementById("bgBtn").addEventListener("click", () => {
    if(bgColorIndex == null || bgColorIndex == bgColors.length - 1) bgColorIndex = 0;
    else bgColorIndex = bgColorIndex+1
    const randomColor = bgColors[bgColorIndex]
    document.body.style.background = randomColor;
});


document.getElementById("txtBtn")?.addEventListener("click", () => {
    if(txtColorIndex == null || txtColorIndex == txtColors.length - 1) txtColorIndex = 0;
    else txtColorIndex = txtColorIndex+1
    const randomColor = txtColors[txtColorIndex]
    document.body.style.color = randomColor;
});

