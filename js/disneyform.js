function submitdisney()
{
	var firstname = document.forms["disney-form"]["firstname"].value;
	var movies = document.getElementsByName("movie");
	var songs = document.getElementsByName("song");
	var rating = document.getElementById("rate");

	if (firstname === "")
	{
		alert("You must provide your " + document.forms["disney-form"]["firstname"].getAttribute("name"));
		return;
	}

	var i = 0;
	var movie_checked = false;
	for (i = 0; i < movies.length; i++)
	{
		if (movies[i].checked == true)
			movie_checked = true;
	}
	if (movie_checked === false)
	{
		alert("You must choose a favorite " + document.forms["disney-form"]["movie"][0].getAttribute("name"));
		return;
	}

	var song_checked = false;
	for (i = 0; i < songs.length; i++)
	{
		if (songs[i].checked == true)
			song_checked = true;
	}

	if (song_checked === false)
	{
		alert("You must choose a favorite " + document.forms["disney-form"]["song"][0].getAttribute("name"));
		return;
	}

	if (!(rate.value > 0 && rate.value <= 10))
	{
		alert("Your " + document.getElementById("rate").getAttribute("name") + " must be a number between 1 and 10");
		return;
	}

	//if we make it here, all data is valid
	document.getElementById("survey").innerHTML = "Form submitted.  Thank you, " + firstname + ". Have a pleasant day.";
}


