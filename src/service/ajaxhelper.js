import axios from 'axios';
import config from './config.js';

function createAjax(url,data){
    const axiosOptions = {
        baseURL:config.apiUrl,
        timeout:5000
    }
    const ajaxhelper = axios.create(axiosOptions);
    console.log('--ajaxhelper.createAjax--');
    console.log(ajaxhelper);
    console.log(url);
    console.log(data);
};

async function get(url,data){
    let result = axios.get(url,data)
        .then((response) => {
            return response
        })
        .catch((error) => {  
            console.log(error); 
        });
    // console.log(result);
    return result;
}
async function post(url,data){
    createAjax(url,data)
}


export const ajax = {
    post,
    get
}