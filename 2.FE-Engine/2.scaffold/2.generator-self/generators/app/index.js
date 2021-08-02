// 此文件是generator的入口
// 需要导出一个继承generator class 的类型
// 可以在下面调用一些周期方法,例如文件写入

const Generator = require('yeoman-generator');
const files = [
    'public/favicon.ico',
    'public/index.html',
    'src/assets/logo.png',
    'src/components/HelloWorld.vue',
    'src/App.vue',
    'src/main.js',
    '.gitignore',
    'babel.config.js',
    'package.json',
    'package-lock.json',
    'README.md',
]
module.exports = class extends Generator {
    //  问答
    async prompting() {
        this.answers = await this.prompt([
            {
                type: "input",
                name: "name",
                message: "Your project name",
                default: this.appname // Default to current folder name
            },
        ]);
    }
    // 写入
    writing() {
        files.forEach(i => {
            this.fs.copyTpl(
                this.templatePath(i),
                this.destinationPath(i),
                this.answers
            )
        })
    }
}
