const {get, set} = require('../lib/store')
const { append } = require('ramda')
const ls = require('./ls')


module.exports = function (text) {
  const list = get()

  const creatNewObj = {
    'text': text,
    'id': counterUp(list),
    'completed': false
  }
  
  list.todos = append(creatNewObj, list.todos)
  set(list)
  return ls()
}

function counterUp (list) {
  list.counter = list.counter + 1
  return list.counter
}
