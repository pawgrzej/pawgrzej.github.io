//Funkcja document.ready() - wersja pełna
jQuery( document ).ready( function(){
    'use strict';
	// let paragrafAll = $('p').text("tu ma coś wpisać klient")
	// console.log(paragrafAll)
	// //Pobieranie tekstu
	//  // var tekstParagrafuPierwszego = $('#paragraf').text();
	//  var tekstParagrafuPierwszego = $('#paragraf').html("<button>przycisk</button>");
	// console.log("html", tekstParagrafuPierwszego);

	// let tekstParagrafuDrugiego = $('#paragraf1').text("<button>przycisk</button>")
	
	//Dodawanie tesktu
	// $(".paragraf").text(tekstParagrafuPierwszego);
	
	//Dodawanie HTML
	// $(".paragrafnext").html("<p>To jest <strong>TO nowy</strong> z dodanym <br> HTML,</p>");
	
	//Dodawanie treści na końcu selektora
	// $(".paragrafnext").append("  +++   Treść na końcu selektora");
	
	//Dodawanie treści za selektorem
	 $(".paragrafnext").after("<p>ssssssssssssssssssssssTreść za selektorem</p>");
	
// wstaw zawartość na początku wybranego selektora 
		$('.paragrafnext').prepend(" dodalimy metodą prepend() ")

//   wstaw zawartość przed wybranym selektorem
// $('.paragrafnext').before("<button id ='mainBtn'> Click</button>")

	//Usuwanie elementu i jego zawartości
	// $(".paragrafnext").remove();
	
	//Usuwanie TYLKO jego zawartości
	// $('.paragrafnext').empty();
	//$(".paragrafnext").append("  +++   Treść na końcu selektora");
	//Dodawanie CSS
	// $(".paragrafnext").css({})
//  console.log("css.paragrafnext color ", $(".paragrafnext").css('fontSize'))
/* zminy css */
// let parNext = $(".paragrafnext")
// let newCss = {
// 	'font-size': '50px',
// 	 'color': 'red' 
// 	}
// parNext.css(newCss);
	
	//Dodawanie klasys
	$('h1').addClass('blue red');
    
    //Dodawanie atrybutu
//     $('h1').attr("imie", "Marcin");
//    console.log( $('#mainInput').val("nowa wartosci"))


// $('#second').addClass('addClass')


let input1 = $('#mainInput')
console.log("input1", input1.val())

input1.val("nowy text")


});