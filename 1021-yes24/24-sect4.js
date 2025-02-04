document.addEventListener('DOMContentLoaded', ()=>{
	initializeTabs();
})
function initializeTabs(
	containerSelector='#sect4',
	menuSelector='ul.rank li.rank-li a',
	contentSelector='.tab'
){
	const container=document.querySelector(containerSelector);
	const menuItem=document.querySelectorAll(menuSelector);
	const contentItem=document.querySelectorAll(contentSelector);

	menuItem[0].classList.add('on');
	contentItem[0].classList.add('on');

	function controlClass(elements, action){
		elements.forEach((el)=>el.classList[action]('on'));
	};

	menuItem.forEach((menu)=>{
		menu.addEventListener('click', function(e){
			e.preventDefault();

			controlClass(menuItem, 'remove');
			menu.classList.add('on');

			controlClass(contentItem, 'remove');

			const targetId=menu.getAttribute('href');
			const targetContent=container.querySelector(targetId);
			if(targetContent){
				targetContent.classList.add('on')
			}


		})
	})
}