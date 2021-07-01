module.exports = {
    devServer: {
        port: 3000,
    },
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                    @import "@/assets/scss/main.scss";
                    @import "@/assets/scss/layout.scss";
                    @import "@/assets/scss/stock.scss";
                    @import "@/assets/scss/view/stockView.scss";
                    @import "@/assets/scss/view/gameBotView.scss";
              `
            }
        }
    }
}