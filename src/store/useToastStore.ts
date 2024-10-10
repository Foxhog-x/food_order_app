import {create} from 'zustand';

 interface TostProps {
    message: string,
    visible: boolean,
    showToast: (message: string)=> void;
 }
const useToastStore = create<TostProps>((set) => ({
  message: '',
  visible: false,
  
 
  showToast: (message) => {
    set({ message, visible: true });
    setTimeout(() => set({ visible: false }), 1000);  
  },


}));

export default useToastStore;