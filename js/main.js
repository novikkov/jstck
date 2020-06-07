// menu-button
let menuButton = document.querySelector('.menu-button');
let menu = document.querySelector('.header-menu__container');
menuButton.addEventListener('click', function(){
    menuButton.classList.toggle('menu-button-active');
    menu.classList.toggle('header-active');
})
// end

// открытие формы
class Popup{
    open(event) {
        function popupIsOpened(element){
            element.classList.add('popup_is-opened');
        }

        if (event.target.classList.contains('form__button')) {
            const popupForm = document.querySelector('.popup_new');
            popupIsOpened(popupForm);
            document.forms.new.reset(); 
        }
    }

    close(event){
        if (event.type === 'submit' || event.key === 'Escape'){
            event.target.closest('.popup').classList.remove('popup_is-opened');
            event.preventDefault();
        }
        if (event.target.closest('.popup__content') === null || event.target.classList.contains('popup__close')){
            event.target.closest('.popup').classList.remove('popup_is-opened');
        }
    }
}

const popup = new Popup();

document.addEventListener('click', popup.open);
document.addEventListener('click', popup.close);
document.addEventListener('keydown', popup.close);
document.forms.new.addEventListener('submit', popup.close);