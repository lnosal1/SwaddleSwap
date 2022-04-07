$(document).ready(function(){
    
	// Define variables that reference our script tags within the body of our page
    var sleepBlog = $("#sleepBlog").html();
    //call swaddleAPI
    var data = fetch('app.js');


	// Have MustacheJS render our script tags
    
    Mustache.parse(sleepBlog);

	
	// Define our data objects

    var sleepingBlog = Mustache.render(sleepBlog, swaddleAPI(),
        {"Items": [{"displayName": "SwaddleMe Pod", "buttonText": "Buy on Amazon", "arms": "down", "rollboth": "no", "buyLink": "https://www.amazon.com/SwaddleMe-Pod-Medium-Little-Months/dp/B082XTSM8C/ref=sr_1_2_sspa?crid=2KTDLMYOKPXJE&keywords=swaddle+pod&qid=1648777115&sprefix=swaddle+%2Caps%2C632&sr=8-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExSE0yV09VMFlRVVlPJmVuY3J5cHRlZElkPUEwODkxMjgzMjdMTDlXWFNLN1dIUSZlbmNyeXB0ZWRBZElkPUEwNzc1ODY2MVk2TzFRUUpWTkhSRiZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=", "imageLink": "https://swaddleswap.s3.amazonaws.com/swaddlepod.jpg", "ID": "0005", "sizeRange": "Under 3M", "material": "cotton"}], "Count": 1, "ScannedCount": 21, "ResponseMetadata": {"RequestId": "K7LAK7VBET0E8MPKO01GL409M3VV4KQNSO5AEMVJF66Q9ASUAAJG", "HTTPStatusCode": 200, "HTTPHeaders": {"server": "Server", "date": "Wed, 06 Apr 2022 01:46:42 GMT", "content-type": "application/x-amz-json-1.0", "content-length": "730", "connection": "keep-alive", "x-amzn-requestid": "K7LAK7VBET0E8MPKO01GL409M3VV4KQNSO5AEMVJF66Q9ASUAAJG", "x-amz-crc32": "3976968648"}, "RetryAttempts": 0}}
    );
	
	
	
	// Place data into the HTML of our page with the html() jQuery method
    
    $("#render_sleepBlog").html(sleepingBlog);
	
	

	
});