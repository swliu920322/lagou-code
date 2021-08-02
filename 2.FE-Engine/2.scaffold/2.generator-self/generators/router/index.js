const Generator = require("yeoman-generator");


module.exports = class extends Generator {
    async prompting() {
        this.name = await this.prompt(
            [{
                type: 'input',
                message: 'input router-name',
                name: 'routeName',
                default: '',
            }]
        )
    }

    writing() {
        console.log(this.name)
        this.fs.copyTpl(
            this.templatePath('router.js'),
            this.destinationPath(`router/${this.name.routeName}.js`),
            this.name
        )
    }
}
