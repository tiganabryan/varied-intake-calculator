document.getElementById("tdee").style.display = "none";
document.getElementById("weightloss").style.display = "none";


const myForm = document.getElementById("myForm");

myForm.addEventListener("submit", (e) => {
	e.preventDefault();
	console.log("form has been submitted:)")

	let age = document.getElementById("age").value;
	console.log(age);

	let heightcm = document.getElementById("heightcm").value;
	console.log(heightcm);

	let weightkg = document.getElementById("weightkg").value;
	console.log(weightkg);

	let sex = document.getElementById("sex").value;
	console.log(sex);

	let dietLength = document.getElementById("diet-length").value;
	console.log(dietLength);

	let activityLevel = document.getElementById("activity-level").value;
	console.log(activityLevel);

	let intake1 = document.getElementById("intake1").value;
	console.log(intake1);

	let intake2 = document.getElementById("intake2").value;
	console.log(intake2);

	let intake3 = document.getElementById("intake3").value;
	console.log(intake3);

	let intake4 = document.getElementById("intake4").value;
	console.log(intake4);

	const bmr = (sex === 'female') ? 9.99 * weightkg + (6.25 * heightcm) - (4.92 * age) - 161 : 9.99 * weightkg + (6.25 * heightcm) - (4.92 * age) + 5;

	const tdee = Number(bmr) * Number(activityLevel);

	console.log(Number(tdee));

	const intakes = [Number(intake1), Number(intake2), Number(intake3), Number(intake4)];

	const deficits = intakes.map(intakeItem => {
		return tdee - intakeItem
	});

	console.log(deficits);

	let kgsInCalories = 0;

	for (let i = 0; i < deficits.length; i++) {
        kgsInCalories += deficits[i];
    }

	console.log(kgsInCalories);

	const weightLoss = kgsInCalories / 7716.1805;

    console.log(weightLoss);

	document.getElementById("weightloss").innerHTML = `in ${dietLength} days, you will lose ${weightLoss.toFixed(2)}kgs.`;
	document.getElementById("tdee").innerHTML = `your tdee is ${parseInt(tdee)} calories per day.`;


	//unhide answer for user
	document.getElementById("tdee").style.display = "block";
	document.getElementById("weightloss").style.display = "block";

})


	




