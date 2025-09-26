//your JS code here. If required.
document.getElementById("removeBtn").addEventListener("click", () => {
	let colorSelect = document.getElememtById("colorSelect");
	let selectedColor = colorSelect.value;

	for (let i = 0; i < colorSelect.options.length; i++) {
		if(colorSelect.options[i].text === selectedColor) {
			colorSelect.remove(i);
			break;
		}
	}
})