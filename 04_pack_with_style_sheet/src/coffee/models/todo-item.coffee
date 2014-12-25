class TodoItem
  constructor: (@text) ->
    @checked = false

  check: (callback) ->
    @checked = true
    if callback
      callback()

  uncheck: (callback) ->
    @checked = false
    if callback
      callback()

module.exports = TodoItem
