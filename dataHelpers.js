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
//
// function findDateAndText(array){
//   array.map( (column) => {
//     if(column.type.length == 0){
//       var dates = column.data.filter( (value) => {
//         if(Date.parse(value)){
//           return value
//         }
//       })
//
//       if(dates.length > column.data.length/2){
//         column.type = 'Date/Time'
//       }
//       else{
//         column.type = 'Text'
//       }
//     }
//   })
// }


// module.exports = {findMultipleChoice: findMultipleChoice, findDateAndText: findDateAndText}
// module.exports = findDateAndText
module.exports = findMultipleChoice
