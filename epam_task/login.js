function validate()
{
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	
	var atpos=username.indexOf("@");
var dotpos=username.lastIndexOf(".");
	if ( username == "" )
	{

		alert ("Enter username");
		num.textContent = "*Username is required";
		num1.textContent="";
		return false;
	}
	else	if(atpos<4 || dotpos<atpos+3)
{
	alert ("Enter valid email");
document.getElementById("num").innerHTML="*invalid email";
}
	else if( password.length<6)
	{
		alert ("Password must be atleast 6 characters long");
		document.getElementById("num1").innerHTML="*password required";
		num.textContent = "";
		return false;
	}
	


else 
{
	num.textContent = "";
num1.textContent="";
document. getElementById("username"). value = "";
	document. getElementById("password"). value = "";
alert("Login successful");

return true;
}



}
$('.message a').click(function(){
	$('form').animate({height: "toggle", opacity: "toggle"}, "slow");
 });
 function validate1()
{
	var username = document.getElementById("username1").value;
	var password = document.getElementById("password1").value;
	var num=document.getElementById("p1").value;
	var atpos=username.indexOf("@");
var dotpos=username.lastIndexOf(".");
 
 if ( username == "" )
{

	alert ("Enter mail id");
	num4.textContent = "*mail is required";
	num3.textContent="";
	return false;
}
else	if(atpos<4 || dotpos<atpos+3)
{
	alert ("Enter valid email");
document.getElementById("num4").innerHTML="*invalid email";
}
	else if( password.length<6)
	{
		alert ("Password must be atleast 6 characters long");
		document.getElementById("num3").innerHTML="*password required";
		num4.textContent = "";
		return false;
	}
	else if(isNaN(num)||num==""||num.length!=10)
	{
		alert("Enter valid number");
		
		return false;
	}
	

	else 
	{
		alert("Account is successfully created");
		num4.textContent = "";
	num3.textContent="";
	
	document. getElementById("username1"). value = "";
	document. getElementById("password1"). value = "";
	document. getElementById("p1").value = "";
	document. getElementById("p2").value = "";
	
	return true;
	}





}

 
