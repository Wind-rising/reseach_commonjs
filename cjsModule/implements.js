let {add_num,module_num,module_var,c_num} = require('./module.js');
add_num();
console.log(require('./module.js'),'33')
require('./module.js').module_num = 3;
console.log(require('./module.js').module_var)
require('./module.js').module_var.a = 2;
require('./implements2.js')
console.log(module_var,'module_var')
console.log(module_num,'module_num')
// console.log(module_num,module_var);
c_num();