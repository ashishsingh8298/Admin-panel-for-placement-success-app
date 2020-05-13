firebase.initializeApp(firebaseConfig);

// Call the dataTables jQuery plugin
// $(document).ready(function() {
//   $('#dataTable').DataTable();
// });
var table = $('#dataTable').DataTable();

// var rootRef = firebase.database().ref("Users");


var database = firebase.database();
var ref = database.ref("teacher");

ref.once('value',   function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childKey = childSnapshot.key;
      var childData = childSnapshot.val();
      // ...
      var key=childKey;
      var name=childData['Name'];
      var email=childData['Email'];
      var phoneNumber=childData['Phone Number'];
      var dataSet = [key,name,email,phoneNumber];
    	table.row.add(dataSet).draw();
    });
  });
