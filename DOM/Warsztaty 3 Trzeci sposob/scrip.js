let inputy = document.getElementsByTagName("input")

function checkinput(inputy) {
    for (i = 0; i < inputy.length; ++i) {
        if (inputy[i].value == "") {
            inputy[i].insertAdjacentHTML('afterend', "<span> niewypełnione</span>" )
        } else if (inputy[i].name == "zgoda" && inputy[i].checked == false) {
            inputy[i].insertAdjacentHTML('afterend', "<span> niewypełnione</span>" )
        }
    }
}

document.getElementById('formularz').lastElementChild.addEventListener('click', function (e) {
         e.preventDefault();
         checkinput(inputy)
})
