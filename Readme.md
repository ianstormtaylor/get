# get

  Get a property from a model or object.

## Installation

    $ component install ianstormtaylor/get

## Example

Plain objects:    
```js
var get = require('get');

var person = { name: 'ulysses' };
get(person, 'name'); // ulysses
```

Getter/setter methods:
```js
var get = require('get')
  , model = require('model');

var Person = model('person').attr('name');
var person = new Person({ name: 'ulysses' });
get(person, 'name'); // ulysses
```

Get methods:
```js
var Backbone = require('backbone')
  , get = require('get');

var person = new Backbone.Model({ name: 'ulysses' });
get(person, 'name')); // ulysses
```

## API

### get(model, prop)
  Get the given `prop` from `model`.

## License

  MIT
