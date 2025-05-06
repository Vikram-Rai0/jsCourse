const age = 20;
const gender = "male"


if (age < 18) {
    console.log("you'r not eligible of this job ");
}
else if (age > 70) {
    console.log("you'r not eligible for this job ");
}
else if (gender != "male") {
    console.log("you'r not eligible for this job , this job is only for female");
}
else {
    console.log("you'r  eligible for this job");
}

const time = 15;

if (time >= 6 && time < 12) {
    console.log("Good morning");
}
else if (time >= 12 && time < 18) {
    console.log("Good afternoon");
}
else if (time >= 18 && time < 24) {
    console.log("Good evening")
}
else if (time > 0 && time < 6) {
    console.log("Good morning");
}

else {
    console.log("time should be less than 25");
}



