import {createSelector} from 'reselect';

// input selector 
const selectCart = state => state.cart;

// output selector 

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)
export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedQuanity, cartItem) => accumulatedQuanity + cartItem.quantity,0)
)