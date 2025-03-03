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

// Another example of using nested if statement
// let age = +prompt("enter your age please")
// let student = prompt ("are you a student?")
// if (age<12)
// {
//     document.write("Tecket price = 12$")
// }
// else {
//     if (age>=12 && age <=18 && student)
//     {
//         document.write("Ticket price = 18$")
//         }
    
//     else
//     {
//         document.write("ticket price 25$")
//     }
// }

// *****************************Arrays*********************
// when we want to print many elements at a time we will have to write console.log again and again which is time costly but if we want to make it easy we add them into the arrays.  Arrays are like containers which contains many
// elements which we can call easily at a time or we can call any elements from that array at any time.
//  Example of an Array
// let fruits = ["🍅" , "🍇" , "🍈" , "🍉" ,"🍊" , "🍌" , "🍍" , "🍑"]
// console.log(fruits);
// we can also call a single element from an array by putting the index number in it.
// console.log(fruits[4])
// console.log(fruits[5])
// Arrays are dynamic and their size is not fixed.


//*********************Solving book initial chapters quizes********************
// Done with ch#1 quiz (alerts)
// Done with ch#2 quiz (strings)
// Done with ch#3 quiz (variable of numbers)
// Done with ch#4 quiz (var names legal and illegal)
// Done with ch#5 quiz (mathematical expressions)
// Done with ch#6 quiz (unfamiliar operators)
// Done with ch#7 quiz (math expressions elimination ambiguity)
// Done with ch#8 quiz (concatination text strings)
// Done with ch#9 quiz (prompts)
// Done with ch#10 quiz (if statements)
// Done with ch#11 quiz (comparison operators)
// Done with ch#12 quiz (if else if statements)
// Done with ch#13 quiz (testing sets of conditions)
// Done with ch#14  quiz (nested if statement)
// Done with ch#15 quiz (Arrays in Js)

// **********************Adding elements to the Array*************************
// const books = ["physics", "chemistry", "biology"]
//     books.push = "computer";
//     console.log(books)

// const fruits = ["guava", "apple", "banana"]
// fruits.push ="mango"

// console.log(fruits);
// let names = ["ali", "aftab", "ahmed"]
// names[3] = "fahad"
// names[4] = "faiz"
// console.log(names);
// let numbers = [1, 2, 3, 4, 5]
// numbers[5]=6
// numbers[6]=7
// numbers[7]=8
// console.log(numbers)

// ****************** Removing Elements from an array*********************
// let books = ["phy", "chem", "bio"]
// books.pop();
// console.log(books)

// let names = ["ahmed", "raza", "Ali", "fahad"]
// names.pop();
// console.log(names);

// Done with ch#16 quiz adding and removing elements from an array:

// ****************** Adding and removing first elements to an array***************
// let array =[1, 2, 3, 4, 5, 6, 7, 8]
// array.shift()
// console.log(array) 
// it will remove first element of the array

// ************************Unshift used for adding back element to an array ********************
// let array = [1, 2, 3, 4, 5, 6, 7, 8]
// array.unshift(1, 2)
// console.log(array)
// it will add back the elements to the starting of an array
// .

// ***************** splice of an array ********************
// used  as splice (1, 2, element1, element2)
// while 1 represents that where to put elements
// while 2 represents what to replace
// Example:

// let names = ["ali", "ahmed", "ahad", "aliyaan", "ubaid"];
// names.splice(2, 2, "ammar", "qasim")
// console.log(names);

// in the above example splice array is used wher the elements are inserted at position 2 and 2 elements are removed from next and the elements are added.

// ***************** Array slicing ******************
// slicing of an array is used in order to print a specific part of an array.
// here slice(1, 2) is used where 1 shows from index one to index 2 array will be printed
// Example of slice:
// let array = ["lion", "mouse", "hen", "tiger", "leopeard", "monkey"]
// let slicedarray = array.slice(2, 4)
// console.log(slicedarray)
// it will print ["hen", "tiger"] means from index 2 to index 3 one less from extreme:

// Done with ch#17 quiz (adding, removing, replacing arrays in js)

// ********************For loops in Js***********************
// used to print multiple lines of operation in one statement
// i-e for (statement one, statement 2, statement 3)
// statement one (checked before execution)
// statement two (contains the condition)
// statement three (contains increments etc applied after execution)

// Example one
// printing numbers from one to ten
// for (let i=1; i<=10; i++)  {
//    console.log(i);
// }

// Example two
// printing a sentence 50 times.
// for (let i = 0; i<=49; i++)
// {
//     console.log(`${i}:i am a guy`)
// }

// Done with ch#18 (for loops in java-script)

// Example #3
// printing table of 10 using for loop:
// for (i=1; i<=10; i++)
// {
//     console.log(`10 * ${i} = ${i * 10}`)
// }
// ******Now printing same table in reverse order:
// for (i=10; i>=1; i--)
// {
//     console.log(`10 * ${i} = ${i * 10}`)
// }
// *******************Flags and loopus interruptus in JS**************
// Flag is used as a sign for an element being found in the array
// while the loop breaks when the element is found in array in loopus interruptus:
// EXAMPLE
// const cleanestCities = ["peshawar", "islamabad", "lahore", "pindi", "attock"];
// const cityToFind = prompt("Enter your city name");

// let cityMilli = false;

// for(let cityIndex = 0; cityIndex < cleanestCities.lenth; cityIndex++){
//     if(cityToFind === cleanestCities[cityIndex]){
//         cityMilli = true;
//         break;
//     }
//     console.log(cityIndex)
// }
// if (cityMilli){
//     alert("it is the cleanest city")
// }
// else{
//     alert("It is invalid city")
// }