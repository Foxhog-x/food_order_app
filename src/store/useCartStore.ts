 
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
  increaseQuantity: (id:number)=> void;
  decreaseQuantity: (id:number) => void;
  removeItem : (id: number)=> void;
  clearAllItems: ()=> void;
  calculateTotal: () => number;
  getUniqueItemCount: ()=> number;
  getTotalCountofItem: ()=> number;
}

const useCartStore = create<CartStore>((set, get) => ({
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

  increaseQuantity: (id) => set((state) => {
    const items = state.items;
    const item = items.find(item => item.id === id); 
    if (item) {
      item.quantity += 1; 
    }

    return {items: [...items]}
  }),

  decreaseQuantity : (id)=> set((state)=> {
    const items = state.items;
    const item = items.find((item) => item.id === id);
    if (item && item.quantity > 1) {
      item.quantity -= 1;  
    }
   return {items: [...items]}
 
  }),

  removeItem: (id)=> set((state)=>{
    const items = state.items;
    const updatedItems = items.filter((item)=> item.id !== id);
   return {items: updatedItems}
  }),

  clearAllItems: ()=> set(()=>{
    return {items: []}
  }),
    

  calculateTotal: () => {
    return get().items.reduce((total, item) => total + item.price * item.quantity, 0);
  },


  getUniqueItemCount:()=>{
        return get().items.length
  },

  
  getTotalCountofItem: () => {
  
    const state = get();
    const items = state.items;
    let totalQuantity = 0;
    for (let i = 0; i < items.length; i++) {
      const item = items[i];  
      totalQuantity += item.quantity;  
    }
   
    return totalQuantity
  },
 
}))
 

export default useCartStore;
