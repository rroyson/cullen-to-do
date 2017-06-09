const {get, set} = require('../lib/store')
const { map } = require('ramda')
const ls = require('./ls')

module.exports = function(id){
  const list = get()
  list.todos = map(function(obj){
    if(checkID(id, obj)){
      return flipCompleted(obj)
    }
    return obj
  } , list.todos)
  set(list)
  return ls()
}

function checkID(id, obj){
  return id == obj.id
}

function flipCompleted(obj){
  obj.completed = !obj.completed
  return obj
}
