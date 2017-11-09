


$(document).ready(function(){
	var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
	setInterval(function(){
		$('.if_gd').text(getScrollTop());
	},30);
tabs();
slide();
// scrolls()

});


(function(){
	var bescroll = $(window).scrollTop();
	$(window).scroll(function(){
		var afscroll = $(window).scrollTop();
		var res = afscroll - bescroll;
		if(res===0) return false;
		if(res>0){
			down();
		}else{
			up();
		}
		bescroll = afscroll;
	});
}());
function down(){
	var chp=$('.produce .chp');
	var sf=$('.sf');
	var value=$('.per_value .p2');
	var ty=$('.tiyan .p3');
	var ps01=$('.dongli .dtn .ps01');
	var ps02=$('.dongli .dtn .ps02');
	var ps03=$('.dongli .dtn .ps03');
	var ps04=$('.dongli .dtn .ps04');
	var his=$('.to_js');
	var img=$('.power ul');
	var aimg=$('.power ol');
	var new1=$('.web .p1');
	var new2=$('.web .p2');
	if ((getScrollTop()>=6860)&&(getScrollTop()<=7458)) {
		new1.animate({
			'right':0
		})
	}
	if ((getScrollTop()>=6930)&&(getScrollTop()<=7524)) {
		new2.animate({
			'left':0
		})
	}

	if ((getScrollTop()>=5480)&&(getScrollTop()<=6010)) {
		img.animate({
			'left':'10px'
		})
	}
	if ((getScrollTop()>=5480)&&(getScrollTop()<=6010)) {
		aimg.animate({
			'right':'55px'
		})
	}

	if ((getScrollTop()>=7400)&&(getScrollTop()<=8052)) {
		his.slideDown(2000);
	}
	if((getScrollTop()>=3036)&&(getScrollTop()<=3564)){
		sf.animate({
			'left':0
		},1000)
	}
	if((getScrollTop()>=3640)&&(getScrollTop()<=4158)){
		value.animate({
			'top':0
		},500)
	}
	if((getScrollTop()>=4224)&&(getScrollTop()<=4750)){
		ty.animate({
			'top':0
		},700)
	}
	if((getScrollTop()>=4746)&&(getScrollTop()<=5346)){
		ps01.animate({
			'left':0
		},700)
	}
	if((getScrollTop()>=4890)&&(getScrollTop()<=5480)){
		ps03.animate({
			'left':0
		},700)
	}
	if((getScrollTop()>=4746)&&(getScrollTop()<=5346)){
		ps02.animate({
			'right':0
		},700)
	}
	if((getScrollTop()>=4890)&&(getScrollTop()<=5480)){
		ps04.animate({
			'right':0
		},700)
	}

}
function up(){
	var chp=$('.produce .chp');
	var sf=$('.sf');
	var value=$('.per_value .p2');
	var ty=$('.tiyan .p3');
	var ps01=$('.dongli .dtn .ps01');
	var ps02=$('.dongli .dtn .ps02');
	var ps03=$('.dongli .dtn .ps03');
	var ps04=$('.dongli .dtn .ps04');
	var his=$('.to_js');
	var img=$('.power ul');
	var aimg=$('.power ol');
	var new1=$('.web .p1');
	var new2=$('.web .p2');
	if ((getScrollTop()>=6710)&&(getScrollTop()<=6874)) {
		new1.animate({
			'right':'-2000px'
		})
	}
	if ((getScrollTop()>=6774)&&(getScrollTop()<=6974)) {
		new2.animate({
			'left':'-2000px'
		})
	}
	if ((getScrollTop()>=5166)&&(getScrollTop()<=5560)) {
		img.animate({
			'left':'-1000px'
		})
	}
	if ((getScrollTop()>=5166)&&(getScrollTop()<=5560)) {
		aimg.animate({
			'right':'-1000px'
		})
	}

	if((getScrollTop()>=7100)&&(getScrollTop()<=7762)){
		his.slideUp(2000);
	}
	if((getScrollTop()>=2850)&&(getScrollTop()<=3150)){
		sf.animate({
			'left':3000
		},600)
	} 
	if((getScrollTop()>=3450)&&(getScrollTop()<=3750)){
		value.animate({
			'top':400
		},600)
	}
	if((getScrollTop()>=3590)&&(getScrollTop()<=4350)){
		ty.animate({
			'top':500
		},700)
	}
	if((getScrollTop()>=4710)&&(getScrollTop()<=5010)){
		ps04.animate({
			'right':-1000
		},700)
	}
	if((getScrollTop()>=4510)&&(getScrollTop()<=4810)){
		ps02.animate({
			'right':-1000
		},700)
	}
	if((getScrollTop()>=4710)&&(getScrollTop()<=5010)){
		ps03.animate({
			'left':-1000
		},700)
	}
	if((getScrollTop()>=4510)&&(getScrollTop()<=4810)){
		ps01.animate({
			'left':-1000
		},700)
	}

}
function getScrollTop() {
	var scrollPos; 
	if (window.pageYOffset) {
		scrollPos = window.pageYOffset; 
	} else if (document.compatMode && document.compatMode != 'BackCompat') {
	  scrollPos = document.documentElement.scrollTop;
    } else if (document.body) { 
    	scrollPos = document.body.scrollTop; 
    } return scrollPos; 
}

function tabs(){
	var oLi=$('.power .xxk ol li img');
	var ul_img=$('.power ul li');

	oLi.each(function(i){
		$(this).click(function(){
			oLi.removeClass('active').eq(i).addClass('active');
			ul_img.eq(i).fadeIn().siblings('.power ul li').fadeOut();
		})
	})
}
function slide(){
	var aSlideUp=$('.footer .p2 a');
	var aForm=$('.join_us');
	var close=$('.join_us .close');
	aSlideUp.click(function(){
		aForm.slideDown();
	});
	close.click(function(){
		aForm.slideUp();
	})
}

