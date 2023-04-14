import * as flsFunction from "./modules/function.js";

flsFunction.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper();

    //Бургер
    document.querySelector('.burger').addEventListener('click', function(){
        this.classList.toggle('active');
        document.querySelector('.header__navigation').classList.toggle('open');
    })