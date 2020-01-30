function refresh() {

    setTimeout(function () {
        location.reload()
    }, 10000);
}


	function CPR(){
		var d = new Date();
		
		if (d.getFullYear()>2018){
			document.getElementById("CDT").innerHTML ="Copyright ©" +2018 +"-" +d.getFullYear()+ " NeutronSoft";}
		else if  ((d.getFullYear()==2018)|| (d.getFullYear()<2018)){
		document.getElementById("CDT").innerHTML ="Copyright © " + 2018+ " ENSO";
		}

	}