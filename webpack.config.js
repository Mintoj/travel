const postCSSPlugins = [
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer')
]

module.exports = {
    entry: './app/assets/scripts/App.js',
    output: {
        filename: 'bundled.js'
    },
    mode: 'development',
    watch: true,
    module: {
        rules: [
            {
                test: /\.css$/i,
                //css loading options for PostCSS url=false prevents images from being bundled
                use: ['style-loader', 'css-loader?url=false', {
                    loader: 'postcss-loader',
                    options: {
                        plugins: postCSSPlugins
                    }
                }]
            }
        ]
    }
}