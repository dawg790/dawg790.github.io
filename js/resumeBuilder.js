
// All Objects below use Literal Notation
// Bio Info Object
var bio = {
	"name": "Nick Woodland",
	"role": "Front End Web Developer",
	"contacts": {
		"mobile": "6032656536",
		"email": "nick@wispcreekdesign.com",
		"github": "https://github.com/dawg790",
		"twitter": "@dawg790",
		"location": "Denver, CO"
	},
	"welcomeMessage": "Thanks for viewing my resume.",
	"skills": [
		"HTML", "CSS", "JavaScript", "jQuery", "SharePoint"
	],
	"biopic": "images/Nick.jpg",
	"display": function() {
		var formattedName = HTMLheaderName.replace('%data%', bio.name);
		var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
		var formattedPic = HTMLbioPic.replace('%data%', bio.biopic);
		var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
		var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
		var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
		var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
		var formattedMessage = HTMLWelcomeMsg.replace('%data%', bio.welcomeMessage);

		$('#header').prepend(formattedRole);
		$('#header').prepend(formattedName);
		// $('#header').append(formattedMessage);
		$('#header').append(formattedPic);
		$('.biopic').insertBefore($('#topContacts'));

		$('#topContacts').append(HTMLcontactsStart);
		$('#topContacts, #footerContacts').append(formattedMobile);
		$('#topContacts, #footerContacts').append(formattedEmail);
		$('#topContacts, #footerContacts').append(formattedGithub);
		$('#topContacts, #footerContacts').append(formattedTwitter);
		$('#topContacts, #footerContacts').append(formattedLocation);

		if (bio.skills.length > 0) {
			$('#header').append(HTMLskillsStart);
			for (var skill in bio.skills) {
				var skillSet = HTMLskills.replace('%data%', bio.skills[skill]);
				$('#skills').append(skillSet);
			}
		}
	}
};
// Calling the bio.display function
bio.display();

// Education Info Object
var education = {
	"schools": [
		{
			"name": "St. Lawrence University",
			"location": "Canton, NY",
			"degree": "BS",
			"majors": "Geology",
			"dates": "1998",
			"url": "http://www.stlawu.edu/"
		},
		{
			"name": "CCHS",
			"location": "Concord, MA",
			"degree": "N/A",
			"majors": "N/A",
			"dates": "1994",
			"url": "http://www.concordcarlisle.net/"
		}
	],
	"onlineCourse": [
		{
			"title": "JavaScript Syntax",
			"school": "Udacity",
			"date": "2015",
			"url": "http://www.udacity.com/course/ud804"
		},
		{
			"title": "Web Designer Track",
			"school": "Treehouse",
			"date": "2015",
			"url": "http://www.teamtreehouse.com"
		}
	],
	"display": function() {
		for (var school in education.schools) {
			$('#education').append(HTMLschoolStart);

			var schoolName = HTMLworkEmployer.replace('%data%', education.schools[school].name);
			var schoolDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
			var schNameDegree = schoolName + schoolDegree;
			$('.education-entry:last').append(schNameDegree);

			var schoolLocation = HTMLschoolLocation.replace('%data%', education.schools[school].location);
			$('.education-entry:last').append(schoolLocation);

			var schoolDates = HTMLschoolDates.replace('%data%', education.schools[school].dates);
			$('.education-entry:last').append(schoolDates);

			var schoolMajor = HTMLschoolMajor.replace('%data%', education.schools[school].majors);
			$('.education-entry:last').append(schoolMajor);

			var schoolURL = education.schools[school].url;
			$('.education-entry:last a').attr('href', schoolURL);
		}

		if (education.onlineCourse.length > 0) {
			$('#education').append(HTMLonlineClasses);
			for (var onlineClass in education.onlineCourse) {
				$('#education').append(HTMLschoolStart);
				var onlineClassName = HTMLonlineTitle.replace('%data%', education.onlineCourse[onlineClass].title);
				var onlineClassSchool = HTMLonlineSchool.replace('%data%', education.onlineCourse[onlineClass].school);
				var onlineClassNameAndSch = onlineClassName + onlineClassSchool;
				$('.education-entry:last').append(onlineClassNameAndSch);

				var onlineClassDate = HTMLonlineDates.replace('%data%', education.onlineCourse[onlineClass].date);
				$('.education-entry:last').append(onlineClassDate);

				var onlineClassURL = HTMLonlineURL.replace('%data%', education.onlineCourse[onlineClass].url)
				$('.education-entry:last').append(onlineClassURL);
			}
		}
	}
}
// Calling the education.display function
education.display();

// Jobs info object
var work = {
	"jobs": [
	// TODO: Add better descriptions for each job
		{
			"employer": "HERE Maps",
			"title": "Senior Analyst Technology Deployment",
			"location": "Denver, CO",
			"dates": "January 2012 - Present",
			"description": "SharePoint administrator and web developer working on intranet sites" +
							"for internal employees to use to manage their project work."
		},
		{
			"employer": "Nokia",
			"title": "Analyst Technology Deployment",
			"location": "Denver, CO",
			"dates": "January 2010 - January 2012",
			"description": "Worked with ArcGIS to create pedestrian map products and operated on a" +
							"team tasked with normalizing and standardizing work practices throughout" +
							"the Nokia core map organization."
		},
		{
			"employer": "NAVTEQ",
			"title": "Project Manager",
			"location": "Biddeford, ME",
			"dates": "July 2000 - January 2010",
			"description": "Experienced map operations coordinator for all map building expansion outside" +
							"of Europe and North America. Managed field teams overseas, negotiated with" +
							"vendors on source data and trained them to collect field data."
		},
		{
			"employer": "CDM",
			"title": "GIS Analyst",
			"location": "Boston, MA",
			"dates": "July 1999 - July 2000",
			"description": "Worked as an intern using ArcGIS via the command line. Created various map" +
							"products for clients including neighboring municipalities and schools." +
							"Used ArcGIS and command line prompts."
		}
	],
	"display": function() {
		for (var jobs in work.jobs) {
			$('#workExperience').append(HTMLworkStart);

			var workEmployer = HTMLworkEmployer.replace('%data%', work.jobs[jobs].employer);
			var workTitle = HTMLworkTitle.replace('%data%', work.jobs[jobs].title);
			var employerAndTitle = workEmployer + workTitle;
			$('.work-entry:last').append(employerAndTitle);

			var workDates = HTMLworkDates.replace('%data%', work.jobs[jobs].dates);
			$('.work-entry:last').append(workDates);

			var workLocations = HTMLworkLocation.replace('%data%', work.jobs[jobs].location);
			$('.work-entry:last').append(workLocations);

			var workDuties = HTMLworkDescription.replace('%data%', work.jobs[jobs].description);
			$('.work-entry:last').append(workDuties);
		}
	}
}
// Calling the work.display function
work.display();

// Projects info Object
var projects = {
	"projects": [
	// TODO: Add additional project entries
	{
		"title": "Operations Hub",
		"dates": "2015",
		"description": "Intranet site designed for internal Nokia employees working on all aspects of" +
						"map building operations.",
		"images": [
		 	"images/oh.png",
		 	"images/oh2.png"
		 ]
	},
	{
		"title": "Wisp Creek Design",
		"dates": "2013",
		"description": "My personal website featuring my woodworking.",
		"images": [
		 	"images/wcd1.png",
		 	"images/wcd2.png"
		 ]
	},
	{
		"title": "Name Generator App",
		"dates": "2014",
		"description": "My own app designed to generate random girl names.",
		"images": [
		 	"images/ng1.png",
		 	"images/ng2.png"
		 ]
	}
	],
	"display": function() {
		for (var project in projects.projects) {
			$('#projects').append(HTMLprojectStart);

			var projTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
			$('.project-entry:last').append(projTitle);

			var projDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
			$('.project-entry:last').append(projDates);

			var projDesc = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
			$('.project-entry:last').append(projDesc);

			if (projects.projects[project].images.length > 0) {
				for (var image in projects.projects[project].images) {
					var projImg = HTMLprojectImage.replace('%data%', projects.projects[project].images[image]);
					$('.project-entry:last').append(projImg);
				}
			}
		}
	}
}
// Calling the projects.display function
projects.display();

// Internationalize the Resume Name
function inName(name) {
	name = $('#name').html();
	name = name.trim().split(" ");
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0, 1).toUpperCase() +
		name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];
}
$('#main').append(internationalizeButton);


// Google Map for places lived and worked
$('#mapDiv').append(googleMap);


// Function to display a 'Back to Top' button when the window is scrolled.
function scrollTop() {
	// Creates a new div element with a child a element
	var content = $('<div id="scrollTop"><a href="#main">Top</a></div>');
	$('#main').append(content);

		// Using the window object to determine scroll position
		$(window).scroll(function() {
		// If scrolled more than 50 pixels, display will show the button as a block element
		if ($(this).scrollTop() > 50) {
			$('#scrollTop').css({
				'display': 'block'
			});
		// Otherwise the button will be hidden
		} else { ($(this).scrollTop() < 50)
			$('#scrollTop').css({
				'display': 'none'
			});
		}
	});
}
scrollTop();











