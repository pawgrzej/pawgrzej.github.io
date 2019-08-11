$("#btnGetData").click(function () {
	let id = $("#number").val();
	console.log(id)


	if (id <= 9) {
		$.getJSON(
			`https://jsonplaceholder.typicode.com/users/${id}`,
			function (data) {

				// wyswietl w konsoli
				console.log(data);
			}
		)
	} else {
		alert("błąd ")
	}
})




// $.getJSON(
// 	`https://jsonplaceholder.typicode.com/users/${id}`,
// 	function (data) {

// 		// wyswietl w konsoli
// 		console.log(data);
// 	}
// );



function dodawanie(a, b) {

	console.log(a + b)
	1
}


dodawanie(4, 6);