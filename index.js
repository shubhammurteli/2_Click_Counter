var button1 = document.getElementById("btn1");
var button2 = document.getElementById("btn2");
var button3 = document.getElementById("btn3");
var display = document.getElementById("number");
var count = 0;

button1.onclick = function(){
    count += 1;
    display.innerHTML = count;
};
button2.onclick = function(){
    count -= 1;
    display.innerHTML = count;
};
button3.onclick = function(){
    count = 0;
    display.innerHTML = 0;
};