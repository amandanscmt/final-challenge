import { ReactNode, createContext, useContext, useState } from "react";

interface CartProviderProps {
  children: ReactNode;
}

interface CartItem {
  id: number;
  quantity: number;
}

interface CartContext {
  getItemQt: (id: number) => number;
  increaseCartQt: (id: number) => void;
  decreaseCartQt: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartItems: CartItem[];
  cartQuantity: number;
}

const CartContext = createContext({} as CartContext);

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const cartQuantity = cartItems.reduce(
    (quantity, product) => product.quantity + quantity,
    0
  );

  const getItemQt = (id: number) => {
    return cartItems.find((product) => product.id === id)?.quantity || 0;
  };

  const increaseCartQt = (id: number) => {
    setCartItems((currItems) => {
      if (currItems.find((product) => product.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((product) => {
          if (product.id === id) {
            return { ...product, quantity: product.quantity + 1 };
          } else {
            return product;
          }
        });
      }
    });
  };

  const decreaseCartQt = (id: number) => {
    setCartItems((currItems) => {
      if (currItems.find((product) => product.id === id)?.quantity === 1) {
        return currItems.filter((product) => product.id !== id);
      } else {
        return currItems.map((product) => {
          if (product.id === id) {
            return { ...product, quantity: product.quantity - 1 };
          } else {
            return product;
          }
        });
      }
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((currItems) => {
      return currItems.filter((product) => product.id !== id);
    });
  };

  return (
    <CartContext.Provider
      value={{
        getItemQt,
        increaseCartQt,
        decreaseCartQt,
        removeFromCart,
        cartItems,
        cartQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
