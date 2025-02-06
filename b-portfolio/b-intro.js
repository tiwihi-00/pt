
gsap.registerPlugin(SplitText);

const tl = gsap.timeline();
const splitText = new SplitText("h3", { type: "chars" });
const chars = splitText.chars;

gsap.set(chars, { opacity: 0 });
gsap.set(".symbol", { opacity: 0, y: 50 });
gsap.set(".in-menu", { opacity: 0, y: 50 });
gsap.set(".symbol-in, .symbol-in b", { opacity: 0, y: 20 });

tl.to(".comment", { opacity: 1, y: -20, duration: 1, ease: "power2.out" })
  .fromTo(
    chars,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.1, ease: "power2.out", stagger: 0.1 }
  )
  .to(".symbol", { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" })
  .to(".symbol-in, .symbol-in b", {
    opacity: 1,
    y: 0,
    stagger: 0.3,
    duration: 0.5,
    ease: "power2.out",
  })
  .to(".in-menu", { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" })
  .to(".in-menu li", { stagger: 0.4, duration: 0.5, ease: "power2.out" });
	tl.to('.symbol img', {opacity:1, scale:1.2, duration:1, yoyo:true, repeat:-1,ease:'power2.out'})


  const listElems=document.querySelectorAll('.in-menu ul.nav li')
  const sections=document.querySelectorAll('section')
  const footer=document.querySelector('footer')

  listElems.forEach((li)=>{
    const link=li.querySelector('a[href^="#"]');
    link.addEventListener('click', function(e){
      e.preventDefault();

      const href=this.getAttribute('href');
      const targetSection=document.querySelector(href);

      if(targetSection){
        targetSection.scrollIntoView({
          behavior:'smooth',
          block:'start',
        });
      }
    })
  })