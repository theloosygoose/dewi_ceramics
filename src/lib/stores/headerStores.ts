import { writable } from "svelte/store";


export const isMenuOpenStore = writable(false);
export const menuTagStore = writable('Menu');

export const isCartOpenStore = writable(false);
export const cartTagStore = writable('Cart');

export const menuHandler = () => {
    isMenuOpenStore.update((isOpen:boolean) => isOpen = !isOpen) 
    isCartOpenStore.update((isOpen:boolean) => isOpen = false)
    cartTagStore.update((tag) => tag = 'Cart')

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
    isMenuOpenStore.update((isOpen:boolean) => isOpen = false)
    menuTagStore.update((tag:string)=> tag = "Menu")

    cartTagStore.update((tag:string) => {
        if (tag === 'Cart'){
            return tag = 'Close';
        } else {
            return tag = 'Cart';
        }
    })
}


