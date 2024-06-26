const passcodeInput = document.getElementById('passcode');
const cancelBtn = document.querySelector('.cancel-btn');
const forwardBtn = document.querySelector('.forward-btn');

passcodeInput.addEventListener('input', () => {
	const passcode = passcodeInput.value;
	if (passcode.length === 6) {
		alert('Passcode verified!');
		// TODO: Submit the form or perform the desired action
	}
});

cancelBtn.addEventListener('click', () => {
	passcodeInput.value = '';
});

forwardBtn.addEventListener('click', () => {
	const passcode = passcodeInput.value;
	if (passcode.length === 6) {
		alert('Passcode verified!');
		// TODO: Submit the form or perform the desired action
	}
});
