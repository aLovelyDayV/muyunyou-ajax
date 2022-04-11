function changeTab(box) {
    var tabli = box.querySelector('.tab-hd').children;
    var tab_list = box.querySelectorAll('.tab-list');
    for (var i = 0; i < tabli.length; i++) {
        tabli[i].setAttribute('index', i)
        tabli[i].onmouseover = function () {
            for (var i = 0; i < tabli.length; i++) {
                tabli[i].className = '';
            }
            this.className = 'active';

            var index = this.getAttribute('index');
            for (var i = 0; i < tab_list.length; i++) {
                tab_list[i].style.display = 'none';
            }
            tab_list[index].style.display = 'block';
        }
    }
}
export default changeTab;