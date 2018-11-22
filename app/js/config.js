require.config({
	baseUrl: "/",
	paths: {
		"header": "module/header",
		"footer": "module/footer",
		"cake": "module/cake",
		"jquery": "libs/jquery/jquery-1.11.3",
		"bootstrap": "libs/bootstrap/js/bootstrap",
		"tools": "libs/tools",
		"lunbo": "module/lunbo",
		"template": "libs/template-web",
		"jquerycookie": "libs/jquery.cookie"
	},
	//垫片
	shim:{
		"bootstrap": {
			deps: ["jquery"]
		}
	}
})