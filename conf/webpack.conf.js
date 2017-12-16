const webpack = require("webpack");
const path = require("path");

const pkg = require('../package.json')
//配置基础路径
const rootpath = path.resolve(__dirname,'../')

const config = {
    entry:path.resolve(rootPath,'src','index.js'),
    output:{
        filename:`${pkg.name}.min.js`,
        path: path.resolve(rootpath,'min'),
        library:`${pkg.name}`,
        libraryTarget:'umd'
    },
    module:{
        rules:[{            test:/\.js$/,
        }]
    },
}

module.exports = config;