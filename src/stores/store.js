import { writable } from 'svelte/store';

//dashboard tabs
export const activeTab = writable(1);

//message tabs
export const activeMessageTab = writable(0);
