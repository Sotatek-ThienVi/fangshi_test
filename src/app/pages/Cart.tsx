import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { useCartStore } from "../store/cartStore";
import { toast } from "sonner";

export function Cart() {
  const { items, removeItem, updateQuantity, getTotalPrice, getTotalItems, clearCart } = useCartStore();

  const handleUpdateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
      toast.success("Đã xóa sản phẩm khỏi giỏ hàng");
      return;
    }
    updateQuantity(id, quantity);
  };

  const handleRemoveItem = (id: string, name: string) => {
    removeItem(id);
    toast.success(`Đã xóa ${name} khỏi giỏ hàng`);
  };

  const handleClearCart = () => {
    clearCart();
    toast.success("Đã xóa tất cả sản phẩm");
  };

  const handleCheckout = () => {
    toast.success("Chức năng thanh toán đang được phát triển", {
      description: "Cảm ơn bạn đã quan tâm!",
      duration: 3000,
    });
  };

  if (items.length === 0) {
    return (
      <div className="text-center py-16 space-y-6">
        <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center mx-auto">
          <ShoppingBag className="w-12 h-12 text-muted-foreground" />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2">Giỏ hàng trống</h2>
          <p className="text-muted-foreground mb-6">
            Bạn chưa có sản phẩm nào trong giỏ hàng
          </p>
          <Link to="/products">
            <Button size="lg" className="bg-[#D4AF37] text-black hover:bg-[#C4A030]">
              Khám phá sản phẩm
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">Giỏ Hàng</h1>
          <p className="text-muted-foreground mt-2">
            Bạn có {getTotalItems()} sản phẩm trong giỏ hàng
          </p>
        </div>
        <Button
          variant="ghost"
          onClick={handleClearCart}
          className="text-destructive hover:text-destructive"
        >
          <Trash2 className="w-4 h-4 mr-2" />
          Xóa tất cả
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div key={item.id} className="border-2 border-[#D4AF37]/40 hover:border-[#D4AF37] rounded-xl p-4 bg-gradient-to-br from-zinc-900/90 via-gray-900/80 to-black/90 backdrop-blur-xl hover:shadow-2xl hover:shadow-[#D4AF37]/30 transition-all">
              <div className="flex gap-4">
                <Link to={`/products/${item.id}`} className="flex-shrink-0">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                </Link>
                
                <div className="flex-1 min-w-0">
                  <Link to={`/products/${item.id}`}>
                    <h3 className="font-semibold mb-1 hover:text-[#D4AF37] transition-colors line-clamp-1">
                      {item.name}
                    </h3>
                  </Link>
                  <p className="text-sm text-muted-foreground mb-2">{item.category}</p>
                  <p className="text-lg font-bold text-[#D4AF37]">
                    {item.price.toLocaleString('vi-VN')} đ
                  </p>
                </div>

                <div className="flex flex-col items-end justify-between">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleRemoveItem(item.id, item.name)}
                    className="text-destructive hover:text-destructive"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>

                  <div className="flex items-center gap-2 border border-border rounded-lg">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                      className="h-8 w-8 p-0"
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="w-8 text-center font-semibold">{item.quantity}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                      disabled={item.quantity >= item.stock}
                      className="h-8 w-8 p-0"
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="border-2 border-[#D4AF37]/40 rounded-xl sticky top-4 bg-gradient-to-br from-zinc-900/90 via-gray-900/80 to-black/90 backdrop-blur-xl p-6 space-y-6 shadow-2xl shadow-[#D4AF37]/20">
            <h2 className="text-xl font-bold">Tóm Tắt Đơn Hàng</h2>

            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Tạm tính</span>
                <span className="font-semibold">{getTotalPrice().toLocaleString('vi-VN')} đ</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Phí vận chuyển</span>
                <span className="font-semibold text-green-600">Miễn phí</span>
              </div>
              <div className="border-t border-border pt-3">
                <div className="flex justify-between">
                  <span className="font-semibold">Tổng cộng</span>
                  <span className="text-2xl font-bold text-[#D4AF37]">
                    {getTotalPrice().toLocaleString('vi-VN')} đ
                  </span>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              className="w-full bg-[#D4AF37] text-black hover:bg-[#C4A030] transition-all font-semibold"
              onClick={handleCheckout}
            >
              Thanh toán
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>

            <Link to="/products">
              <Button
                variant="outline"
                className="w-full border-border hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all"
              >
                Tiếp tục mua sắm
              </Button>
            </Link>

            <div className="space-y-2 pt-4 border-t border-border">
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <div className="w-5 h-5 rounded-full bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs text-[#D4AF37]">✓</span>
                </div>
                <span>Miễn phí vận chuyển cho đơn hàng từ 500.000đ</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <div className="w-5 h-5 rounded-full bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs text-[#D4AF37]">✓</span>
                </div>
                <span>Bảo hành chính hãng 12 tháng</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <div className="w-5 h-5 rounded-full bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs text-[#D4AF37]">✓</span>
                </div>
                <span>Đổi trả trong 7 ngày nếu có lỗi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}