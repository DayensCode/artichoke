import Swiper from 'swiper/bundle';

function swiper() {
	const swiper = new Swiper('#swiper-banner', {
		slidesPerView: 1,
		navigation: {
			nextEl: '#slider-next',
			prevEl: '#slider-prev',
		},
		loop: true
	});
}
	
export default swiper;