// Ajout des plugins dans le JS
gsap.registerPlugin(ScrollTrigger);

// ----- SPLITTEXT + GSAP ----- //

// Quand le HTML est chargé, on lance les animations de la bannière
window.addEventListener('DOMContentLoaded', () => {

    // MOT PORTFOLIO
    gsap.from(".mot-portfolio", {
        opacity: 0,
        duration: 2,
        ease: "power1.out",
        delay: 0.3
    });

    // PRENOM, NOM
    gsap.from(".prenom", {
        opacity: 0,
        y: 8,
        duration: 1.4,
        ease: "power3.out",
        delay: 1.6
    });

    gsap.from(".nomfamille", {
        opacity: 0,
        y: 8,
        duration: 1.5,
        ease: "power3.out",
        delay: 1.6
    });

    // BLOC RÔLE

    gsap.from(".bloc-role", {
        opacity: 0,
        y: 6,
        duration: 0.8,
        ease: "power1.out",
        delay: 2.5
    });

    // FLÈCHE
    gsap.from(".fleche-banniere", {
        opacity: 0,
        y: 8,
        duration: 1.5,
        ease: "power3.out",
        delay: 3
    });
});

// ----- SCROLLTRIGGER ----- //

gsap.to(".bloc-texte, .fleche-banniere", {
    y: -120,
    autoAlpha: 0,
    ease: "none",
    scrollTrigger: {
        trigger: ".banniere",
        start: "top top",
        end: "center top",
        scrub: 0.1
    }
});

// ----- SWIPER BUNDLE ----- //

// Swiper logos (compétences)
const logosSwiper = new Swiper('.logos-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 6,
    autoplay: {
        delay: 1200,
        disableOnInteraction: false
    }
});


// Swiper projets (pour mobile)
const projetsSwiper = new Swiper('.projets-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    centeredSlides: true,
    loop: false
});

// ----- VUE JS ----- //
const app = Vue.createApp({
    data() {
        return {}
    },
    methods: {}
});

app.mount('#app');