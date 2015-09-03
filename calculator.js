/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
function calculatorModule() {

  var memory = 0;
  var total = 0;
  var module = {
    load : _load,
    getTotal : _getTotal,
    add : _add,
    subtract : _subtract,
    multiply : _multiply,
    divide : _divide,
    recallMemory : _recallMemory,
    saveMemory : _saveMemory,
    clearMemory : _clearMemory
  };

  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */
  function _load(newTotal) {
    total = newTotal;
    if (typeof newTotal === 'number') {
      return total;
    } else {
      return 'This is not accepted';
    }
  }

  /**
   * Return the value of `total`
   * @return { Number }
   */

  function _getTotal() {
    return total;

  }
  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */
  function _add(x) {
    total += x;
    return total;
  }
  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */
  function _subtract(y) {
    total -= y;
    if (typeof y === 'number') {
      return total;
    } else {
      return 'Nope';
    }
  }
  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */
  function _multiply(z) {
    total *= z;
    if (typeof z === 'number') {
      return total;
    } else {
      return 'Nope';
    }
  }

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */
  function _divide(z) {
    total /= z;
    if (typeof z === 'number') {
      return total;
    } else {
      return 'Nope';
    }
  }

  /**
   * Return the value stored at `memory`
   * @return { Number }
   */
  function _recallMemory() {
    return memory;
  }

  /**
   * Stores the value of `total` to `memory`
   */
  function _saveMemory() {
    memory = total;

  }

  /**
   * Clear the value stored at `memory`
   */
  function _clearMemory() {
    memory = 0;
  }
  /**
   * Validation
   */
  return module;
}
