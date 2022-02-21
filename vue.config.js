module.exports = {
    devServer: {
        https: process.env.NODE_ENV === 'production' ? true : false
    },
    css: {
        loaderOptions: {
            sass: {
                sassOptions: {
                    prependData: `
                    @import "@/scss/_variables.scss";
                    @import "@/scss/_mixins.scss";
                    @import "@/scss/_colors.scss";
                    `
                }
            }
        }
    }
};

