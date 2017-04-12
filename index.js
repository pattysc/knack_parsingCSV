var fs = require('fs')
var Column = require('./Column')
var helpers = require('./dataHelpers')
var csv = require('csv-parser')

var columns = []

//create a Column per header read on the CSV file
var createColumns = function(){
  return new Promise(function(resolve, reject){
    fs.createReadStream('test-contacts.csv')
    .pipe(csv())
    .on('headers', function(headerList){
      helpers.makeColumns(headerList, columns)

      if(columns.length > 0){
        resolve(columns)
      }else{
        reject(Error("Parsing CSV file headers failed"))
      }
    })
  })
}

//add data to each Column instance
var addData = function(columns){
  return new Promise(function(resolve, reject){
    fs.createReadStream('test-contacts.csv')
    .pipe(csv())
    .on('data', function(data){
      if(data != null){
        helpers.addData(data, columns)
        resolve(columns)
      }else{
        reject(Error("Parsing CSV file data failed"))
      }
    })
  })
}

//find the MC columns
var findMultipleChoiceColumns = function(columns){
  return new Promise(function(resolve, reject){
    helpers.findMultipleChoice(Column.all)
    resolve(columns)
  })
}

// find the columns with date data and change its type. the remaining are set to text.
var findDateAndTextColumns = function(columns){
  return new Promise(function(resolve, reject){
    helpers.findDateAndText(Column.all)
    resolve(columns)
  })
}

//show what the schema will look like
var showSchema = function(columns){
  console.log(Column.schema());
}

createColumns()
.then(addData)
.then(findMultipleChoiceColumns)
.then(findDateAndTextColumns)
.then(showSchema).catch( (err) => {console.log(err)} )
