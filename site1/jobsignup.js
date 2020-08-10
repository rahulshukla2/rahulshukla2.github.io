window.onload = function(){

document.getElementById("demo").addEventListener("click",display);

document.getElementById("div1").style.visibility = "hidden";
}

function display()
{
    
    var myCollection1 = document.getElementsByClassName("details");
    var collection1 = document.getElementsByClassName("td");
   
    
    
    var i;
   
    for(i=0; i<collection1.length; i++)
    {
          
            collection1[i].innerHTML =  myCollection1[i].value+"<br/>";
    }
    document.getElementById("div1").style.visibility = "visible";
}

