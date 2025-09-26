function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data loaded"), 2000);
  });
}

// Using then
fetchData().then(data => console.log(data));

// Using async/await
(async () => {
  const data = await fetchData();
  console.log(data);
})();

// Debounce: Executes only after user stops typing
function debounce(fn, delay) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), delay);
  };
}

window.addEventListener("resize", debounce(() => {
  console.log("Resized!");
}, 500));

function multiply(a) {
  return function(b) {
    return function(c) {
      return a * b * c;
    };
  };
}

console.log(multiply(2)(3)(4)); // 24

console.log("Start");

setTimeout(() => console.log("setTimeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");

// Output: Start → End → Promise → setTimeout
function* generatorFunc() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generatorFunc();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(n => n * 2); // [2,4,6,8,10]
const evens = numbers.filter(n => n % 2 === 0); // [2,4]
const sum = numbers.reduce((acc, n) => acc + n, 0); // 15

console.log(doubled, evens, sum);
