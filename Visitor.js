function Visitor (name){
    this.referrer = "";
    this.name = name;
}

Visitor.prototype = Object.create(User.prototype);
Visitor.prototype.constructor = Visitor;

Visitor.prototype.getType = function() {
    return "visitor";
}