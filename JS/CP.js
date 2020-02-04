/*
function CPH() {
		if (window.location.href.indexOf("/gr/") > -1)
			{window.location.replace("./indexgr.html");}
		
		else if( window.location.href.indexOf("/en/") > -1)
			{window.location.replace("./index.html");}
		
		else
			{window.location.replace("index.html");}

}*/

function CPH() {
		if (window.location.href.indexOf("/gr/") > -1)
			{window.location.replace("./indexgr.html");}
		else if( window.location.href.indexOf("/en/") > -1)
			{window.location.replace("../index.html");}
		else
			{window.location.replace("./index.html");}

}


function CPA() {
		if (window.location.href.indexOf("/gr/") > -1)
			{window.location.replace("../gr/aboutus.html");}
		else if( window.location.href.indexOf("/en/") > -1)
			{window.location.replace("../en/aboutus.html");}
		else
			{window.location.replace("./en/aboutus.html");}
		

}

function CPS() {
		if (window.location.href.indexOf("/gr/") > -1)
			{window.location.replace("../gr/services.html");}
		else if( window.location.href.indexOf("/en/") > -1)
			{window.location.replace("../en/services.html");}
		else
			{window.location.replace("./en/services.html");}
}

function CPC() {
		if (window.location.href.indexOf("/gr/") > -1)
			{window.location.replace("../gr/contact.html");}
		else if( window.location.href.indexOf("/en/") > -1)
			{window.location.replace("../en/contact.html");}
		else
			{window.location.replace("./en/contact.html");}

}

function CU(){

		if (window.location.href.indexOf("/gr/") > -1)
			{window.location.replace("../gr/Contact.html");}
		else
			{window.location.replace("./en/contact.html");}
}