
//user registration 
//function addDetails() {
  //  console.log('Add button clicked');
    // Check if user has entered all required data
    // If not show error message
    // Else post it
 //             postData();
//}
$(document).ready(function(){
    //initialize the firebase app
  
  
    // Initialize Firebase
    /*var config = {
      apiKey: "AIzaSyD-kMYgVGCAGUYr7Kon6AUxUPvdpQW-Yc0",
      authDomain: "loginid-f42da.firebaseapp.com",
      databaseURL: "https://loginid-f42da.firebaseio.com",
      projectId: "loginid-f42da",
      storageBucket: "loginid-f42da.appspot.com",
      messagingSenderId: "301939719261"
    };
    firebase.initializeApp(config);
*/

function postData() {
    console.log('Register button is clicked');
    const data = {
        UserName: $('#UserName').val(),
        Password: $('#pwd').val()
    };
    $.ajax({
        type: "POST",
        url: 'https://loginid-f42da.firebaseio.com/userids.json',
        data: JSON.stringify(data),
        success: onPostSuccess,
        // dataType: dataType
    });
}

const onPostSuccess = (data) => {
    console.log('Posting to firebase success');
    console.log(data);
}

//Login 
$('#subBtn').click(function (){
    console.log('submit button clicked');
    //get the data from user
const user = {
                UserName: $('#UserName').val(),
                Password: $('#pwd').val()
            };
//get the data from firebase 
$.ajax({
        type:"GET",
        url: 'https://loginid-f42da.firebaseio.com/userids.json',
        data: JSON.parse(data),
        success: onGetSuccess,
                // dataType: dataType
            });
$.each(data, function () {
                    console.log("ID: " + data.UserName);
                    console.log("First Name: " + data.Password);
                   // console.log("Last Name: " + this.lastname);
                 //   console.log(" ");
   //compare them and authenticate user 
if((user.UserName === data.UserName) && (user.pwd === data.Password) ){
console.log("valid user");
    }
else{
console.log("invalid user");
    }
});
});

    function onGetSuccess()
    {
        const onGetSuccess = (data) => {
            console.log('getting the data from firebase success');
            console.log(data);
        }
    }
});
        