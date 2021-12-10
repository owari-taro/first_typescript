"use strict";
exports.__esModule = true;
exports.hoge = exports.Module1 = void 0;
var Module1 = /** @class */ (function () {
    function Module1() {
    }
    Module1.prototype.print = function () {
        localPrint("module1.print() called!!");
    };
    return Module1;
}());
exports.Module1 = Module1;
function localPrint(text) {
    console.log("local print: ".concat(text));
}
function hoge() {
    console.log("hoge");
}
exports.hoge = hoge;
