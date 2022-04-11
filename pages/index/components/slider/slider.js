import Swiper from './swiper-bundle.min';

import { URL } from './config';
import getData from 'api/getData';
import render from './items.art';
const layoutEI = document.querySelector('.swiper-wrapper');

getData(URL).then(data => {
    layoutEI.innerHTML = render({
        items:data
    })
    new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            bulletElement: 'li',
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: true,
        autoplay: {
            delay: 2000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
        },
    });
    var swip = document.querySelector('.swiper');
    var swp_btn = swip.querySelectorAll('.swp-btn')
    swip.onmouseover = function () {
        swp_btn[0].style.display = 'block';
        swp_btn[1].style.display = 'block';
    }
    swip.onmouseout = function () {
        swp_btn[0].style.display = 'none';
        swp_btn[1].style.display = 'none';
    }
})
