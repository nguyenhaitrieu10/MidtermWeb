
$(document).ready(function(){
	$('.ht-design-now').click(function(){
		location.href = "design.html";
	});

	$('.ht-see-more').click(function(){
		location.href = "shopping.html";
	});
	
	$('.ht-add-cart').click(function(){
		location.href = "payment.html";
	});

	$('.ht-argee').click(function(){
		location.href = "home.html";
	});

	$('.ht-support, .ht-close-chat').click(function(){
		$('.ht-support-chat').toggle();		
	});
});