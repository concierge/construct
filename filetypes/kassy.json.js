const semver = require('semver');

module.exports = exports = config => {
    const json = {
        name: config.name,
        version: config.version,
        startup: `${config.name}.js`
    };

    delete config.name;
    delete config.version;

    for (let item in config) {
        if (config[item] === void(0))
            continue;
        json[item] = config[item];
    }

    return JSON.stringify(json, null, 4);
};

exports.options = [
    {
        name: 'name',
        type: 'string',
        desc: 'Name of the module',
        validate: value => !!value.trim()
    },
    {
        name: 'version',
        type: 'string|number',
        desc: 'Semver version of the module',
        validate: value => typeof(value) === 'number' || !!semver.valid(value)
    },
    {
        name: 'priority',
        type: 'string|number',
        desc: 'Order of priority with which this module will be executed (only relevant to type=module)',
        default: void(0),
        validate: value => typeof(value) === 'number' || ['normal', 'first', 'last'].includes(value)
    },
    {
        name: 'command',
        type: 'string',
        desc: 'Command string to match with a command prefix if a more advanced matching approach is not needed (only relevant to type=module)',
        default: void(0),
        validate: value => !!value.trim()
    },
    {
        name: 'help',
        type: 'array<array>',
        desc: 'Help to provide if a more advanced approach to generating help is not required (only relevant to type=module)',
        default: void(0),
        validate: value => value.some(v => v.some(h => typeof(h) !== 'string') || v.length < 2 || v.length > 3)
    },
    {
        name: 'type',
        type: 'string',
        desc: 'Type of module. Can be module, integration, service or system',
        default: 'module',
        validate: value => ['module', 'integration', 'service', 'system'].includes(value)
    }
];
