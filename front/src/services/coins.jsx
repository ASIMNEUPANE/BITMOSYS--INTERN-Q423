import API from '../utils/API';
import { URLS } from '../constants';

export const getALl = async()=>{
    return await API.get(URLS.COINS)
}