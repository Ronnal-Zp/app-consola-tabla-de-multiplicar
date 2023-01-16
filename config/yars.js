const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Base a multiplicar'
    })
    .option('l', {
        alias: 'list',
        type: 'boolean',
        describe: 'Listar en consola'
    })
    .option('t', {
        alias: 'to',
        type: 'number',
        default: 10,
        describe: 'Limite de la tabla (10 default)'
    })
    .check((argv, options) => {
        if( isNaN(argv.b) ) throw '"Base" debe se un numero.';
        if( isNaN(argv.t) ) throw '"To" debe ser un numero.';

        return true;
    })
    .argv;


module.exports = argv;