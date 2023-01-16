
const { multiplicar } = require('./helpers/multiplicar.js')
const argv = require('./config/yars');

console.clear();

multiplicar(argv.base, argv.list, argv.to)
    .then(msg => console.log(msg))
    .catch(err => console.log(err))
