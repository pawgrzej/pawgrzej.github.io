// Zaimplementuj funkcję, przyjmuje jeden parametr - liczbę.

// Funkcja sprawdza, czy liczba jest liczbą parzystą, czy nie.

// Funkcja zwraca wynik swoich działań - wartość typu Boolean.

// Zadanie domowe robimy z wykorzystaniem serwisu https://repl.it
function even(number){

    if(number%2 == 0) {
    console.log("Podana liczba jest parzysta");
    } else {
    console.log("Podana liczba jest nieparzysta");
    }
    return number%2 == 0;
    }
    
    even(12);