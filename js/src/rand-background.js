
$(document).ready(function() {

	var max = 70
	var min = 0
	// min~max 之间的随机整数
    var rand_num = Math.round(Math.random() * (max - min)) + min;           
    
    $("#body").css({"background-image":"url("/bgimg/"+ rand_num + ".jpg")"});	

});