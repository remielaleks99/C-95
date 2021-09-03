const firebaseConfig = {
    apiKey: "AIzaSyBCPCvaGMXDmyXvCIM6cFhNq7d4c6W-Y7c",
    authDomain: "kwitter-app-b56c0.firebaseapp.com",
    databaseURL: "https://kwitter-app-b56c0-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-b56c0",
    storageBucket: "kwitter-app-b56c0.appspot.com",
    messagingSenderId: "705184772536",
    appId: "1:705184772536:web:c6e5a98df20f2a6e781f4d"
  };
  firebase.initializeApp(firebaseConfig);
var user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome" + user_name + "!";

function addRoom() {
    var room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitterpage.html"
}