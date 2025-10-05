



 
  
 //for in loops

 let person = {
   name : 'Shahabul islam',
   age : 22,
   country : 'Bangladesh',
   student : 'computer science', 
 };
  
 for (let i in person){
    let capletter = i.charAt(0).toUpperCase() + i.slice(1);
 console.log(capletter+': ' + person[i]);
 }

 

 

