const cast = ["rai", "limbu", "gurung", "thapa", "tamang"]; //array
// console.log(cast.length);
// console.log(cast[2]);

for (i = 0; i < cast.length; i++) {
    console.log(cast[i]);

}

for (j = 0; j < 10; j++) {
    console.log(j);
}
console.log("=====================")

// For in loop

const obj = {
    name: "ram",
    age: 25,
    gender: "male",
    reglion: " Hindu"
}

for (const x in obj) {
    console.log(x);
    console.log(obj[x]);
}
console.log("========================")

// for of loop

const xyz = [10, 20, 30, 40, 50];

for (const val of xyz)
    console.log(val);

const str = "helo world";


for (const strvalue of str)

    console.log(strvalue);