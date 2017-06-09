const {get} = require ('../lib/store')
const {map, reduce} = require ('ramda')
const converter = require('number-to-words')

function li (todo) {
  return `[${todo.completed ? 'x' : ' '}] - ${todo.id} ${todo.text}`
}


module.exports = function () {
  const list = get()

  console.log('')
  console.log('To-Dos')
  console.log('----------------------')

  map(function(todo) {
    console.log(li(todo))
  }, list.todos)

  console.log('----------------------')
console.log(completedCount(list), `Items Completed`)

  console.log(
    list.counter - completedCount(list),
    'Items Not Complete')

    return `${converter.toWords(completedCount(list) / list.counter * 100)} Percent Completed`
}

function completedCount(list) {
  return reduce(function(acc, obj){
    if (obj.completed) {
      acc += 1
    }
    return acc
  }, 0, list.todos)
}
