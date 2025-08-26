// spread operator use Case

// combine Arrays

// let arr1 = [1, 2, 3, 4];
// let arr2 = [10, 20, 30, 40];
// const combine = [...arr1, ...arr2];
// console.log(combine);

// passing array to function

// function sum(x, y, z) {
//   return x + y + z;
// }
// let arr = [5, 10, 15];
// const result = sum(...arr);
// console.log(result);

// copying Array

// const orginalarray = ["a", "b", "c"];
// const copyarray = [...orginalarray];
// console.log(copyarray);

// function  sum(...num){
// return num.reduce((total ,num)=> total + num);
// }
// let num = [1,2,3,4]
// console.log(sum(...num));

function greetings(greetings, ...intro) {
    const last  =intro.pop();
    const joined =intro.length ? intro.join("  ") +" and " +last : last;
  return `${greetings} ${joined}`;
}

console.log(
  greetings("hello", "my parents name are ", "chamana Rai", "mauli dhan rai")
);
