let pet = {
  name: "Dogster",
  typeOfPet: "Dog",
  age: 0,
  color: "black",
  eat: function () {
    return `${this.name} is eating.`;
  },
  drink: function () {
    return `${this.name} is drinking.`;
  },
};
console.log(pet.eat());
