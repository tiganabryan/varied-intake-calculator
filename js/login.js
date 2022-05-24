//testing javascript diet numbers in html
let testTdee = 1600;
let testDietLength = 4;
let testWeightLoss = .6667;

document.getElementById("tdee").innerHTML = `your tdee is ${testTdee} calories per day.`;
document.getElementById("weightloss").innerHTML = `in ${testDietLength} days, you will lose ${testWeightLoss}kgs.`;



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

	const femaleBmr = 9.99 * weightkg + (6.25 * heightcm) - (4.92 * age) - 161;
    console.log(Number(femaleBmr));

	const femaleTdee = Number(femaleBmr) * Number(activityLevel);
    console.log(Number(femaleTdee));
})


	









//
//(function () {
//	'use strict'

	// Fetch all the forms we want to apply custom Bootstrap validation styles to
//	var forms = document.querySelectorAll('.needs-validation')

	// Loop over them and prevent submission
//	Array.prototype.slice.call(forms)
//		.forEach(function (form) {
//			form.addEventListener('submit', function (event) {
//				if (!form.checkValidity()) {
//					event.preventDefault()
//					event.stopPropagation()
//				}
//
//				form.classList.add('was-validated')
//			}, false)
//		})
//})()