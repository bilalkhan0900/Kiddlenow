const firebaseConfig = {
    apiKey: "AIzaSyCeI-Wxh9GgOZPOOuwV6coJJGV7FaDJZxo",
    authDomain: "kiddlenow-c9b8f.firebaseapp.com",
    databaseURL: "https://kiddlenow-c9b8f-default-rtdb.firebaseio.com",
    projectId: "kiddlenow-c9b8f",
    storageBucket: "kiddlenow-c9b8f.appspot.com",
    messagingSenderId: "317655397290",
    appId: "1:317655397290:web:c87d5a5410fb98345631d3",
    measurementId: "G-XRESW742SE"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
  
  firebase.auth.Auth.Persistence.LOCAL;


  $("#btn-login").click(function()
  {
      var email = $("#email").val();
      var password = $("#password").val();

      if(email != " " && password != " ")
      {
          var result = firebase.auth().signInWithEmailAndPassword(email,password);
          
          result.catch(function(error)
          {
              var errorCode = error.code;
              var errorMessage = error.message;

              console.log(errorCode);
              console.log(errorMessage);

              window.alert("Message: " + errorMessage);
              
          } )
      
        }
        else 
        {
            window.alert("Incomplete or Wrong Credentials!!. ");
        }
  } );