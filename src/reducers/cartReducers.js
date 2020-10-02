import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload;
            const itemExists = state.cartItems.find(
                (p) => p.product === item.product
            );
            if (itemExists) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((p) =>
                        p.product === itemExists.product ? item : p
                    ),
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item],
                };
            }
        default:
            return state;
    }
};
