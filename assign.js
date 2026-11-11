// let stdnm = (prompt("enter your name"))
// let stdsc = (prompt("emter your score"))

// if (isNaN(stdsc) || stdsc < 0 || stdsc > 100) {
//     console.log("Invalid score");  
// }else if (stdsc >= 80) {
//     console.log( stdnm + ",your grade is excellent A");   
// }else if (stdsc >= 70) {
//     console.log( stdnm + ", your grade is VerY good B");
// }else if (stdsc >= 60) {
//     console.log( stdnm + ", your grade is GOOD C");
// }else if (stdsc >= 50) {
//     console.log( stdnm + ", your grade is PASS D");
// }else{
//     console.log(stdnm + ", your grade is fail F");   
// }   


// let balance = (prompt("enter your balance"))
// let withdraw = (prompt("enter amount"))

// if (isNaN(withdraw)|| withdraw <= 0 ) {
//     console.log("Invalid withdrawal amount");  
// }else if (withdraw > balance) {
//     console.log("Insufficient funds");
// }else if (withdraw >= 100000) {
//     console.log("withdrawal exceeds the daily limit");
// }   else if (withdraw === balance) {
//     console.log("withdrawal successful.your balance is now zero");
// }else{
//     let remainbal = balance - withdraw

//     console.log("withdrawal successful");
//     console.log("remaining balance:#", + remainbal);
       
// }
   

// let cname = (prompt("enter your name"))
// let eleu = Number(prompt("enter no of electric units"))


// if (isNaN(eleu) || eleu < 0) {
//     console.log("invalid inputs");     
// }else{
//     let ratePerunit;

//     if (eleu <= 100) {
//         ratePerunit = 50;  
//     }else if (eleu <=200) {
//         ratePerunit = 75;  
//     }else{
//         ratePerunit = 100;
//     }
//     let totalbill = eleu * ratePerunit

//     console.log(cname);
//     console.log(eleu)
//     console.log(ratePerunit)
//     console.log(totalbill);
     
// }


// let username = "admin"
// let password = "12345"

// let user = (prompt("enter a username"))
// let pass = (prompt("enter a password"))

// if (user === username && pass === password){
//     console.log("Login successful. Welcome,Admin!"); 

//     let role =(prompt("enter your role admin or editor "))

//     if (role === "admin") {
//         console.log("full access granted");
//      }else if (role === "editor") {
//         console.log("Editing access granted"); 
//      }else{
//         console.log("Access dendied")
//      }
// }else if (user === username && pass !== password) {
//     console.log("incorrect password"); 
// }else if (user !== username && pass === password) {
//     console.log("username not found"); 
// }

// let cstnm = (prompt("enter your name"))
// let purchat = Number(prompt("enter your purchase amount"))
// let cstype = (prompt("enter regular or premium"))

// if(purchat <0){
//     console.log("invalid purchase amount")
// }else if (cstype !== "premium" && cstype !== "regular") {
//   console.log("invalid customer type")
// }else{
//     let discount;
//      if (purchat < 10000) {
//         discount = 0;
//      }else if (purchat <= 49,999) {
//         discount = 5;   
//      }else if (purchat <=99,999) {
//         discount = 10;   
//      }else{
//         discount =15;
//     }
//     if (cstype ==="premium") {
//         discount + 5; 
//     }

//     let disamt = purchat * discount /100
//     let finpay = purchat - disamt

//     console.log(cstnm);
//     console.log(purchat);
//     console.log(discount);
//     console.log(disamt);
//     console.log(finpay);
// }

// let userlimit = Number(prompt("enter any number"));
// let sum = 0;

// for (let i =1; i<= userlimit; i++){
//     sum = sum + i; 
// }
//   console.log("The sum is " + sum);


// let user = Number(prompt("enter any number"))

// for(let i =1; i <= 12; i++){

// console.log(user + "x" + i +"=" + (user * i))
// }

// let password;

// // do{
// //     password = (prompt("enter the password"));   
// // }while (password !== "1234") {
// //     console.log("Access granted")
    
// // }


// let num1 = Number(prompt("enter a number"))
// let num2 = Number(prompt("enter a number"))
// let operation = Number(prompt("Select an operation: Addition, subtraction, multiplication, division"))

// let result;
// switch (operation) {
//     case 1: 
//     result = num1 + num2;
//     console.log(result)
//         break;

// case 2: 
// result = num1 - num2;
// console.log(result)
// break;

// case 3:
//     result: num1 * num2;
// console.log(result)
// break;

// case 4: 
// result: num1 % num2;
// console.log(result)
// break;

//     default:
//         console.log("Invalid operation");
//         break;
// }


// let option = Number(prompt("Select an option: Register student, check results, pay school fees, exit"))

// switch (option) {
//     case 1: 
//     console.log("register student selected")
//         break;

// case 2: 
// console.log("check results selected")
// break;

// case 3:
// console.log("pay school fees selected")
// break;

// case 4: 
// console.log("Thanking you for using the system")
// break;

//     default:
//         console.log("Invalid option");
// //         break;
// }

// let num = Number(prompt("enter your number"))
// if(num % 2 === 0)
//     console.log("even")
// else{
//     console.log("odd")
// }

// let i =1;
// while (i <=20 ) {
//     console.log(i);i++;
    
// }

// let num = Number(prompt("enter a number"))
// if(num >= 10 && num <=50){
//     console.log("NUMBER Is within range");  
// }else{
// console.log("number is outside range");

// }

// let i =10;

// do{
//     console.log(i);
//     i--;   
// } while (i >=1);
    
// let age = Number(prompt("enter your age"))
// let student =(prompt("are you a student?(yes or no):"));

// if(age >=60 || student === "yes"){
//     console.log("you qualify for a discount");
// }else{
//     console.log("you dont qualify for discount");
    
// }

    

