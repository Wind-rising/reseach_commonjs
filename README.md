# reseach_commonjs
 commonjs研究

### 应用场景
nodejs
### 使用
- 模块导出
- - 默认导出
``` javascript
let module_num = 1;
module.exports = module_num;
```
- - 命名导出
- - - 单条导出
``` javascript
module.exports.module_num = 1;
```
- - - 合并导出
``` javascript
//不可为空
```
- 模块加载
- - 默认模块
``` javascript
const module_num = require('./module')
//可更名
```
- - 命名模块
``` javascript
const {module_num} = require('./module.js');
//or
const module_num = require('./module.js').module_num;
//重命名
const {module_num:a} = require('./module.js');
```
- - 所有模块
``` javascript
//不可
```
- 异步加载模块
``` javascript
//无
```

### 参考文献
 <!-- [<sup>1</sup>](#refer-anchor-1) -->
<div id="refer-anchor-1"></div>     

- [1] [nodejs_modules](https://nodejs.org/dist/latest-v16.x/docs/api/modules.html)

<div id="refer-anchor-1"></div>     

- [2] [阮一峰commonjs](https://javascript.ruanyifeng.com/nodejs/module.html#toc0)


### 用例
是否只读
可修改module
是否数据共享
是