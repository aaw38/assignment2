function submitdisney()
{
	var firstname = document.forms["disney-form"]["firstname"].value;
	var movies = document.getElementsByName("movie");
	var songs = document.getElementsByName("song");
	var rating = document.getElementById("rate");

	if (firstname == "")
	{
		alert("You must provide your firstname.");
		return;
	}

	var i = 0;
	var movie_checked = false;
	for (i = 0; i < movies.length; i++)
	{
		if (movies[i].checked == true)
			movie_checked = true;
	}
	if (movie_checked == false)
	{
		alert("You must choose a favorite movie");
		return;
	}

	var song_checked = false;
	for (i = 0; i < songs.length; i++)
	{
		if (songs[i].checked == true)
			song_checked = true;
	}

	if (song_checked == false)
	{
		alert("You must choose a favorite anthem");
		return;
	}

	if (!(rate.value > 0 && rate.value <= 10))
	{
		alert("Your rating must be a number between 1 and 10");
		return;
	}

	//if we make it here, all data is valid
	document.getElementById("survey").innerHTML = "Form submitted.  Thank you, " + firstname + ". Have a pleasant day.";
}


