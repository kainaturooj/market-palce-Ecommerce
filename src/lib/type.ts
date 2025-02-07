/////////////////// define types here for all add to cart 
export type ProductDataType = {
    _id: string;
    status: string;
    productName: string;
    category: string;
    description: string;
    price: number;
    imageUrl: string;
    inventory : number;
    
  };
  

export interface CartItem {
    product: ProductDataType;
    quantity: number;
  }
  
  // export interface CartContextType {
  //   items: CartItem[];
  //   addItem: (product: ProductDataType) => void;
  //   removeItem: (productId: string) => void;
  //   updateQuantity: (productId: string, quantity: number) => void;
  //   clearCart: () => void;
  //   totalItems: number;
  //   totalPrice: number;
  // }