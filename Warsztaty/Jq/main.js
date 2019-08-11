



$(function () {
    let formPizzaOrder = $("#pizza-order");
    let name = $("#name");
    let lastname = $("lastname");
    let street = $("street");
    let dom = $("dom");
    let postCode = $("post-code");
    let miasto = $("miasto");
    let pizza = $("#pizza");
    let price = $("#price");
    let pomidorowy = $("pomidorowy");
    let czosnkowy = $("czosnkowy");
    let button = $("button");

    let priceTable = [
        {
            id: 0,
            price: 0
        },
        {
            id: 1,
            price: 39
        },
        {
            id: 2,
            price: 29,
        },
        {
            id: 3,
            price: 43
        },
        {
            id: 4,
            price: 39
        },
        {
            id: 5,
            price: 27,
        }
    ];
    // zdarzenie obslugujace wybory pizzy i selector option

    pizza.change(function () {
        let pizzaPrice = 0;

        let pizzaType = $(this).val();
        console.log(pizzaPrice)

        if (pizzaType == 0) {
            pirce.text("0 PLN");
            return;
        }
        // } pizzaPrice jest to stworzona wartosc do wyboru pizzy, PizzaType jest to wybór pizzy przez użytkownika,
        // this.wskazuje konkretna pizze czyli ta pizza została wybrana. Funkcja IF pokazuje jeżeli pizza nie została wybrana wskauje 0 zl. 

        priceTable.forEach(function (element) {
            if (element.id == pizzaType) {
                pizzaPrice = element.price;

                price.text(pizzaPrice + " PLN");
                return false;
            }
// priceTable, jest to nasza szafa, pizzaPrice to sa spodnie. w funkcji foreach mowimy idz do szafy otworz ja. Znajdz skarpetki ktore 
// pasuja do spodni. element Id == pizzaTYpe, jest to szuflada w ktorej znajduja sie skarpetki. a pizzaPrice=element. price pokazuje konkretne skarpetki. 
        });
    });
    formPizzaOrder.submit(function () {
        errors.empty();
   
   
       let errorsArray = [];
   
       if (name.val() == "") {
         errorsArray.push("Uzupełnij pole: Imie");
       }
   
       if (lasteName.val() == "") {
         errorsArray.push("Uzupełnij pole: Nazwisko");
       }
   
       if (street.val() == "") {
         errorsArray.push("Uzupełnij pole: ulica");
       }
   
       if (dom.val() == "") {
         errorsArray.push("Uzupełnij pole: Nr.");
       }
   
       if (postCode.val() == "") {
         errorsArray.push("Uzupełnij pole: Kod pocztowy");
       }
   
       if (city.val() == "") {
         errorsArray.push("Uzupełnij pole: Miasto");
       }
   console.log(pizza.val())
       if (pizza.val() == 0) {
         errorsArray.push("Wybierz Pizzę!");
       }
   console.log(agree.is(":checked"))
       if (agree.is(":checked") == false) {
         errorsArray.push("Musisz wyrazić zgodę na RODO itp.");
       }
   
       if (errorsArray.length > 0) {
         // console.log(errorsArray);
   
         errorsArray.forEach(function
   
   
   
           (element, index) {
             let liError =  "<li>" + element + "</li>";
             errors.append(liError);
           });
   
         return false;
       }
   
       let orderObject = {
         firstName: $.trim(firstName.val()),
         lastName: $.trim(lastName.val()),
         street: $.trim(street.val()),
         streetNo: $.trim(streetNo.val()),
         postCode: $.trim(postCode.val()),
         city: $.trim(city.val()),
         pizza: pizza.val(),
         sauces: [tomatoSauce.is(":checked"), garlicSauce.is(":checked")]
       };
   
       console.log(JSON.stringify(orderObject));
       console.log(orderObject);
   
       return false;
    });
});


// // Stwórz formularz zamówienia Pizzy z następującymi polami:
//  -  Imie - 
//   Nazwisko -  Ulica - 
//    Nr domu/mieszkania - 
//     Kod Pocztowy - 
//      Miasto - 
//       Pizza (do wyboru 5 rodzajów Pizzy – każda w innej cenie) - pole to ma ustawioną domyślną wartość "-- Wybierz Pizzę --". 
//       Po wyborze zamawianej pizzy, powinna wyświetlić się jej cena (np. jako tekst w paragrafie)
//        -  2 pola wyboru sosów (pomidorowy i czosnkowy) (najlepiej jako checkbox'y)
//         -  Zgoda na przetwarzanie danych – checkbox (musi być zgoda na relizacje zamówienia) 
// //  Za pomocą jQuery zrób walidację formularza. Walidator ma sprawdzać: -  czy wszystkie pola zostały wypełnione? Jeśli nie, to zwracać odpowiedni komunikat -  czy została wybrana Pizza przy zamówieniu? Jeśli nie, to zwracany odpowiedni komunikat 
// // Na końcu walidator ma stworzyć obiekt zamówienia np. w formacie JSON i wyświetlić go w konsoli 