
// String
// let firstName = "Bro";
// // data type
// let age = 21
// age = age + 1;
// // Boolean
// let student = true;

// console.log("Hello", firstName);
// console.log("you are", age,"years old");
// console.log( "Enrolled:",student);

// document.getElementById("p1").innerHTML = "hello " + firstName;
// document.getElementById("p2").innerHTML = "you are age " + age + "years old";
// document.getElementById("p3").innerHTML = "Enrolled " + student;


// let student = 20;
// // student  = student + 1;
// // student = student - 1;
// // student = student * 2;
// // student = student / 2;
// // let extraStudent = student % 2;

// // student += 1;
// // student -= 1;
// // student *= 2;
// // student /= 2;

// // console.log(extraStudent);
// console.log(student);



// // operator precedence
// // 1. parenthesis()
// // 2. exponents
// // 3. multiplication & division
// // 4. addition & subtraction


// let result = 1 + 2 * ( 3 + 4);
// let result1 = (1 + 2 ) * ( 3 + 4);
// console.log(result1);
// console.log( result);



// how to accept user input;

// easy way with a window prompt;

// let user = window.prompt("what is username");
// console.log(user)

// Difficult way html textbox;

// let username;
// document.getElementById("text").onclick = function(){
//     username = document.getElementById('textbox').value
//     console.log(username);
//     document.getElementById("label1").innerHTML = username;
// }


// // type conversion = change the datatype of a value to another
// //                     (string, number , Boolean)
// let age  = window.prompt("how old are you ?");
// console.log(typeof age);
// age = Number(age)
// age += 1;
// console.log("Happy birthday! you are ", age ,"years old") ;




// let x;
// let y;
// let z;

// x = Number("3.2334");
// y = String(2.33);
// z = Boolean("")

// console.log(z,typeof z);
// console.log(x, typeof x);
// console.log(y, typeof y)



// const = a variable that can't be change

// const pi = 3.14159;
// let radius;
// let circumference;

// radius = window.prompt("what is the radius of a circle");
// radius = Number(radius);
// // pi = 420.69;

// circumference = 2* pi * radius

// console.log("the circumference is: ",circumference)


// Math

// let x;
// let y = 5;
// let z = 9;
// let maximum;
// let minimum;

// // x = Math.round(x);
// // x = Math.floor(x);
// // x = Math.ceil(x);
// // x = Math.pow(x , 2); power of number
// // x = Math.sqrt(x);
// // x = Math.abs(x); positive number
// // x = Math.random(x)
// // minimum = Math.min(x,y,z);
// // maximum = Math.max(x,y,z)
// x = Math.PI;

// console.log(x);


// let a ;
// let b;
// let c;

// // a = window.prompt("Enter side A");
// // a = Number(a);

// // b = window.prompt("Enter side B");
// // b = Number(b)

// // c = Math.sqrt(Math.pow(a,2)+ Math.pow(b,2));
// // console.log("side C: ",c)

// document.getElementById("buttontxt").onclick = function(){
//     a = document.getElementById("aTextbox").value;
// a = Number(a);

// b = document.getElementById("bTextbox").value;
// b = Number(b)

// c = Math.sqrt(Math.pow(a,2)+ Math.pow(b,2));
// document.getElementById("clabel").innerHTML = "Side C: " + c;

// }



// let count = 0;
// document.getElementById("drcreasebtn").onclick = function(){
//     count -= 1;
//     document.getElementById("countlabel").innerHTML = count;
// }
// document.getElementById("resetbtn").onclick = function(){
//     count = 0;
//     document.getElementById("countlabel").innerHTML = count;

// }
// document.getElementById("Increasebtn").onclick = function(){
//     count += 1;
//     document.getElementById("countlabel").innerHTML = count;

// }



// let x;
// let y;
// let z;

// // console.log(x)
// // console.log(y)
// // console.log(z)
// document.getElementById("rollbtn").onclick = function () {
//      x = Math.floor(Math.random() * 6) + 1;
//      y = Math.floor(Math.random() * 6) + 1;
//      z = Math.floor(Math.random() * 6) + 1;

//      document.getElementById("xlabel").innerHTML = x;
//      document.getElementById("ylabel").innerHTML = y;
//      document.getElementById("zlabel").innerHTML = z;
// }


// user string properties & methods

// let username = "saad";
// let phone = "0828-37248-43";
// // console.log(username.length);
// // console.log(username.charAt(1));
// // console.log(username.indexOf("a"));
// // console.log(username.lastIndexOf("a"));
// // username = username.trim()
// // username = username.toUpperCase();
// // phone = phone.replaceAll("-","");

// console.log(phone);


// // slice() extracts a section of a String
// //                 and return it as a new string,
// //                 without modifying the orignal string


// let fullname = "saad irfan";
// let firstName;
// let lastname;

// // firstName = fullname.slice(0,4)
// // lastname = fullname.slice(4);
// firstName = fullname.slice(0,fullname.indexOf(" "));
// lastname = fullname.slice(fullname.indexOf(" ")+ 1);

// console.log(firstName)
// console.log(lastname);


// // method chaining = calling one method after another
// //                     is one continuous line of code

// let userName  = "saad";
// let letter = userName.charAt(0).toUpperCase().trim();

// console.log(letter)