var firebaseConfig = {
  apiKey: "AIzaSyDOzPYx5AmiKTmhkNUZ48ZJixrTX9LKiD0",
  authDomain: "kwitterapp-e69be.firebaseapp.com",
  databaseURL: "https://kwitterapp-e69be-default-rtdb.firebaseio.com",
  projectId: "kwitterapp-e69be",
  storageBucket: "kwitterapp-e69be.appspot.com",
  messagingSenderId: "114924448449",
  appId: "1:114924448449:web:8867265e0e88ef42f90240"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

rname=localStorage.getItem("user_name");
document.getElementById("name").innerHTML="Welcome" + rname + "!";


function addroom()
{
room_name = document.getElementById("roomname").value;

firebase.database().ref("/").child(room_name).update({
  purpose : "adding room name"
});

  localStorage.setItem("room_name", room_name);
  
  window.location = "kwiter.html";
}
function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
Room_names = childKey;
     console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
  });
});
}
getData();

 function logout1()
 {
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
   window.location="index.html";
 }


function redirectToRoomName(name)
{
  localStorage.setItem("room_name",name);
  window.location="kwiter.html";
}