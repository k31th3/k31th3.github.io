route = function(url, target)
{
	fetch(url)
	  .then(response => {
	    return response.text()
	})
	.then(data => 
	{
	  	$(target).html(data);
	});
}