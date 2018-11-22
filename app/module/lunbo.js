define(["jquery"],function($){

	function Lunbo(){

	}
	Lunbo.prototype.init = function(){
		var $imgs = $("#banner ul li"),
			$btns = $("#banner ol li");
		//alert("gfftf");
		var index = 0;//当前播放的图片的下标
		var flag = false;//默认没有开始播放
		var timer = null;

		//绑定按钮点击事件
		$btns.click(function(){
			if(!flag){
				flag = true;
				$(this).addClass("ac").siblings().removeClass("ac");
				$imgs.eq(index).fadeOut();
				index = $(this).index();
				$imgs.eq(index).fadeIn(function(){
					flag = false;
				});
			}
		})
		//前一张
		$("#goPrev").click(function(){
			if(!flag){
				flag = true;
				$imgs.eq(index).fadeOut();
				if(--index < 0){
					index = $imgs.length-1;
				}
				$btns.eq(index).addClass("ac").siblings().removeClass("ac");
				$imgs.eq(index).fadeIn(function(){
					flag = false;
				})
			}
		})
		//后一张
		$("#goNext").click(function(){
			if(!flag){
				flag = true;
				$imgs.eq(index).fadeOut();
				if(++index >= $imgs.length){
					index = 0;
				}
				$btns.eq(index).addClass("ac").siblings().removeClass("ac");
				$imgs.eq(index).fadeIn(function(){
					flag = false;
				})
			}
		})
		//自动播放
		var auto = (function autoPlay(){
			timer = setInterval(function(){
				$("#goNext").trigger("click");
			},3000);
			return autoPlay;
		})();
	}
	return new Lunbo();
})