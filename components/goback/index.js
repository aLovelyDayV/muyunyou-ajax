import './goback.css';

var goback = document.querySelector('.goback');
var xxsw = document.querySelector('.xxsw');
document.onscroll = function () {
    if (window.scrollY > xxsw.offsetTop) {
        goback.style.display = 'block'
    } else {
        goback.style.display = 'none'
    }
}
goback.onclick = function () {
    window.scroll(0, 0);
}