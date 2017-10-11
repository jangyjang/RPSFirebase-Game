  // Initialize Firebase
var config = {
    apiKey: "AIzaSyAcQYicxzljgo3xlcacVsoMIVjxXin61bc",
    authDomain: "rockpaperscissors-b84f6.firebaseapp.com",
    databaseURL: "https://rockpaperscissors-b84f6.firebaseio.com",
    projectId: "rockpaperscissors-b84f6",
    storageBucket: "rockpaperscissors-b84f6.appspot.com",
    messagingSenderId: "626783103802"
  };
  firebase.initializeApp(config);

var database = firebase.database();
var playerDB = database.ref("player");
var turnDB = database.ref("turn");
var chatDB = database.ref("chat");

var key = ""
var winCount = 0;
var lossCount = 0;
var choice = "";

var turnCount= 0;
var playerCount = 0;


// turnDB.set({

// });

//set up a functions that captures users info and put in database
//set up a functions that defines what to do back to UI when a user is added to the database
//set up a function that check the existence of users
//set up a function that allow users to select their choice
//set up a function that check and display winnings
//set up a chat function
//set up a function that reset game when a user disconnects


var key = database.ref().child("player").push().key
var turnCountModulus = turnCount%2


//function to add player to capure user info, put write the into firebase, and read the info from firebase
$("#submitName").on("click", function() {
   // Don't refresh the page!
event.preventDefault();
  var playerName = $("#nameInput").val().trim();
  //var key = database.ref().child("player").push().key
  var playerInfo = {
    playerName: playerName,
    winCount: winCount,
    lossCount: lossCount,
    choice: choice,
    key: key
  }

  //write to firebase
  var updates = {};
  updates["/player/" + key] = playerInfo;
  database.ref().update(updates)

  //read from firebase when a child is added
  var playerUpdate = database.ref("player").on("child_added", function (snapshot) {
    console.log(snapshot.val())
    $("#annoucement").text("Hello " + snapshot.val().playerName)
  })

  formReset ()


$(".img-rounded").on("click",function(){
    turnCount++;
    var choice = $(this).attr("alt")
    var playerInfo = {
      playerName: playerName,
      winCount: winCount,
      lossCount: lossCount,
      choice: choice,
      key: key
    }
    turnCount++;
    console.log("turnCount " + turnCount)

    //write to firebase
    var updates = {};
    updates["/player/" + key] = playerInfo;
    database.ref().update(updates)


    //read from firebase
    var readChoiceUpdate = database.ref("player/" + key + "/choice").on("value", function (snapshot) {
      console.log(snapshot.val())
    })

    // var turnInfo = {
    //   turn: turnCount
    // }

    // //write to firebase 
    // var updateturnInfo = {};
    // updateturnInfo = turnInfo
    // database.ref().update(updateturnInfo)

    // //read from firebase
    // var turnInfoUpdate = database.ref("turn").on("value", function (snapshot) {
    //   console.log(snapshot.val())
    // })

    
});

turnHandling ()

});




function formReset(){
  document.getElementById("nameForm").reset();
}



// function to handle players' turns
function turnHandling (){
    
    var turnInfo = {
      turn: turnCount,
    }

    //write to firebase 
    var updateturnInfo = {};
    updateturnInfo = turnInfo
    database.ref().update(updateturnInfo)

    //read from firebase
    var turnInfoUpdate = database.ref("turn").on("value", function (snapshot) {
      console.log(snapshot.val())
    })

}


// // function to handle what user select 
// $(".img-rounded").on("click",function(){
//     var choice = $(this).attr("alt")
//     var playerName = database.ref("player/" + key + "/playerName")
//     var key = playerDB.val()

//     var playerInfo = {
//       playerName: playerName,
//       winCount: winCount,
//       lossCount: lossCount,
//       choice: choice,
//       key: key
//     }

//     //write to firebase
//     var updates = {};
//     updates["/player/" + key] = playerInfo;
//     database.ref().update(updates)

//     //read from firebase
//     var readChoiceUpdate = database.ref("player/" + key + "/choice").on("value", function (snapshot) {
//       console.log(snapshot.val())
//     })
// });




// //function to confirm existence of players
// playerDB.on("value", function (snapshot){
//   //console.log("numChild of Player = " + snapshot.numChildren())
//   if (snapshot.numChildren() === 1) {
//     $("#annoucement").text("Player 1 is ready. Waiting for Player 2");
//   }
//   if (snapshot.numChildren() === 2){
//     $("#annoucement").text("Player 1, It's your your turn");
//     //prepGame();
//   }
// });




















  

    




