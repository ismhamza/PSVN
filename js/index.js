$(function() {
    function onLogin(email, pass) {
        let indexUrl = "/";
        let users = JSON.parse(localStorage.getItem('users')) || [];
        let userExists = users[users.findIndex(user => user.email === email && user.password === pass)];
        if(userExists) {
            $(location).attr('href',indexUrl);
            this.localStorage.setItem('user', userExists.email)
        } else {
            $("#message-wrapper").addClass("alert alert-danger");
            $("#message-wrapper").text("Wrong email or password");
        }
    }
    function checkIfEmailExists(currentUser, users) {
        let existingUser = users[users.findIndex(user => user.email === currentUser.email)];
        return existingUser ? existingUser.email === currentUser.email : false;
    }
    function checkIfPasswordMatch(pass, confirm_pass) {
        return pass === confirm_pass
    }

    // Logout
    $("#psvn-logout").click(function(e) {
        this.localStorage.setItem('user', null);
        $(location).attr('href','./login.html');
    });
    // Sign Up
    $("#psvn-signup-form").submit(function(e) {
        e.preventDefault();
        let semail = $("#psvn-signup-email").val();
        let spassword = $("#psvn-signup-password").val(); 
        let sconfirm_password = $("#psvn-signup-confirm-pass").val();
        
        let users = JSON.parse(localStorage.getItem('users')) || [];
        let user = {email: semail, password: spassword, confirm_pass: sconfirm_password};
        let emailAlreadyExists = checkIfEmailExists(user, users);
        let passwordMatch = checkIfPasswordMatch(spassword, sconfirm_password);
        if(emailAlreadyExists) {
            $("#message-wrapper").addClass("alert alert-danger");
            $("#message-wrapper").text("Email Already Exists");
        } else if(!passwordMatch) {
            $("#message-wrapper").addClass("alert alert-danger");
            $("#message-wrapper").text("Password Doesn't match");
        } else {
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));
            $("#message-wrapper").addClass("alert alert-success");
            $("#message-wrapper").text("Account Has been created successfully!");
            $(location).attr('href','/login.html');
        }
    });

    // Sign In
    $( "#psvn-login-form" ).submit(function(e) {
        e.preventDefault();
        var email = $("#psvn-login-email").val();
        var password = $("#psvn-login-password").val();
        onLogin(email,password);
    }); 
})