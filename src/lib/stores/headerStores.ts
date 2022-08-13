import { writable } from "svelte/store";


export const isMenuOpenStore = writable(false);
export const menuTagStore = writable('Menu');

export const isCartOpenStore = writable(false);
export const cartTagStore = writable('Cart');

export const menuHandler = () => {
    isMenuOpenStore.update((isOpen:boolean) => isOpen = !isOpen) 

    menuTagStore.update((tag:string) => {
        if (tag === 'Menu'){
            return tag = 'Close';
        } else {
            return tag ='Menu';
        }
    })
}

export const cartHandler = () => {
    isCartOpenStore.update((isOpen:boolean) => isOpen = !isOpen)

    cartTagStore.update((tag:string) => {
        if (tag === 'Cart'){
            return tag = 'Close';
        } else {
            return tag = 'Cart';
        }
    })
}


