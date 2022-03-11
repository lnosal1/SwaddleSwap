$(document).ready(function(){
    
	// Define variables that reference our script tags within the body of our page
    var contentSection = $("#contentSection").html();
    
    
    
	// Have MustacheJS render our script tags
    Mustache.parse(contentSection);
   

	
	// Define our data objects
	var contentSect = Mustache.render(contentSection, {
        item:
		[
			{
                name: "Try Before You Buy",
                description: "Take our swaddle finder quiz to find your match and then rent 5 swaddles for up to 10 days.",
                button: "How it Works",
                link: "how-it-works.html"

            },
            {
                name: "Learn More About Sleep",
                description: "Not sure why baby is up all night? Read more to demystify night wakings.",
                button: "Sleep Blog",
                link: "sleep-blog.html"
            },
            {
                name: "Ready to Choose?",
                description: "Find the swaddle that works best for you and your baby. Use our quiz or rent before you buy.",
                button:"Buy Now",
                link: "sleep-quiz.html"
            }
		]
    });

    

	
	
	// Place data into the HTML of our page with the html() jQuery method
    $("#render_contentSection").html(contentSect);

	
	

	
});