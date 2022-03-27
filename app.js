// define the callAPI function that takes quiz answers as parameters
var quizAPI = (Q1Size,Q2Climate,Q3Roll,Q4Arms)=>{
    // instantiate a headers object
    var myHeaders = new Headers();
    // add content type header to object
    myHeaders.append("Content-Type", "application/json");
    // using built in JSON utility package turn object to string and store in a variable
    var answers = JSON.stringify({"Q1Size":Q1Size,"Q2Climate":Q2Climate,"Q3Roll":Q3Roll,"Q4Arms":Q4Arms});

    // create a JSON object with parameters for API call and store in a variable
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: answers,
        redirect: 'follow'
    };
    // make API call with parameters and use promises to get response
    fetch("https://4nqem5uyhg.execute-api.us-east-1.amazonaws.com/prod", requestOptions)
    .then(response => response.text())
    //.then(result => alert(JSON.parse(result).body))
    .catch(error => console.log('error', error));
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("emailmodal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
var launchmodal = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 