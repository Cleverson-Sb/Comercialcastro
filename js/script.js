function menuShow(){
    let menuMobile = document.querySelector('.mobilimenu');
    if (menuMobile.classList.contains('open') ){
        (menuMobile.classList.remove('open'));
        document.querySelector('.icon') = <i class="fa-solid fa-bars"></i>
    } else {
        (menuMobile.classList.add('open'))
        document.querySelector('.icon') = <i class="fa-solid fa-x"></i>
    }
}