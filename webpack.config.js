var path = require('path');
const Terser = require('terser-webpack-plugin');


module.exports = {
    mode : 'development',
    entry : {
      app: './src/index.js',
      print: './src/print.js'  
    },
    optimization: {
        minimize : true,
    },
    devtool : 'inline-source-map',
    output : {
        filename : '[name].bundle.js',
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