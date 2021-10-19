import {observable} from 'mobx'
import Iproduct from './Iproduct';


export let theCart:Iproduct[]=observable([

])


export const AddToCart=(prod:Iproduct)=>{
    theCart.push(prod);
}