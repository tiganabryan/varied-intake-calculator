//testing javascript diet numbers in html
let testTdee = 1600;
let testDietLength = 4;
let testWeightLoss = .6667;

document.getElementById("tdee").innerHTML = `your tdee is ${testTdee} calories per day.`;
document.getElementById("weightloss").innerHTML = `in ${testDietLength} days, you will lose ${testWeightLoss}kgs.`;







//
(function () {
	'use strict'

	// Fetch all the forms we want to apply custom Bootstrap validation styles to
	var forms = document.querySelectorAll('.needs-validation')

	// Loop over them and prevent submission
	Array.prototype.slice.call(forms)
		.forEach(function (form) {
			form.addEventListener('submit', function (event) {
				if (!form.checkValidity()) {
					event.preventDefault()
					event.stopPropagation()
				}

				form.classList.add('was-validated')
			}, false)
		})
})()