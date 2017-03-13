const fs = require('fs')
const Column = require('./Column')
const findMultipleChoice = require('./dataHelpers')
var csv = require('csv-parser')

let columns = []

//fetch the headers from CSV file
var fetchingHeaders = function(){
  var promise = new Promise(function(resolve, reject){
    fs.createReadStream('test-contacts.csv')
    .pipe(csv())
    .on('headers', function(headerList){
      resolve(headerList)
    })
  })
  return promise
}

//make a Column per header
var makingColumns = function(headers){
  var promise = new Promise(function(resolve, reject){
    headers.forEach( function(header){
      if (header.length > 0){
        columns.push( new Column(`${header}`) )
      }
    })
    resolve(columns)
  })
  return promise
}

//add data to each Column instance
var addingData = function(columns){
  var promise = new Promise(function(resolve, reject){
    fs.createReadStream('test-contacts.csv')
    .pipe(csv())
    .on('data', function(data){
      for(var i = 0; i < columns.length; i++){
        columns[i].data.push(data[`${columns[i].name}`])
      }
      resolve(columns)
    })
  })
  return promise
}

//find the MC columns
var findMultipleChoiceColumns = function(columns){
  var promise = new Promise(function(resolve, reject){
    findMultipleChoice(Column.all)
    resolve(columns)
  })
  return promise
}

// look through remaining columns' data and see if they have / or :
var findDateColumns = function(columns){
  var promise = new Promise(function(resolve, reject){
    // findDateAndText(Column.all)
    Column.all.forEach( (column) => {
      if(column.type.length == 0){
        var dates = column.data.filter( (value) => {
          if(Date.parse(value)){
            return value
          }
        })

        if(dates.length > column.data.length/2){
          column.type = 'Date/Time'
        }
        else{
          column.type = 'Text'
        }
      }
    })
    resolve(columns)
  })
  return promise
}


//show what the schema will look like
var showSchema = function(columns){
  var promise = new Promise(function(resolve, reject){
    console.log(Column.schema());
  })
  return promise
}

fetchingHeaders()
.then(makingColumns)
.then(addingData)
.then(findMultipleChoiceColumns)
.then(findDateColumns)
.then(showSchema)
