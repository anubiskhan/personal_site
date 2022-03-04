module.exports = {
    pages: {
        index: {
            entry: "src/main.js",
            title: "Kelly Schroeder"
        }
    },
    devServer: {
        https: process.env.NODE_ENV === 'production' ? true : false
    },
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
                @import "@/scss/_variables.scss";
                `
            }
        }
    }
};

