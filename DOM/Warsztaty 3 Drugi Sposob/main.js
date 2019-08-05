let form = document.getElementsByClassName("formularz")
let inputy = document.getElementsByTagName("input")

function checkinput(form) {
    for (i = 0; i < form.length; ++i) {
        if (inputy[i].value == "") {
            form[i].innerText = "pole niewypełnione";
            form[i].style.color = "red";
        } else if (inputy[i].name == "zgoda" && inputy[i].checked == false) {
            form[i].innerText = "pole niewypełnione";
            form[i].style.color = "red";
        }
    } 
}

document.getElementById('formularz').lastElementChild.addEventListener('click', function (e) {
         e.preventDefault();
         checkinput(form);
})
