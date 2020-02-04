/*
function CPH() {
		if (window.location.href.indexOf("/GR/") > -1)
			{window.location.replace("./indexGR.html");}
		
		else if( window.location.href.indexOf("/EN/") > -1)
			{window.location.replace("./index.html");}
		
		else
			{window.location.replace("index.html");}

}*/

function CPH() {
		if (window.location.href.indexOf("/GR/") > -1)
			{window.location.replace("./indexGR.html");}
		else if( window.location.href.indexOf("/EN/") > -1)
			{window.location.replace("../index.html");}
		else
			{window.location.replace("./index.html");}

}


function CPA() {
		if (window.location.href.indexOf("/GR/") > -1)
			{window.location.replace("../GR/AboutUs.html");}
		else if( window.location.href.indexOf("/EN/") > -1)
			{window.location.replace("../EN/AboutUs.html");}
		else
			{window.location.replace("./EN/AboutUs.html");}
		

}

function CPS() {
		if (window.location.href.indexOf("/GR/") > -1)
			{window.location.replace("../GR/services.html");}
		else if( window.location.href.indexOf("/EN/") > -1)
			{window.location.replace("../EN/Services.html");}
		else
			{window.location.replace("./EN/Services.html");}
}

function CPC() {
		if (window.location.href.indexOf("/GR/") > -1)
			{window.location.replace("../GR/Contact.html");}
		else if( window.location.href.indexOf("/EN/") > -1)
			{window.location.replace("../EN/Contact.html");}
		else
			{window.location.replace("./EN/Contact.html");}

}

function CU(){

		if (window.location.href.indexOf("/GR/") > -1)
			{window.location.replace("../GR/Contact.html");}
		else
			{window.location.replace("./EN/Contact.html");}
}