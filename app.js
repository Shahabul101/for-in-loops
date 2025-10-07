
//Array Basis method

let fruits = ["apple", "Mango", "Banana", "Orange"];

fruits.push("red apple");
console.log(fruits);
console.log(fruits.length);


let Namber = [10,20,30];
let last = Namber.pop();
console.log(last);
console.log(Namber);



let fruits = ["Banana", "Mango"];
fruits.unshift("apple");
console.log(fruits);


let fruits = ["apple", "mango", "Banana", "Orange", "Pyenapple", ];
   fruits.splice(1.2);
   console.log(fruits);

   let fruits = ["apple", "Orange"];
   fruits.splice(0,1, "Banana", "Mango",)
   console.log(fruits);

   let fruits = ["apple", "Mango", "Banana", "Orange", "Pynapple"];
     let part = fruits.slice(1,3);
     console.log(part);
     console.log(fruits);

     for (let i = 1; i <= 10; i++){

     console.log(i);
     }
     

   
     let fruits = ["mango", "Orange", "Banana"];

     console.log(fruits.includes("mango"));
     console.log(fruits.includes ("pyenapple"));

    let fruits = ["mango", "apple", "Orange", "mango"];
    console.log(fruits.indexOf("apple"));
    console.log(fruits.indexOf ("Orange"));
    console.log(fruits.indexOf("Banana"));
    
  for (let i = 10; i >= 1; i--){
       console.log(i);

    }

   let a = 24;

   let result = (a%2===0)?"Even": "odd"
   console.log(result);

   let x = 3;
   let y = 4;
   let z = 5;

   if(x<y && x<z){
    console.log(x);
   }else if(y>z && y>x){
    console.log(y);
   }else{
    console.log(z);
   }



let fruits = ["Banana", "Mango", "Orange", "Apple",]

fruits.sort();
console.log(fruits);

function isEven(Namber){
   return Namber%2===0;
}
console.log( isEven(10));
console.log( isEven(8));


  


