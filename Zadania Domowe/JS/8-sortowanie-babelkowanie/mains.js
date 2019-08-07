let tablica = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];



console.log('Liczby nie posortowane : ' + tablica);


function sortowanieBombelkowe (tablica) {

    for (let i=0; i< tablica.length; i++) {
        for (let a=1; a< tablica.length; a++) {

            if ( tablica[a-1]> tablica [a]) {
                let sort = tablica[a];
                tablica [a]= tablica [a-1];
                tablica [a-1]= sort;
            }
        }
    }
    return tablica;
}

console.log( 'Liczby posortowane :' + sortowanieBombelkowe(tablica));














// Zaimplementuj funkcję, która sortuje tablicę przez bąbelkowanie.

// Funkcja przyjmuje parametr - tj. tablicę do posortowania, a zwraca posortowaną talicę.

// Wywołaj funkcję z tablicą [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1]. 
// Wynik jej działania wyświetl w konsoli.

// Zadanie domowe robimy z wykorzystaniem serwisu https://repl.it

// Podpowiedź przed wysłaniem zadania do sprawdzenia:
// - znajdź w internecie opis działania sortowania bąbelkowego
// - zastosuj pętlę w pętli :)

