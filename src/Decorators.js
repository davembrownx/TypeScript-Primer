var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
//----Class Decorator Example----
function myDecorator(prefix) {
    return function (constructor) {
        console.log(constructor);
        console.log("decorator evaluated");
        constructor.prototype.message = prefix + constructor.name;
    };
}
var World = /** @class */ (function () {
    function World() {
    }
    World = __decorate([
        myDecorator('Hello ')
    ], World);
    return World;
}());
var w = new World();
console.log("Class Decorator ");
console.log(w.message);
console.log("--------------------");
//----Method Decorator------------
function myFunctionDecorator(extraStuff) {
    return function (constructor, name) {
        console.log(name + " function observed");
    };
}
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.prototype.myFunction = function () {
        console.log("inside function call");
    };
    __decorate([
        myFunctionDecorator("testing")
    ], MyClass.prototype, "myFunction");
    return MyClass;
}());
var myClass = new MyClass();
myClass.myFunction();
myClass.myFunction();
//-----Property Decorator Operations-------
function propertyDecorators(label, count) {
    return function (target, key) {
        Object.defineProperty(target, key, {
            get: function () { return key + "= " + label + " " + count; }
        });
    };
}
var Test = /** @class */ (function () {
    function Test() {
        this.name = 'Jason';
    }
    __decorate([
        propertyDecorators('Mr', 2)
    ], Test.prototype, "name");
    return Test;
}());
var t = new Test();
console.log("1. Property Decorator ");
console.log(t.name); // 'test'
console.log("--------------------");
//---Parameter Decorator Example----
function logPosition(target, methodName, paramIndex) {
    console.log("methodName: " + methodName + ", paramIndex: " + paramIndex);
}
console.log("Param Decorator ");
var Cow = /** @class */ (function () {
    function Cow() {
    }
    Cow.prototype.say = function (b, c) {
        console.log(b);
    };
    __decorate([
        __param(1, logPosition)
    ], Cow.prototype, "say");
    return Cow;
}());
new Cow().say('Hello', false);
console.log("--------------------");
//------Accessor Decorator---------
var MyClassWithAccessors = /** @class */ (function () {
    function MyClassWithAccessors() {
    }
    Object.defineProperty(MyClassWithAccessors.prototype, "name", {
        get: function () { return this.myVar; },
        enumerable: true,
        configurable: true
    });
    __decorate([
        accessorDecorator("extra")
    ], MyClassWithAccessors.prototype, "name");
    return MyClassWithAccessors;
}());
function accessorDecorator(extra) {
    return function (target, propertyKey) {
        target.prototype.name + extra;
    };
}
