$(document).ready(function() {
	$.ajax('https://api.parse.com/1/classes/NewsItem', {
		    beforeSend: function(request) {
		      request.setRequestHeader('X-Parse-Application-Id', 'MemPdWU07PYwEEeIurKKEyqzLTyexi0Doxgn9AJd');
		            request.setRequestHeader('X-Parse-REST-API-Key', 'YWQuxlys89EPDKvetm3iRX47lVXVmFThWYHA1qzF');
		        		    console.log(request)
		        }
		    }
		).done(function(response) {
			$.each(response.results, function(index, article){
				$(".newsfeed").append("<h1>" + article["title"] + "</h1><p>" + article["body"] + "</p>");
			});
		});

	

});