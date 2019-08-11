
// Pobierz dane z adresu URL - funkcja fetch(zwraca obiekt Promise - Obietnica)
// Jeśli Promise zostanie rozwiązany to fetch() zwróci obiekt odpowiedzi (response)
// Zwracamy obiekt odpowiedzi przetworzony na obiekt JSON
// Od tego momemtu możemy korzystać z tych danych
$('#btnGetData').click(function () {

    let numberInput = document.getElementById("number").value

fetch('https://jsonplaceholder.typicode.com/posts/${nubeInput}')
.then(response =>response.json())
.then(response=>{
    console.log(response);
    $("#redBody").text(response.body)
    $("#resName").text(response.id)
    $("#resTitle").text(response.title)
});

})