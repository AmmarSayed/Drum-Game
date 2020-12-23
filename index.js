// make sound on key press
document.addEventListener('keydown', (e) => {
	makeSound(e.key);
	playAnimation(e.key);
});

// add event listeners to all drums :)
document.querySelectorAll('.drum').forEach((element) => element.addEventListener('click', handleClick));

// make sound once clicked on a drum photo
function handleClick(e) {
	// check which button was clicked
	const bttnInnerHTML = e.target.innerHTML;
	makeSound(bttnInnerHTML);
	playAnimation(bttnInnerHTML);
}

// check the key innerHTML and play the sound corresponding
function makeSound(key) {
	switch (key) {
		case 'w':
			const tom1 = new Audio('./sounds/tom-1.mp3');
			tom1.play().catch(() => {});

			break;
		case 'a':
			const tom2 = new Audio('./sounds/tom-2.mp3');
			tom2.play().catch(() => {});

			break;
		case 's':
			const tom3 = new Audio('./sounds/tom-3.mp3');
			tom3.play().catch(() => {});

			break;
		case 'd':
			const tom4 = new Audio('./sounds/tom-4.mp3');
			tom4.play().catch(() => {});

			break;

		case 'j':
			const snare = new Audio('./sounds/snare.mp3');
			snare.play().catch(() => {});

			break;
		case 'k':
			const crash = new Audio('./sounds/crash.mp3');
			crash.play().catch(() => {});

			break;

		case 'l':
			const kickBass = new Audio('./sounds/kick-bass.mp3');
			kickBass.play().catch(() => {});
	}
}

function playAnimation(key) {
	let mylist = [ 'w', 'a', 's', 'd', 'j', 'k', 'l' ];

	if (mylist.includes(key)) {
		const activeKey = document.querySelector(`.${key}`);
		activeKey.classList.add('pressed');
		setTimeout(() => {
			activeKey.classList.remove('pressed');
		}, 100);
	} else return;
}
