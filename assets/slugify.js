const titleInput = document.querySelector('input[name=title]');
const slugInput = document.querySelector('input[name=slug]');

const slugify = (val) => {
	return val.toString().toLowerCase().trim()
	.replace(/&/g, '-and-')      //replace & and '-and-'
	.replace(/[\s\W-]+/g,'-')    // replace spaces, non word chars and dhases with a single dash
};

titleInput.addEventListener('keyup', (e) => {
	slugInput.setAttribute('value', slugify(titleInput.value));
});