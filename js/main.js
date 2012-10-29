(function(){
	var REVOLVER = {};

	REVOLVER.showHomepage = function()
	{
		$('#introContainer').slideUp(500, function(){
			$('#home').slideDown();
		});
	}

	//setup events
	$('#introContainer a').on('click',REVOLVER.showHomepage);
})();
