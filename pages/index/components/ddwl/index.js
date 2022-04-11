import './ddwl.css';
import changeTab from 'api/changeTab'

import { URL } from './config';
import getData from 'api/getData';
import render from './items.art';
const layoutEI = document.querySelector('.ddwl .bd');

getData(URL).then(data => {
    layoutEI.innerHTML = render(data);
    const ddwl = document.querySelector('.ddwl');
    changeTab(ddwl);
})
