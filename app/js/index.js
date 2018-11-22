require(["config"], function(){
	require(["jquery", "header", "template","lunbo","footer"], function($,header,template,lunbo,footer){

		//promise
		new Promise(function(resolve, reject){
			$("header").load("/html/component/header.html", function(){
					resolve();
			});

			$("footer").load("/html/component/footer.html", function(){
				header.list();
			});
		}).then(function(){
			header.init();
			header.welcome();
			lunbo.init();
		}).then(function(){
			//alert("aaa");
			$.ajax({
				method:"post",
				url:"http://localhost/wampserver/api/v1/index.php",
				dataType:"json",
				success:function(res){
					//console.log(res);
					var html = template("pro-template",{products: res.product});
					//console.log(html);
					$("#productList").html(html);
				}
			})
		})
	})
})


