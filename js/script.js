var one = document.querySelector(".box-1");
var two = document.querySelector(".box-2");
var three = document.querySelector(".box-3");

document.addEventListener("keydown", function(e) {
    var key = e.key;
    if (key === "1") {
        one.innerText = "👨🏻‍🚀";
    } else if (key === "2") {
        two.innerText = "🚀";
    } else if (key === "3") {
        three.innerText = "🪐";
    }
});

var clearButton = document.querySelector("button");
document.addEventListener("click", function() {
    one.innerText = "1";
    two.innerText = "2";
    three.innerText = "3";
});