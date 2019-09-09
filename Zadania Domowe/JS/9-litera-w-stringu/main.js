function sortliter(string){
    let array = string.split('');
    let suma = 0;
    
    array.forEach(function (el, i) {
            if (array[i] == 'a' || array[i] == 'A') {
            suma += 1;
            return result = 'liter "a" jest ' + suma;
        }	
    });
    }
    sortliter('Szkoła programowania Akademia 108');
    console.log(result);
    
    sortliter('a');
    console.log(result);        



//     Zaimplementuj funkcję, która przyjmuje 2 argumenty. Pierwszy parametr to string, a drugi to litera.

// Funkcja liczy i zwraca ilość wystąpień litery w stringu.

// Funkcję wywołaj z parametrami:
// 1. Szkoła Programowania Akademia 108
// 2. a

// Wynik działania funkcji wyświetl w konsoli.

// Zadanie domowe robimy z wykorzystaniem serwis