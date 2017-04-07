module.exports = exports = config => {
    const ignores = [];
    if (!config.commitNodeModules)
        ignores.push('node_modules');
    if (!config.commitConfig)
        ignores.push('config.json');
    return ignores.concat(config.ignores).join('\n');
};

exports.options = [
    {
        name: 'commitNodeModules',
        type: 'boolean',
        desc: 'Exclude node_modules from the .gitignore file',
        default: false
    },
    {
        name: 'commitConfig',
        type: 'boolean',
        desc: 'Exclude config.json from the .gitignore file',
        default: false
    },
    {
        name: 'ignores',
        type: 'array<string>',
        desc: 'Ignores to add to the .gitignore file',
        default: []
    }
];
