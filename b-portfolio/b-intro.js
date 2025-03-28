
gsap.registerPlugin(SplitText);

const tl = gsap.timeline();
const splitText = new SplitText("h3", { type: "chars" });
const chars = splitText.chars;

gsap.set(chars, { opacity: 0 });


tl.to(".comment", { opacity: 1, y: -20, duration: 1, ease: "power2.out" })
  .fromTo(
    chars,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.1, ease: "power2.out", stagger: 0.1 }
  )
 


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
          block:'start'
        });
      }
    })
  });

