function loadHome() {
	const container = document.querySelector("#content");

	container.innerHTML = "";

	container.innerHTML = `
		<header>
			<h1>Welcome to Untitled! The best restaurant with no name.</h1>
			<p>Welcome to the website for Untitled, our restaurant. Come spend your money here, I would write more but they only pay me minimum wage.</p>
		</header>
		<img src="imgs/home/pizzer.gif">
	`;
};

export default loadHome