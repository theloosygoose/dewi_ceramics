import { writable } from "svelte/store";


// eslint-disable-next-line prefer-const
export let showAlert = writable(false);

export const alertHandler = async () => {
    showAlert.update((d) => d = true);

    setTimeout(() => {
       showAlert.update((d) => d = false);
    }, 6000);
}