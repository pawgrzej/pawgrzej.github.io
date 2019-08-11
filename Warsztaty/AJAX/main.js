$('#przycisk').click(function () {


    fetch('https://jsonplaceholder.typicode.com/users/1')
.then(response =>response.json())
.then(response=>{
    console.log(response);
    $("#1").text(response.id);
});

})

// WARSZTATY – JAVASCRIPT BUTTON CLICK
// 14
// Stwórz przycisk“Pobierz dane”.Ustaw nasłuch zdarzenia click na tym przycisku. Po kliknięciu wywołaj funkcję getData.
// Funkcja getData(event) pobiera z serwera objekt JSON ( URL = https://jsonplaceholder.typicode.com/users/1 ). 
// Dane – id, nazwę użytkownika, adres url – dodaj do strony.
// Napisz kod za pomocą czystego JavaScript i użyj do funkcji fetch()


// Zadanie zrobione poprawnie 

// document.getElementById("btn").addEventListener("click", getData);
// function getData() { 
//     fetch('https://jsonplaceholder.typicode.com/users/1')
//     .then(response =>response.json())
//     .then(response=>{
//         document.getElementById("id").innerHTML = response.id;
//         document.getElementById("name").innerHTML = response.name;
//         document.getElementById("url").innerHTML = response.url;
//     });
// }