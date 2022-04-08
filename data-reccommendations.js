$(document).ready(function(){
    
	// Define variables that reference our script tags within the body of our page
    var sleepBlog = $("#sleepBlog").html();
    //call swaddleAPI

    
    Mustache.parse(sleepBlog);

	
	// Define our data objects

    var sleepingBlog = Mustache.render(sleepBlog, {"Items": [{displayName: "SwaddleMe Pod", buttonText: "Buy on Amazon", arms: "down", rollboth: "no", buyLink: "test", imageLink:"test",material: "cotton"}]}
        );
	
	
	
	// Place data into the HTML of our page with the html() jQuery method
    
    $("#render_sleepBlog").html(sleepingBlog);
	
	

	
});