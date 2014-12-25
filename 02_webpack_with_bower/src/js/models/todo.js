function Todo(title) {
    this.title = title;
    this.text = '';
    this.items = [];
}

Todo.prototype.add = function (callback) {
    if (this.text == '') {
        return;
    }
    var text = this.text;
    this.text = '';
    this.items.push(text);
    if (callback) {
        callback(text);
    }
}

module.exports = Todo;
