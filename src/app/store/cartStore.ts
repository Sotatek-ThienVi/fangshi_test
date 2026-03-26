import { create } from 'zustand';
import { CartItem, Product } from '../data/mockData';

interface CartStore {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [
    {
      id: "1",
      name: "Tượng Phật Di Lặc Ngồi",
      price: 850000,
      description: "Tượng Phật Di Lặc bằng đồng thau cao cấp, mang lại may mắn và tài lộc cho gia đình. Kích thước: 20cm.",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
      category: "Tượng Phong Thủy",
      rating: 4.8,
      stock: 15,
      quantity: 2,
    },
    {
      id: "2",
      name: "Cây Kim Tiền Phong Thủy",
      price: 250000,
      description: "Cây kim tiền trong chậu gốm sứ cao cấp, biểu tượng của sự thịnh vượng và tài lộc. Cao 30-40cm.",
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae",
      category: "Cây Phong Thủy",
      rating: 4.9,
      stock: 30,
      quantity: 1,
    },
    {
      id: "4",
      name: "Vòng Tay Đá Mắt Hổ",
      price: 320000,
      description: "Vòng tay đá mắt hổ tự nhiên, giúp tăng cường sự tự tin và bảo vệ khỏi năng lượng xấu. Size: 8mm.",
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a",
      category: "Trang Sức",
      rating: 4.6,
      stock: 25,
      quantity: 3,
    },
    {
      id: "5",
      name: "Tượng Rồng Phong Thủy",
      price: 1500000,
      description: "Tượng rồng đồng mạ vàng 24K, biểu tượng của quyền lực và sự thịnh vượng. Cao 25cm.",
      image: "https://images.unsplash.com/photo-1610016302534-6f12d03f2b1f",
      category: "Tượng Phong Thủy",
      rating: 5.0,
      stock: 5,
      quantity: 1,
    },
  ],
  
  addItem: (product, quantity = 1) => {
    set((state) => {
      const existingItem = state.items.find((item) => item.id === product.id);
      
      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          ),
        };
      }
      
      return {
        items: [...state.items, { ...product, quantity }],
      };
    });
  },
  
  removeItem: (id) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    }));
  },
  
  updateQuantity: (id, quantity) => {
    if (quantity <= 0) {
      get().removeItem(id);
      return;
    }
    
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, quantity } : item
      ),
    }));
  },
  
  clearCart: () => {
    set({ items: [] });
  },
  
  getTotalPrice: () => {
    return get().items.reduce((total, item) => total + item.price * item.quantity, 0);
  },
  
  getTotalItems: () => {
    return get().items.reduce((total, item) => total + item.quantity, 0);
  },
}));