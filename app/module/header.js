define(["jquery","jquerycookie"],function(){

	function Header(){
		}
		Header.prototype.init = function(){
			var top = $(".header").offset().top;
			$(document).on("scroll",function(){
				var scrollTop = $(document).scrollTop();
				if(scrollTop  > top){
					$(".header").css({
						"position":"fixed",
						"top":0
					})
				}else{
					$(".header").css({
						"position":"static",
						"top":"80px"
					})
				}
			})
		}	
			/*app显示*/
			Header.prototype.list = function(){
					$("#header-app").mouseenter(function(){
						$("#header-app-list").stop().slideDown("slow");
					})
					$("#header-app").mouseleave(function(){
						$("#header-app-list").stop().slideUp("slow");
					})
					$("#city").mouseenter(function(){
						$("#city-list").stop().slideDown("slow");
					})
					$("#city").mouseleave(function(){
						$("#city-list").stop().slideUp("slow");
					})
					$("#message").mouseenter(function(){
						$("#message-list").stop().slideDown("slow");
					})
					$("#message").mouseleave(function(){
						$("#message-list").stop().slideUp("slow");
					})
				}
			//欢迎界面
			Header.prototype.welcome = function(){
				var username = $.cookie("username");
				if(username){
					$(".login").hide();
					$(".reginer").hide();
					$(".login-succ").show().html("欢迎您！" + username);
					$(".reginer-succ").show();
					$(".reginer-succ").click(function(){
						$.cookie("username","",{expires:-1,path:"/"})
					});
				}
			}	
	return new Header();
})
