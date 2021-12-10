let module_num = 1;
let module_var = {'a':1};

function add_num(){
    module_num++;
}
function c_num(){
    console.log(module_num)
}

// module.exports.module_var = module_var;
module.exports = {
    add_num,
    c_num
}
module.exports.module_num = module_num;
module.exports.module_var = module_var;
//1.基础模块抛出
/**
 * module.exports.x = 
 * module.exports = 
 */

//2.简写抛出
/**
 * 只支持命名抛出
 * exports.x = 
 * exports默认抛出无效,会导致
 */
//
