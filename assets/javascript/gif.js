
var topics = ["Mike Tyson", "larry holmes","gennady golovkin","canelo alvarez","manny pacquiao", "miguel cotto", "oscar de la hoya", "shane mosley", "james toney", "roy jones jr", "lennox lewis", "evander holyfield"]

//function 
function displayFighterInfo() {

  var gif = $(this).attr("data-name");
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=dc6zaTOxFJmzC&limit=10";

  // AJAX request
  $.ajax({
	url: queryURL,
	method: "GET"
  }).then(function(response) {

		console.log(response)
		
	// Creating a div to hold the fighter
	var fightDiv = $("<div class='gif'>");

	// Retrieving the URL for the image
	for (var i = 0; i < response.data.length; i++) {
	var imgURL = response.data[i].images.fixed_height_small.url;

	console.log(imgURL)

	// holding the image
	var image = $("<img>").attr("src", imgURL);

	
	// Appending the image
	fightDiv.append(image);


	// putting new fight on top
	$("#gif-view").prepend(fightDiv);
	}	
});
}


function renderButtons() {

  // Deleting the fighter prior to adding 
  $("#buttons-view").empty();

  // Looping array
  for (var i = 0; i < topics.length; i++) {

	// generate buttons
	var a = $("<button>");
	a.addClass("gif-btn");
	a.attr("data-name", topics[i]);
	a.text(topics[i]);
	$("#buttons-view").append(a);
  }
}

// button click event 
$("#add-gif").on("click", function(event) {
  event.preventDefault();
  // text box input
  var gif = $("#gif-input").val().trim();

  // Adding to array
  topics.push(gif);

  renderButtons();
});

// Click event 
$(document).on("click", ".gif-btn", displayFighterInfo);
renderButtons();

//Clear
$("reset").on("click", function(event){
	location.reload();
});
