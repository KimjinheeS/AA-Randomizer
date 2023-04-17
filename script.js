
		function generateRandomNumber() {
			return Math.round(Math.random() * 20);
		}

		function generateStory() {
			const num1 = generateRandomNumber();
			const num2 = generateRandomNumber();
			const num3 = generateRandomNumber();

			const biggestNum = Math.max(num1, num2, num3);
			const num1stLetter = String.fromCharCode(97 + num1);
			const productInMinutes = num2 * num3;
			const hours = Math.floor(productInMinutes / 60);
			const minutes = productInMinutes % 60;

			const story = `Once upon a time, there were three friends - ${num1}, ${num2}, and ${num3}. 
            Out of them, ${biggestNum} was the biggest number. The first friend, whose name starts with the letter 
            "${num1stLetter.toUpperCase()}", was a genius at mathematics. One day, they solved a problem that took them 
            ${productInMinutes} minutes to solve. When they checked the time, they realized that it was ${hours} hour(s) 
            and ${minutes} minute(s) past their usual bedtime.`;

			document.getElementById("story").innerHTML = story;
		}
	
