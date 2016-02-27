var users = [];

//создаем посетителя
function addVisitor()
{
    var name = prompt("Введите имя посетителя: ");
    var visitor = new Visitor(name);
    users.push(visitor);
}

//создаем оператора
function addOperator()
{
    var name = prompt("Введите имя оператора: ");
    var operator = new Operator(name);
    users.push(operator);
}

function show(){
    var result = "";
    _.each(users, function(user){
        result += "<div>" + user.getType() + ": " + user.name + "</div>";
    })
    $('#list').html(result);
}
