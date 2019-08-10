//Funkcja document.ready() - wersja skrócona
$(function () {
	'use strict';

	//pobieranie elementów po znaczniku
	var paragraphs = $('p');
	paragraphs.after("Hello world!");
	console.log(paragraphs);

	//pobieranie elementów po id
	var paragraphOne = $('#paragraf');
	console.log(paragraphOne);

	//pobieranie elementów po klasie
	var paragraphTwo = $('.paragraf');
	console.log(paragraphTwo);

});