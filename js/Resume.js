$(function(){
	var i=1
	$("#music2").click(function(){
	     if(i%2!=0){
	 	     $("#music2").removeClass("music");
	 	     $("#music2").addClass("music1");
	 	     document.getElementById("myaudio").pause();
	 	     $(".musicstop").css("display","block");
	     }else{
	 	     $("#music2").removeClass("music1");
	 	     $("#music2").addClass("music");
	 	     document.getElementById("myaudio").play();
	 	     $(".musicstop").css("display","none");
	        };
	     i++;
	})
})