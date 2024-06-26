document.getElementById('sign-in-btn').addEventListener('click', () => {
	const email = document.getElementById('email').value;
	if (email) {
		window.location.href = 'password.html';
	}
});
