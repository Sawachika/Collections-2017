$(document).ready(function(){

	$("#bg").click(function(){
		$(this).children().addClass("off");
		 $("#bg").delay(1000).fadeOut(2000);

		$("#bg2").delay(1000).fadeIn(2000);
	});

	$("#bg2").click(function(){
		$("#bg2 p").addClass("off");

		setTimeout(function(){
			$("body").fadeOut(2000,function(){
				window.location.href = "river.html";
			});
		},1000);
	});
});