
  import Swiper, {Autoplay, Pagination ,Navigation} from 'swiper';

  Swiper.use([Autoplay ,Pagination , Navigation])



 
const slider = () => {
	 const swiper = new Swiper('.swiper', {
		loop: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      })
	 

	//  const swiper = new Swiper(".swiper", {
    //     spaceBetween: 30,
    //     centeredSlides: true,
    //     autoplay: {
    //       delay: 2500,
    //       disableOnInteraction: false,
    //     },
    //     pagination: {
    //       el: ".swiper-pagination",
    //       clickable: true,
    //     },
    //     navigation: {
    //       nextEl: ".swiper-button-next",
    //       prevEl: ".swiper-button-prev",
    //     },
    //   });

	}
export default slider