"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hello = hello;
var _helloing = require("./helloing");
function hello() {
  var who = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _helloing.helloing;
  return "Hello ".concat(who, "!");
}