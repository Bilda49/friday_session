let sayHi = {
  name: "Pavlo",
  sayHello: function () {
    return `Hello my name is ${this.name}`;
  },
};
console.log(sayHi.sayHello());
