var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
//Types
var hostName = "bob";
var list = [1, 2, 3];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
var x = 123; //inferred number type
//Spread Operator
console.log("Spread operator");
console.log.apply(console, list);
console.log("---------------");
//Rest Operator
function restExample(param1, param2) {
    var moreParams = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        moreParams[_i - 2] = arguments[_i];
    }
    console.log(param1);
    console.log(param2);
    moreParams.forEach(function (param) { return console.log(param); });
}
console.log("Rest operator");
restExample.apply(void 0, __spreadArrays(["Here's some numbers", 0], list));
console.log("---------------");
var animal = 'Lion'; // same as let animal: string = ‘Lion’;
function admitAge(age) {
    return "I am " + age + ", alright?!";
}
var numAge = 50;
var strAge = 'One Hundred';
console.log("1. Type as Union ");
console.log(admitAge(numAge)); // 'I am 50, alright?!'
console.log(admitAge(strAge)); // 'I am One Hundred, alright?!'
console.log("--------------------");
function goToParty(place) {
    return "lets go to the " + place;
}
//goToParty("chuck e. cheese"); //This will cause error
console.log("2. Type as enum ");
console.log(goToParty("pizza hut"));
console.log("--------------------");
