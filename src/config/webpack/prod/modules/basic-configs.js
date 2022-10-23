const { generateDIR } = require('../../helpers')

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    target: ['web', 'es5'],
    output: {
        path: generateDIR('build'),
        filename: '[name].js',
        publicPath: '/static/',
    },
}
