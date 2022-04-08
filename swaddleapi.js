const p = document.getElementById("myPelement")
fetch('https://4nqem5uyhg.execute-api.us-east-1.amazonaws.com/prod/getswaddlebyquiz?material=cotton&rollboth=no&sizeRange=Under 3M&arms=down')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        p.innerText = data
    });