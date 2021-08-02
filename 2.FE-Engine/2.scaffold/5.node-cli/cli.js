#!/usr/bin/env node

console.log('cli runing')
const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const inquirer = require('inquirer');
inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'project name',
        default: ''
    }
]).then(answer => {
    console.log(answer);
    const tmplDir = path.join(__dirname, 'template');
    const destDir = process.cwd();
    fs.readdir(tmplDir, ((err, files) => {
        if(err) throw err;
        files.forEach(file => {
            ejs.renderFile(path.join(tmplDir,file), answer, (err, result)=> {
                if(err) throw err;
                fs.writeFileSync(path.join(destDir,file), result)
            })
        })
    }))
})
