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
var recommendedAPI = (email, quizanswers, childname, Name, buttonLink, Name2, buttonLink2, Name3, buttonLink3 )=>{
    // instantiate a headers object
    var recommendedHeaders = new Headers();
    // add content type header to object
    recommendedHeaders.append("Content-Type", "application/json");
    // using built in JSON utility package turn object to string and store in a variable
    var swaddles = JSON.stringify({'email': email,'quizanswer':quizanswers,'childName': childname,'Name': Name,'buttonLink': buttonLink,'Name2': Name2, 'buttonLink2': buttonLink2,'Name3': Name3,'buttonLink3': buttonLink3,});

    // create a JSON object with parameters for API call and store in a variable
    var requestOptions = {
        method: 'POST',
        headers: recommendedHeaders,
        body: swaddles,
        redirect: 'follow',
        
    };
    // make API call with parameters and use promises to get response
    fetch("https://4nqem5uyhg.execute-api.us-east-1.amazonaws.com/prod/recommended", requestOptions)
    .then(response => response.text())
    
    .catch(error => console.log('error', error));
}

var engineAPI = (email, quizanswers, childname)=>{
    fetch('swaddles.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });
function appendData(data) {
    var mainContainer = document.getElementById("myData1");
        var div1 = document.createElement("h2");
        var img = document.createElement("div");
        var button = document.createElement("div");
        var Name = data[quizanswers][0].displayName;
        var imageLink = data[quizanswers][0].imageLink;
        var buttonLink = data[quizanswers][0].buyLink;
        div1.innerHTML = Name; 
        img.innerHTML = "<img src='" + imageLink+ "' class='swaddle' >";
        button.innerHTML = "<a href='" +buttonLink + "><button type='button' class='content-button'>Buy on Amazon</button></a>";
        mainContainer.appendChild(img);          
        mainContainer.appendChild(div1);
        mainContainer.appendChild(button);

        var mainContainer2 = document.getElementById("myData2");
        var div2 = document.createElement("h2");
        var img2 = document.createElement("div");
        var button2 = document.createElement("div");
        var Name2 = data[quizanswers][1].displayName;
        var imageLink2 = data[quizanswers][1].imageLink;
        var buttonLink2 = data[quizanswers][1].buyLink;
        div2.innerHTML = Name2; 
        img2.innerHTML = "<img src='" + imageLink2+ "' class='swaddle' >";
        button2.innerHTML = "<a href='" +buttonLink2 + "><button type='button' class='content-button'>Buy on Amazon</button></a>";
        mainContainer2.appendChild(img2);          
        mainContainer2.appendChild(div2);
        mainContainer2.appendChild(button2);

        var mainContainer3 = document.getElementById("myData3");
        var div3 = document.createElement("h2");
        var img3 = document.createElement("div");
        var button3 = document.createElement("div");
        var Name3 = data[quizanswers][2].displayName;
        var imageLink3 = data[quizanswers][2].imageLink;
        var buttonLink3 = data[quizanswers][2].buyLink;
        div3.innerHTML = Name3; 
        img3.innerHTML = "<img src='" + imageLink3+ "' class='swaddle' >";
        button3.innerHTML = "<a href='" +buttonLink3 + "><button type='button' class='content-button'>Buy on Amazon</button></a>";
        mainContainer3.appendChild(img3);          
        mainContainer3.appendChild(div3);
        mainContainer3.appendChild(button3);
        recommendedAPI (email, quizanswers, childname, Name, buttonLink, Name2, buttonLink2, Name3, buttonLink3);

        
    
}}
