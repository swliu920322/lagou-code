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
    // 写入
    writing() {

    }
}
