$(document).ready(function (){

	var topics = [Camels, Snorlax, Pumpkins, Elevators, Cavemen];
	
	
	function createBtns() {

		$('#topicBtn').empty();
		for (var i = 0; i < topics.length; i++) {
			var button = $('<button>');
			button.addClass('btn');
			button.addClass('topic');
			button.text(topics[i]);
			$('#topicBtn').append(button);			
		}

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
			})
		}

		function resetTopics() {
			$('#clearTopics').on('click', function() {
				topics.pop(topic);
				createBtns();
			})
		}
	}





// api key jhV9rhNlX3iMWURWde0YjnS5R0bXi59y


}