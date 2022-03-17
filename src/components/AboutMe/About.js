import React, { useState } from "react";


 function Myfunction({countMethod}){

    //  const [count ,setCount ]= useState(0);
//      let employees = [
//         {
//             firstName: 'John',
//             lastName: 'Doe',
//             age: 27,
//             joinedDate: 'December 15, 2017'
//         },
    
//         {
//             firstName: 'Ana',
//             lastName: 'Rosy',
//             age: 25,
//             joinedDate: 'January 15, 2019'
//         },
    
//         {
//             firstName: 'Zion',
//             lastName: 'Albert',
//             age: 30,
//             joinedDate: 'February 15, 2011'
//         }
//     ];
//   const lala=  employees.sort((a,b)=>{
//         return a.age - b.age
//     })
//   console.log("🚀 ~ file: About.js ~ line 32 ~ lala ~ lala", lala)

    // let maxArray=[2,4,7,6,10]

    // var MaxNumer=Math.min(...maxArray)
    // let fruits=['hayat','asad','khan','juniad']
    // var sortNames=fruits.reverse();
    // var sortNames=fruits.sort();
    //  const countfunc =(()=>{
    //  setCount(count+1)
    //  })
// function double(x){
// return x*2;
// }
// function tripple(x ){

//   return x*3;
// }

// function isEven(x){

//   return x % 2 === 0;
// }
// const findArray=maxArray.filter(isEven)
// console.log("🚀 ~ file: About.js ~ line 47 ~ Myfunction ~ findArray", findArray)


// find exponent power
// const power = Math.pow(2,3)
// console.log("🚀 ~ file: About.js ~ line 52 ~ Myfunction ~ power", power)

const dubplicate=[1,2,3,5,5,3,2,45]
// console.log("🚀 ~ file: About.js ~ line 64 ~ Myfunction ~ dubplicate", dubplicate)
// const uique=[...new Set(dubplicate)]
// console.log("🚀 ~ file: About.js ~ line 65 ~ Myfunction ~ uique", uique)
  return(
   <div>
 
   <h1>hello hayat</h1>
   <button onClick={countMethod}>click</button>
   </div>
       
 
    
)
}
export default Myfunction

