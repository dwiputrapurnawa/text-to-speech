const { MSICreator } = require('electron-wix-msi');
const path = require('path');

const APP_DIR = path.resolve(__dirname, './Text-to-Speech-win32-x64');
const OUT_DIR = path.resolve(__dirname, './Text-to-Speech');

const msicreator = new MSICreator({
    appDirectory: APP_DIR,
    outputDirectory: OUT_DIR,
    description: 'Text-to-Speech Application',
    exe: 'Text-to-Speech-0.1',
    name: 'Text-to-Speech',
    manufacturer: 'Eric Cornetto Techology',
    version: '1.0.0',
    ui: {
        chooseDirectory: true
    },
});

msicreator.create().then(function(){
    msicreator.compile()
})
