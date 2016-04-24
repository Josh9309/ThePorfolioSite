var projects = document.getElementById("Projects");
var mq = window.matchMedia("screen and (max-width: 1142px)");

function displayProjectSubNav()
{
	console.log('Display');
	var subNav = document.getElementById("projectSubNav");
	
	subNav.style.display = "block";
	
}

var projClicked = false;

function hideProjectSubNav(){
	console.log('hidden');
	var subNav = document.getElementById("projectSubNav");
	
	subNav.style.display = "none";
}

function projectClick(){
	console.log("clicked");
	if(mq.matches)
	{
		if(!projClicked)
		{
			displayProjectSubNav();
			projClicked = true;
		}
		else
		{
			hideProjectSubNav();
			projClicked = false;
		}
	}
}

var github = document.getElementById("Github");

function displayGithubSubNav()
{
	console.log('Display');
	var gitSubNav = document.getElementById("gitSubNav");
	
	gitSubNav.style.display = "block";
	
}

var gitClicked = false;

function hideGithubSubNav(){
	console.log('hidden');
	var gitSubNav = document.getElementById("gitSubNav");
	
	gitSubNav.style.display = "none";
}

function gitClick(){
	console.log("gitClicked");
	if(mq.matches)
	{	
		if(!gitClicked)
		{
			displayGithubSubNav();
			gitClicked = true;
		}
		else
		{
			hideGithubSubNav();
			gitClicked = false;
		}
	}
}