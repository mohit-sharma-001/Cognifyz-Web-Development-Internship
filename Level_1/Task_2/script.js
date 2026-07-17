// ---------- Color Changer ----------

const colors = [

"#2563eb",
"#ef4444",
"#22c55e",
"#f59e0b",
"#7c3aed",
"#ec4899",
"#14b8a6",
"#0ea5e9"

];

function changeColor(){

const randomColor = colors[Math.floor(Math.random()*colors.length)];

document.getElementById("colorBox").style.background=randomColor;

document.getElementById("colorCode").innerHTML="Current Color : "+randomColor;

}

// ---------- Greeting ----------

function showGreeting(){

const hour = new Date().getHours();

let message="";

if(hour>=5 && hour<12){

message="☀ Good Morning Mohit!";

}

else if(hour>=12 && hour<17){

message="🌤 Good Afternoon Mohit!";

}

else if(hour>=17 && hour<21){

message="🌇 Good Evening Mohit!";

}

else{

message="🌙 Good Night Mohit!";

}

document.getElementById("greeting").innerHTML=message;

}

// ---------- Calculator ----------

function calculate(operation){

let num1=Number(document.getElementById("num1").value);

let num2=Number(document.getElementById("num2").value);

let result;

switch(operation){

case "+":
result=num1+num2;
break;

case "-":
result=num1-num2;
break;

case "*":
result=num1*num2;
break;

case "/":

if(num2===0){

result="Cannot divide by zero";

}

else{

result=num1/num2;

}

break;

}

document.getElementById("result").innerHTML="Result : "+result;

}