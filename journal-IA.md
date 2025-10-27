Pour corriger un vide à droite de mon Swiper sur mobile après un filtrage Vue, j’ai remis l’instance Swiper au début et forcé un recalcul après chaque clic de filtre via $nextTick() que l'IA m'a suggéré.

        this.$nextTick(() => {
                if (window.projetsSwiper) {
                    window.projetsSwiper.update();
                    window.projetsSwiper.slideTo(0, 0); // évite le "blank" à droite et le décalage résiduel
                }
            });

Ensuite il m'a dit de changer mon "const projetsSwiper" en "window.projetsSwiper"

            window.projetsSwiper = new Swiper(".projets-swiper", {
                 slidesPerView: "auto",
                spaceBetween: 16,
                 centeredSlides: true,
                loop: false,
            });

De plus il m'a aidé avec selectedProject pour mon vue JS

Je lui ai demandé quelle approche je pouvais utiliser pour faire en sorte que si je clique sur un projet, ça montre dedans le popup les informations pour le projet spécifique (aulieu de toujours montrer le premier de mon json)

L’IA m’a proposé de:

Ajouter selectedProject: null dans data().

Passer l’objet projet cliqué à openPopup(project) pour remplir selectedProject et ouvrir le popup.

> > openPopup(project) {
> > this.selectedProject = project;
> > },
> >
> > closePopup() {
> > this.selectedProject = null;
> > }
> >
> > HTML: @click="openPopup(p)" aulieu de @click="openPopup()"

Il m'a aussi affirmer qu'ensuite je pourrais utiliser selectedProject dans le HTML pour recupérer les données JSON dépendant du projet ouvert dans le popup via: "selectedProject." :
{{ selectedProject.title }}
{{ selectedProject.category }}
{{ selectedProject.type }}
etc....
