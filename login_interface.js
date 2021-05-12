// validation for user to login
var email = document.forms['form']['mail_id']
var pass = document.forms['form']['pass']

function validated(){
    if (email.value.length < 3) {
        email.style.border = "1px solid blue";
		email.style.display = "block";
		email.focus();
        alert("User id entered is incorrect/invalid.");
		return false;
	}
    if(pass.value.length < 4){
        email.style.border = "1px solid blue";
        pass.style.display = "block";
		pass.focus();
        alert("Password entered is incorrect.");
		return false;
    }
    
}