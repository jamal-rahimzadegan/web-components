const { generateDIR } = require('../../helpers')

module.exports = {
    contentBase: generateDIR('build'),
    compress: true,
    port: 8000,
    liveReload: true,
}
