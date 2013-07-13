describe('get', function () {
  var assert = require('assert')
    , Backbone = require('backbone')
    , get = require('get')
    , model = require('model');

  it('should handle plain objects', function () {
    var person = { name: 'ulysses' };
    assert('ulysses' === get(person, 'name'));
  });

  it('should handle getter/setter methods', function () {
    var Person = model('person').attr('name');
    var person = new Person({ name: 'ulysses' });
    assert('ulysses' === get(person, 'name'));
  });

  it('should handle get methods', function () {
    var person = new Backbone.Model({ name: 'ulysses' });
    assert('ulysses' === get(person, 'name'));
  });
});