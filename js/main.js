$(function (){
	//距离页面顶部的距离


	moveBar()
	navBar()

})
function navBar(){
	var nav_top = $('.contact').offset().top;

	setInterval(function(){
		var top = $('html').scrollTop();		
		console.log(top);
		if(top>=500&& top<=nav_top){
			$('.header').css("backgroundColor",'#83CDBE')
			$('.header').css("opacity",'1')
		}if(top<=500){
			$('.header').css("backgroundColor",'rgba(0,0,0,0)')
			$('.header').css("opacity",'1')
		}if(top>=nav_top){
			$('.header').css("opacity",'0.5')


		}

		
	},300)
}

function moveBar(){
	$('#nav_home').click(function(){
		$("html,body").animate({scrollTop:$(".home").offset().top},1000)

	})
	$('#nav_about').click(function(){
		$("html,body").animate({scrollTop:$(".about").offset().top},1000)

	})


	$('#nav_blog').click(function(){
		$("html,body").animate({scrollTop:$(".blog").offset().top},1000)

	})
	$('#home_blog').click(function(){
		$("html,body").animate({scrollTop:$(".blog").offset().top},1000)

	})
	$('#nav_contact').click(function(){
		$("html,body").animate({scrollTop:$(".contact").offset().top},1000)

	})
	
}