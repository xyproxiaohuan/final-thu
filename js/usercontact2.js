(function (){
	$('#hide').on('click', function() {
		$('h3').hide();
	});

	$('#show').on('click', function() {
		$('h3').show();
	});

	$.ajax({
		url: "http://fake-people.benspoon.com/b4ce90e8/people",
		success: function(res) {
			$('#Search-Person').on("click", function(){
				res.forEach(function(person){
					$('#people').append('<li>Name: ' + person.Name +
						', Age: ' + person.Age +
						', EyeColor: ' + person.EyeColor +
						', Gender: ' + person.Gender +
						', Address: ' + person.Address).toggle();
				});
			});
		}
	});

})();