require(["config"], function(){
	require(["jquery", "header","footer"], function($,header,footer){
		new Promise(function(resolve, reject){
			$("header").load("/html/component/header.html", function(){
				header.init();
				header.list();
				resolve();
			});
			$("footer").load("/html/component/footer.html", function(){
				
			});
		}).then(function(){
			$("form").submit(function(e){
				var username = $("#username").val(),
					password = $("#password").val(),
					pwd1 = $("#pwd").val(),
					email = $("#email").val(),
					qq = $("#qq").val(),
					birthday = $("#birthday").val();

					var arr = [false,false,false,false,false,false];
					var	userReg = /^[\da-zA-Z_\u4e00-\u9f5a]{4,16}$/;
					var	pwdReg = /^.{6,}$/;
					var emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+[\.][a-zA-Z0-9_-]+$/;
					var qqReg = /[1-9][0-9]{4,14}/;
					var birthReg = /^(19|20)\d{2}-(1[0-2]|0?[1-9])-(0?[1-9]|[1-2][0-9]|3[0-1])$/;  

					//判断用户名
					if(!userReg.test(username)){
						alert("请输入正确的用户名！");
						return false;
					}else{
						arr[0] = true;
					}
					//判断密码
					if(!pwdReg.test(password)){
						alert("请输入6位以上的密码！");
						return false;
					}else{
						arr[1] = true;
					}
					if(!pwd1 === password){
						alert("两次密码不一致！");
						return false;
					}else{
						arr[2] = true;
					}
					//判断邮箱
					if(!emailReg.test(email)){
						alert("请输入正确邮箱格式！");
						return false;
					}else{
						arr[3] = true;
					}
					//判断qq号
					if(!qqReg.test(qq)){
						alert("请输入正确的qq号格式！");
						return false;
					}else{
						arr[4] = true;
					}
					//判断生日
					if(!birthReg.test(birthday)){
						alert("请输入正确的生日格式！");
						return false;
					}else{
						arr[5] = true;
					}

					var isPass = arr.every(function(item){
						return item;
					});
					//判断,构造请求携带的参数
						if(isPass){
							var data = {
								username:username,
								password:password
					   };
					   //发送ajax请求
						$.ajax({
							method:"post",
							data: data,
							dataType:"json",
							url:"http://localhost/wampserver/api/v1/register.php",
							success:function(isSucc){
								//console.log(isSucc);
								if(isSucc.code === 1){
									e.preventDefault();
									alert("注册成功！");
									location.href = "http://localhost:1000/html/login.html";
								}else{
									alert("注册失败！请重新注册!");
									location.href = "http://localhost:1000/project/gulp-require-project/app/html/register.html";
								}
							}
						})
					}
				e.preventDefault();
			})
		})

	})
})