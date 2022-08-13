import { createCart, loadCart } from "$lib/utils/shopify";
import { writable } from "svelte/store";

export const cartStore = writable([]);
export const cartQuantity = writable();

export const getCartItems = async () => {
    const cartId:string= JSON.parse(localStorage.getItem('cartId')|| "");

    try {
        const shopifyResponse = await loadCart(cartId)

        let sum = 0;

        shopifyResponse.body.data.cart.lines.edges.forEach((d: { node: { quantity: number; }; })=> {
            sum += d.node.quantity;
        });

        cartQuantity.set(sum);
        return shopifyResponse;
        
    } catch (error) {
        console.log(error);
        
    }
    
}