$(function(){
	
	$('#product').slidesjs({
		width:780,
		height:358,
	});
	
	var menu = true;
	$('#header_list').click(function(){
		if(menu===true){
			$('.gnb').slideDown();
			menu=false;
		}else{
			$('.gnb').slideUp();
			menu=true;
		}
	});
	
	/*$(window).resize(function(){
		if($(window).width()>768){
		$('.gnb').hide();
	}
	});*/
});