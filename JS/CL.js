function CLG() {
	// for index page
		if (window.location.href.indexOf("index.html") > -1)
			{window.location.replace("./gr/indexgr.html");}
	
	//About us page
		else if (window.location.href.indexOf("en/aboutus.html") > -1)
			{window.location.replace("../gr/aboutus.html");}

	//Services page
		else if (window.location.href.indexOf("en/services.html") > -1)
			{window.location.replace("../gr/services.html");}
		
	//Contact us page
		else if (window.location.href.indexOf("en/contact.html") > -1)
			{window.location.replace("../gr/contact.html");}
		
		else{
			//var Debug=window.location.href.indexOf("");
			
			alert ("Η σελίδα έχει ήδη μεταφραστεί");
		}
}



function CLE() {
	// for index page
		if (window.location.href.indexOf("gr/indexgr.html") > -1)
			{window.location.replace("../index.html");}
	
	//About us page
		else if (window.location.href.indexOf("gr/aboutus.html") > -1)
			{window.location.replace("../en/aboutus.html");}

	//Services page
		else if (window.location.href.indexOf("gr/services.html") > -1)
			{window.location.replace("../en/services.html");}
		
	//Contact us page
		else if (window.location.href.indexOf("gr/contact.html") > -1)
			{window.location.replace("../en/contact.html");}
			
		else{
			//var Debug=window.location.href.indexOf("");
			alert ("the page has already been translated");}
}
