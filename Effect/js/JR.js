$(document).ready(function(){
	var tr = new Vivus("S1", {duration: 600});
	var fly = new Vivus("S2", {duration: 600});
	tr.stop();
	fly.stop();

	$("body").on('click', function(){
		tr.reset().play();
		fly.reset().play();

		$("#station p , #air p").removeClass("on").addClass("off");
		setTimeout(function(){
			$("#station p , #air p").removeClass("off").addClass("on");
		},1);
	});
});