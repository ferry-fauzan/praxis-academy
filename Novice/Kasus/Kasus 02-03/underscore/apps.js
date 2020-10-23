var _ = require('underscore');

console.log(_.map([1, 2, 3], function(num){ return num * 3; }));

var list = [[0, 1], [2, 3], [4, 5]];
var flat = _.reduceRight(list, function(a, b) { return a.concat(b); }, []);
console.log(flat);
console.log(list);