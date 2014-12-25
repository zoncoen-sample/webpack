var $ = require('jquery');

var Todo = require('js/models/todo');
var TodoView = require('js/views/todo');

$(function () {
    var el = $('#todo');
    var model = new Todo('Task List');
    var view = new TodoView(el, model);
});
