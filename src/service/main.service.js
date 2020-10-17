
import { ajax } from './ajaxhelper.js';

async function getInfoData(reqdata) {

    let url = 'data/data.json';
    let result = await ajax.get(url,reqdata);
    
    return result.data
    
}

export const mainService = {
    getInfoData
}