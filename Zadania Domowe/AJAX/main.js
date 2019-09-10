
$('#getData').click(function(){
    fetch('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php') 
    .then(response =>response.json())
    .then(response=>{
        console.log(response); 
        $('.resName').text('Imię: ' + response.imie);
        $('.resSurname').text('Nazwisko: ' +response.nazwisko);
        $('.resJob').text('Zawód: ' +response.zawod);   
    });

})