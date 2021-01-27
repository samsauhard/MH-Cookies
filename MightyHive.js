var red = 0;
var blue = 0;



function changeColor() {  
    
if(document.cookie.indexOf('color=')==-1)
{
    x = (Math.floor(Math.random() * 2) == 0);       
	
	if(x){
    	document.cookie ="color=" + "red"; 
	document.cookie = "count=1" ;
	 set("red");	
    	}
	
	else{
 	document.cookie ="color=" + "blue"; 	  
	document.cookie = "count=1" ;    
	set("blue");    
	}	
}   
 
else
{
	var decodedCookie = document.cookie.split(";");
	cookiearray = decodedCookie[0].split('=');
	var valueColor = cookiearray[1];
	
	
	try {
		var cookiearraycount = decodedCookie[1].split('=');
	 	var valueCount = parseInt(cookiearraycount[1]);
		var mcount = valueCount+1;
		document.cookie = "count=" + mcount.toString(); 
		}
	catch(err) {
		document.cookie = "color=" + valueColor;
  		document.cookie = "count=1";
		mcount=1;
		}
	
	document.getElementById("text").innerHTML = "Your Color is " + valueColor + "<br/>" + "This is your " + mcount.toString() +" visit.";	
	set(valueColor);    
}

};

function set(colors) {    
    document.getElementById("ball").style.backgroundColor = colors;    
};
