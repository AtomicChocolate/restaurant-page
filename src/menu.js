function loadMenu() {
	const container = document.querySelector("#content");

	container.innerHTML = "";

	container.innerHTML = `
		<header>
			<h2>Restaurant Menu</h2>
			<p>Check out some of our featured items that make our restaurant famous. To see the full menu, visit our restaurant in-person or check on Doordash or whatever.</p>
		</header>

		<div class="menu-item">
			<h3>Healthy Pizza</h3>
			<img src="imgs/menu/healthypizza.png">
			<p>We use advanced cooking techniques to make pizza healthier for everyone by reducing the number of slices you eat while still getting the same amount of food.</p>
		</div>
		<div class="menu-item">
			<h3>Telekinesis Pizza</h3>
			<img src="imgs/menu/floatingpizza.jpg">
			<p>If you're jealous of all the gifted people who can move things with their mind, this pizza is for you. Advanced cooking techniques make this pizza able to be moved by anyone's mind, no superpowers required.</p>
		</div>
	`;
};

export default loadMenu