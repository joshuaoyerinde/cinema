
possition=[];
	var bab="";
	function generate(){
		for(i=1; i<=block.value; i++){
			possition[i]="";
			console.log(possition.length);
		}
		sitDisplay();
  	}
	
	function allocator(){
		var rel;
		var allnm; 
		if (possition[cn.value]=="") {
			possition[cn.value]=nm.value;

		}
	
		 else if(cn.value==""){
			alert("sofe joko abii");
				gene.focus();
	  
	 	}else if (cn.value > block.value){
	  		alert("please will have maximum of "+block.value+" sit here");
	  		rel=prompt("you can input another number here");
	  		cn.value=rel;
	  
		}else{
			alert("please this sit had been taken by another viewers");
			rel= prompt("you can input another number here");
			allnm= prompt("your name as well");
			alert("thanks for your contribution");
			possition[rel]=allnm;
		}

		sitDisplay();
	}
	receipt();
	
	function sitDisplay()
	{
		var indix; 
		bab= "<table><tr>";
		for(x=1; x<=block.value; x++){
		
			indix++;
		
			if (indix<=4) {
				bab+="<td><img src='ch.jpg' width='255px'height='220px'>"+"<br>"+possition[x]+"</td>";
			}else{
				indix=1;
					bab+="</tr><td><img src='ch.jpg' width='255px'height='220px'>"+"<br>"+possition[x]+"</td>";
			}
			
		}
		
		bab+="</tr></table>";
		demo.innerHTML = bab;
	}
	function receipt(){
		fn.value=nm.value.toUpperCase();
		sitLocate.value=cn.value;
		document.getElementById('goTo').style.display="none";
		document.getElementById('progress').style.display="block";
	}
	function prevy(){
		document.getElementById("progress").style.display="none";
		document.getElementById("goTo").style.display="block";
	}
	
	function fol(){
		block.focus();
	}