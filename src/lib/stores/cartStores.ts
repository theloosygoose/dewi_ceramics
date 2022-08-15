import { loadCart } from "$lib/utils/shopify";
import { writable } from "svelte/store";

export const cartQuantity = writable(0);
export const cartItemsStore = writable([]);


export const getCartItems = async () => {
    const cartId:string = JSON.parse(localStorage.getItem('cartId') || '');
    
    const response = await loadCart(cartId);
    const data = await response.body.cart;

    let sum = 0;
    data.lines.edges.forEach((d: { node: { quantity: number; }; }) => {
        sum += d.node.quantity;
    });

    cartQuantity.set(sum);
    cartItemsStore.set(data);
}