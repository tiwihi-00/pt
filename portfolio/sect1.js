





const tl = gsap.timeline();
const splitText = new SplitText("h3", { type: "chars" });
const chars = splitText.chars;

// 초기 상태 설정
gsap.set(chars, { opacity: 0 });
gsap.set(".symbol", { opacity: 0, y: 50 });
gsap.set(".in-menu", { opacity: 0, y: 50 });
gsap.set(".symbol p span, .symbol p b", { opacity: 0, y: 20 });

tl.to(".comment", {
    opacity: 1,
    y: -20,
    duration: 1,
    ease: "power2.out",
})
    .fromTo(
        chars,
        { opacity: 0, y: 20 },
        {
            opacity: 1,
            y: 0,
            duration: 0.1,
            ease: "power2.out",
            stagger: 0.1,
        }
    )
    .to(".symbol", {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
    })
    .to(".symbol p span, .symbol p b", {
        opacity: 1,
        y: 0,
        stagger: 0.3,
        duration: 0.5,
        ease: "power2.out",
    })
    .to(".in-menu", {
        opacity: 1,
        y: 0,

        duration: 0.5,
        ease: "power2.out",
    })
    .to(".in-menu li", {
        stagger: 0.4,
        duration: 0.5,
        ease: "power2.out",
    })
    .to(".symbol img", {
        opacity: 1,
        scale: 1.2,
        duration: 1,
        yoyo: true,
        repeat: -1,
        ease: "power2.out",
    })
gsap.to(".sphere", {
    y: 0,
    rotation: 360,
    scale: 1.1,
    duration: 2,
    ease: "bounce.out"
});





const listElems = document.querySelectorAll('.in-menu ul.nav li');
const sections = document.querySelectorAll('section');
const footer = document.querySelector('footer')

listElems.forEach((li) => {
    const link = li.querySelector('a[href^="#"]');
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const href = this.getAttribute('href');
        const targetSection = document.querySelector(href);

        if (targetSection) {
            // 스크롤 이동
            targetSection.scrollIntoView({
                behavior: 'smooth', // 부드럽게 스크롤
                block: 'start'     // 섹션의 상단을 기준으로 정렬
            });
        } else {
            console.warn('No matching section found for:', href);
        }
    });
});

