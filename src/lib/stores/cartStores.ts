import { loadCart } from "$lib/utils/shopify";
import { writable } from "svelte/store";

export const cartQuantity = writable();
export const cartItemsStore = writable([]);


export const getCartItems = async () => {
    const cartId:string = JSON.parse(localStorage.getItem('cartId') || '');
    
    const response = await loadCart(cartId);
    const data = await response.body.cart;
    console.log(response);
    console.log(data);
    cartItemsStore.set(data);
}