import { createSelector } from "reselect";

const selectCart = state => state.cart;

//selector to get cart items
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

//selector for quantity of products in cart for cart-icon state
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (acumulator, cartItem) => acumulator + cartItem.quantity,
      0
    )
);

//selector for cart dropdown hidden state
export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

//selector to get the total price of cart
export const selectCartTotal = createSelector([selectCartItems], cartItems =>
  cartItems.reduce(
    (acumulator, cartItem) => acumulator + cartItem.quantity * cartItem.price,
    0
  )
);
