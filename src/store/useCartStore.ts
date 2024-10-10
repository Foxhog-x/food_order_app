 
import {create} from 'zustand';

 
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;  
}

 
interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
 
}

const useCartStore = create<CartStore>((set) => ({
  items: [],
  addItem: (item) => set((state) => {
    const items = state.items;
    const existingItemIndex = items.findIndex(value => value.id === item.id);
    
 
    if (existingItemIndex >= 0) {
      items[existingItemIndex].quantity += 1; 
    } else {
      items.push({ ...item, quantity: 1 });  
    }
    
    return { items: [...items] }; 
  }),
 
}))
 

export default useCartStore;
