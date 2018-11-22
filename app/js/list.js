require(["config"],function(){
	 	require(["jquery","header","footer"], function($,header,footer){
			new Promise(function(resolve,reject){
				$("header").load("/html/component/header.html", function(){
					header.init();
					header.list();
					header.welcome();
					resolve();
				});
				$("footer").load("/html/component/footer.html", function(){
					
			});
	 	})/*.then(function(){
	 		//模拟后端数据
	 		var data = {
	 			result:{
	 				list:[
	 					{id:1,img:"/images/home/qiancao.jpg",title:"Teatime 浅草",price:298},
	 					{id:2,img:"/images/xiangqing/01.jpg",title:"黑白巧克力慕斯（千阳号）",price:298},
	 					{id:3,img:"/images/xiangqing/3.1.jpg",title:"Minty White 清境",price:298},
	 					{id:4,img:"/images/home/birthday1.1.png",title:"Mango Jerry 芒果慕斯",price:298},
	 					{id:5,img:"/images/home/birthday1.2.png",title:"Teatime 浅草",price:298},
	 					{id:5,img:"/images/home/birthday1.3.png",title:"Minty White 清境",price:298},
	 					{id:6,img:"/images/home/birthday1.4.png",title:"Teatime 浅草",price:298},
	 					{id:7,img:"/images/home/part1.2.png",title:"Mango Jerry 芒果慕斯",price:298},
	 					{id:8,img:"/images/home/part1.3.png",title:"Teatime 浅草",price:298}
	 				]
	 			}
	 		}
	 		//渲染商品列表
	 		var html = "";
	 		data.result.list.each(function(product){
	 			html += `
				<div class="product">
					<div class="id" style="display: none;">${product.id}</div>
					<img src="${product.img}" alt="">
					<div class="price">${product.price}</div>
					<div class="title">${product.title}</div>
					<div class="add-to-cart">加入购物车</div>
				</div>`;
	 			
	 		})
	 		var str = $("#container");
	 		// console.log(str);
	 		str.html(html);
	 	})*/
	 })
 })