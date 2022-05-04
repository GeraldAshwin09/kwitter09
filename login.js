function signin()
{
   user1=document.getElementById("q").value;
    localStorage.setItem("user_name",user1);

    window.location="chat.html";
}