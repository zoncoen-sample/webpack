function TodoView(el, model) {
    this.el = el;
    this.model = model;
    this.el.querySelector('.todo__title').innerHTML = this.model.title;
    this.el.querySelector('.todo-form__input').addEventListener('change', setText(this));
    this.el.querySelector('.todo__form').addEventListener('submit', addItem(this));
}

function setText(obj) {
    return function (e) {
        obj.model.text = obj.el.querySelector('.todo-form__input').value;
    };
}

function addItem(obj) {
    return function (e) {
        e.preventDefault();
        obj.model.add(function (text) {
            obj.el.querySelector('.todo-form__input').value = '';

            var li = document.createElement('li');
            li.className = 'todo-list__item';
            li.innerHTML = text;

            var ul = obj.el.querySelector('.todo__list');
            ul.appendChild(li);
        });
    };
}

module.exports = TodoView;

