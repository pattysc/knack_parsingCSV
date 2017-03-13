var fs = require('fs')
var Column = require('./Column')
var helpers = require('./dataHelpers')
var csv = require('csv-parser')

var columns = []

//create a Column per header read on the CSV file
var createColumns = function(){
  var promise = new Promise(function(resolve, reject){
    fs.createReadStream('test-contacts.csv')
    .pipe(csv())
    .on('headers', function(headerList){
      helpers.makeColumns(headerList, columns)
      resolve(columns)
    })
  })
  return promise
}

//add data to each Column instance
var addingData = function(columns){
  var promise = new Promise(function(resolve, reject){
    fs.createReadStream('test-contacts.csv')
    .pipe(csv())
    .on('data', function(data){
      helpers.addData(data, columns)
      resolve(columns)
    })
  })
  return promise
}

//find the MC columns
var findMultipleChoiceColumns = function(columns){
  var promise = new Promise(function(resolve, reject){
    helpers.findMultipleChoice(Column.all)
    resolve(columns)
  })
  return promise
}

// look through remaining columns' data and see if they have / or :
var findDateColumns = function(columns){
  var promise = new Promise(function(resolve, reject){
    helpers.findDateAndText(Column.all)
    resolve(columns)
  })
  return promise
}

//show what the schema will look like
var showSchema = function(columns){
  console.log(Column.schema());
}

createColumns()
.then(addingData)
.then(findMultipleChoiceColumns)
.then(findDateColumns)
.then(showSchema)
