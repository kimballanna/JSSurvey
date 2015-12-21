
/*function init() {
	var anchors = document.getElementsByTagName('a');
	anchors[0].addEventListener('click',showThisImage,false);
	anchors[1].addEventListener('click',showThisImage,false);
	anchors[2].addEventListener('click',showThisImage,false);
	anchors[3].addEventListener('click',showThisImage,false);
	anchors[4].addEventListener('click',showThisImage,false);
	anchors[5].addEventListener('click',showThisImage,false);
	// anchor event listeners go here
}
*/
function clear(){
	this.value='';
}



// First Name Input Box Validation
// ---------------------------------------------------------
function firstNameFocus(){

	var fnContent = document.getElementById('fnvalid');
	console.log("OnFocus" );
	 
	 //var fnvalid = document.getElementById("fnvalid").value="Please enter a valid first name. [Must contain letters only]";
	 var fnLettersFocus = document.createElement('p');
	 document.getElementById("fnvalid").style.color="black";
	 var fnLettersFocusText = document.createTextNode("Please enter a valid first name.");
	 fnLettersFocus.appendChild(fnLettersFocusText);
	 var fnLettersFocus2 = document.createElement('p');
	 var fnLettersFocusText2 = document.createTextNode("[Must contain letters only]");
	 fnLettersFocus2.appendChild(fnLettersFocusText2);
				
	fnContent.appendChild(fnLettersFocus);
	fnContent.appendChild(fnLettersFocus2);
	
     //document.info.firstname.focus();	
	 return;
}

function firstNameValid()
{
	
	var letters = /^[a-zA-Z]+/;
	var numbers = /^[0-9]+$/;
	var fnContent = document.getElementById('fnvalid');
	var fnLetterFocus;
	
	var newImage = document.createElement('img');
	var newImageURL;
	var newImageAlt;

   if( document.info.firstname.value.match(numbers) || document.info.firstname.value === ''  )
   {
     console.log("Please enter only letters!" );
	 
	 console.log("First name child removed.");
	 var fnvalid = document.getElementById("fnvalid").value="Please use letters only.";
		
	 image = document.getElementById('validImage1');
     image.src = "img/x.gif";
	 

	 var node = document.getElementById('fnvalid');
	 node.removeChild(node.childNodes[0]);	
	 //node.removeChild(node.childNodes[1]);
	 
	 var fnLettersFocus = document.createElement('p');
	 document.getElementById("fnvalid").style.color="red";
	 
	 
	 var fnLettersFocusText = document.createTextNode("Please use only letters!");
	 fnLettersFocus.appendChild(fnLettersFocusText);
	 		
	 fnContent.appendChild(fnLettersFocus);
	
	document.info.firstname.focus();
     return;
   }
    
	else if( document.info.firstname.value.match(letters)  )
   {
     console.log("Letter entered" );	
	 //document.getElementById("fnvalid").value.replace(null);
	 //var fnvalid = document.getElementById("fnvalid").value=null;
	 //var validCheck = document.createElement('img').src="img/crow.png";
	 image = document.getElementById('validImage1');
     image.src = "img/check.gif";
	 
	 
	 /*
	 var fnLettersGood = document.createElement('p');
	 document.getElementById("fnvalid").style.color="green";
	 var fnLettersGoodText = document.createTextNode("Please use only letters!");
	 fnLettersGood.appendChild(fnLettersGoodText);
				
	fnContent.appendChild(fnLettersGood);*/
	
     return;
   }
   		
     
	 return;
    var firstname = document.getElementById('firstname').value;
	localStorage.setItem('firstname', firstname);
	console.log("Storing first name");
}
//var firstNameInput = document.info.firstname.value;
// Last Name Input Box Validation
// --------------------------------------------------------------
function lastNameFocus(){
	var lnContent = document.getElementById('lnvalid');
	console.log("OnFocusLn" );
	 
	 //var fnvalid = document.getElementById("fnvalid").value="Please enter a valid first name. [Must contain letters only]";
	 var lnLettersFocus = document.createElement('p');
	 document.getElementById("lnvalid").style.color="black";
	 var lnLettersFocusText = document.createTextNode("Please enter a valid last name.");
	 lnLettersFocus.appendChild(lnLettersFocusText);
	 var lnLettersFocus2 = document.createElement('p');
	 var lnLettersFocusText2 = document.createTextNode("[Must contain letters only]");
	 lnLettersFocus2.appendChild(lnLettersFocusText2);
	 
	 lnContent.appendChild(lnLettersFocus);
	 lnContent.appendChild(lnLettersFocus2);
     //document.info.firstname.focus();	
	 return;
}

function lastNameValid()
{
	var letters = /^[a-zA-Z]+/;
	var numbers = /^[0-9]+$/;
	var lnContent = document.getElementById('lnvalid');
 
	var newImage = document.createElement('img');
	var newImageURL;
	var newImageAlt;

   if( document.info.lastname.value.match(numbers) || document.info.lastname.value === ''  )
   {
     console.log("Please enter only letters!" );
	 var lnvalid = document.getElementById("lnvalid").value="Please use letters only.";
	 
	 image = document.getElementById('validImage2');
     image.src = "img/x.gif";
	 
	 var lnLettersOnly = document.createElement('p');
	 document.getElementById("lnvalid").style.color="red";
	 var lnLettersOnlyText = document.createTextNode("Please use only letters!");
	 lnLettersOnly.appendChild(lnLettersOnlyText);
				
	 lnContent.appendChild(lnLettersOnly);
	
     document.info.lastname.focus();
     return;
   }
    
	else if( document.info.lastname.value.match(letters)  )
   {
     console.log("Please enter only letters!" );	
	 
	 //var fnvalid = document.getElementById("fnvalid").value="Please use letters only.";
	 //var validCheck = document.createElement('img').src="img/crow.png";
	 
	 image = document.getElementById('validImage2');
     image.src = "img/check.gif";
	 
	 var lnLettersGood = document.createElement('p');
	 document.getElementById("lnvalid").style.color="green";
	 var lnLettersGoodText = document.createTextNode("Please use only letters!");
	 lnLettersGood.appendChild(lnLettersGoodText);
				
	 lnContent.appendChild(lnLettersGood);
	
     return;
   }
   
   return;
}

//Email Validation
//-----------------------------------------------------
function emailFocus(){
	var emailContent = document.getElementById('emailvalid');
	console.log("OnFocusEmail" );
	 
	 var emailFocus = document.createElement('p');
	 document.getElementById("emailvalid").style.color="black";
	 var emailFocusText = document.createTextNode("Please enter a valid email address.");
	 emailFocus.appendChild(emailFocusText);
	 var emailFocus2 = document.createElement('p');
	 var emailFocusText2 = document.createTextNode("[Must contain @]");
	 emailFocus2.appendChild(emailFocusText2);

	
	emailContent.appendChild(emailFocus);
	emailContent.appendChild(emailFocus2);
     //document.info.firstname.focus();	
	 return;
}

function emailValid()
{
	var letters = /^[a-zA-Z]+/;
	var numbers = /^[0-9]+$/;
	var emailContent = document.getElementById('emailvalid');
 
	var newImage = document.createElement('img');
	var newImageURL;
	var newImageAlt;

	var email = "@";

	if ( document.info.email.value.indexOf(email) > -1 ) {
	console.log( "found @" );
	var emailGood = document.createElement('p');
	document.getElementById("emailvalid").style.color="green";
	 var emailGoodText = document.createTextNode("Valid!");
	 
	 image = document.getElementById('validImage3');
     image.src = "img/check.gif";
	 
	 emailGood.appendChild(emailGoodText);
				
	 emailContent.appendChild(emailGood);
	
     return;
	
	} else {
	 console.log( "@ not found" );
	 var emailOnly = document.createElement('p');
	 document.getElementById("emailvalid").style.color="red";
	 var emailOnlyText = document.createTextNode("Please use a valid email address!");
	 
	 image = document.getElementById('validImage3');
     image.src = "img/x.gif";
	 
	 emailOnly.appendChild(emailOnlyText);
				
	 emailContent.appendChild(emailOnly);
	
     document.info.email.focus();
	 return;
	}
}


//Phone Number Valid
//-----------------------------------------------------
function phoneFocus(){
	var phoneContent = document.getElementById('phonevalid');
	console.log("OnFocusPhone" );
	 
	 var phoneFocus = document.createElement('p');
	 document.getElementById("phonevalid").style.color="black";
	 var phoneFocusText = document.createTextNode("Please enter a valid phone number.");
	 phoneFocus.appendChild(phoneFocusText);
	 var phoneFocus2 = document.createElement('p');
	 var phoneFocusText2 = document.createTextNode("[Format: xxx-xxx-xxxx]");
	 phoneFocus2.appendChild(phoneFocusText2);
				
	phoneContent.appendChild(phoneFocus);
	phoneContent.appendChild(phoneFocus2);
	
     //document.info.firstname.focus();	
	 return;
}

function phoneValid()
{
	var phoneContent = document.getElementById('phonevalid');
 
	var newImage = document.createElement('img');
	var newImageURL;
	var newImageAlt;

	var phonenum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;  
	if(document.info.phone.value.match(phonenum))  
        {  
		console.log("phone number good");
	    var phoneGood = document.createElement('p');
		document.getElementById("phonevalid").style.color="green";
	    var phoneGoodText = document.createTextNode("Valid!");
		
		image = document.getElementById('validImage4');
		image.src = "img/check.gif";
	 
	    phoneGood.appendChild(phoneGoodText);
				
		phoneContent.appendChild(phoneGood);
		return true;  
        }  
     else  
        {  
        console.log("phone number invalid");
		var phoneOnly = document.createElement('p');
		document.getElementById("phonevalid").style.color="red";
		var phoneOnlyText = document.createTextNode("Please enter a valid phone number!");
		
		image = document.getElementById('validImage4');
		image.src = "img/x.gif";
		
		phoneOnly.appendChild(phoneOnlyText);
				
		phoneContent.appendChild(phoneOnly);
	
		document.info.phone.focus();		
        return false;  
        } 
}



//Sulley Validation
//-----------------------------------------------------
function sulleyFocus(){
	var sulleyContent = document.getElementById('sulleyvalid');
	console.log("OnFocusSulley" );
	 
	 var sulleyFocus = document.createElement('p');
	 document.getElementById("sulleyvalid").style.color="black";
	 var sulleyFocusText = document.createTextNode("Please enter a valid sulley address.");
	 sulleyFocus.appendChild(sulleyFocusText);
	 var sulleyFocus2 = document.createElement('p');
	 var sulleyFocusText2 = document.createTextNode("[Must begin with http:// and contain ~]");
	 sulleyFocus2.appendChild(sulleyFocusText2);
				
	sulleyContent.appendChild(sulleyFocus);
	sulleyContent.appendChild(sulleyFocus2);
	
     //document.info.firstname.focus();	
	 return;
}


function sulleyValid()
{
	var letters = /^[a-zA-Z]+/;
	var numbers = /^[0-9]+$/;

	var sulleyContent = document.getElementById('sulleyvalid');
 
	var newImage = document.createElement('img');
	var newImageURL;
	var newImageAlt;

	var sulley = "~";

	if ( document.info.sulley.value.indexOf(sulley) > -1 && document.info.sulley.value.indexOf('http://') === 0) {
	console.log( "found ~" );
	var sulleyGood = document.createElement('p');
	document.getElementById("sulleyvalid").style.color="green";
	 var sulleyGoodText = document.createTextNode("Valid!");
	 
	 image = document.getElementById('validImage5');
     image.src = "img/check.gif";
	 
	 sulleyGood.appendChild(sulleyGoodText);
				
	 sulleyContent.appendChild(sulleyGood);
	
     return;
	
	} else {
	 console.log( "~ not found" );
	 var sulleyOnly = document.createElement('p');
	 document.getElementById("sulleyvalid").style.color="red";
	 var sulleyOnlyText = document.createTextNode("Please use a valid sulley address!");
	 
	 image = document.getElementById('validImage5');
     image.src = "img/x.gif";
	 
	 sulleyOnly.appendChild(sulleyOnlyText);
				
	 sulleyContent.appendChild(sulleyOnly);
	
     document.info.sulley.focus();
	 return;
	}
}

function changeImage1(validImage)
  {
     image = document.getElementById('validImage1');
     image.src = "img/x.gif";
  }

function showValidImage(a) {
	event.preventDefault();

	var validImage1Check = document.getElementById('validImage1');

	while(validImage1Check.hasChildNodes()) {
		validImage1Check.removeChild(validImage1Check.lastChild);
	}
	console.log("Changing");
	if( document.info.firstname.value.match(numbers) || document.info.firstname.value === ''  ){
	
		document.getElementById("validImage1").src =a;
		showValidImage("img/x.gif");
		console.log("Image Change");

	}	
	
	newImage.setAttribute('src',newImageURL);
	newImage.setAttribute('alt',newImageAlt);

	validImage1Check.appendChild(validImage1);
}


function test_it(entry) {
	if (entry.value!=null && entry.value.length!=0) {
		entry.value=""+ eval(entry.value);
	}
	submitForm(entry.info);
}

/*
function image(thisImg) {
    var img = document.createElement('img');
    img.src = "img/" + thisImg;
    document.getElementById('resultsdiv').appendChild(img);
}

	if (total>8 && total<13){ 
		image('crowbadge.png');
		console.log("Display Crow Badge 2");
	}
*/


function checkbox(){
console.log("Checking checkbox status");
  if (document.info.anonymous.checked==true){
  console.log(document.info.anonymous.checked);
  console.log("Checkbox is checked");
	document.info.firstname.disabled=true;
	document.info.lastname.disabled=true;
	document.info.email.disabled=true;
	document.info.phone.disabled=true;
	document.info.sulley.disabled=true;
  }
	else if(document.info.anonymous.checked==false){
	console.log(document.info.anonymous.checked);
	console.log("Checkbox is not checked");
	document.info.firstname.disabled=false;
	document.info.lastname.disabled=false;
	document.info.email.disabled=false;
	document.info.phone.disabled=false;
	document.info.sulley.disabled=false;
  }
}

	

function submitForm(info){
console.log("questions start");
var total=0;



var total = total + (parseInt(document.info.question1.value) + parseInt(document.info.question2.value)
			 + parseInt(document.info.question3.value) + parseInt(document.info.question4.value));

console.log(document.info.question1.value);
console.log(document.info.question2.value);
console.log(document.info.question3.value);
console.log(document.info.question4.value);
console.log(parseInt(document.info.question1.value) + parseInt(document.info.question2.value)
			 + parseInt(document.info.question3.value) + parseInt(document.info.question4.value));	
console.log("quiz total = " + total);
	
/*	
	for (var i=0; i<5; i++)
		{
		console.log(document.info.question1.value);
		if (document.info.question1.checked){
		var total=total+(document.info.question1.value);
		}
	}

	for (var i=0; i<5; i++)
		{
		if (document.info.question2[i].checked){
		var total=total+parseInt(document.info.question2[i].value);
		}
	}	
	
	for (var i=0; i<5; i++)
		{
		if (document.info.question3[i].checked){
		var total=total+parseInt(document.info.question3[i].value);
		}
	}

	for (var i=0; i<5; i++)
		{
		if (document.info.question4[i].checked){
		var total=total+parseInt(document.info.question4[i].value);
		}
	}
*/	
	if (total>0 && total<6){ 
	//Cambot Results
		var crowh1 = document.createElement("p");
		var crow1h1 = document.createTextNode("Your Results");
		document.getElementById('resultsdiv').appendChild(crowh1);
		crowh1.appendChild(crow1h1);
		
		var img = document.createElement('img')
		img.src = 'img/cambotbadge.png';
		document.getElementById('resultsdiv').appendChild(img);
		
		console.log("Display Cambot Badge");		
		
		
		var formcrow = document.createElement("p");
		var formcrow1 = document.createTextNode("Share your results with your friends!");
		var formcrow2 = document.createElement("textarea");
		formcrow2.setAttribute("id", "crowta");
		
		var str = "Take the MST3k Personality Quiz!<br /><a href='survey.html'><img src='img/crowbadge.png' alt='Crow Badge' /></a>";
		console.log(str);
		//document.getElementById("crowta").firstChild="hi";
		//var formcrow3 = document.createTextNode("Take the MST3K Character Personality Quiz");
		//formcrow2.appendChild(str);
		
		document.getElementById('resultsdiv').appendChild(formcrow);
		formcrow.appendChild(formcrow1);
		document.getElementById('resultsdiv').appendChild(formcrow2);
		formcrow.appendChild(formcrow2);
	}
	else if (total>5 && total<9){
	//Gypsy Results
			var crowh1 = document.createElement("p");
		var crow1h1 = document.createTextNode("Your Results");
		document.getElementById('resultsdiv').appendChild(crowh1);
		crowh1.appendChild(crow1h1);
		
		var img = document.createElement('img')
		img.src = 'img/gypsybadge.png';
		document.getElementById('resultsdiv').appendChild(img);
		
		console.log("Display Gypsy Badge");		
		
		
		var formcrow = document.createElement("p");
		var formcrow1 = document.createTextNode("Share your results with your friends!");
		var formcrow2 = document.createElement("textarea");
		formcrow2.setAttribute("id", "crowta");
		
		var str = "Take the MST3k Personality Quiz!<br /><a href='survey.html'><img src='img/crowbadge.png' alt='Crow Badge' /></a>";
		console.log(str);
		//document.getElementById("crowta").firstChild="hi";
		//var formcrow3 = document.createTextNode("Take the MST3K Character Personality Quiz");
		//formcrow2.appendChild(str);
		
		document.getElementById('resultsdiv').appendChild(formcrow);
		formcrow.appendChild(formcrow1);
		document.getElementById('resultsdiv').appendChild(formcrow2);
		formcrow.appendChild(formcrow2);
	}
	else if (total>8 && total<13){ 
		//Crow Results
		var crowh1 = document.createElement("p");
		var crow1h1 = document.createTextNode("Your Results");
		document.getElementById('resultsdiv').appendChild(crowh1);
		crowh1.appendChild(crow1h1);
		
		var img = document.createElement('img')
		img.src = 'img/crowbadge.png';
		document.getElementById('resultsdiv').appendChild(img);
		
		console.log("Display Crow Badge");		
		
		
		var formcrow = document.createElement("p");
		var formcrow1 = document.createTextNode("Share your results with your friends!");
		var formcrow2 = document.createElement("textarea");
		formcrow2.setAttribute("id", "crowta");
		
		var str = "Take the MST3k Personality Quiz!<br /><a href='survey.html'><img src='img/crowbadge.png' alt='Crow Badge' /></a>";
		console.log(str);
		//document.getElementById("crowta").firstChild="hi";
		//var formcrow3 = document.createTextNode("Take the MST3K Character Personality Quiz");
		//formcrow2.appendChild(str);
		
		document.getElementById('resultsdiv').appendChild(formcrow);
		formcrow.appendChild(formcrow1);
		document.getElementById('resultsdiv').appendChild(formcrow2);
		formcrow.appendChild(formcrow2);
		//document.getElementById('resultsdiv').appendChild(formcrow3);
		//formcrow2.appendChild(formcrow3);
		//formcrow3.appendChild(str);
	}

	else if (total>11 && total<17){
	//Tom Results
		var crowh1 = document.createElement("p");
		var crow1h1 = document.createTextNode("Your Results");
		document.getElementById('resultsdiv').appendChild(crowh1);
		crowh1.appendChild(crow1h1);
		
		var img = document.createElement('img')
		img.src = 'img/tombadge.png';
		document.getElementById('resultsdiv').appendChild(img);
		
		console.log("Display Tom Badge");		
		
		
		var formcrow = document.createElement("p");
		var formcrow1 = document.createTextNode("Share your results with your friends!");
		var formcrow2 = document.createElement("textarea");
		formcrow2.setAttribute("id", "crowta");
		
		var str = "Take the MST3k Personality Quiz!<br /><a href='survey.html'><img src='img/crowbadge.png' alt='Crow Badge' /></a>";
		console.log(str);
		//document.getElementById("crowta").firstChild="hi";
		//var formcrow3 = document.createTextNode("Take the MST3K Character Personality Quiz");
		//formcrow2.appendChild(str);
		
		document.getElementById('resultsdiv').appendChild(formcrow);
		formcrow.appendChild(formcrow1);
		document.getElementById('resultsdiv').appendChild(formcrow2);
		formcrow.appendChild(formcrow2);
	}

	else { window.location="results.html" }
	console.log("quiz answers didn't tally");

}


	var fnContent2 = document.getElementById(fnDisplayBox);
	console.log("fnBox" );
	 
	 //var fnvalid = document.getElementById("fnvalid").value="Please enter a valid first name. [Must contain letters only]";
	 var fnBox = document.createElement('p');
	 document.getElementById(fnDisplayBox).style.color="black";
	 var fnBoxText = document.createTextNode("Please enter a valid first name.");
	 fnBox.appendChild(fnBoxText);
	 var fnBox2 = document.createElement('p');
	 var fnBoxText2 = document.createTextNode("[Must contain letters only]");
	 fnBox2.appendChild(fnBoxText2);
				
	fnContent2.appendChild(fnBox);
	fnContent2.appendChild(fnBox2);
	
     //document.info.firstname.focus();	
	 return;

/*
//function firstName(){
	var fnDisplayContent = document.getElementById('fnDisplayBox');
	console.log("Display first name info" );
	
	
	if (typeof(Storage) != "undefined")
  {
  // Store
  localStorage.setItem("firstnames", "first name");
  // Retrieve
  document.displayInfo.fnDisplayBox.innerHTML="Blah";
  //localStorage.getItem("firstnames").value;
  }
else
  {
  document.getElementById('fnDisplayBox').innerHTML="Sorry, your browser does not support Web Storage...";
  }
	
	//var fnDisplay = document.getElementById('firstname').value;
	//document.displayInfo.fnDisplayBox.value;
	var firstname = localStorage.getItem("firstname");
	console.log(localStorage.getItem("firstname"));
	console.log(firstname);
	//document.getElementById('firstname').value;
	
	var fnDisplay = document.createElement('p');
	 //document.getElementById("firstname").style.color="black";
	// var fnDisplayText = document.info.firstname.value;
	 //fnDisplay.appendChild(fnDisplayText);
	
	fnDisplayContent.appendChild(fnDisplay);
	
//}
	*/
	/*
   if( document.info.email.value.match(numbers) || document.info.lastname.value === ''  )
   {
     console.log("Please enter only letters!" );
	 document.getElementById("lnvalid").style.color="red";
	 //var emailvalid = document.getElementById("emailvalid").value="Please use letters only.";
	 var emailOnly = document.createElement('p');
	 var emailOnlyText = document.createTextNode("Please use valid characters!");
	 emailOnly.appendChild(emailOnlyText);
				
	 emailContent.appendChild(emailOnly);
	
     document.info.email.focus();
     return;
   }
    
	else if( document.info.email.value.match(letters)  )
   {
     console.log("Please enter only letters!" );
	 document.getElementById("emailvalid").style.color="green";
	
	 
	 //var fnvalid = document.getElementById("fnvalid").value="Please use letters only.";
	 //var validCheck = document.createElement('img').src="img/crow.png";
	 var emailGood = document.createElement('p');
	 var emailGoodText = document.createTextNode("Valid!");
	 emailGood.appendChild(emailGoodText);
				
	 emailContent.appendChild(emailGood);
	
     return;
   }
   
   return;
}
*/


//window.addEventListener('load',init,false);
//window.addEventListener('load',firstNameValid,false);

