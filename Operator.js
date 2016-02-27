function Operator (name) {
    this.nick = "";
    this.password = "";
    this.name = name;
}

Operator.prototype = Object.create(User.prototype);
Operator.prototype.constructor = Operator;

Operator.prototype.getType = function() {
    return "operator";
}