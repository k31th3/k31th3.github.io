$(window).on("load", () => 
{
	$('body').append(`<div class="lds-ring">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>`);

 	$(".lds-ring").fadeOut(1000, function()
		{
			$(this).remove();
		});
 	
 	$("#container").fadeIn(2000);   
});