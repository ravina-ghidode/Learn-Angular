class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  makeSound() {
    console.log(`name : ${this.name} and sound : ${this.sound}`);
  }
}
var dog = new Animal("Dog", "bark");
dog.makeSound();
