$(document).ready(function(){
    
	// Define variables that reference our script tags within the body of our page
    var sleepBlog = $("#sleepBlog").html();
    //call swaddleAPI

    
    Mustache.parse(sleepBlog);

	
	// Define our data objects

    var sleepingBlog = Mustache.render(sleepBlog, "{\"Items\": [{\"displayName\": \"SwaddleMe Pod\", \"buttonText\": \"Buy on Amazon\", \"arms\": \"down\", \"rollboth\": \"no\", \"buyLink\": \"https://www.amazon.com/SwaddleMe-Pod-Medium-Little-Months/dp/B082XTSM8C/ref=sr_1_2_sspa?crid=2KTDLMYOKPXJE&keywords=swaddle+pod&qid=1648777115&sprefix=swaddle+%2Caps%2C632&sr=8-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExSE0yV09VMFlRVVlPJmVuY3J5cHRlZElkPUEwODkxMjgzMjdMTDlXWFNLN1dIUSZlbmNyeXB0ZWRBZElkPUEwNzc1ODY2MVk2TzFRUUpWTkhSRiZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y…al\": \"cotton\"}], \"Count\": 1, \"ScannedCount\": 21, \"ResponseMetadata\": {\"RequestId\": \"LHGFOLL2PLSAEGV5T8216826MNVV4KQNSO5AEMVJF66Q9ASUAAJG\", \"HTTPStatusCode\": 200, \"HTTPHeaders\": {\"server\": \"Server\", \"date\": \"Fri, 08 Apr 2022 01:10:38 GMT\", \"content-type\": \"application/x-amz-json-1.0\", \"content-length\": \"730\", \"connection\": \"keep-alive\", \"x-amzn-requestid\": \"LHGFOLL2PLSAEGV5T8216826MNVV4KQNSO5AEMVJF66Q9ASUAAJG\", \"x-amz-crc32\": \"3976968648\"}, \"RetryAttempts\": 0}}"
      
    );
	
	
	
	// Place data into the HTML of our page with the html() jQuery method
    
    $("#render_sleepBlog").html(sleepingBlog);
	
	

	
});