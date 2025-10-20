// Ajout des plugins dans le JS
gsap.registerPlugin(ScrollTrigger);


// ----- VUE JS ----- //
const app = Vue.createApp({
    data() {
        return {
            projectsArr: [],
            activeFilter: 'TOUT',
            popupOpened: false,
            selectedProject: null
        }
    },
    methods: {
        setFilter(filter) {
            this.activeFilter = filter;
            this.$nextTick(() => {
                if (window.projetsSwiper) {
                    window.projetsSwiper.update(); // IA: Met a jour le swiper
                    window.projetsSwiper.slideTo(0, 0); // IA: évite le "blank" à droite et le décalage résiduel
                }
            });
        },
        openPopup(project) {
            this.popupOpened = true;
            this.selectedProject = project;

        },
        closePopup() {
            this.popupOpened = false;
            this.selectedProject = null;
        }
    },
    mounted() {
        fetch('../src/projects.json')
            .then(response => response.json())
            .then(data => {
                this.projectsArr = data;
            })
            .catch(error => console.log('projects.json introuvable: ', error));
    }
});

app.mount('#app');


// ----- ANIMATION GSAP ----- //

// SCROLLTRIGGER BANNIERE

gsap.to(".bloc-texte, .fleche-banniere", {
    y: -120,
    opacity: 0,
    ease: "none",
    scrollTrigger: {
        trigger: ".banniere",
        start: "top top",
        end: "center top",
        scrub: 0.4
    }
});

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

// ----- SWIPER BUNDLE ----- //

// Swiper logos (compétences)
const logosSwiper = new Swiper('.logos-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 6,
    autoplay: {
        delay: 1200,
    }
});


// Swiper projets (pour mobile) changement en "window." aulieu de créer un const suggéré par IA
window.projetsSwiper = new Swiper('.projets-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    centeredSlides: true,
    loop: false
});