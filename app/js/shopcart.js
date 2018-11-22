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
		 	var cart = $.cookie("cart");
		 	//console.log(cart);
		 	var arr = [];
		 	if(cart){
		 		arr = JSON.parse(cart);
		 	}
		 	//判断购物车中是否有数据
		 	var html = "";
		 	if(arr.length === 0){
		 		$(".cart-empty").show().siblings(".cart-not-empty").hide();
		 		return;
		 	}else{
		 		$(".cart-empty").hide().siblings(".cart-not-empty").show();
		 	}
		 	//购物车不为空的时候渲染页面
		 	var html = template("shopcart-template" ,{products: arr});
		 	$("#prod").html(html);
		 	//console.log(cart);
		 	//cookie封装
		 	function save(){
		 		var products = JSON.stringify(arr);
			 		//console.log(products);
			 	$.cookie("cart",products, {expires:10,path:"/"});
		 	}
		 	//删除单行
			 	$(".del i").click(function(){
			 		var id = $(this).parent().parent().attr("data-id");
			 		//console.log(id);
			 		$(this).parent().parent().remove();
			 		for(var i = 0; i < arr.length; i++){
			 			// console.log(arr[i].id,id);
			 			if(arr[i].id === id){
			 				arr.splice(i,1);
			 			}
			 		}
			 		//$(".cart-empty").show().siblings().find(".cart-not-empty").hide();
			 		save();
			 		window.location.reload();
			 	});
			 	//数量的增加减少
			 	$(".reduce").click(function(){
			 		var num = $(this).next().val();
			 		if(num <= 1){
			 			return;
			 		}else{
			 			num--;
			 		}
			 		$(this).next().val(num);
			 		var price = $(this).parent().parent().prev().text();
			 		$(this).parent().parent().next().text(price*num);

			 		var id = $(this).parent().parent().parent().attr("data-id");	
			 		for(var i = 0; i < arr.length; i++){
			 			 console.log(arr[i].id,id);
			 			if(arr[i].id === id){
			 				arr[i].amount = num;
			 				break;
			 			}
			 		}
			 		save();
			 		total();
			 	})
			 	//数量的增加
			 	$(".add").click(function(){
			 		var num = $(this).prev().val();
			 		//console.log(num);
			 		num++;
			 		$(this).prev().val(num);
			 		var price = $(this).parent().parent().prev().text();
			 		$(this).parent().parent().next().text(price*num);
			 		var id = $(this).parent().parent().parent().attr("data-id");	
			 		for(var i = 0; i < arr.length; i++){
			 			// console.log(arr[i].id,id);
			 			if(arr[i].id === id){
			 				arr[i].amount = num;
			 				break;
			 			}
			 		}
			 		//console.log(arr);
			 		save();
			 		total();
			 	})
			 	var len = $(".ck_sig").length;
			 	var sum = 0;
			 	//console.log(len);
			 	function total(){
			 		var sums = 0;
			 		console.log($(".ck_sig:checked"));
			 		$(".ck_sig:checked").each(function(index,item){
			 			var price = parseInt($(this).parent().parent().next().next().next().next().text());
			 			var amount = parseInt($(this).parent().parent().parent().find(".txt").val());
			 			sums += price * amount; 
			 			//console.log(sums);
			 		});
			 		//计算商品的金额与合计
			 		$(".allPri").text(sums.toFixed(2));
			 		$(".pri").text(sums.toFixed(2));
			 	}
			 	//点击全选按钮
			 	$(".ck_all").click(function(){
			 		if($(this).prop("checked")){
			 			sum = len;
			 			$(".ck_sig").prop("checked",true);
			 		}else{
			 			sum = 0;
			 			$(".ck_sig").prop("checked",false);
			 		}
			 		//console.log(sum);
			 		total();
			 	});
			 	//点击反选按钮
			 	$(".ck_sig").click(function(){
			 		if($(this).prop("checked")){
			 			sum++;
			 		}else{
			 			sum--;
			 		}
			 		if(sum === len){
			 			$(".ck_all").prop("checked",true);
			 		}else{
			 			$(".ck_all").prop("checked",false);
			 		}
			 		total();
				 });
			 	//点击全部清空按钮
			 	$(".delete").click(function(){
			 		// $(".cart-table").remove();
			 		$(".cart-empty").show().siblings().hide();
			 		$(".cart-area").remove();
			 		var products = JSON.stringify(arr);
			 		$.cookie("cart",products, {expires:-1,path:"/"});
			 	})
		 })
	})
})