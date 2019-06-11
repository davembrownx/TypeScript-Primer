var a = {
    type: 'literal'
};
var NotAnAction = /** @class */ (function () {
    function NotAnAction() {
        this.type = 'Constructor function (class)';
    }
    return NotAnAction;
}());
a = new NotAnAction(); // valid TypeScript!
