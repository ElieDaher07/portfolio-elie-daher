const app = Vue.createApp({
    data() {
        return {}
    },
    methods: {}
});

app.mount('#app');

const logosSwiper = new Swiper('.logos-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 6,
    autoplay: {
        delay: 1200,
        disableOnInteraction: false
    }
});

const projetsSwiper = new Swiper('.projets-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    centeredSlides: true,
    loop: false
});