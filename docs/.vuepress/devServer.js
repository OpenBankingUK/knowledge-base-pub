// https://cli.vuejs.org/config/#devserver
// https://webpack.js.org/configuration/dev-server/
module.exports = {
    // https://webpack.js.org/configuration/dev-server/#devserverclientloglevel
    clientLogLevel: 'debug',
    // clientLogLevel: 'info',
    // https://webpack.js.org/configuration/dev-server/#devservercompress
    compress: true,
    // https://webpack.js.org/configuration/dev-server/#devserveroverlay
    overlay: {
        warnings: false,
        errors: false,
    },
    // https://webpack.js.org/configuration/dev-server/#devserveropen
    open: 'Google Chrome',
    // https://webpack.js.org/configuration/dev-server/#devserverwatchcontentbase
    watchContentBase: true,
};
