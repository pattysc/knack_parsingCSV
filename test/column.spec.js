var expect = require("chai").expect;
const Column = require('../Column')

describe('Column Model', function() {

  describe('Instance Properties', function() {
    var column
    beforeEach(function() {
      Column.all = []; // for deleting instances between tests
      column = new Column('Name')
    })

    describe('Properties from initialization', function() {
      it('should have a name when a new Column is created', function() {
        expect(column.name).to.equal('Name');
      });

      it('should be auto-assigned an empty data and options array', function() {
        expect(column.options).to.equal([]);
        expect(column.data).to.equal([]);
      });

      it('should have an undeclared type on initialization', function() {
        expect(column.type).to.equal('');
      });

      it('should keep track of all columns', function() {
        var secondColumn = new Column('Age');
        expect(Column.all.size).to.equal(2);
      });
    }); // end Properties from Intialization

    describe('Updating properties of instances', function() {

      it('should properly accept data', function() {
        column.data = ['Lena Stewart']
        expect(column.data).to.equal(['Lena Stewart']);
      });

      it('should update it\'s type', function() {
        column.type = 'Text'
        expect(column.type).to.equal('Text');
      });
    }); // end Updating properties of instances
  })

  describe('Class Properties', function() {
    var secondColumn
    beforeEach(function() {
      // emptyArr(Column.all); // for deleting instances between tests
      secondColumn = new Column('Sign Up')
      secondColumn.type = 'Date/Time'
    });

    describe('Predicting schema', function() {
      it('give you back an array with objects with columnName and columnType', function() {
        expect(Column.schema()).to.equal([{columnName: 'Name', columnType: 'Text'}, {columnName: 'Sign Up', columnType: 'Date/Time'}]);
      });
    }); // end Predicting Schema
  })
})
