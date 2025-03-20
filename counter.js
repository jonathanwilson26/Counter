const number = document.getElementById("number");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
let count = 0;

increase.onclick = function() {
    count++;
    number.textContent = count;
};
decrease.onclick = function() {
    count--;
    number.textContent = count;
};
reset.onclick = function() {
    count = 0;
    number.textContent = count;
}
