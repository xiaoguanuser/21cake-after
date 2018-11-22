 require(["config"],function(){
 	require(["jquery", "header", "template","footer","jquerycookie"], function($,header,template,footer,jquerycookie){
 		 new Promise(function(resolve,reject){
 		 	$("header").load("/html/component/header.html", function(){
 				header.init();
 				header.list();
 				header.welcome();
 				resolve();
 			});
		 	$("footer").load("/html/component/footer.html", function(){
 		 	});
		 
		 }).then(function(){
 		 	$(".tit li").click(function(){
 					$(".detail-options-list").eq($(this).index()).show().siblings().hide();
 		 		});
 		 }).then(function(){
 		 		var str = location.search.slice(1);
 		 		var arr = str.split("=");
 		 		var obj = {};
 		 		//console.log(obj);
 		 		obj[arr[0]] = arr[1];
 		 	//alert("aaa");
 		 	$.ajax({
		 		method:"post",
 		 		dataType:"json",
 				data:obj,
 		 		url:"http://localhost/wampserver/api/v1/detail.php",
 		 	 	success: function(res){
 		 			//console.log(res);
 		 			var html = template("pro-detail",{products: res.product});
 		 			//console.log(html);
 		 			$(".detail-box").html(html);
 		 			//点击小图让大图出现
 					//点击切换文字和图片
 		 			$(".right-list-banner li").click(function(){
 						$(".left-img-box img").eq($(this).index()).show(500).siblings().hide(500);
 					})
 					$(".tit li").click(function(){
 						$(".detail-img-box img").eq($(this).index()).show().siblings().hide();
 					});
 		 			//得到后台数据
		 				var _id = res.product.id;
					 	//console.log(_id);
					 	var _img = $("#smallimg").attr("src");
					 	 //console.log(_img);
					 	var _title = $("#title").html();
					 	//console.log(_title);
					 	var _price = $(".detail-price").html();
					 	//console.log(_price);
	 					 var arr = [];

	 					 var cart = $.cookie("cart");
	 					 console.log($.cookie("cart"));	
	 					 if(cart){
	 					 	arr = JSON.parse(cart);
	 					 	//console.log(arr);
	 					 }
						
		 		    $(".detail-btn-addcard").click(function(){

		 		    	//console.log(arr);
		 		    	 var currProduct = {
										id:_id,
										img:_img,
										title:_title,
										price:_price,
										amount:1
									};
					 		for(var i = 0; i < arr.length;i++){
					 			if(arr[i].id === currProduct.id){
					 				
					 				arr[i].amount++;
					 				break;
					 			}
					 			
					 		}
					 		if(i === arr.length){
									arr.push(currProduct);
					 			}
					 	//console.log(arr);
 						var products = JSON.stringify(arr);
 				 		//console.log(JSON.stringify(cart));
 						//查询cookie中是否存在已选购的商品
 						$.cookie("cart",products, {expires:10,path:"/"});
 						//console.log("成功");
 						alert("添加成功，请前往购物车查看哦！");
 				})	}
 			 })
		 })
 		 
 	})
 })