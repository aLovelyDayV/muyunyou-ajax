import getData from 'api/getData';
import render2 from './items2.art';

const menu2 = document.querySelector('.menus');
const menus_fn = () => {
    var menu_lis = document.querySelectorAll('.menu li');
    
    for (var i = 0; i < menu_lis.length; i++) {
        (function (i) {
            menu_lis[i].addEventListener('mouseenter', function () {
                for (var j = 0; j < menu_lis.length; j++) {
                    menu_lis[j].className = '';
                }
                this.className = 'active';
                var type = this.getAttribute('data-n')
                getData(`https://www.imooc.com/api/mall-PC/index/menu/${type}`)
                    .then(data => {
                        menu2.innerHTML = render2({ type: type, items: data })
                        var menus_c = document.querySelectorAll('.menu-content');
                        for (var j = 0; j < menus_c.length; j++) {
                            menus_c[j].style.display = 'none';
                        }
                        menus_c[i].style.display = 'block';
                    })
            })
        })(i)
    }
    var menu_box = document.querySelector('.menu-box');
    var menus_c = document.querySelectorAll('.menu-content');
    menu_box.onmouseleave = function () {
        for (var j = 0; j < menus_c.length; j++) {
            menus_c[j].style.display = 'none';
        }
        for (var j = 0; j < menu_lis.length; j++) {
            menu_lis[j].className = '';
        }
    }
}
export default menus_fn;