module.exports = {
    mode : "development",
    entry : __dirname + "/src/app.js" ,
    output : {
        path : __dirname + "/build",
        filename : "build.js"
    },
    module : {
        rules : [
            {
                test : /\.js$/,
                exclude : /node_modules/,
                use : "babel-loader"
            }
        ]
    }
}