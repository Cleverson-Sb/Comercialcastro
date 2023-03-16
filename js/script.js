function menuShow(){
    let menuMobile = document.querySelector('.mobilimenu');
    if (menuMobile.classList.contains('open') ){
        (menuMobile.classList.remove('open'));
        document.querySelector('.icon').src = <i class="fa-solid fa-x"></i>
    } else {
        (menuMobile.classList.add('open'))
    }
}