require(["config"], function(){
	require(["jquery", "header","footer","jquerycookie"], function($,header,footer,jquerycookie){
		new Promise(function(resolve, reject){
			$("header").load("/html/component/header.html", function(){
				header.init();
				header.list();
				resolve();
				header.welcome();
			});
			$("footer").load("/html/component/footer.html", function(){
			});
		}).then(function(){
			$("form").submit(function(e){
				var username = $("#username").val(),
					password = $("#password").val()
				//构造请求携带的参数
				var data = {
					username:$("#username").val(),
					password:$("#password").val()

				};
				//发送ajax请求
				$.ajax({
					method:"post",
					data: data,
					dataType:"json",
					url:"http://localhost/wampserver/api/v1/login.php",
					success:function(res){
						console.log(res);
						if(res.code === 1){
							alert("登录成功！");
							 //登录成功之后存到cookie里面去
							  $.cookie("username",res.project.name,{
							  	path:"/"
							 });
							//window.open("http://localhost:1000/index.html");
							location.href = "http://localhost:1000/index.html";
						}else{
							alert("登录失败！请重新登录");
						}
					}
				})
				e.preventDefault();
				return false;
			})
		})

	})
})