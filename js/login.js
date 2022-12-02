function validate() {
    var email = document.myform.email.value;
    var password = document.myform.password.value;
    if (email == null || email == "") {
        alert("Please Enter a valid Email!!");
        return false;
    }
    else if (password.length < 6) {
        alert("Password Must Be Atleast 6 Digits")
        return false;
    }

    alert("Server is not active!!")
}