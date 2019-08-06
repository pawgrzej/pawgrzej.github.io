let tablica = [0,1,2,3,4,5];

function kwadraty(tablica){

let suma=0;


for(i=0; i<tablica.lenght; i++) {
suma += Math.pow(tablica[i],2);
}


return suma;


}

console.log('Suma kwadratów elementów tablicy to...'+ kwadraty(tablica));


// // Napisz funkcję ze zmiennymi lokalnymi, która liczy sumę kwadratów elementów tablicy [0,1,2,3,4,5]. 
// Funkcja przyjmuje jeden parametr - w/w tablicę z liczbami. 
// Funkcja zwraca sumę kwadratow. Wyświetl wynik działania funkcji w konsoli.

// // Zadanie domowe robimy z wykorzystaniem serwisu https://repl.it

// // Podpowiedź przed wysłaniem zadania do sprawdzenia:
// // - użyj w zadaniu pętli, którą uważasz za słuszną i klasy Math.