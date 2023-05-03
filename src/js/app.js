import * as flsFunction from "./modules/function.js";

flsFunction.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper();

    //Бургер
    document.querySelector('.burger').addEventListener('click', function(){
        this.classList.toggle('active');
        document.querySelector('.header__navigation').classList.toggle('open');
    })
//модальное окно
    let modal = document.querySelector(".modal");
    let trigger = document.getElementsByClassName('trigger');
    let closeButton = document.querySelector(".close-button");

    function toggleModal() {
        modal.classList.toggle("show-modal");
    }

    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        }
    }

    
    for (let i = 0; i < trigger.length; i++) {
        trigger[i].addEventListener('click', function() {
            console.log(trigger);
            toggleModal();
        })
    };
    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);