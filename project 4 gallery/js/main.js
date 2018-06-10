
var search;

$('input[type=search]').on('keyup', function() {
	search = this.value.toLowerCase();

	
	$('.gallery img').each(function() {
		var title = $(this).attr('title').toLowerCase();
		var alt   = $(this).attr('alt').toLowerCase();

		if (title.indexOf(search) > -1 || alt.indexOf(search) > -1) {
			$(this).parent().css('display', '');
		} else {
			$(this).parent().hide();
		}
	});
	
});
