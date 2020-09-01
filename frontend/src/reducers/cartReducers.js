<<<<<<< HEAD
import { CART_ADD_ITEM } from "../constants/cartConstants";
=======
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";
>>>>>>> shopping-cart

function cartReducer(state = { cartItems: [] }, action) {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const product = state.cartItems.find((x) => x.product === item.product);
      if (product) {
        return {
          cartItems: state.cartItems.map((x) =>
            x.product === product.product ? item : x
          ),
        };
      }
      return { cartItems: [...state.cartItems, item] };
<<<<<<< HEAD
=======
    case CART_REMOVE_ITEM:
      return {
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
>>>>>>> shopping-cart
    default:
      return state;
  }
}
export { cartReducer };
