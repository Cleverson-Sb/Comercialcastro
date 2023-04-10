function menuShow(){
    let menuMobile = document.querySelector('.mobilimenu');
    if (menuMobile.classList.contains('open') ){
        (menuMobile.classList.remove('open'));
        document.querySelector('.icone').src = "img/menu_white_36dp.svg";
    } else {
        (menuMobile.classList.add('open'))
        document.querySelector('.icone').src = "img/close_white_36dp.svg";
    }
}

