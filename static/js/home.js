var put_this_in_view = function(element){
	var e = element;
	if (!!e && e.scrollIntoView) {
		e.scrollIntoView();
	}


}

// ABOUT BUTTION SET UP
var aboutButton = document.getElementById('aboutButton');
var aboutSpace = document.getElementById("aboutSpace");
aboutButton.addEventListener('click', function(){
	console.log('about')
	console.log(aboutSpace)
	put_this_in_view(aboutSpace)

	}
);

// ABOUT BUTTION SET UP ENDING


// ABOUT BUTTION SET UP
var resumeButton = document.getElementById('resumeButton');
var resumeSpace = document.getElementById("resumeSpace");
resumeButton.addEventListener('click', function(){
	console.log('resume')
	console.log(resumeSpace)
	put_this_in_view(resumeSpace)

	}
);

// ABOUT BUTTION SET UP ENDING


// CODE EXAMPLES BUTTION SET UP
var codeButton = document.getElementById('codeButton');
var projectSpace = document.getElementById("projectSpace");
codeButton.addEventListener('click', function(){
	console.log('projects')
	console.log(projectSpace)
	put_this_in_view(projectSpace)

	}
);

// CODE EXAMPLES BUTTION SET UP ENDING