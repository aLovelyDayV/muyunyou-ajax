import './menu.css';

import { URL } from './config';
import getData from 'api/getData';
import render1 from './items1.art';
import menus_fn from './menus_fn';

const menu1 = document.querySelector('.menu');
getData(URL).then(data => {
    menu1.innerHTML = render1({
        items:data
    })
    menus_fn();
})
