function dropDownShow(dom) {
    dom.onmouseover = function () {
        this.children[1].style.display = 'block'
    }
    dom.onmouseout = function () {
        this.children[1].style.display = 'none'
    }
}
export default dropDownShow;