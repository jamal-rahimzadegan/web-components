const { REGEX } = require('../constants')

module.exports = [
    {
        test: REGEX.js,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
            },
        },
    },
    {
        test: REGEX.html,
        use: 'html-loader',
    },
    {
        test: REGEX.img,
        type: 'asset/resource',
    },
    {
        test: REGEX.fonts,
        type: 'asset/resource',
    },
    {
        test: REGEX.styles,
        use: [
            { loader: 'style-loader' },
            {
                loader: 'css-loader',
                options: {
                    modules: true,
                },
            },
        ],
    },
]
