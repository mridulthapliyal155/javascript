// Prototypes are template object they contains various methods
// function hex(r, g, b) {
//   return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }

// Factory Function
// function rgb(r, g, b) {
//   return `${r} ${g} ${b}`;
// }

// function makeColor(r, g, b) {
//   const color = {};
//   color.r = r;
//   color.g = g;
//   color.b = b;
//   color.rgb = function () {
//     const { r, g, b } = this;
//     return `${r} ${g} ${b}`;
//   };
//   color.hex = function () {
//     const { r, g, b } = this;
//     return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//   };
//   return color;
// }

// const firstColor = makeColor(255, 12, 211);
// console.log(firstColor.hex());

// Constructor
// function Color(r, g, b) {
//   this.r = r;
//   this.g = g;
//   this.b = b;
// }

// Color.prototype.rgb = function () {
//   const { r, g, b } = this;
//   return `${r} ${g} ${b}`;
// };

// Color.prototype.rgba = function (a = 1.0) {
//   const { r, g, b } = this;
//   return `rgba(${r} ${g} ${b} ${a})`;
// };
// const color = new Color(255, 12, 222);

// class Color {
//   constructor(r, g, b, name) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
//     this.name = name;
//   }
//   innerRGB() {
//     const { r, g, b } = this;
//     return `${r} ${g} ${b}`;
//   }
//   rgb() {
//     return `rgb(${this.innerRGB()})`;
//   }
//   rgba(a = 1.0) {
//     return `rgba(${this.innerRGB()}, ${a})`;
//   }
//   hex() {
//     const { r, g, b } = this;
//     return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//   }
// }

// const c1 = new Color(255, 12, 211, "tomato");
// console.log(c1);

// Inhertiance
class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    return `${this.name} is eating fish`;
  }
}

class Cat extends Pet {
  constructor(name, age, livesLeft = 9) {
    super(name, age);
    // Super will take the constructor values of Pet (Or parent)
    this.livesLeft = livesLeft;
  }

  meow() {
    return "Meowwww";
  }
}

class Dog extends Pet {
  bark() {
    return "Wooofff";
  }
}

const d1 = new Dog("wyattt", 21);
console.log(d1.eat());
