// let array = ["car", 1, "bus", 2];
console.log(array.toString());

// let arr = new Array("a", "b", "c");
// console.log(arr);

// const person = ["vikram", "binod", "brothers"];
// console.log(person.length * 3);
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fLen = fruits.length;


// array search

const arrNum = [1, 3, 6, 8, 2, 6, 4];

const x = arrNum.indexOf(10);
const y = arrNum.indexOf(6);
const z = arrNum.lastIndexOf(6);
const a = arrNum.includes(20);

// console.log(z);
// console.log(a);


const arrfind = [20, 10, 22, 30, 16, 22, 10, 5];

const numFound = arrfind.find(compare);
const q = arrfind.findIndex(compare);
const r = arrfind.findLast(compare);
const s = arrfind.findLastIndex(compare);

function compare(value) {
    return value > 20;
}
// console.log(s);





// array short
const fruits = ["banana", "orange", " apple", "mango", "litchi"];

const torev = fruits.reverse();
// console.log(torev);
// console.log(fruits);


const number = [40, 100, 1, 5, 25, 10]; // 
const strShort = number.sort(function (x, y) {
    return y - x; // 40 ,100, 1, 5 ,25, 10 
    // 40 ,100, 1, 5 ,25, 10 
    // 40,1,100,5,25,10
    // 40,1,5,100,25,10
    //40,1,5,25,100,10
    //40,1,5,25,10,100
    //1,40,5,25,10,100
    //1,5,40,25,10,100
    //1,5,25,40,10,100,
    //1,5,25,10,40,100,
    //1,5,25,10,40,100,
    //1,5,25,10,40,100,
    //1,5,25,10,40,100,
    //1,5,10,25,40,100,

});
// console.log(strShort);

//Numeric short

// let num = [40, 100, 1, 5, 25, 1];
// let randomNum = num.sort(() => Math.random() - 0.5);
// let minValue = Math.max(...num);
// console.log(minValue);
// console.log(randomNum);
