import './fav-ad.css';

import { URL } from './config';
import getData from 'api/getData';
import render from './items.art';

const layoutEI = document.querySelector('.fav-ad ul');
getData(URL).then(data => {
    layoutEI.innerHTML = render({
        items: data
    })
})
