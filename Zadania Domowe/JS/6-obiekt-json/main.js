

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