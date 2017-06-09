const {get, set} = require('../lib/store')
const { map } = require('ramda')
const ls = require('./ls')

module.exports = function (id, text) {
  const list = get()
  list.todos = map(function(obj){
    if(checkID(id, obj)){
      return editText(obj, text)
    }
    return obj
  } , list.todos)
  set(list)
  return ls()
}

function checkID(id, obj){
  return id == obj.id
}

function editText(obj, text){
  obj.text = text
  return obj
}
