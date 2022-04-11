import './xxsw.css';
import { URL } from './config';
import getData from 'api/getData';
import render from './items.art';

const layoutEI = document.querySelector('.xxsw .bd')
getData(URL).then(data => {
    layoutEI.innerHTML = render({
        items:data
    })
})
