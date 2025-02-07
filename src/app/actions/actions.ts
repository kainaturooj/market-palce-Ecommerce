"use client"
import {  ProductDataType } from "../../lib/type";

export const addToCart = (product :  ProductDataType) => {
    const cart :  ProductDataType[] = JSON.parse(localStorage.getItem('cart') || '[]')

    const existingProductIndex = cart.findIndex(item => item._id === product._id)

    if(existingProductIndex > -1) {
        cart[existingProductIndex].inventory += 1
    }
    else {
        cart.push({
            ...product, inventory: 1
        })
    }

    localStorage.setItem('cart', JSON.stringify(cart))
}

export const removeFromCart = (productId : string) => {
    let cart :  ProductDataType[] = JSON.parse(localStorage.getItem('cart') || '[]')
    cart = cart.filter(item => item._id !== productId)
    localStorage.setItem('cart', JSON.stringify(cart))
}

export const updateCartQuantity = (productId :string, quantity : number) => {
    const cart :  ProductDataType[] = JSON.parse(localStorage.getItem('cart') || '[]')
    const productIndex = cart.findIndex(item => item._id === productId)

    if(productIndex > -1) {
        cart[productIndex].inventory = quantity;
        localStorage.setItem('cart', JSON.stringify(cart))
    }
}

export const getCartItems = () :  ProductDataType[] => {
    return JSON.parse(localStorage.getItem('cart') || '[]')
}

export const getCartCount = (): number => {
//    console.log("salam");
   
    
    if (typeof window !== 'undefined') {
        const count = localStorage.getItem('cartCount');
        return count ? parseInt(count) : 0;
    }
    return 0; // Default return for server-side
};

export const setCartCount = (count: number) => {
    localStorage.setItem('cartCount', count.toString());
    window.dispatchEvent(new Event("storage"));
   
};