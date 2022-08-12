import { onMount } from "svelte";
import { writable } from "svelte/store";
import { postToShopify } from "/utils/shopify";

export const getCartItems =async () => {
    let cartId = JSON.parse(localStorage.getItem('cartId'));

    try {
       const shop 
    } catch (error) {
        console.log(error);
        
    }
}