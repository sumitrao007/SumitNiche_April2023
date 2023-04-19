//map
var a = [2, 3, 4, 5];
var sqrArray = a.map(function (value) {
    return (value * value);
});
// console.log("Original array "+a);
// console.log("Square Array "+sqrArray);
//destructing/derefrence of array 
var arr = [100, 78, 96, 45];
var t1 = arr[0], t2 = arr[1], t3 = arr[2], t4 = arr[3];
console.log("\n    t1 => ".concat(t1, "\n    t2 => ").concat(t2, "\n    t3 => ").concat(t3, "\n    t4 => ").concat(t4, "\n"));
var s1 = arr[0], arr2 = arr.slice(1);
console.log("\n    s1 => ".concat(s1, "\n    arr2 = ").concat(arr2, "\n"));
