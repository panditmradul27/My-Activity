// validation for hosital registration

var email = document.forms['form']['mail_id']
var name1 = document.forms['form']['name']  
var city = document.forms['form']['city']
var address = document.forms['form']['address']
var type = document.forms['form']['type']
var room  = document.forms['form']['room']
var icu = document.forms['form']['icu']
var bldbnk = document.forms['form']['bldbnk']
var park = document.forms['form']['park']
var amb = document.forms['form']['amb']
var password = document.forms['form']['password']
var con_pass = document.forms['form']['con_pass']

function validated(){
	if (email.value.length < 1) {
		email.style.border = "1px solid blue";
		email.style.display = "block";
		email.focus();
		return false;
	}
    if(name1.value.length < 1){
        name1.style.border = "1px solid red";
        name1.style.display = "block";
        name1.focus();
        return false;
    }
    if (city.value.length < 1) {
		city.style.border = "1px solid red";
		city.style.display = "block";
		city.focus();
		return false;
	}
	if (address.value.length < 1) {
		address.style.border = "1px solid red";
		address.style.display = "block";
		address.focus();
		return false;
	}
	if (type.value.length < 1) {
		type.style.border = "1px solid red";
		type.style.display = "block";
		type.focus();
		return false;
	}
	if (icu.value = "") {
		icu.style.border = "1px solid red";
		icu.style.display = "block";
		icu.focus();
		return false;
	}
    if (bldbnk.value = "") {
		bldbnk.style.border = "1px solid red";
		bldbnk.style.display = "block";
		bldbnk.focus();
		return false;
	}
    if (park.value = "") {
		park.style.border = "1px solid red";
		park.style.display = "block";
		park.focus();
		return false;
	}
    if (amb.value = "") {
		amb.style.border = "1px solid red";
		amb.style.display = "block";
		amb.focus();
		return false;
    }
	if (password.value.length < 6) {
		password.style.border = "1px solid red";
		password.style.display = "block";
		password.focus();
		return false;
	}
	if(con_pass.value != password.value){
		con_pass.style.border = "1px solid red";
		con_pass.style.display = "block";
		con_pass.focus();
		alert("Password not matched");
		return false;
	}


}