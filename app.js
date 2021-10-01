const pref = document.getElementById('first').addEventListener('click', function (e) {
	if (e.target.ariaLabel) {
		const grind = document.getElementById('grind')
		const clicked = e.target.ariaLabel;
		const pref = document.getElementById('preference');
		const modPref = document.getElementById('modal-preference');
		pref.innerHTML = clicked;
		modPref.innerHTML = clicked;
	} else {
		const clicked = e.target.parentElement.ariaLabel;
		const pref = document.getElementById('preference');
		const modPref = document.getElementById('modal-preference');
		pref.innerHTML = clicked;
		modPref.innerHTML = clicked;

	}
	
})

const bean = document.getElementById('second').addEventListener('click', function (e) {
	if (e.target.ariaLabel) {
		const clicked = e.target.ariaLabel;
		const bean = document.getElementById('bean');
		const modBean = document.getElementById('modal-bean');
		bean.innerHTML = clicked;
		modBean.innerHTML = clicked;

	} else {
		const clicked = e.target.parentElement.ariaLabel;
		const bean = document.getElementById('bean');
		const modBean = document.getElementById('modal-bean');
		bean.innerHTML = clicked;
		modBean.innerHTML = clicked;

	}
})

const grams = document.getElementById('third').addEventListener('click', function (e) {
	if (e.target.ariaLabel) {
		const clicked = e.target.ariaLabel;
		const grams = document.getElementById('grams');
		const modGrams = document.getElementById('modal-grams');
		grams.innerHTML = clicked;
		modGrams.innerHTML = clicked;
			} else {
		const clicked = e.target.parentElement.ariaLabel;
		const grams = document.getElementById('grams');
		const modGrams = document.getElementById('modal-grams');
		grams.innerHTML = clicked;
		modGrams.innerHTML = clicked;
	}
})


const ground = document.getElementById('fourth').addEventListener('click', function (e) {
	if (e.target.ariaLabel) {
		const clicked = e.target.ariaLabel;
		const ground = document.getElementById('ground');
		const modGround = document.getElementById('modal-ground');
		ground.innerHTML = clicked;
		modGround.innerHTML = clicked;
	} else {
		const clicked = e.target.parentElement.ariaLabel;
		const ground = document.getElementById('ground');
		const modGround = document.getElementById('modal-ground');
		ground.innerHTML = clicked;
		modGround.innerHTML = clicked;


	}
})


const frequency = document.getElementById('fifth').addEventListener('click', function (e) {
	if (e.target.ariaLabel) {
		const clicked = e.target.ariaLabel;
		const frequency = document.getElementById('frequency');
		frequency.innerHTML = clicked;
		const modFrequency = document.getElementById('modal-frequency');
		modFrequency.innerHTML = clicked;

	} else {
		const clicked = e.target.parentElement.ariaLabel;
		const frequency = document.getElementById('frequency');
		frequency.innerHTML = clicked;
		const modFrequency = document.getElementById('modal-frequency');
		modFrequency.innerHTML = clicked;

	}
})

const modal = document.getElementById('plan-modal');
const modalClose = document.getElementById('modal-close');
const createPlan = document.getElementById('create-plan');

createPlan.addEventListener('click', (e) => {
	modal.style.display = 'block';
	document.body.classList.add('overlay');
})




modalClose.addEventListener('click', (e) => {
	modal.style.display = 'none';
	document.body.classList.remove('overlay');
})


const modGrams = document.getElementById('modal-grams')

console.log(modGrams);