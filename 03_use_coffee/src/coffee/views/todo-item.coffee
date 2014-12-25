$ = require 'jquery'

class TodoItemView
  constructor: (@model) ->
    @el = $('<li class="todo-list__item"><input class="todo-list-item__checkbox" type="checkbox">' + @model.text + '</li>')
    @el.children('.todo-list-item__checkbox').on('click', @onClickCheckbox)

  onClickCheckbox: =>
    if @model.checked
      @model.uncheck =>
        @el.removeClass 'todo-list__item--checked'
    else
      @model.check =>
        @el.addClass 'todo-list__item--checked'

module.exports = TodoItemView

