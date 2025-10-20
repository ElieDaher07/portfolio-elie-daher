Pour corriger un vide à droite de mon Swiper sur mobile après un filtrage Vue, j’ai remis l’instance Swiper au début et forcé un recalcul après chaque clic de filtre via $nextTick() que l'IA m'a suggéré.

        this.$nextTick(() => {
                if (window.projetsSwiper) {
                    window.projetsSwiper.update();
                    window.projetsSwiper.slideTo(0, 0); // évite le "blank" à droite et le décalage résiduel
                }
            });

De plus il m'a aidé avec selectedProject pour mon vue JS

L’IA m’a proposé de:

Ajouter selectedProject: null dans data().

Passer l’objet projet cliqué à openPopup(project) pour remplir selectedProject et ouvrir le popup.

>> openPopup(project) {
>>  this.selectedProject = project;
>>  },
>>
>> closePopup() {
>>   this.selectedProject = null;
>>  }
>>
>> HTML:  @click="openPopup(p)"

Pour le popup il m'a aidé pour utiliser selectedProject pour recupérer les données JSON dépendant du projet ouvert dans le popup.

{{ selectedProject.title }}
{{ selectedProject.category }}
{{ selectedProject.type }} etc....
