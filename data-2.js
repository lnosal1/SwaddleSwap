$(document).ready(function(){
    
	// Define variables that reference our script tags within the body of our page
    var sleepBlog = $("#sleepBlog").html();
    
    
	// Have MustacheJS render our script tags
    
    Mustache.parse(sleepBlog);

	
	// Define our data objects

    var sleepingBlog = Mustache.render(sleepBlog, {
        item:
		[
			{
                name: "Sleep Props: How to Avoid Them",
                description: "Learn more about the sleep props that can impact your child's sleep habits.",
                button: "Learn More"

            },
            {
                name: "Should You Use Melatonin?",
                description: "Learn about why melatonin supplements can actually hurt your child's sleep.",
                button: "Learn More"
            },
            {
                name: "When is it Time to Night Wean?",
                description: "How young is too young for night weaning? And how to get started if baby is ready.",
                button:"Learn More"

            },
            {
                name: "Transitioning from 3 to 2 Naps",
                description: "Nap transitions can come with a regression, learn how to prevent them.",
                button:"Learn More"

            },
            {
                name: "Safe Swaddles for a Rolling Baby",
                description: "Once baby starts rolling, your options become more limited.",
                button:"Learn More"

            },
            {
                name: "Night Wakings: Hunger or Habit?",
                description: "Wondering why baby is waking? Read about how you can assess why.",
                button:"Learn More"

            }
            

		]
    });
	
	
	
	// Place data into the HTML of our page with the html() jQuery method
    
    $("#render_sleepBlog").html(sleepingBlog);
	
	

	
});