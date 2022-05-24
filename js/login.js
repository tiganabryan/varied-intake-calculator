let tdee = 1600;
let dietLength = 4;
let weightLoss = .6667;

document.getElementById("tdee").innerHTML = `your tdee is ${tdee} calories per day.`;
document.getElementById("weightloss").innerHTML = `in ${dietLength} days, you will lose ${weightLoss}kgs.`;








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