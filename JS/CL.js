function CLG() {
	// for index page
		if (window.location.href.indexOf("index.html") > -1)
			{window.location.replace("./GR/indexGR.html");}
	
	//About us page
		else if (window.location.href.indexOf("EN/AboutUs.html") > -1)
			{window.location.replace("../GR/AboutUs.html");}

	//Services page
		else if (window.location.href.indexOf("EN/Services.html") > -1)
			{window.location.replace("../GR/Services.html");}
		
	//Contact us page
		else if (window.location.href.indexOf("EN/Contact.html") > -1)
			{window.location.replace("../GR/Contact.html");}
		
		else{
			//var Debug=window.location.href.indexOf("");
			
			alert ("Η σελίδα έχει ήδη μεταφραστεί");
		}
}




function CLE() {
	// for index page
		if (window.location.href.indexOf("GR/indexGR.html") > -1)
			{window.location.replace("../index.html");}
	
	//About us page
		else if (window.location.href.indexOf("GR/AboutUs.html") > -1)
			{window.location.replace("../EN/AboutUs.html");}

	//Services page
		else if (window.location.href.indexOf("GR/Services.html") > -1)
			{window.location.replace("../EN/Services.html");}
		
	//Contact us page
		else if (window.location.href.indexOf("GR/Contact.html") > -1)
			{window.location.replace("../EN/Contact.html");}
			
		else{
			//var Debug=window.location.href.indexOf("");
			alert ("the page has already been translated");}
}
