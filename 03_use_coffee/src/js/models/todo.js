var TodoItem = require('coffee/models/todo-item');

function Todo(title) {
    this.title = title;
    this.text = '';
    this.items = [];
}

Todo.prototype.add = function (callback) {
    if (this.text == '') {
        return;
    }
    var item = new TodoItem(this.text);
    this.text = '';
    this.items.push(item);
    if (callback) {
        callback(item);
    }
}

module.exports = Todo;
