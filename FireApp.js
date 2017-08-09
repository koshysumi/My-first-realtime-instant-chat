 var config = {
   apiKey: "AIzaSyCCh6D0GDJoJwhTWuJ06HN7WxzcLDpT1oE",
   authDomain: "fireapp-4ccff.firebaseapp.com",
   databaseURL: "https://fireapp-4ccff.firebaseio.com",
   projectId: "fireapp-4ccff",
   storageBucket: "",
   messagingSenderId: "629847164270"
 };
 firebase.initializeApp(config);
 var myFirebase = firebase.database().ref();
 var usernameInput = document.querySelector('#username');
var textInput = document.querySelector('#text');
var postButton = document.querySelector('#post');
 postButton.addEventListener("click", function () {
   var msgUser = usernameInput.value;
   var msgText = textInput.value;
    myFirebase.push({username: msgUser, text:msgText});
    textInput.value = "";

 });

 var beginListening = function() {
   myFirebase.on('child_added', function(snapshot) {
     var msg = snapshot.val();
       var msgUsernameElement = document.createElement("b");
       msgUsernameElement.textContent = msg.username;
       var msgTextElement = document.createElement("p");
       msgTextElement.textContent = msg.text;
       var msgElement = document.createElement("div");
       msgElement.appendChild(msgUsernameElement);
       msgElement.appendChild(msgTextElement);
       msgElement.className = "msg";
       document.getElementById("results").appendChild(msgElement);

   });

 }
 beginListening();
