$(function(){
	
	$('#product').slidesjs({
		width:780,
		height:358,
	});
	
	var menu = true;
	$('#header_list').click(function(){
		if(menu===true){
			$('.gnb_m').slideDown();
			menu=false;
		}else{
			$('.gnb_m').slideUp();
			menu=true;
		}
	});
	
	$(window).resize(function(){
		if($(window).width()>768){
		$('.gnb_m').hide();
	}
	});
});