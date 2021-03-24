import {CartItem} from "../../Store/interfaces";

export type OnAddToCart = (e: CartItem ) => void
export type OnDeleteFromCart = (e: number ) => void