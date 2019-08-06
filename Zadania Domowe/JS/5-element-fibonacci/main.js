


function fibonacci(n) {
    if (n === 0) return 0;
    else if (n === 1 || n === 2) return 1;
    else if (n > 2) {
        let a = 1;
        let b = 1;
        let c = 0;
        for (let i = 0; i < n - 2; i++) {
            c = a + b;
            a = b;
            b = c;
        }
        return c;
    }
}





// // Napisz funkcję, która zwraca wartość n-tego elementu ciągu fibbonaciego. 
// Wynik działań i funkcji wyświetl w konsoli.

// // Jako parametr funkcja przyjmuje n - czyli n-ty element ciągu fibbonaciego.

// // Zadanie domowe robimy z wykorzystaniem serwisu https://repl.it

// // Podpowiedź przed wysłaniem zadania do sprawdzenia:
// // - znajdź w internecie opis merytoryczny ciągu fibbonaciego