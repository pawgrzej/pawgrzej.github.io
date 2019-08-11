"use strict";

// definicja funkcji ajax
function ajax(method, url) {
    // utworzenie obiektu
    var httpReq = "";
    var httpReq = new XMLHttpRequest();
    console.log(httpReq);

    // otwarcie polaczenia - https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open
    httpReq.open(method, url);

    // jesli status polaczenia zostal zmieniony -> httpReq.readyState
    // 0: połączenie nie nawiązane,
    // 1: połączenie nawiązane,
    // 2: żądanie odebrane,
    // 3: przetwarzanie,
    // 4: dane zwrócone i gotowe do użycia.
    httpReq.onreadystatechange = function () {
        // jeśli 4: dane zwrócone i gotowe do użycia
        if (httpReq.readyState == 4) {
            // sprawdź kod statusu połączenia - https://pl.wikipedia.org/wiki/Kod_odpowiedzi_HTTP
            if (httpReq.status == 200) {
                var returnData = httpReq.responseText;
                let res =JSON.parse(returnData)

               
                $("#resName").text(res.id);
               


                console.log(returnData);
                console.log(res);
                

                // zeruj obiekt, aby nie utrzymywać nie potrzebnego już połączenia z serwerem
                httpReq = null;
            }
        } else if (httpReq.status == 404) {
            console.log(" zły adres");
        }
    };

    // wysłanie danych do serwera
    httpReq.send();
}

// wywołujemy naszą funkcję ajax() :)
ajax("GET", "https://jsonplaceholder.typicode.com/users/1");