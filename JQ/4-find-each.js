//Funkcja document.ready() - wersja skrócona
$(function () {
	'use strict';

	let eqMain;
	console.log("Przed funkcją ", eqMain)

	function a() {
		return eqMain = $('body').find('p').length - 1;
	}
	a()

	console.log(" Po funkcji ", eqMain)
	console.log($('body').find('p'))

	//Wybieranie elementu z kolekcji za pomocą metody eq()
	$('body').find('p').eq(eqMain).css({
		'color': 'green'
	});


	//Pętla each dodająca do paragrafów klasę z kolejnym numerem
	$('p').each(function (index) {
		$(this).addClass('paragraf-' + index);
		console.log(jQuery(this));
	});


});