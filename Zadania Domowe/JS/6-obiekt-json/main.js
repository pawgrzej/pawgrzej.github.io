

let jasonPracownicy = {
    "pracownicy":[
        {"firstName": "Krystian", "lastName": "Dziopa"}, 
        {"firstName": "Anna", "lastName": "Szapiel"},
        {"firstName": "Piotr", "lastName": "Żmuda"}
    ]
}


console.log(jasonPracownicy)
jasonPracownicy.pracownicy.forEach(function(element,index)
 {
    console.log([index] + '- Imie: '+ element.firstName+ ' Nazwisko: '+element.lastName);
});




// Pobierz do zmiennej jsonPracownicy poniższy obiekt:

// {
//     "pracownicy":[
//         {"firstName": "Krystian", "lastName": "Dziopa"}, 
//         {"firstName": "Anna", "lastName": "Szapiel"},
//         {"firstName": "Piotr", "lastName": "Żmuda"}
//     ]
// }
// Wyświetl go w konsoli, a następnie za pomocą pętli forEach przeiteruj po każdym pracowniku,
//  oraz wyświetl w konsoli index elementu tablicy oraz imie i nazwisko pracownika.

// Zadanie domowe robimy z wykorzystaniem serwisu https://repl.it

