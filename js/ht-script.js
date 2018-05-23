
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

	let select = [];
	let d = new Date();
	let y = d.getFullYear();
	let birth = $('#inputBirth');
	let e = document.createElement("option");
	e.value = 0;
	e.innerText = 'Năm';
	birth.append(e);
	for (let i = y; i > 1899; --i){
		let e = document.createElement("option");
		e.value = i;
		e.innerText = i;
		birth.append(e);
	}
	
	$('.header-login').click(function(){
		$('a#pills-home-tab').trigger('click');
	});

	$('.header-register').click(function(){
		$('a#pills-profile-tab').trigger('click');
	});

	$('.ht-login').click(function(e){
		e.preventDefault();
		let url = window.location.href;
		let page = url.split('/');
		page = page[page.length - 1];
		page = './member-' + page.split('html')[0] + 'html';
		window.location.replace(page);
	});
});