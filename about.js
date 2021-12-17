console.log("hello world");

const catPhoto = document.getElementById('cat-photo')

catPhoto.addEventListener('mouseover', ()=>{
	//console.log('e is', e)
	alert(`The kitty thinks you're doing a great job`)
})

function handleSubmit(evt) {
	evt.preventDefault();
	
	// console.log('form submit');
	alert("Form has been submitted!")
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);