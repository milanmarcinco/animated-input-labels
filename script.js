document.querySelector("#form").addEventListener("submit", (e) => {
	e.preventDefault();
	const inputs = document.querySelectorAll("input");
	inputs.forEach((input) => {
		input.value = "";
	});
});