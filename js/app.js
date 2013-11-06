jQuery.fn.center = function () {
	this.css("position", "absolute");
	this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()) + "px");
	this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft()) + "px");
	return this;
};

function maxLengthCheck(object) {
	if (object.value.length > object.maxLength) {
		object.value = object.value.slice(0, object.maxLength);
	}
}

$(window).resize(function(){
	$('.b-ticket__wrapper').center();
});

$(document).ready(function () {
	$('.b-ticket__wrapper').center();
	$('.b-social__buttons').fadeIn();
	$('.e-tooboo__logo--ticket').on('click', function () {
		if ($(this).hasClass('activated')) {
			return false;
		} else {
			$(this).addClass('activated');
			$(this).animate({
				marginLeft: 0
			}, 500);
			$('.b-ticket__create').animate({
				left: 85,
				width: 655
			}, 300, function () {
				$('.b-ticket__create *').not('.e-day__select').fadeIn(100);
			});
			$('.b-ticket__create').fadeIn();
		}
	});
	$('.e-time__select--day').on('click', function(){
		$('.e-day__select').slideToggle();
	});
	$('.e-time__select--item').on('click', function(e) {
		e.preventDefault();
		e.preventDefault();
		$('.e-time__select--item').removeClass('active');
		$(this).addClass('active');
		var current_day = $(this).text();
		$('.e-day__select--title').text(current_day);

	});
});