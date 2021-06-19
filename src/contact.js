function loadContact() {
	const container = document.querySelector("#content");

	container.innerHTML = "";

	container.innerHTML = `
		<header>
			<h1>Contact Us</h1>
			<p>Call us at (202)-555-0159.</p>
		</header>

		<h2>Or find us on social media:</h2>
		<a href="https://twitter.com">Twitter</a>
		<a href="https://www.youtube.com">YouTube</a>
		<a href="https://www.facebook.com">Facebook</a>
	`;
};

export default loadContact