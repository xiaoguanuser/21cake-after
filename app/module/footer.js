define(["jquery"],function(){

	function Header(){
		}
			/*app显示*/
			Header.prototype.list = function(){
				$("#weixin").mouseenter(function(){
					$("#erweima").stop().slideDown("slow");
				})
				$("#header-app").mouseleave(function(){
					$("#erweima").stop().slideUp("slow");
				})
				$("#app-top").mouseenter(function(){
					$("#footer-erweima").stop().slideDown("slow");
				})
				$("#app-top").mouseleave(function(){
					$("#footer-erweima").stop().slideUp("slow");
				})
				
			}
	return new Header();
})
