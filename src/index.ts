import { Character } from './ts/Character';
import images from '/assets/images/*.jpg';

const characters = [
    new Character({
        name:'Walter White',
        count: 62,
        label: 'episodes'
    }),
    new Character({
        name:'Hank Schrader',
        count: 51,
        label: 'episodes'
    }),
    new Character({
        name:'Jesse Pinkman',
        count: 62,
        label: 'episodes'
    }),
    new Character({
        name:'Lydia Rodarte-Quayle',
        count: 9,
        label: 'episodes'
    }),
    new Character({
        name:'Marie Schrader',
        count: 50,
        label: 'episodes'
    }),
    new Character({
        name:'Mike Ehrmantraut',
        count: 25,
        label: 'episodes'
    }),
    new Character({
        name:'Saul Goodman',
        count: 36,
        label: 'episodes'
    }),
    new Character({
        name:'Gustavo Fring',
        count: 24,
        label: 'episodes'
    }),
    new Character({
        name:'Skyler White',
        count: 61,
        label: 'episodes'
    }),
    new Character({
        name:'Todd Alquist',
        count: 11,
        label: 'episodes'
    }),
    new Character({
        name:'Walter White Jr',
        count: 50,
        label: 'episodes'
    })
]
const slideWrapper = document.querySelector(".hero-right");

const generateSlide = (id: number, isFirst: boolean) =>  {
    const element = document.createElement('div');

    // Inject correct classes
    element.classList.add('slide');
    isFirst && element.classList.add('slide--active');

    // Inject slide content
    element.innerHTML = `
    <div class="slide-header"><h2>${characters[id].name}</h2></div>
    <div class="slide-content">
        <div class="slide-title">${characters[id].name}</div>
        <div class="slide-data">
            <div class="count">${characters[id].count}</div>
            <div class="label">${characters[id].label}</div>
        </div>
    </div>
    <div class="slide-image"></div>`;
    return element;
};

let html = '';

for(let i = 0; i <= 10; i++) {
    slideWrapper.appendChild(generateSlide(i, i === 0))
}
slideWrapper.append(html)


const slides = document.querySelectorAll(".slide");

const handleOnMouseLeave = (slide: Element) => {
    slide.classList.remove("slide--active");
};

const handleOnMouseEnter = (slide: Element) => {
    slides.forEach(s => handleOnMouseLeave(s));
    slide.classList.add("slide--active");
  };

slides.forEach((slide: Element) => slide.addEventListener("mouseenter", () => handleOnMouseEnter(slide))
);
slides.forEach((slide: Element) =>
    slide !== slides[0] && slide.addEventListener("mouseleave", () => handleOnMouseLeave(slide))
);
slideWrapper.addEventListener('mouseleave', () => handleOnMouseEnter(slides[0]))