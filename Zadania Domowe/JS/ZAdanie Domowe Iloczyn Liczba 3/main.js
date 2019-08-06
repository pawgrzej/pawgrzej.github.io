let tablica = [1,2,3,4,5,6];

function sumowanie (tablica){


    let iloczyn =1;
    let suma =0;

    
    for(let i=0 ; i<6; i++){

        iloczyn *= tablica[i];
        suma += tablica[i];
    }

    console.log('suma elemtów to..' + suma);
    console.log('iloczyne elemtów to...'+ iloczyn );
}
sumowanie(tablica);



// // Napisz funkcję ze zmiennymi lokalnymi, 
// która policzy sumę i iloczyn elementów tablicy[1, 2, 3, 4, 5, 6]. 
// Funkcja przyjmuje jeden parametr - ww. tablicę z liczbami. 
// Funkcja nie zwraca nic. Funkcja wyświetla wyniki w konsoli.

// // Zadanie domowe robimy z wykorzystaniem serwisu https://repl.it

// // Podpowiedź przed wysłaniem zadania do sprawdzenia:
// // - użyj pętli for lub forEach w zadaniu

