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
    var modal = document.querySelector(".modal");
    var trigger = document.getElementsByClassName('trigger');
    //var trigger = document.querySelectorAll(".trigger");
    var closeButton = document.querySelector(".close-button");

    function toggleModal() {
        modal.classList.toggle("show-modal");
    }

    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        }
    }

    for (var i = 0; i < trigger.length; i++) {
        console.log(trigger);
        trigger[i].addEventListener('click', function() {
            toggleModal();
        })
    };
    //trigger.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);