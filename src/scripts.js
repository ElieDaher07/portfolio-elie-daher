// Ajout des plugins dans le JS
gsap.registerPlugin(ScrollTrigger);

// Création de l'app Vue: charge les projets initiales, gère le filtre et l'ouverture/fermeture du popup et le fetch
const app = Vue.createApp({
  data() {
    return {
      projectsArr: [],
      activeFilter: "TOUT",
      popupOpened: false,
      selectedProject: null,
    };
  },
  methods: {
    // Applique le nouveau filtre et IA: force la mise à jour du swiper mobile pour éviter les décalages
    setFilter(filter) {
      this.activeFilter = filter;
      this.$nextTick(() => {
        if (window.projetsSwiper) {
          window.projetsSwiper.update(); // IA: Met a jour le swiper après le clique d'un filtre
          window.projetsSwiper.slideTo(0, 0); // IA: évite le "blank" à droite et le décalage après avoir cliquer sur un filtre
        }
      });
    },
    // Ouverture du popup d'un projet spécifique
    openPopup(project) {
      this.popupOpened = true;
      this.selectedProject = project;
    },
    // Ferme le popup
    closePopup() {
      this.popupOpened = false;
      this.selectedProject = null;
    },
  },
  // Chargement des données json
  mounted() {
    fetch("./src/projects.json")
      .then((response) => response.json())
      .then((data) => {
        this.projectsArr = data;
      })
      // Si il ne trouve pas le json ou tout autre erreur, montre le message d'erreur dans le console.log
      .catch((error) => console.log("projects.json introuvable: ", error));
  },
});

app.mount("#app");

// ----- ANIMATION GSAP ----- //

// SCROLLTRIGGER BANNIERE

// Anime la bannière au scroll (monte et fade en sortant du viewport)
gsap.to(".bloc-banniere-texte, .fleche-banniere", {
  y: -120,
  opacity: 0,
  ease: "none",
  scrollTrigger: {
    trigger: ".banniere",
    start: "top top",
    end: "center top",
    scrub: 0.4,
  },
});

// Fait apparaître progressivement les titres dans la bannière
// MOT PORTFOLIO
gsap.from(".mot-portfolio", {
  opacity: 0,
  duration: 2,
  ease: "power1.out",
  delay: 0.3,
});

// PRENOM
gsap.from(".prenom", {
  opacity: 0,
  y: 8,
  duration: 1.4,
  ease: "power3.out",
  delay: 1.6,
});

// NOM
gsap.from(".nomfamille", {
  opacity: 0,
  y: 8,
  duration: 1.5,
  ease: "power3.out",
  delay: 1.6,
});

// BLOC RÔLE
gsap.from(".bloc-role", {
  opacity: 0,
  y: 6,
  duration: 0.8,
  ease: "power1.out",
  delay: 2.5,
});

// FLÈCHE
gsap.from(".fleche-banniere", {
  opacity: 0,
  y: 8,
  duration: 1.5,
  ease: "power3.out",
  delay: 3,
});

// ----- SWIPER BUNDLE ----- //

// Carrousel des logos de compétences: affiche 6 logos visibles, auto-slide en boucle
const logosSwiper = new Swiper(".logos-swiper", {
  slidesPerView: "6",
  spaceBetween: 16,
  autoplay: {
    delay: 1800,
  },
  loop: true,
});

// Carrousel des projets (mobile): affichage des slides auto, centré, pas de boucle. Changement en "window." aulieu de créer un const suggéré par IA
window.projetsSwiper = new Swiper(".projets-swiper", {
  slidesPerView: "auto",
  spaceBetween: 16,
  centeredSlides: true,
  loop: false,
});
