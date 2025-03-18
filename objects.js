const person = {
  name : "vikram",
  age:23,
  greet : function(){
    console.log("hello my name is  " + this.name);
  }
}

console.log(person);
person.greet();

const car = {
  brand: "BMW",
  weight: "500",
};

car.color = "red"; // adding new property in object
car.brand = "tesla"; // updating property

delete car.brand; // deleting property

console.log("added new" + car.color);
console.log("updated brand name " + car.brand);
console.log(car);
