import { SUCCESS_CODE, TIMEOUT } from "./config";
import { getJSON } from "./ajax/index";

const getData = (url, options)=>{
    return getJSON(url, {
        timeoutTime: TIMEOUT,
        ...options
    }).then(respone => {
        if (respone.code !== SUCCESS_CODE) {
            throw new Error(`出错了：${respone.code}`);
        }
        return respone.data;
    }).catch(err => {
        console.log(err);
    })
}
export default getData