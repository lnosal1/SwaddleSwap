$(document).ready(function(){
    
	// Define variables that reference our script tags within the body of our page
    var sleepBlog = $("#sleepBlog").html();
    //call swaddleAPI
    var data = fetch('appTEST.js');

    
    Mustache.parse(sleepBlog);

	
	// Define our data objects

    var sleepingBlog = Mustache.render(sleepBlog, data
    );
	
	
	
	// Place data into the HTML of our page with the html() jQuery method
    
    $("#render_sleepBlog").html(sleepingBlog);
	
	

	
});