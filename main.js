// =============== JAVASCRIPT BASE ==================

/* 1. Watching Javascript Output :
 	-> alert
 	-> console.log
 	-> document.write()
 	-> document.ElementById().innerHTML */

/* 2. Variables:
 	-> var
 	-> let
 	-> const */

/* 3. Data Types:
 	-> String
 	-> Number
 	-> Boolean
 	-> Array
 	-> Object
 	-> Null
 	-> Undefine */

/* 4. Template Literals:
 	""+name+"", `${name}` */

/* 5. Operators:
 	Arithmethic: +, -, *, /, ++, --,**
 	Assignment: =, +=, -=, /=, *=, **=
 	Comperision: ==, ===, !=, !==, <, >, <=, >=, ?:, ??
 	Logincal: &&, ll, !
 	Bitwise: &, |, ^, <<, >>, ~
 	String: + (Concanet)
 	Type: typeof, instanceof */

/* 6. Condiotions:
 	if, if-else, if-elseif-else
 	switch{
 	  case:
 	  break;
 	  defualt:
 	}
 	Turnary Operators: x=10 (x>=10) ? true : false */

//////////////////// Loops //////////////////////

//For Loop
// for(var i=0; i<=5; i++){
//     document.write("Faizan Shaikh</br>")
// }

//While Loop
// var x=1;
// while(x<=10){
//     document.write("Faizan Shaikh</br>")
//     x++
// }

//Do While Loop
// var x=11;
// do{
//     document.write("Faizan Shaikh</br>")
//     x++
// } while(x<=10)

//For Loop : break; continue;
// for(var i=1; i<=5; i++){
//     if(i==2){
//     document.write("Faizan Shaikh*</br>")
//     continue;
//     }
//     document.write("Faizan Shaikh</br>")
// }

// Example:
// var listPrice = 120;
// var salesPrice = 100;
//  var discount = ((listPrice-salesPrice)/listPrice)*100;
//  discount = Math.round(discount);
//  document.write("Discount "+discount+"%")

// Patten Example:
// for(var x=1; x<=5; x++){
//     for(var y=1; y<=x; y++){
//         document.write("* ");
//     }
//     document.write("<br/>");
// }

///////////////// Functions ///////////////////

/* 
- Non-Perameterize Function
- Perameterize Function
- Anonymous Function 
*/

// function getDiscount(listPrice, salesPrice){
//     var discount = ((listPrice-salesPrice)/listPrice)*100;
//     discount = Math.round(discount);
//     document.write("Discount "+discount+"%")
// }
// getDiscount(300, 200)

// //Function Return use
// function num(x, y){
//     return x+y;
// }
// result = num(10,20);
// document.write(result+10);

///////////////// Popups ///////////////////
/* 
alert
confirm
prompt 
*/

/* 
alert("Show the popups message showing the user");
confirm("Are you Sure?") : Yes or No
prompt("Please Enter yout name") : Provide the Input Form
parseInt : Forcefully Convert to Value in Interger
*/

// var num1 = prompt("Enter Number 1");
// var num2 = prompt("Enter Number 2");
// if(num1=="" || num1==null || num2=="" || num2==null){
//     document.write("Please Provide Number");
// }else{
//     num1 = parseInt(num1);
//     num2 = parseInt(num2)
//     document.write("Sum: "+(num1+num2));
// }

/////////////// String Function /////////////////
/*
name.length : Show String Length
name.search : Search the Value
name.indexOf
name.lastIndexOf
name.slice (Nagetive, Positive)
name.substring (Positive)
name.substr()
name.replace (Chanege The String Value)
name.toLowerCase() : String LowerCase
name.toUpperCase() : String UpperCase
name.trim() : Remove the White Space
name.concat() : Value Concatinet
*/

/////////////////// Array /////////////////////
/*
Single Dimensional Array
Multi Dimensional Array
Array Functions :
arr.sort() : Assending Array Sorting
arr.length : Display the array length
arr.concat : Concating the arrays
arr.pop : Remove the right side data
arr.shift : Remove the left side data
arr.push : Value Add the Array Last position
arr.unshift : Value Add the Array First position
arr.splice (pos, len) : Remove the Array Value
arr.indexOf() : find the postion
Array.isArray(arr) : Array ? true : false
name.split : String Convert to Array
arr.join : Array Convert to String
arr.foreach : For Each Loop Specify the Array
*/

// Ex : Single Dimensional
// var arr = ["Faizan", "Gotu", "Vijay", "Akash"];
// arr.sort();
// var html = "<select><option>Select Name</option>";
// for(var i=0; i<=3; i++){
//     html = html+"<option>"+arr[i]+"</option>";
// }
// html = html+"</select>";
// document.write(html);

// Ex : Multi Dimensional
// var arr = [
//     ["Faizan", "Patan"],
//     ["Gotu", "Surat"],
//     ["Vijay", "Surat"]
// ];

// document.write("<table border='1'>");
// document.write("<tr><td>S.No</td><td>Name</td><td>City</td></tr>")

// var k = 1;
// for(var i=0; i<3; i++){
//     document.write("<tr>")
//     document.write("<td>"+k+"</td>")
//     for(var j=0; j<2; j++){
//         document.write("<td>"+arr[i][j]+"</td>")
//     }
//     document.write("</tr>")
// }

//Ex : For Each Loop
// var arr = ["Faizan", "Gotu", "Vijay", "Akash"];

// arr.forEach(function arrFun(val, key){
//     document.write(val);
//     document.write(key);
//     document.write("<br/>")
// })

/////////////////// Object Array /////////////////////
// Ex:
// var arr = {
//     fname: "Faizan",
//     lname: "Shaikh",
//     age: 20,
//     city: ["Patan", "Surat"],
//     education: {
//         pg: "MscIT",
//         ug: "BscIT",
//     },
//     fullname: function(){
//         return this.fname + " " + this.lname
//     }
// };
// document.write(arr.fname+"<br/>");
// document.write(arr.lname+"<br/>");
// document.write(arr.age+"<br/>");
// document.write(arr.city[0]+"<br/>");
// document.write(arr.education.ug+"<br/>");
// document.write(arr.fullname()+"<br/>");

// Ex: For In Loop in Object
// var obj={
//     name: "Faizan",
//     age: 20
// };
// document.write("<table border='1'>")
// for(var key in obj){
//     document.write("<tr>");
//     document.write("<td>"+key+"</td>");
//     document.write("<td>"+obj[key]+"</td>");
//     document.write("</tr>")
// }
// document.write("</table>");

//Ex: Getter & Setter
// var obj = {
//     fname: "Faizan",
//     lname: "Shaikh",
    
//     get getFullName(){
//         return this.fname + " " + this.lname
//     },
    
//     set setFullName(params){
//         this.fname = params.fname;
//         this.lname = params.lname;
//     }
// };
// obj.setFullName = {fname: "Gotu", lname: "khatri"}
// document.write(obj.getFullName);

//Ex: Constructor
// function User(fn, ln){
//     this.fname = fn;
//     this.lname = ln;
//     this.fullname = function(){
//         return this.fname+" "+this.lname
//     }
// }
// var obj1 = new User("Faizan", "Shaikh");
// console.log(obj1);

/////////////////// Math Object /////////////////////
/* 
Math.round : x=10.9 -> x=11, x=10.4 -> x=10
Math.ceil : x=10.9 -> x=11
Math.floor : x=10.9 -> x=10
Math.trunc : x=10.9999 -> x=10
Math.pow(3,2) : 9
Math.sqrt(25) : 5
Math.abs(-100) : 100
Math.miin(5,4,3) : 3
Math.max(5,4,3) : 5
Math.random()
Math.log(10)
*/

/////////////////// Date Object ///////////////////
/* 
getFullYear
getMonth
getDate
getHours
getMinutes
getSeconds
getDay
getMilliseconds
setDate
setFullYear
*/

// var d = new Date();
// d.setDate(d.getDate()+2);
// document.write(d.getDate());

///////////////////// Events /////////////////////
/* 
onclick : Single Click
ondblClick : Double Click
oncontextmenu : Right click
onkeypress : Key Press
onkeyup : Key Up
onmouseover : Mouse Hover
onmouseout : Mouse Out
onmousedown : Mouse Down
onmouseup : Mouse Up
onresize : Window Resize Event
onscroll : Scroll
onload : Load
onunload : UnLoad
onsubmit : Submit
*/

///////////////////// DOM /////////////////////
//            Document Object Model         //
/* 
document.getElementById('id')
document.getElementsByClassName('classname')
document.getElementsByTagName('tagname')
---------- Query Selector -------------
document.querySelector('.class', '#id', 'tag')
document.querySelectorAll('.class', '#id', 'tag')
--------- Travesing Elements ----------
firstElementChild
lastElementChild
children
parentElement
nextElementSibling
getAttribute
------------- Create, Remove & Append ------------
createElement : Create Element
appendChild : Attech the Element
createTextNode : Create Element body text
removeChild : Remove the Element
replaceChild : Replace the Element & body text
cloneNode : Clone Node (true & false)  
------------- Event Listner ----------------
addEventListener
removeEventListener
----------- Insert Adjacent --------------
beforebegin : Add the Start Div before
afterbegin  : Add the Start Div after
beforeend   : Add the end Div before
afterend    : Add the end Div after
*/

// Ex: document.getElementById
// function getData(){
//     let num1 = parseInt(document.getElementById('num1').value);
//     let num2 = parseInt(document.getElementById('num2').value);
//     document.getElementById('result').innerHTML = num1 + num2
// }

// Ex: document.getElementsByClassName
// let name = document.getElementsByClassName('name');
// name[0].innerHTML = "Faizan Shaikh"

// Ex: document.getElementsByTagName
// let divId = document.getElementById('test2');
// let name = divId.getElementsByTagName('div');
// for(var i=0; i<name.length; i++){
//     console.log(name[i].innerHTML);
// }

//Ex: Create & Apppend Elements
// function getLi(){
// let liBox = document.getElementById('ui');
// let newLi = document.createElement('li');
// let name = document.getElementById('name').value
// let newLiText = document.createTextNode(name);

// newLi.appendChild(newLiText);
// liBox.appendChild(newLi);
// document.getElementById('name').value="";
// }

// Ex: Event Listner
// let btn = document.getElementById('btn');
// btn.addEventListener('click', test);

// function test(){
//     console.log('CLick me');
//     let btn = document.getElementById('btn');
//     btn.removeEventListener('click', test)
// }

/////////////////// Timing Events ///////////////////
/* 
setInterval(function, milliseconds)
clearInterval() : Stop time function
setTimeout(function, milliseconds)
*/

// Ex: setInterval
// let time = setInterval(stopTime, 1000);

// function stopTime(){
// 	let d = new Date();
// 	document.getElementById('clock').innerHTML = d.toLocaleTimeString();
// }

// Ex: Set Timeout
// function setData(){
// 	let name = document.getElementById('names').value;
// 	if(name == ''){
// 		document.getElementById('data').innerHTML = 'Please Enter Name';
// 		setTimeout(function (){
// 			document.getElementById('data').innerHTML = '';
// 		}, 2000)
// 	}else{
// 		document.getElementById('data').innerHTML = 'Hello '+name;
// 		console.log(name);
// 	}	
// }
console.log("fdnfkdkfb");