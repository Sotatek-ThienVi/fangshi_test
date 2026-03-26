import { useState } from "react";
import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Search, ShoppingCart, Star } from "lucide-react";
import { products, productCategories } from "../data/mockData";
import { useCartStore } from "../store/cartStore";
import { toast } from "sonner";

export function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Tất cả");
  const [sortBy, setSortBy] = useState<string>("default");
  const addItem = useCartStore((state) => state.addItem);

  let filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Tất cả" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Sort products
  if (sortBy === "price-asc") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-desc") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.rating - a.rating);
  }

  const handleAddToCart = (product: typeof products[0], e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product);
    toast.success(`Đã thêm ${product.name} vào giỏ hàng`, {
      duration: 2000,
    });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(212,175,55,0.4)]">Sản Phẩm Phong Thủy</h1>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto">
          Vật phẩm phong thủy chất lượng cao, được tuyển chọn kỹ lưỡng
        </p>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Search */}
        <div className="md:col-span-5 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border-2 border-[#D4AF37]/40 rounded-lg bg-gradient-to-br from-zinc-900/90 to-gray-900/80 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all"
          />
        </div>
        
        {/* Category */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="md:col-span-4 px-4 py-2.5 pr-10 border-2 border-[#D4AF37]/40 rounded-lg bg-gradient-to-br from-zinc-900/90 to-gray-900/80 text-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23D4AF37%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem] bg-[center_right_0.75rem] bg-no-repeat"
        >
          {productCategories.map((cat) => (
            <option key={cat} value={cat} className="bg-black">
              {cat}
            </option>
          ))}
        </select>

        {/* Sort */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="md:col-span-3 px-4 py-2.5 pr-10 border-2 border-[#D4AF37]/40 rounded-lg bg-gradient-to-br from-zinc-900/90 to-gray-900/80 text-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23D4AF37%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem] bg-[center_right_0.75rem] bg-no-repeat"
        >
          <option value="default" className="bg-black">Mặc định</option>
          <option value="price-asc" className="bg-black">Giá: Thấp đến Cao</option>
          <option value="price-desc" className="bg-black">Giá: Cao đến Thấp</option>
          <option value="rating" className="bg-black">Đánh giá cao nhất</option>
        </select>
      </div>

      {/* Results count */}
      <div className="text-sm text-muted-foreground">
        Tìm thấy {filteredProducts.length} sản phẩm
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div 
            key={product.id}
            className="group hover:shadow-2xl hover:shadow-[#D4AF37]/30 transition-all border-2 border-[#D4AF37]/40 hover:border-[#D4AF37] rounded-xl overflow-hidden bg-gradient-to-br from-zinc-900/90 via-gray-900/80 to-black/90 backdrop-blur-xl flex flex-col cursor-pointer"
          >
            <Link to={`/products/${product.id}`}>
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.stock < 10 && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    Còn {product.stock}
                  </div>
                )}
              </div>
            </Link>
            
            <div className="flex flex-col flex-1 gap-3 p-4">
              <Link to={`/products/${product.id}`} className="flex-1">
                <div className="text-xs text-[#D4AF37] mb-1">{product.category}</div>
                <h3 className="bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 bg-clip-text text-transparent font-extrabold text-lg line-clamp-2 mb-2 group-hover:from-[#D4AF37] group-hover:via-yellow-400 group-hover:to-[#D4AF37] transition-all drop-shadow-[0_2px_8px_rgba(212,175,55,0.3)]">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-300 line-clamp-2 mb-3">
                  {product.description}
                </p>
              </Link>
              
              <div className="flex items-center gap-1 mb-2">
                <Star className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                <span className="text-sm font-semibold text-amber-100">{product.rating}</span>
                <span className="text-xs text-gray-400">(50+ đánh giá)</span>
              </div>

              <div className="flex items-center justify-between w-full">
                <div className="text-xl font-bold text-[#D4AF37]">
                  {product.price.toLocaleString('vi-VN')} đ
                </div>
              </div>

              <Button
                className="w-full bg-black text-white hover:bg-[#D4AF37] hover:text-black transition-all"
                onClick={(e) => handleAddToCart(product, e)}
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Thêm vào giỏ
              </Button>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">Không tìm thấy sản phẩm phù hợp</p>
        </div>
      )}
    </div>
  );
}