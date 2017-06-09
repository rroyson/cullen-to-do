const {get, set} = require('../lib/store')
const { reject, map } = require('ramda')
const ls = require('./ls')

module.exports = function (id) {
    const list = get()
    list.todos = reject(
      function(obj){
        return checkID(id, obj)
      }, list.todos)
    idDown(id, list)
    list.counter = list.todos.length
    set(list)
    return ls()
}



function checkID(id, obj){
  return id == obj.id
}

function counterDown (list) {
  list.counter = list.counter - 1
  return list.counter
}


function idDown (id, list) {
  counterDown(list)
  return map(function (obj){
    if (obj.id > id) {
      obj.id -= 1
    }
    return obj
  }, list.todos)
}
