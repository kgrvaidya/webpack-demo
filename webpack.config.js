var path = require('path');

module.exports = {
    entry : './src/index.js',
    output : {
        filename : 'main.js',
        path : path.resolve(__dirname,'dist')
    },
    module : {
        rules : [
            {
                test : /\.css$/,
                use : [
                    'style-loader',
                    'css-loader'
                    ]
            },
            {
                test : /\.(png|jpg|svg|gif)$/,
                use : ['file-loader']
            },
            {
                test : /\.js$/,
                exclude : /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env']
                    }
                  }
            },
            

        ]
    }
}