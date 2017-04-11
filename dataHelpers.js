var Column = require('./Column')

const MC = 'Multiple Choice'
const DT = 'Date/Time'
const TEXT = 'Text'

exports.makeColumns = function(headers, columns){
  headers.forEach( function(header){
    if (header.length > 0){
      columns.push( new Column(`${header}`) )
    }
  })
}

exports.addData = function(data, columns){
  for(var i = 0; i < columns.length; i++){
    columns[i].data.push(data[`${columns[i].name}`])
  }
}

exports.findMultipleChoice = function(array){
  array.forEach( (column) => {
    var uniqueData = column.data.filter(function(elem, i) {
      if(elem.length > 0){
        return column.data.indexOf(elem) === i;
      }
    })

    if(uniqueData.length < column.data.length/3){
      column.type = MC
      column.options = uniqueData
    }
  })
}

exports.findDateAndText = function(array){
  array.map( (column) => {
    if(column.type.length === 0){
      var dates = column.data.filter( (value) => {
        if(Date.parse(value)){
          return value
        }
      })

      if(dates.length > column.data.length/2){
        column.type = DT
      }
      else{
        column.type = TEXT
      }
    }
  })
}
