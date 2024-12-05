const listElems = document.querySelectorAll('.in-menu ul.nav li');
const sections = document.querySelectorAll('section');

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


const words = ["Discover", "Build", "Dream"];
let wordIndex = 0;

function changeText() {
  document.querySelector(".dynamic-text").textContent = words[wordIndex];
  wordIndex = (wordIndex + 1) % words.length;
}

setInterval(changeText, 2000);