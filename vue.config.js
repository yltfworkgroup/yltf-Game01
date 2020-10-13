
module.exports = {
    publicPath:'./',
	//配置全局样式变量
	css: {
		loaderOptions: {
			scss: {
				additionalData: `@import "@/styles/_variables.scss";`
			}
		}
	}
}