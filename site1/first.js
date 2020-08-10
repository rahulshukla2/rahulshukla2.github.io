window.onload = function(){

document.getElementById("demo1").addEventListener("click",disp);

document.getElementById("div1").style.visibility = "hidden";
}
function disp()
{
    
    
    var myCollection = document.getElementsByTagName("input");
    var collection = document.getElementsByClassName("td");
   
    
    
    var i;
   
    for(i=0; i<collection.length; i++)
    {
          
            collection[i].innerHTML =  myCollection[i].value+"<br/>";
    }
    document.getElementById("div1").style.visibility = "visible";
}

