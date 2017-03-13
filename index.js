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
var addData = function(columns){
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

// find the columns with date data and change its type. the remaining are set to text.
var findDateAndTextColumns = function(columns){
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
.then(addData)
.then(findMultipleChoiceColumns)
.then(findDateAndTextColumns)
.then(showSchema)
