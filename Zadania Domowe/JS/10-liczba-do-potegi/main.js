// Zaimplementuj funkcję, która przyjmuje 2 parametry. Pierwszy parametr, to podstawa, która będzie podnoszona do potęgi, a drugi to wykładnik.

// Funkcja podnosi podstawę do potęgi i zwraca wartość swoich obliczeń.

// Przy implementacji zadania nie używaj klasy Math.

// Zadanie domowe robimy z wykorzystaniem serwisu https://repl.it


let wynik = 1;

function liczbaDoPotegi(podstawa, wykladnik) {
  for(i=0; i<wykladnik; i++) {
    wynik *= podstawa; 
  }
  return wynik;
}

liczbaDoPotegi(2,2);
