// https://github.com/wycats/javascript-decorators/blob/master/README.md
class Dog {
    constructor(name) {
        this.name = name;
    }

    @readonly
    greet() {
        console.log(`${this.name} says Wow-Wow-Wow`);
    }

    introduce() {
        console.log(`Wow-wow! ${this.name} is in da house`);
    }
}

function readonly(target, key, descriptor) {
    descriptor.writable = false;
    return descriptor;
}

var sharo = new Dog("Sharo");
sharo.introduce();

sharo.introduce  =function () {
    console.log("I am so shy");
}

sharo.introduce();

sharo.greet = function () {
    console.log("........");
}