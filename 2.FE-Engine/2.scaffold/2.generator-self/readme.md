# 自定义一个generator
1. 定义名称 generator-xxx,建立文件夹
2. 在文件夹内部创建 generators/app/index.js，作为主入口
3. index.js里面写入逻辑
```js
// 此文件是generator的入口
// 需要导出一个继承generator class 的类型
// 可以在下面调用一些周期方法,例如文件写入

const Generator = require('yeoman-generator');

module.exports = class extends Generator {
    //  问答
    async prompting() {
        const answers = await this.prompt([
            {
                type: "input",
                name: "name",
                message: "Your project name",
                default: this.appname // Default to current folder name
            },
            {
                type: "confirm",
                name: "cool",
                message: "Would you like to enable the Cool feature?"
            }
        ]);
    }
    // 写入文件
    writing() {
        
    }
}
```
4. 使用的时候，yarn link，使用yo 名称访问，

## 我们这边演示一个vue create vue3的基础项目
