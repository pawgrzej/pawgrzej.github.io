function getData() {
    fetch('https://jsonplaceholder.typicode.com/users') 
        .then(response => response.json())
        .then(response=>{
        console.log(response)

    // Funkcja ktora laduje dokument zeby rowijalo
        for(let i = 0; i < response.length; i++) {
            let paragraphId = document.createElement("p");
            let paragraphUrl = document.createElement("p");
            let paragraphName = document.createElement("p");

            paragraphId.innerHTML = response[i].id
            document.body.appendChild(paragraphId); 

            paragraphUrl.innerHTML = response[i].website
            document.body.appendChild(paragraphUrl); 

            paragraphName.innerHTML = response[i].name
            document.body.appendChild(paragraphName); 
        }
    });
}
getData()

// Funkcja ktora przewija scrollem 

window.onscroll = function() {
    let d = document.documentElement;
    let kiniecLicznik=0

    let offset = d.scrollTop + window.innerHeight;
    let height = d.offsetHeight; 
    console.log("document.documentElement",document.documentElement)
    console.log("d.scrollTop" ,d.scrollTop)
    console.log("window.innerHeight", window.innerHeight)
    console.log("height", height, offset)
// Math.round zaokragla do pelnej liczby ( np; jak przegladarka nie wyswietla scrolla w pelnej lini )
    if (height == Math.round(offset)) {
        getData()
    }
};
// Stwórz stronę intenretową zawierającą listę użytkowników (tj. ich ID, IMIE i adres URL).
//  Lista użytkowników ma być dłuższa niż wysokość okna przeglądarki, aby włączał się mechanizm scrollowania.
// Następnie podepnij pod zadrzenie onscroll funkcję, która sprawdza, czy przewineliśmy stronę do końca.
// Za każdym razem, gdy strona zostanie przescrollowana do samego dołu pobierz za pomocąAJAX listę użytkowników w formacie
//  JSON ( URL = https://jsonplaceholder.typicode.com/users ). Pobranych użytkowników za każdym razem doklej u dołu strony.
// Napisz kod za pomocą czystego JavaScript i użyj do funkcji fetch()


