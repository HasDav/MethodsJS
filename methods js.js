// Զանգվածի մեթոդներ//
//1push//
let numbers=[15,20,50,40];
const lenght=numbers.push(100,61);

 console.log(numbers);
//2concat//
 const a= [4,8,9,10];
 const b= [3,15,4,3,11];
 const c= [ 12,15,26];
 const d = a.concat(b,c);

 console.log(d);

 // 3filter//
 const x=[ 1,2,3,4,5,6,7,8,9,10];
 const even=x.filter(isEven);
 function isEven(value) {
    return value % 2 ===0;
    
 }
  console.log(even);
  //4find//
  const names=["Armen","Gohar","Karen","Anna","Susanna","Vardan"];
  const result = names.find(findAnna);
  function findAnna(item) {
    
    return item==="Anna"
  };
 
  console.log(result);
    
  //5 includes//

  const fruit=["orange","banna","mango","apple"];
   const res = fruit.includes("apple");
   console.log(res);

//6 isArray//

const y=[1,23,55,69,78];
const z= "Anna Martirosyan";
const t= 55;

console.log(Array.isArray(z));
console.log(Array.isArray(y));
console.log(Array.isArray(t));

//7 map//
const prodact=[
    {
        name: "phone",
        count:  10,
        price:  650 
    
    },
    {
        name:"coputer",
        count: 5,
        price:1700,
    },
    {
        name:"TV",
        count: 20,
        price:2500,
    },
];
const totalProdactsValue= prodact.map( item =>({
    name: item.name,
    totalValue: item.price*item.count,
}));

 console.log(totalProdactsValue);


 
// 8 reduce//

const nums=[1,5,3,9,10,15,25];

const sum=nums.reduce(function (currentSum, currentNumber) {
       return currentSum+currentNumber
},0)
console.log(sum);

// 9 slise//
const participants=["Hayk","Nare","Anna","Karen","Ani"];
const winners=participants.slice(0,4);
console.log(winners);

//10. numbers method toFixed//
const PI=3.141596254;
const num=PI.toFixed(3);
console.log(num);

// 11. Number,parseFloat,parseInt//
let p=15;
let l="21";
let wInt= Number.parseInt(l);
let qInt=Number.parseFloat(8.12356);
console.log(qInt);
console.log(wInt);
console.log(p+wInt);