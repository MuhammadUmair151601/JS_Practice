/*Alerts
alerts are used as a pop up message on the website that gives a message to the user*/
//Example
//alert("welcome to javascript")

// ****************const,let and var*****************
/*const a=12;
const b=12;
const sum=a+b;
alert("the sum of a and b is " + "" + sum)*?*/
//Declaration can be done as follow
// let age;
// age=25;
// console.log(age)
// var name;
// name="ali"
// console.log(name)
// let marks=70;
// marks=marks+20;
// console.log(marks)

// *****************math Expressions in JS**********************
// const a= 5;
// const b=6;
// const sum=a+b;
// console.log(sum)

// Now if we add a sumber and a string.
// const a=2;
// const b= "34";
// const sum= a+b;
// console.log(sum)

// similarly, if we do subtraction, multiplication and division of a num and string it will be accepted as nums.
// const a = 34;
// const b = "456";
// const sub = b - a;
// const mul = a*b;
// const div = b/a;
// console.log(sub)
// console.log(mul)
// console.log(div)

// **********************increment and decrement operators***************************
// post increment (first return original value then increments the value)
// let salary = 10;
// console.log(salary++);
// console.log(salary);
// pre increment (first returns the incremeted value from the begining of console)
// let salary = 10;
// console.log(++salary)
// console.log(salary)
// let salary= 10;
// console.log(salary--)
// console.log(salary)
// console.log(--salary)

// *************Operator predence**************************I
// follows BDMAS rule but if there are two same operators in the same line the the one coming before in the line will be done

//**************************concatinating strings ***********************************
// const username = "ali"
// let salary= 6000;
// var value = 60;
// console.log("thank you very much"+ " " +username+" "+ "bhai")
// console.log("your whole month" +" "+salary+" "+"is paid on the following day.")
// console.log("Hello"+" "+username+" "+"bhai"+" "+"your salary is"+" "+salary+" ")

// const a=67;
// const b=54;
// const sum=a+b;
// console.log(`The summision of ${a} and ${b} is ${sum}`)

// ****************if statements *******************l
// let age = +prompt("please Enter your age")
// if (age<18)
// {
//     alert("you are not eligible for driving")
// }
// else if (age >= 18)
// {
//     alert("you are eligible for driving ")
// }
// else {
//     alert("you inserted a wrong value")
// }

// let name = prompt("please enter your name ")
// let weather= prompt("how is the weather")
// if (weather=rain)
// {
//     alert("take an umbrella")
// }
// else if (weather=not_rain)
// {
//     alert("don't take umbrella")
// }
// else
// {
//     alert("wrong info provided")
// }

// let num = +prompt("please enter a number")
// if (num===0)
// {
//     alert("you inserted zero")
// }
// else if (num<0)
// {
//     alert("you entered a negative value")
// }
// else if (num>0)
// {
//     alert("you entered a positive number")
// }
// else{
//     alert("its not a number")
// }

// **********************comparison operators*************************
// console.log(1==1)
// console.log(1===1)
// console.log(1=="1")
// console.log(1==="1")
// console.log(1!=1)
// console.log(1!="1")
// console.log(1!=="1")
// console.log(2<1)
// console.log(1<2)
// console.log(2>1)
// console.log(1>2)

// ************logical operators in js**********************
// && (and operator)
// || (or operator)
// ! (Not operator)
// let marks = +prompt("please insert your marks")
// if (marks<=100 && marks >=90)
// {
//     alert("Excellent you got grade A1")
// }
// else if (marks<=90 && marks>=80)
// {
//     alert("very good you got grade A")
// }
// else if (marks<=80 && marks>=50)
// {
//     alert("you got grade B please improve it")
// }
// else if (marks<50 && marks>=0)
// {
//     alert("you got failed")
// }
// else if (marks<0 || marks>100)
// {
//     alert("your marks are not in range")
// }
// else 
// {
//     alert("please insert some accurate marks value")
// }


// ********************Nested if statements in js*********************
// used when we want to add if inside the if statements
// EXAMPLE
// const username= prompt("please enter the username")
// let password =""
// if (username=== "umair")
// {
//     password=prompt("Enter your password")
//     if(password==="12345")
//     {
//         document.write("login successful")
//     }
//     else{
//         document.write("incorrect password")
//     } }
//     else {
//         document.write("incorrect username")
//     }
