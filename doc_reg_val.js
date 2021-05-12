// validation for paitent registration
var email = document.forms['form']['mail_id']
var name1 = document.forms['form']['name']
var sex = document.forms['form']['sex']  
var city = document.forms['form']['city']
var hospital = document.forms['form']['hospital']
var spec = document.forms['form']['spec']
var address = document.forms['form']['address']
var aadhar = document.forms['form']['aadhar']
var dob  = document.forms['form']['DOB']
var mob_no = document.forms['form']['mobno']
var password = document.forms['form']['password']
var con_pass = document.forms['form']['con_pass']

function validated(){
	if (email.value.length < 1) {
		email.style.border = "1px solid red";
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
    if (sex.value.length < 1) {
		sex.style.border = "1px solid red";
		sex.style.display = "block";
		sex.focus();
		return false;
	}
    if (city.value.length < 1) {
		city.style.border = "1px solid red";
		city.style.display = "block";
		city.focus();
		return false;
	}
    if (hospital.value.length < 1) {
		hospital.style.border = "1px solid red";
		hospital.style.display = "block";
		hospital.focus();
		return false;
	}
    if (spec.value.length < 1) {
		spec.style.border = "1px solid red";
		spec.style.display = "block";
		spec.focus();
		return false;
	}
	if (address.value.length < 1) {
		address.style.border = "1px solid red";
		address.style.display = "block";
		address.focus();
		return false;
	}
	if (aadhar.value.length < 12) {
		aadhar.style.border = "1px solid red";
		aadhar.style.display = "block";
		aadhar.focus();
        alert("AAdhar no is not correct");
		return false;
	}
	if (dob.value.length < 1) {
		dob.style.border = "1px solid red";
		dob.style.display = "block";
		dob.focus();
		return false;
	}
    if (mob_no.value.length < 10) {
		mob_no.style.border = "1px solid red";
		mob_no.style.display = "block";
		mob_no.focus();
        alert("Enter valid mobile no");
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
		alert("Password not matched")
		return false;
	}


}