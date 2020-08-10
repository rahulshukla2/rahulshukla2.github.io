
function check()
{
    var uname=document.getElementById("uname").value;
    var pass=document.getElementById("pass").value;
    var para = document.getElementById("p1");
   
    if(uname=="admin" && pass=="admin")
    {
       alert ("Login successfully");
        window.location = "success.html";
        window.location="home.html";
       
        
    }
    else
    {
        para.innerHTML="Invalid Credentials";
        alert('Invalid credentials');
        return false;
    }
}

