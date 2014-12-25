var Todo = require('js/models/todo');
var TodoView = require('js/views/todo');

window.addEventListener('DOMContentLoaded', function () {
    var el = document.querySelector('#todo');
    var model = new Todo('Task List');
    var view = new TodoView(el, model);
});
