const files = require('concierge/files'),
    path = require('path'),
    fs = require('fs'),
    filetypes = [];

for (let file of files.filesInDirectory('./filetypes')) {
    filetypes.push({
        name: file.substring(0, file.lastIndexOf('.')),
        inst: require(path.join('./filetypes', file))
    });
}

const validateConfig = config => {
    for (let val of config) {
        
    }
};

modules.exports = exports = config => {
    validateConfig(config);
};
