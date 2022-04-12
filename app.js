// define the callAPI function that takes quiz answers as parameters
var quizAPI = (fName,lName,email,Q1Size,Q2Climate,Q3Roll,Q4Arms)=>{
    // instantiate a headers object
    var myHeaders = new Headers();
    // add content type header to object
    myHeaders.append("Content-Type", "application/json");
    // using built in JSON utility package turn object to string and store in a variable
    var answers = JSON.stringify({"fName":fName,"lName":lName,"email":email,"Q1Size":Q1Size,"Q2Climate":Q2Climate,"Q3Roll":Q3Roll,"Q4Arms":Q4Arms});

    // create a JSON object with parameters for API call and store in a variable
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: answers,
        redirect: 'follow',
        
    };
    // make API call with parameters and use promises to get response
    fetch("https://4nqem5uyhg.execute-api.us-east-1.amazonaws.com/prod", requestOptions)
    .then(response => response.text())
    
    .catch(error => console.log('error', error));
}
