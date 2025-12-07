//JS FOR WEBSITE


//HOME AND ABOUT PAGE JS_ HANDE EDA OZDEMIR
const currentPage = window.location.pathname.split('/').pop();/*detects which page does user currently use*/

if (currentPage=="home.html"){
	let confirmMessage=confirm("Want to know more about Life Under Water?","You won't be regretting!")
	if(confirmMessage==true){
		i=0
		promptMessage=prompt("What do you want to learn about?","About, Gallery, NASA, Threats, What can we do?")
		while(i==0){
				
			if (promptMessage!="About"&&promptMessage!="Gallery"&&promptMessage!="NASA"&&promptMessage!="Threats"&&promptMessage!="What can we do?"){
					alert("We dont have that content.")
					promptMessage=prompt("What do you want to learn about?","About, Gallery, NASA, Threats, What can we do?")
				}
			else{
				alert("You can find "+promptMessage+" in the menu. Have fun!!")
				i=1
			}
		}
	}
	if(confirmMessage==false){
		promptMessage=prompt("Why you don't want to learn about it?","Because...")
		alert("Don't worry. Learning new things won't make any harm! So let's go!!")
	}
		
}






