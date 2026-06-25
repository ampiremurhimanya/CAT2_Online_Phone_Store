function validateForm() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please fill in all required fields.");
        return false;
    }

    return true;
}

function searchPhone() {

    let input =
    document.getElementById("search").value.toLowerCase();

    let phones =
    document.querySelectorAll(".phone-card");

    phones.forEach(function(phone){

        if(phone.innerText.toLowerCase().includes(input)){
            phone.style.display = "";
        } else {
            phone.style.display = "none";
        }

    });
}