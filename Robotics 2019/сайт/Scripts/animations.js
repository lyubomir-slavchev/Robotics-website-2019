/* Code Authors Lyubomir Slavchev and Hristo Dobrikov */
$(document).ready(function(){
	$(window).scroll(function(){
		let scrollTop = $(this).scrollTop();
		let headerHeight = $('header').height();
		let infoHeight = $('article').height();
		let galleryHeight = $('#gallery').height();
		let navHeight = $('#navbar').height();
		if (scrollTop >= headerHeight / 2 ){
			
			$('.big-info').addClass('l-0');
			$('.small-box').addClass('r-0');
			$('.big-box').addClass('l-0');
			$('.informacia').addClass("active");
			$('.nachalo').removeClass("active");
			$('.galeria').removeClass("active");
			$('.contact').removeClass("active");
		}
		if (scrollTop >= headerHeight + infoHeight)
		{	
			$('.galeria').addClass("active");
			$('.informacia').removeClass("active");
			$('.nachalo').removeClass("active");
			$('.contact').removeClass("active");


		}
		if (scrollTop >= headerHeight + infoHeight + (galleryHeight/2) )
		{
			$('.contact').addClass("active");
			$('.galeria').removeClass("active");
			$('.nachalo').removeClass("active");
			$('.informacia').removeClass("active");

		}
		if (scrollTop < headerHeight / 2 )
		{
			$('.nachalo').addClass("active");
			$('.informacia').removeClass("active");
			$('.galeria').removeClass("active");
			$('.contact').removeClass("active");
		}
		
	});
		
});