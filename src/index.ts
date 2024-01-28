console.log("hello World my name is khan...");

// ----------------------------Type Annotation-----------------------
// let num:number = 12;
// console.log(num);

// string Type
// let Name:string = "Khan";
// console.log(Name);

// boolean type
// let isStudent = false;
// if(isStudent){
//     console.log("The Student is eligible to Enter")
// }else{
//     console.log("Student Not eligible")
// }

// ----------------------------Fat Arrow Function-------------------------------
// const a = (a:number,b:number)=>{
//     return console.log(`the Sum of two number is ${a+b}`);
// }
// a(23,45);

// ------------------------------------Object in ts---------------------------
// const obj ={
//     Name:"khan",
//     Age:23
// }
// console.log(obj.Age);

// -----------------------------Array in ts-----------------------------------
// const arr:string[] = ["Ali","Malik","Khan","laiba"];
// console.log(arr[2]);
// for(const items of arr){
//     console.log(items);
// }

// ---------------------------------Optional and default parameters-----------------------
// const opt_def = (id?:number, Name:string="anonymous")=>{
//     return console.log(`the Id is ${id} and the Name is ${Name}`);
// }
// opt_def(89304,"Jawwad Khan");
// opt_def(12344);

// ---------------------------------type Alias and Interface in ts-------------------------
// Both type and Interface is same
// type Name = string;
// const Name:Name = "jawwad";
// console.log(Name);

// --------------------------------Check type using obj-------------------------------------
// This subject is used for nested obj1
// type subject = {
//     Book1:string,
//     Book2:string,
//     Book3:string
// }

// type Biodata = {
//     Id:number;
//     Name:string;
//     isStudent:boolean;
//     Age:number
//     subjects:subject[];
// }

// // type use in obj1
// const obj1: Biodata = {
//     Id:1,
//     Name:"Khan",
//     isStudent:false,
//     Age:12,
//     subjects:[
//         {Book1:"English",Book2:"Urdu",Book3:"Physics"}   
//     ]
// }

// console.log(obj1);

// type use in obj2
// const obj2: Biodata = {
//     Id:2,
//     Name:"Malik",
//     isStudent:true,
//     Age:24
// }
// console.log(obj2.Name);

// ------------------------------Function Return Type--------------------------------------
// basically here by default void but somethime you need to return
// something it could be number,string,boolean,bigInt.......etc 
// const anony = (a:number)=>{
//     return `the value of a is ${a}`;
// }
// anony(12);

// ----------------------------------Array Map() Methods-------------------------------------
// Main Purpose of map method
// primary purpose of the map() method is to apply a function to each element of an array,
//  transforming them according to the logic defined in the provided function, and returning
//  a new array containing the transformed elements.
// const Arr:string[] = ["Muhammad","Ali","Jawwad","Kaleem","Malik"];
// const checkMap:string[] = Arr.map((words):string=>words.toUpperCase());
// console.log(checkMap);


// ------------------------------------Array.of() Method--------------------------------------
// Array.of() method creates a new array Here in Simple array you want to itterate but here you
// can easily be call all the list of an array
// const Namelist = Array.of("Ali","Nawaz","Shaista","Saleem","Malik");
// console.log(Namelist);


// ---------------------------------------ForOf loop------------------------------------------------
// const num:number[]=[1,2,3,4,5,6,7];
// for(const list of num){
//     console.log(list);
// }



// ---------------------------------------ForIn loop------------------------------------------------
// basically forIn loop find index of an array
// const num:string[]=["Ali","Nawaz","Shaista","Saleem","Malik"];
// for(const list in num){
//     console.log(list);
// }


// ---------------------------------------ForEach loop------------------------------------------------
// The forEach() method iterates over each element of the array and applies a function to each element.
// The forEach() method begins by taking the first element of the array num 
// const num:string[]=["Ali","Nawaz","Shaista","Saleem","Malik"];
// num.forEach((curval:string) => {
//         console.log(curval);
// });


// ---------------------------------------Call Signature------------------------------------------------
// 
// In TypeScript, a "call signature" refers to the signature of a function type.
//  It specifies the parameters and return type of a function. Call signatures are
//  used to define function types in TypeScript
// define a fuction type using call signature

// Call Signature Code
// type func = (num1:number,num2:number)=>number;
// new Function create and make type
// const funcMaking:func = (add1,add2)=> add1 * add2;
// Answer Output
// console.log(funcMaking(23,7));


// -------------------------------------------tuple in ts--------------------------------------------------------
// a tuple is a fixed-size array where each element has a specific type. 
// Tuples are particularly useful when you want to represent a collection
//  of elements with different types and a specific order.

// type MakeTuple = [string,boolean,number];
// const checkTuple:MakeTuple = ["Jawwad",true,123];
// console.log(checkTuple);



// --------------------------------------------Generic in ts-----------------------------------------------------
type Wrapped<T> = { value: T };

const valueb: Wrapped<number> = { value: 10 };


console.log(valueb);






