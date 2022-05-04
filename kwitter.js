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

  
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");

  function send()
  {
      msg= document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
      });

      document.getElementById("msg").value="";
  }

  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output_div").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
  firebase_message_id= childKey;
  message_data= childData;

  name= message_data['name'];
  message= message_data['message'];
  like= message_data['like'];
  
  name_tag="<h4>"+ name +"<img class='user_tick' src='t.png'></h4>";
  message_tag="<h4 class='message_h4'>"+ message +"</h4>"
  button_tag="<button class='btn btn-warning'id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
  span_tag="<span class='glyphicon glyphicon-thumbs-up'> Like:"+ like +"</span></button><hr>";

row= name_tag + message_tag + button_tag + span_tag;
document.getElementById("output_div").innerHTML +=row;
}}); });}
getData();

function updateLike(message_id)
{

    button_id = message_id;
    likes= document.getElementById(button_id).value;
    updated_likes = Number(likes)  + 1;

    firebase.database().ref(room_name).child(message_id).update({
        like: updated_likes
    });
}

function logout1()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}
