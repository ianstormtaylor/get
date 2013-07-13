
/**
 * Get a value from a obj, by direct access, named getter/setter or via `get`.
 *
 * @param {Object} obj
 * @param {String} prop
 */

module.exports = function get (obj, prop) {

  // named getter/setter
  if ('function' === typeof obj[prop]) {
    return obj[prop]();
  }

  // get method
  if ('function' === typeof obj.get) {
    return obj.get(prop);
  }

  // plain object
  return obj[prop];
};