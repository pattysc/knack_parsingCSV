class Column{
  constructor(column_name){
    this.name = column_name
    this.type = ''
    this.options = []
    this.data = []
    Column.all.push(this)
  }
}

Column.schema = function(){
  return Column.all.map((col) => {
    if (col.options.length > 0){
      return {columnName: col.name, columnType: col.type, columnOptions: col.options}
    }else{
      return {columnName: col.name, columnType: col.type}
    }
  })

}
Column.all = []


module.exports = Column
