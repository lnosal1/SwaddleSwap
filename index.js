

    // make API call with parameters and use promises to get response
    fetch(" https://4nqem5uyhg.execute-api.us-east-1.amazonaws.com/prod/getswaddlebyquiz?material=cotton&rollboth=no&sizeRange=Under 3M&arms=down", requestOptions)
    .then(response => response.json())   
    .then(swaddles => showSwaddles(swaddles.results));

showCharacters = swaddles => {  
    const swaddlesDiv = document.querySelector("#swaddleContent");  
    swaddles.forEach(swaddle => {   
        const swaddleElement = document.createElement("p");    
        swaddleElement.innerText = `Swaddle Name: ${swaddle.displayName}`;    
        swaddleDiv.append(swaddleElement);  
    });}