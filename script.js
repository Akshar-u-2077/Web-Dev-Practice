let button = document.getElementById("MyButton");
let countertext = document.getElementById("countertext");
let count=0;
button.addEventListener("click",function(){
    count++;
    countertext.textContent = "Button Clicked "+count+" times";
});



let greetelement  = document.getElementById("greeting");
let hour = new Date().getHours();
let mes="";
if(hour<12)
{
    mes="Good Morning!";
}
else if(hour<18)
{
    mes="Good Afternoon!";
}
else
{
    mes="Good Evening!";
}
greetelement.textContent=mes;
console.log(greetelement);
