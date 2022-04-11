import './zsj.css';

import { URL } from './config';
import getData from 'api/getData';
import render from './items.art';

const layoutEI = document.querySelector('.zsj .bd');
getData(URL).then(data => {
    layoutEI.innerHTML = render(data);
})
