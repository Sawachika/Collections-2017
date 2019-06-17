$(document).ready(function(){

	$(".slickArea3 .slick").slick({
		slidesToShow: 3,
		arrows: false,
		dots: true,
		responsive:[
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2
			}
		},{
			breakpoint: 480,
			settings: {
				slidesToShow: 1
			}
		}]
	});

	$(".slickArea:not(.slickArea3) .slick").slick({
		slidesToShow: 4,
		arrows: false,
		dots: true,
		responsive:[
		{
			breakpoint: 980,
			settings: {
				slidesToShow: 3
			}
		},{
			breakpoint: 768,
			settings: {
				slidesToShow: 2
			}
		},{
			breakpoint: 480,
			settings: {
				slidesToShow: 1
			}
		}]
	});
	
});