const path = require('path')

const REGEX = {
    js: /\.(js)$/,
    html: /\.html$/,
    styles: /.css$/,
    fonts: /\.(woff|woff2|eot|ttf|otf)$/i,
    img: /\.(png|svg|jpg|jpeg|gif)$/i,
}

const BASE_DIR = path.resolve(__dirname, '../../../') + '\\'

module.exports = {
    REGEX,
    BASE_DIR,
}
