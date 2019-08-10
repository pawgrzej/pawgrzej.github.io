



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

        priceTable.forEach(function (element) {
            if (element.id == pizzaType) {
                pizzaPrice = element.price;

                price.text(pizzaPrice + " PLN");
                return false;
            }

        });
    });
});