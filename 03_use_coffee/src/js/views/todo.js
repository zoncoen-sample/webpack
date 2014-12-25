var TodoItemView = require('coffee/views/todo-item');

function TodoView(el, model) {
    this.el = el;
    this.model = model;
    this.el.children('.todo__title').text(this.model.title);
    this.el.children('.todo__form').children('.todo-form__input').on('change', setText(this));
    this.el.children('.todo__form').on('submit', addItem(this));
}

function setText(obj) {
    return function (e) {
        obj.model.text = obj.el.children('.todo__form').children('.todo-form__input').val();
    };
}

function addItem(obj) {
    return function (e) {
        e.preventDefault();
        obj.model.add(function (item) {
            obj.el.children('.todo__form').children('.todo-form__input').val('');
            var todoItemView = new TodoItemView(item);
            obj.el.children('.todo__list').append(todoItemView.el);
        });
    };
}

module.exports = TodoView;

