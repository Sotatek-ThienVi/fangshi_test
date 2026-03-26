import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ArrowLeft, Star, ShoppingCart, Minus, Plus, Package, Shield, Truck } from "lucide-react";
import { products } from "../data/mockData";
import { useCartStore } from "../store/cartStore";
import { toast } from "sonner";

export function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((state) => state.addItem);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">Không tìm thấy sản phẩm</h2>
        <Link to="/products">
          <Button className="bg-[#D4AF37] text-black hover:bg-[#C4A030]">Quay lại Sản Phẩm</Button>
        </Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
    toast.success(`Đã thêm ${quantity} ${product.name} vào giỏ hàng`, {
      duration: 2000,
    });
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate("/cart");
  };

  return (
    <div className="space-y-12">
      {/* Back Button */}
      <Button
        variant="ghost"
        onClick={() => navigate("/products")}
        className="text-amber-100 hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Quay lại
      </Button>

      {/* Product Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="space-y-4">
          <div className="relative overflow-hidden rounded-2xl border border-border aspect-square">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.stock < 10 && (
              <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Chỉ còn {product.stock}
              </div>
            )}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <Badge className="bg-[#D4AF37]/10 text-[#D4AF37] border-0 mb-3">
              {product.category}
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(212,175,55,0.4)]">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? "fill-[#D4AF37] text-[#D4AF37]"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="font-semibold text-amber-100">{product.rating}</span>
                <span className="text-gray-300">(50+ đánh giá)</span>
              </div>
            </div>

            <div className="text-4xl font-bold text-[#D4AF37] mb-6">
              {product.price.toLocaleString("vi-VN")} đ
            </div>

            <p className="text-lg text-gray-100 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Quantity Selector */}
          <div className="space-y-3">
            <label className="text-sm font-semibold text-amber-100">Số lượng</label>
            <div className="flex items-center gap-3">
              <div className="flex items-center border-2 border-[#D4AF37]/40 rounded-lg bg-gradient-to-br from-zinc-900/50 to-black/50">
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                  className="text-amber-100 hover:text-[#D4AF37] hover:bg-[#D4AF37]/20 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="w-16 text-center font-semibold text-amber-100">
                  {quantity}
                </span>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  disabled={quantity >= product.stock}
                  className="text-amber-100 hover:text-[#D4AF37] hover:bg-[#D4AF37]/20 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              <span className="text-sm text-gray-300">
                Còn {product.stock} sản phẩm
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button
              size="lg"
              className="flex-1 bg-[#D4AF37] text-black hover:bg-[#C4A030] font-semibold"
              onClick={handleBuyNow}
            >
              Mua Ngay
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="flex-1 border-border hover:border-[#D4AF37] hover:text-[#D4AF37] font-semibold"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Thêm Giỏ Hàng
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-border">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                <Truck className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div>
                <div className="font-semibold text-sm text-amber-100">Miễn Phí Vận Chuyển</div>
                <div className="text-xs text-gray-300">
                  Đơn từ 500.000đ
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div>
                <div className="font-semibold text-sm text-amber-100">Bảo Hành 12 Tháng</div>
                <div className="text-xs text-gray-300">
                  Chính hãng
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                <Package className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div>
                <div className="font-semibold text-sm text-amber-100">Đổi Trả 7 Ngày</div>
                <div className="text-xs text-gray-300">
                  Nếu có lỗi
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Description */}
      <div className="border-2 border-[#D4AF37]/40 rounded-xl bg-gradient-to-br from-zinc-900/90 via-gray-900/80 to-black/90 backdrop-blur-xl p-8">
        <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(212,175,55,0.3)]">Mô Tả Sản Phẩm</h2>
        <div className="prose max-w-none">
          <p className="text-white leading-relaxed mb-4 text-base">
            {product.description}
          </p>
          <p className="text-white leading-relaxed mb-4 text-base">
            Sản phẩm {product.name} là một trong những vật phẩm phong thủy được yêu thích nhất,
            mang lại năng lượng tích cực và may mắn cho gia chủ. Được chế tác từ vật liệu chất
            lượng cao, sản phẩm không chỉ có ý nghĩa phong thủy mà còn là món đồ trang trí
            tinh tế cho không gian sống.
          </p>
          <h3 className="text-xl font-bold mt-6 mb-4 bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(212,175,55,0.3)]">Đặc Điểm Nổi Bật</h3>
          <ul className="list-disc list-inside space-y-3 text-white text-base">
            <li className="leading-relaxed">Chất liệu cao cấp, bền đẹp theo thời gian</li>
            <li className="leading-relaxed">Thiết kế tinh xảo, mang ý nghĩa phong thủy sâu sắc</li>
            <li className="leading-relaxed">Phù hợp với nhiều không gian: nhà ở, văn phòng, cửa hàng</li>
            <li className="leading-relaxed">Dễ dàng bảo quản và vệ sinh</li>
            <li className="leading-relaxed">Được chuyên gia phong thủy khuyên dùng</li>
          </ul>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(212,175,55,0.3)]">Sản Phẩm Liên Quan</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link key={relatedProduct.id} to={`/products/${relatedProduct.id}`}>
                <div className="hover:shadow-2xl hover:shadow-[#D4AF37]/30 transition-all border-2 border-[#D4AF37]/40 hover:border-[#D4AF37] rounded-xl overflow-hidden bg-gradient-to-br from-zinc-900/90 via-gray-900/80 to-black/90 backdrop-blur-xl cursor-pointer">
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 space-y-2">
                    <Badge className="bg-[#D4AF37]/10 text-[#D4AF37] border-0">
                      {relatedProduct.category}
                    </Badge>
                    <h3 className="font-semibold line-clamp-2 bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 bg-clip-text text-transparent hover:from-[#D4AF37] hover:via-yellow-400 hover:to-[#D4AF37] transition-all drop-shadow-[0_2px_8px_rgba(212,175,55,0.3)]">
                      {relatedProduct.name}
                    </h3>
                    <div className="text-lg font-bold text-[#D4AF37]">
                      {relatedProduct.price.toLocaleString("vi-VN")} đ
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}