'use strict';

module.exports = function () {
  var span = document.createElement('span');
  span.setAttribute('style', 'color:red');
  span.textContent = 'Component : npm-test-pakcage2';

  var div = document.createElement('div');
  div.appendChild(span);

  return div;
};