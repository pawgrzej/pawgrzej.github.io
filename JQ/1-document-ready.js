"use strict";

/*
wersja 1 

$( document ).ready( function() {
  // kod do wykonania
  } );

*/

/*  wersja 2 */






$(function () {

  let paragraf1 = $("p.paragraf")
  console.log(paragraf1[0])
  // console.log("$('#first')", $('#first'))
  // console.log(" $('p.paragraf')", $('p.paragraf'))
  $('p.paragraf')
  .css({background: 'red',color: "black"})
  .hide('slow')
  .show(3000);

  // console.log(" $('#idDiv p.paragraf2')", $('#idDiv p.paragraf2'))
  // console.log("span", $(".nowydiv span"))
  // let allP = $("p");
  // console.log(allP);
});



