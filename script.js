//your JS code here. If required.
function removeColor {
	let select = document.getElementById("colorSelect");

	let selectedColor = select.value;

	for (let i = 0; i < select.options.length; i++) {
		if(select.options.value[i] === selectedColor) {
			select.remove(i);
			break;
		}
	}