"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

// https://github.com/wycats/javascript-decorators/blob/master/README.md
var Dog = (_class = function () {
    function Dog(name) {
        _classCallCheck(this, Dog);

        this.name = name;
    }

    _createClass(Dog, [{
        key: "greet",
        value: function greet() {
            console.log(this.name + " says Wow-Wow-Wow");
        }
    }, {
        key: "introduce",
        value: function introduce() {
            console.log("Wow-wow! " + this.name + " is in da house");
        }
    }]);

    return Dog;
}(), (_applyDecoratedDescriptor(_class.prototype, "greet", [readonly], Object.getOwnPropertyDescriptor(_class.prototype, "greet"), _class.prototype)), _class);


function readonly(target, key, descriptor) {
    descriptor.writable = false;
    return descriptor;
}

var sharo = new Dog("Sharo");
sharo.introduce();

sharo.introduce = function () {
    console.log("I am so shy");
};

sharo.introduce();

sharo.greet = function () {
    console.log("........");
};