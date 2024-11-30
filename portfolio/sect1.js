
const listElems=document.querySelectorAll('ul.nav li')
const sections=document.querySelectorAll('section')

listElems.forEach((li)=>{
	const link=li.querySelector('a[href^="sect"]')
	link.addEventListener('click', function(e){
		e.preventDefault();

		const href = this.gerAttribute('href')
	
	})
})
