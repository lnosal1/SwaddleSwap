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

// define the callAPI function that takes recommended swaddles as parameters
var recommendedAPI = (Id, quizanswers, childname, Name, buttonLink, Name2, buttonLink2, Name3, buttonLink3 )=>{
    // instantiate a headers object
    var recommendedHeaders = new Headers();
    // add content type header to object
    myHeaders.append("Content-Type", "application/json");
    // using built in JSON utility package turn object to string and store in a variable
    var swaddles = JSON.stringify({'Id': Id,'quizanswer':quizanswers,'childname': childname,'Name': Name,'buttonLink': buttonLink,'Name2': Name2, 'buttonLink2': buttonLink2,'Name3': Name3,'buttonLink3': buttonLink3,});

    // create a JSON object with parameters for API call and store in a variable
    var requestOptions = {
        method: 'POST',
        headers: recommendedHeaders,
        body: swaddles,
        redirect: 'follow',
        
    };
    // make API call with parameters and use promises to get response
    fetch("https://4nqem5uyhg.execute-api.us-east-1.amazonaws.com/prod", requestOptions)
    .then(response => response.text())
    
    .catch(error => console.log('error', error));
}
