function loadContact() {
	const container = document.querySelector("#content");

	container.innerHTML = "";

	container.innerHTML = `
		<header>
			<h2>Contact Us</h2>
			<p>Call us at (202)-555-0159.</p>
		</header>

		<h3>Or find us on social media:</h3>
		<a href="https://twitter.com">Twitter</a>
		<a href="https://www.youtube.com">YouTube</a>
		<a href="https://www.facebook.com">Facebook</a>
	`;
};

export default loadContact