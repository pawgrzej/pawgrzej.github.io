// function ustawTlo() {

//     document.getElementById("par1").style.backgroundColor = "red"
//     document.getElementById("par2").style.backgroundColor = "yellow"
// }


// document.getElementById("btn-main").onclick = ustawTlo



document.getElementById("formularz").lastElementChild.addEventListener('click', function (e) {
    e.preventDefault();
    let fname = document.getElementsByName("fname")[0]
    let lname = document.getElementsByName("lname")[0]
    let email = document.getElementsByName("email")[0]
    let zgoda = document.getElementsByName("zgoda")[0]
    if (fname.value == "") {
        document.getElementById("fname").style.display = "inline-block"
    } else {
        document.getElementById("fname").style.display = "none"
    }
    if (lname.value == "") {
        document.getElementById("lname").style.display = "inline-block"
    } else {
        document.getElementById("lname").style.display = "none"
    }
    if (email.value == "") {
        document.getElementById("email").style.display = "inline-block"
    } else {
        document.getElementById("email").style.display = "none"
    }
    if (zgoda.checked == false) {
        document.getElementById("zgoda").style.display = "inline-block"
    } else {
        document.getElementById("zgoda").style.display = "none"
    }
})