	var topics = ["Master Shake", "Frylock", "Meatwad", "Carl", "Mooninites", "Plutonians"];
	
	
	function createBtns() {

		$('#topicBtn').empty();
		for (var i = 0; i < topics.length; i++) {
			var button = $('<button>');
			button.addClass('btn');
			button.addClass('topic');
			button.attr('data-name', topics[i])
			button.text(topics[i]);
			$('#topicBtn').append(button);			
		};
	};
	function newTopic() {
			$('#addTopic').on('click', function(event){
				event.preventDefault();
				var topic = $('#topic-input').val().trim();
				if (topic == "") {
					$('#message').text('Create A Topic')
					return false;
				} else 
					topics.push(topic);
					$('message').empty();
					createBtns();
			});
		};
		
	function resetTopics() {
			$('#clearTopics').on('click', function() {
				topics.pop();
				createBtns();
			});
		};
		
	function gifDisplay() {
		var topic = $(this).attr("data-name");
			console.log(topic);
		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
			topic + "&api_key=jhV9rhNlX3iMWURWde0YjnS5R0bXi59y&limit=10";
			console.log(queryURL);
		
		$.ajax({
			url: queryURL,
			method: "GET"
		}).done(function (response) {
			console.log(response);
			$('#gifResults').empty();	
			var results = response.data;
			if (results == '') {
				console.log("nothing");
			}
			for (var i = 0; i < results.length; i++) {
				var gifDiv = $('<div>');
				gifDiv.addClass('gifDiv');

				var gifRating = $('<p>').text('Rating: ' + results[i].rating);
				gifDiv.append(gifRating);

				var gifImage = $('<img>');
				gifImage.attr('src', results[i].images.fixed_height_still.url);
				gifImage.addClass('img-responsive');
				gifImage.addClass('image');
				gifImage.attr('data-still', results[i].images.fixed_height_still.url);
				gifImage.attr('data-animate', results[i].images.fixed_height.url);
				gifImage.attr('data-state', 'still');
				gifDiv.prepend(gifImage);
				$('#gifResults').prepend(gifDiv);
			};
		});
	};

	createBtns();
	newTopic();
	resetTopics();

	

$(document).on('click', '.topic', gifDisplay);


$(document).on("click", ".image", function () {
	var state = $(this).attr('data-state');
	if (state == 'still') {
		$(this).attr('src', $(this).data('animate'));
		$(this).attr('data-state', 'animate');
	} else {
		$(this).attr('src', $(this).data('still'));
		$(this).attr('data-state', 'still');
};
	
});
