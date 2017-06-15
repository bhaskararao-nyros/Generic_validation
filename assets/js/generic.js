function validate()
{
	var validfields = true;
	var validcombo = true;
	var multicheck = true;
	var multicombo = true;
	var txtarea = true;
	var datetime = true;
	validfields = validatefields();
	if(validfields)
	{
		validcombo = validatecombo();	
		if(validcombo)
		{
			multicheck = multicheckbox();
			if(multicheck)
			{
				multicombo = multicombocheck();
				if(multicombo)
				{
					txtarea = textarea();
					if(txtarea)
					{
						datetime = datetimecheck();
						return datetime;
					}
				}
			}
		}
	}
return false;	
}
function validatefields()
	{
		var name = document.getElementById('uname').value;
		var password = document.getElementById('password').value;
		var email = document.getElementById('emailid').value;
		var namereg = new RegExp(/^[A-Za-z]+$/);
		var emailreg = new RegExp(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/);
		var passwordreg = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);
						
						
						// validation of name,email and password
		
		if(name == "")
		{
			document.getElementById('nameerror').innerHTML = "*Please enter name";
			document.getElementById('uname').focus();
			document.getElementById('uname').style.backgroundColor = " #dff99d ";
			return false;
		}
		else if(!namereg.test(name))
		{
			document.getElementById('nameerror').innerHTML = "*Name must be in characters only";
			document.getElementById('uname').focus();
			document.getElementById('uname').style.backgroundColor = " #dff99d ";
			return false;
		}
		else if(name.length < 6)
		{
			document.getElementById('nameerror').innerHTML = "*Please enter at least 6 characters";
			document.getElementById('uname').focus();
			document.getElementById('uname').style.backgroundColor = " #dff99d ";
			return false;
		}
		else
		{
			document.getElementById('uname').style.backgroundColor = "white";
			document.getElementById('nameerror').style.display = "none";
		}
		if(email =="")
		{
			document.getElementById('emailerror').innerHTML = "*Please enter email";
			document.getElementById('emailid').focus();
			document.getElementById('emailid').style.backgroundColor = " #dff99d ";
			return false;
		}
		else if(!emailreg.test(email))
		{
			document.getElementById('emailerror').innerHTML = "*Please enter valid email";
			document.getElementById('emailid').focus();
			document.getElementById('emailid').style.backgroundColor = " #dff99d ";
			return false;
		}
		else
		{
			document.getElementById('emailid').style.backgroundColor = "white";
			document.getElementById('emailerror').style.display = "none";
		}
		if(password =="")
		{
			document.getElementById('pwderror').innerHTML = "*Please enter password";
			document.getElementById('password').focus();
			document.getElementById('password').style.backgroundColor = " #dff99d ";
			return false;
		}
		else if(!passwordreg.test(password))
		{
			document.getElementById('pwderror').innerHTML = "*Please enter valid password";
			document.getElementById('password').focus();
			document.getElementById('password').style.backgroundColor = " #dff99d ";
			return false;
		}
		else
		{
			document.getElementById('password').style.backgroundColor = "white";
			document.getElementById('pwderror').style.display = "none";	
			return true;
		}
		
	}
				// validation of combo,radio and checkbox

	function validatecombo()
	{
		var state = document.getElementById('stateid');
		var strSt= state.options[state.selectedIndex].value;
		var checkbox = document.getElementById('checkboxid');
		// var confirm = document.querySelector('input[name="select"]:checked').value;
		var yes = document.getElementById('yesid');
		var no = document.getElementById('noid');
		if(strSt == 0)
		{
			document.getElementById('stateerror').innerHTML = "*Please select state";
			document.getElementById('stateid').focus();
			return false;
		}
		else
		{
			document.getElementById('stateerror').style.display = "none";
		}
		if(yes.checked == false && no.checked == false)
		{
			document.getElementById('cnferror').innerHTML = "*Please confirm yes/no";
			document.getElementById('yesid').focus();
			return false;
		}
		else
		{
			document.getElementById('cnferror').style.display = "none";
		}
		if(checkbox.checked == false)
		{
			document.getElementById('alerterror').innerHTML = "*Please select for alerts";
			document.getElementById('checkboxid').focus();
			return false;
		}
		else
		{
			document.getElementById('alerterror').style.display = "none";
			return true;
		}

	}
				// validation of multicheckbox

	function multicheckbox()
	{
		var telugu = document.getElementById('teluguid');
		var english = document.getElementById('englishid');
		var hindi = document.getElementById('hindiid');
		// var language = document.querySelector('input[name="language"]:checked').value;
		if(telugu.checked == false && english.checked == false && hindi.checked == false)
		{
			document.getElementById('langerror').innerHTML = "*Please choose atleast one language";
			document.getElementById('englishid').focus();
			return false;
		}
		else
		{
			document.getElementById('langerror').style.display = "none";
			return true;
		}
	}
				// validation of multicombocheck

	function multicombocheck()
	{
		var profession = document.getElementById('professionid').value;
		if(profession == "")
		{
			document.getElementById('interror').innerHTML = "*Please choose profession";
			document.getElementById('professionid').focus();
			return false;
		}
		else
		{
			document.getElementById('interror').style.display = "none";
			return true;
		}
	}
				// validation of textarea

	function textarea()
	{
		var txtarea = document.getElementById('textareaid').value;
		if(txtarea < 15)
		{
			document.getElementById('txterror').innerHTML = "*Enter atleast 15 characters";
			document.getElementById('textareaid').focus();
			document.getElementById('textareaid').style.backgroundColor = " #dff99d ";
			return false;
		}
		else
		{
			document.getElementById('txterror').style.display = "none";
			document.getElementById('textareaid').style.backgroundColor = "white";
			return true;
		}
	}
				// validation of datetime

	function datetimecheck()
	{
		var datetime = document.getElementById('datetimeid').value;
		var dateformat = new RegExp(/^(0?[1-9]|[12][0-9]|3[01])-(0?[1-9]|1[0-2])-\d\d\d\d (00|[0-9]|1[0-9]|2[0-3]):([0-9]|[0-5][0-9]):([0-9]|[0-5][0-9])$/g);
		if(!dateformat.test(datetime) || datetime =="")
		{
			document.getElementById('timeerror').innerHTML = "*Enter valid date";
			document.getElementById('datetimeid').focus();
			document.getElementById('datetimeid').style.backgroundColor = " #dff99d ";
			return false;
		}
		else
		{
			document.getElementById('datetimeid').style.backgroundColor = "white";
			document.getElementById('timeerror').style.display = "none";
			alert("Validation Succesful");
		}
	}

	
	
	
	
	
