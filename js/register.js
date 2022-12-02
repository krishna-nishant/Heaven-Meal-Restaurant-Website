function validate() {
    var name = document.myform.name.value;
    var email = document.myform.email.value;
    var password = document.myform.password.value;
    var cpassword = document.myform.cpassword.value;
    if (name == null || name == "") {
        alert("Name Can't Be Blank!!");
        return false;
    }
    if (email == null || email == "") {
        alert("Please Enter a valid Email!!");
        return false;
    }
    else if (password.length < 6) {
        alert("Password Must Be Atleast 6 Digits!!")
        return false;
    }
    else if (password != cpassword) {
        alert("Password and Confirm Password doesn't match!!")
        return false;
    }
    alert("Server is not active!!")
}