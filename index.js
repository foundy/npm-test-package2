'use strict';

var common = require('workflow-test-common');

module.exports = function () {
  var div = document.createElement('span');
  div.setAttribute('style', 'color:red');
  div.textContent = 'Component : workflow-test-pakcage2';

  var component = document.createElement('div');
  component.appendChild(div);

  // common
  component.appendChild(common('workflow-test-package2'));

  return component;
};