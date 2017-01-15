function askQuestions () {



	var firstName = prompt('what is your first name?'),
		lastName = prompt('what is your last name?'),
		fullName= firstName+' '+lastName;

	console.log(fullName);


	var age = prompt('How old are you?');
	age = parseInt(age);

	if (age >= 18) {
		console.log('User is an adult');
		

	}
	else if (age >= 13) {

		prompt('Oh, jesus, a bloody teenager');

	}

	if (lastName === 'general') {
			console.log ('greetings General!')
	}


	if (firstName.toLowerCase() === 'general') {
		if (lastName.toLowerCase() !==  assembly) {
			console.log ('greetings general!');
		}
	}
}


//when the page is loaded 
$(function () {



	//when the uses clicks an h3 element
	$('h3').on('click', function() {

	//Hide the next element 
	$(this).next().slideToggle();


	});

});