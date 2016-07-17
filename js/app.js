$(document).ready(function(){

	$(".flama").mouseover(function(){
		$(".flama").attr("hidden", true);
		$(".palito-vela").attr("hidden", false);
		$("#mensajebtn").css("display", "inline-block");
		$(".sopla").attr("hidden", true);
	});
	$("#mensajebtn").click(function(){
		$("#torta").attr("hidden", true);
		$("#mensajepag").attr("hidden", false);
		$("#regresarbtn").css("display", "inline-block");
	});
	$("#regresarbtn").click(function(){
		$("#torta").attr("hidden", false);
		$("#mensajepag").attr("hidden", true);
	});
})