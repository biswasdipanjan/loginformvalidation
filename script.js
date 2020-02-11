function validation() {
    var user = document.getElementById('user').value;
    var pass = document.getElementById('pass').value;
    var conpass = document.getElementById('conpass').value;
    var email = document.getElementById('email').value;


    //Condition for username
    if (user == "") {
        document.getElementById('username').innerHTML = " **Please fill the username field";
        return false;
    }

    if ((user.length <= 2) || (user.length > 10)) {
        document.getElementById('username').innerHTML = " **Kindly put a valid username";
        return false;
    }

    if (!isNaN(user)) {
        document.getElementById('username').innerHTML = " **Only characters are allowed ";
        return false;
    }


    //Condition for password

    if (pass == "") {
        document.getElementById('password').innerHTML = " **Please fill the password";
        return false;
    }

    if ((pass.length <= 5) || (pass.length > 10)) {
        document.getElementById('password').innerHTML = " **Password is not strong";
        return false;
    }

    if (conpass == "") {
        document.getElementById('cnfrmpass').innerHTML = " **Please fill the confirm password field";
        return false;
    }


    if (pass != conpass) {
        document.getElementById('cnfrmpass').innerHTML = " **Password is not matching";
        return false;
    }






    //Email Validation

    if (email == "") {
        document.getElementById('emailid').innerHTML = " **Please fill the email field";
        return false;
    }

    if (email.indexOf('@') <= 0) {
        document.getElementById('emailid').innerHTML = " **Invalid email id";
        return false;
    }

    if ((email.charAt(email.length - 4) != '.') && (email.charAt(email.length - 3) != '.')) {
        document.getElementById('emailid').innerHTML = " **Invalid email id";
        return false;
    }
}
