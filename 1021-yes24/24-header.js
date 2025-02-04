
const xbtn=document.querySelector('.close-map-btn')
const sitemap=document.querySelector('.sitemap');
const bar=document.querySelector('a.pf-ham');

bar.addEventListener('click', function(e){
e.preventDefault()
sitemap.classList.add('on')
})

xbtn.addEventListener('click', function(e){
	e.preventDefault()
	sitemap.classList.remove('on')
})

const siteMenus=document.querySelectorAll('ul.sitemap-nav li.main-mn')

function removeClass(){
	siteMenus.forEach(function(item){
		item.classList.remove('on')
	});
};

siteMenus.forEach(function(site){
	site.addEventListener('mouseenter', function(){
		removeClass()
		site.classList.add('on')
	});
});

siteMenus.forEach(function(site){
	site.addEventListener('mouseleave', function(){
		removeClass()
	})
})