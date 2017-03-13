function findMultipleChoice(array){
  array.map((column) => {
    var uniqueData = column.data.filter(function(elem, i) {
      if(elem.length > 0){
        return column.data.indexOf(elem) == i;
      }
    })

    if(uniqueData.length < column.data.length/3){
      column.type = 'Multiple Choice'
      column.options = uniqueData
    }
  })
}

module.exports = findMultipleChoice
