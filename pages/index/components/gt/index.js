import './gt.css';
import changeTab from 'api/changeTab';

import { URL } from './config';
import getData from 'api/getData';
import render from './items.art';

const layoutEI = document.querySelector('.gt .bd')
var gt = document.querySelector('.gt');
getData(URL).then(data => {
    layoutEI.innerHTML = render(data)
    changeTab(gt);
})

