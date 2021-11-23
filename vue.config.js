module.exports = {
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