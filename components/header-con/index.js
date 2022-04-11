import './header-con.css';

var search = document.querySelector('.search-frame').children[0];
var hot_search = document.querySelector('.hot-search')
search.onfocus = function () {
    hot_search.style.display = 'block'
}
search.onblur = function () {
    hot_search.style.display = 'none'
}
//搜索框热词变动
var i = 0;
setInterval(function () {
    i++;
    if (i == hot_search.children.length) {
        i = 0;
    }
    search.placeholder = hot_search.children[i].innerHTML;
}, 2000);