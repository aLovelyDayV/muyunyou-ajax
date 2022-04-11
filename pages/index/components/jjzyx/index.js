import './jjzyx.css';
import changeTab from 'api/changeTab';

import { URL } from './config';
import getData from 'api/getData';
import render from './items.art';

const layoutEI = document.querySelector('.jjzyx .bd');
getData(URL).then(data => {
    layoutEI.innerHTML = render(data);
    const jjzyx = document.querySelector('.jjzyx');
    changeTab(jjzyx);
})
