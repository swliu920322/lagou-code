module.exports = function (plop) {
    // create your generators here
    plop.setGenerator('component', {
        description: 'create component',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'component name',
            default: 'my component'
        }],
        actions: [{
            type: 'add',
            path: 'src/components/{{name}}/{{name}}.vue',
            templateFile: 'template/components.hbs'
        }]
    });
};
