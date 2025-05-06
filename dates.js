const date= new Date("2025-05-05 ");
const a = new Date(2025,7,2,10,15,55,56789);



const year = a.getFullYear();
const month = a.getMonth();
const gdate=a.getDate();
const time = a.getTime();
console.log(date);
console.log(a);
console.log(year);
console.log(month);
console.log(gdate);
console.log(time);


const x = new Date(2027,3,2,10,15,55,56789);
x.setFullYear(2020);
console.log(x);

const y = new Date("2027-3-2");
y.setHours(21);
console.log(y);




