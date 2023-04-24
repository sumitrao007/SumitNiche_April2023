"use strict";
exports.__esModule = true;
exports.pi = exports.add = exports.Myclass = void 0;
var Myclass = /** @class */ (function () {
    function Myclass(myid, fname, lname) {
        this.id = myid;
        this.fname = fname;
        this.lname = lname;
    }
    Myclass.prototype.display = function () {
        console.log("\n            Id          :: ".concat(this.id, "\n            First name  :: ").concat(this.fname, "\n            Last Name   :: ").concat(this.lname, "\n        "));
    };
    return Myclass;
}());
exports.Myclass = Myclass;
// let obj=new Myclass(9,'Sumit','Raokhande');
// obj.display();
function add(a, b) {
    return (a + b);
}
exports.add = add;
exports.pi = 3.14;
