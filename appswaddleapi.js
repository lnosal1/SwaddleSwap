// define the callAPI function that takes quiz answers as parameters
var swaddleAPI = ()=>{
    // instantiate a headers object
    var myswaddleHeaders = new Headers();
    // add content type header to object
    myswaddleHeaders.append("Content-Type", "application/json");
    // using built in JSON utility package turn object to string and store in a variable
    // create a JSON object with parameters for API call and store in a variable
    var requestOptions = {
        method: 'GET',
        headers: myswaddleHeaders,
        redirect: 'follow'
        
    };
    // make API call with parameters and use promises to get response
    fetch("https://4nqem5uyhg.execute-api.us-east-1.amazonaws.com/prod/getswaddlebyquiz?material=cotton&rollboth=no&sizeRange=Under 3M&arms=down", requestOptions)
    //.then(response => response.text())
    .then(result => JSON.parse(JSON.stringify(result)).body)
    .catch(error => console.log('error', error));
}

