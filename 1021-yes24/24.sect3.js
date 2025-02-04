
const rankingItems=document.querySelectorAll('.sect3-lf ul.ranking .ranking-li')

const tabMenuItems=document.querySelectorAll('.sect3-ri ul.tab-menu li');

rankingItems.forEach(ranking=>{
	ranking.addEventListener('click', function(e){
		e.preventDefault();

		rankingItems.forEach(item=>item.classList.remove('on'));
		this.classList.add('on')
	})
})

rankingItems.forEach((ranking)=>{
ranking.addEventListener('click', ()=>{
	tabMenuItems.forEach((tabMenu)=>{
		tabMenu.classList.remove('active');

		const tabId=ranking.getAttribute('data-tab');
		const targetId=document.getElementById(tabId)
		if(targetId){
			targetId.classList.add('active')
		}
	})
})
})