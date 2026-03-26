import { Outlet, Link, useLocation } from "react-router";
import { Button } from "./ui/button";
import { ShoppingCart, Menu, ChevronDown, Facebook, Send } from "lucide-react";
import { useCartStore } from "../store/cartStore";
import { useState, useEffect, useRef } from "react";
import { ScrollToTop } from "./ScrollToTop";

export function Layout() {
  const totalItems = useCartStore((state) => state.getTotalItems());
  const cartItems = useCartStore((state) => state.items);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [blogDropdownOpen, setBlogDropdownOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [cartDropdownOpen, setCartDropdownOpen] = useState(false);
  
  const cartDropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close cart dropdown when route changes
  useEffect(() => {
    setCartDropdownOpen(false);
  }, [location]);

  // Close cart dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (cartDropdownRef.current && !cartDropdownRef.current.contains(event.target as Node)) {
        setCartDropdownOpen(false);
      }
    }

    if (cartDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [cartDropdownOpen]);

  const blogCategories = [
    { name: "Phong Thủy Nhà Ở", icon: "🏠" },
    { name: "Phong Thủy Văn Phòng", icon: "🏢" },
    { name: "Mệnh Ngũ Hành", icon: "🌟" },
    { name: "Tử Vi Học", icon: "🔮" },
    { name: "Phong Thủy Tài Lộc", icon: "💰" },
    { name: "Phong Thủy Tình Duyên", icon: "💖" },
  ];

  const productCategories = [
    { name: "Vật Phẩm Phong Thủy", icon: "✨" },
    { name: "Đá Phong Thủy", icon: "💎" },
    { name: "Tranh Phong Thủy", icon: "🖼️" },
    { name: "Cây Phong Thủy", icon: "🌿" },
    { name: "Tượng Phong Thủy", icon: "🗿" },
    { name: "Vòng Tay Phong Thủy", icon: "📿" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <header className="sticky top-0 z-50 border-b border-[#D4AF37]/20 bg-black/30 backdrop-blur-2xl shadow-lg shadow-[#D4AF37]/5">
        <nav className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg shadow-[#D4AF37]/50 group-hover:shadow-[#D4AF37]/70 transition-all group-hover:scale-110 border-2 border-[#D4AF37]">
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-white"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-10 h-10">
                    {/* Yin Yang Symbol with high contrast */}
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      {/* Black half */}
                      <path d="M 50,0 A 50,50 0 0,1 50,100 A 25,25 0 0,1 50,50 A 25,25 0 0,0 50,0" fill="#000000"/>
                      {/* White half */}
                      <path d="M 50,0 A 50,50 0 0,0 50,100 A 25,25 0 0,0 50,50 A 25,25 0 0,1 50,0" fill="#FFFFFF"/>
                      {/* Black dot */}
                      <circle cx="50" cy="25" r="8" fill="#000000"/>
                      {/* White dot */}
                      <circle cx="50" cy="75" r="8" fill="#FFFFFF"/>
                      {/* Outer circle border */}
                      <circle cx="50" cy="50" r="48" fill="none" stroke="#D4AF37" strokeWidth="2"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-2xl text-white group-hover:text-[#D4AF37] transition-colors" style={{ fontFamily: "'Dancing Script', cursive" }}>
                Phong Thuỷ Vượng Khí
              </span>
              <span className="text-xs text-[#D4AF37] font-semibold tracking-wider uppercase">
                Hưng Thịnh - Phát Tài - An Khang
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className="relative text-white hover:text-[#D4AF37] transition-colors font-semibold text-lg group"
            >
              Trang Chủ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#D4AF37] to-yellow-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            {/* Blog Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setBlogDropdownOpen(true)}
              onMouseLeave={() => setBlogDropdownOpen(false)}
            >
              <Link 
                to="/blog" 
                className="relative text-white hover:text-[#D4AF37] transition-colors font-semibold text-lg flex items-center gap-1"
              >
                Blog
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 duration-300" />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#D4AF37] to-yellow-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              
              {/* Dropdown Menu */}
              <div 
                className={`absolute left-0 top-full mt-2 w-64 bg-black/95 backdrop-blur-2xl border border-[#D4AF37]/30 rounded-xl shadow-2xl shadow-[#D4AF37]/20 overflow-hidden transition-all duration-300 ${
                  blogDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                <div className="p-2">
                  {blogCategories.map((category) => (
                    <Link
                      key={category.name}
                      to={`/blog?category=${category.name.toLowerCase().replace(/ /g, '-')}`}
                      className="flex items-center gap-3 py-3 px-4 text-white hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 rounded-lg transition-all font-medium group/item"
                    >
                      <span className="text-2xl group-hover/item:scale-110 transition-transform">{category.icon}</span>
                      <span>{category.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Products Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => setProductsDropdownOpen(false)}
            >
              <Link 
                to="/products" 
                className="relative text-white hover:text-[#D4AF37] transition-colors font-semibold text-lg flex items-center gap-1"
              >
                Sản Phẩm
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 duration-300" />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#D4AF37] to-yellow-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              
              {/* Dropdown Menu */}
              <div 
                className={`absolute left-0 top-full mt-2 w-64 bg-black/95 backdrop-blur-2xl border border-[#D4AF37]/30 rounded-xl shadow-2xl shadow-[#D4AF37]/20 overflow-hidden transition-all duration-300 ${
                  productsDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                <div className="p-2">
                  {productCategories.map((category) => (
                    <Link
                      key={category.name}
                      to={`/products?category=${category.name.toLowerCase().replace(/ /g, '-')}`}
                      className="flex items-center gap-3 py-3 px-4 text-white hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 rounded-lg transition-all font-medium group/item"
                    >
                      <span className="text-2xl group-hover/item:scale-110 transition-transform">{category.icon}</span>
                      <span>{category.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Contact Link */}
            <Link 
              to="/contact" 
              className="relative text-white hover:text-[#D4AF37] transition-colors font-semibold text-lg group"
            >
              Liên Hệ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#D4AF37] to-yellow-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>

          {/* Auth & Actions */}
          <div className="flex items-center gap-4">
            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Button
                variant="ghost"
                className="text-white hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 font-semibold transition-all"
              >
                Đăng Nhập
              </Button>
              <Button
                className="bg-gradient-to-r from-[#D4AF37] to-yellow-500 text-black hover:from-yellow-500 hover:to-[#D4AF37] font-bold shadow-lg shadow-[#D4AF37]/30 hover:shadow-[#D4AF37]/50 transition-all hover:scale-105"
              >
                Đăng Ký
              </Button>
            </div>
            
            {/* Cart - Desktop */}
            <div className="hidden md:block relative">
              <button
                onClick={() => setCartDropdownOpen(!cartDropdownOpen)}
                className="relative group cursor-pointer"
              >
                <div className="p-2 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-yellow-500/20 border border-[#D4AF37]/30 group-hover:border-[#D4AF37] transition-all group-hover:shadow-lg group-hover:shadow-[#D4AF37]/30">
                  <ShoppingCart className="w-6 h-6 text-[#D4AF37] group-hover:text-yellow-400 transition-colors" />
                </div>
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-red-500 to-red-600 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-lg animate-pulse">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Cart Dropdown */}
              {cartDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-96 bg-black/95 backdrop-blur-2xl border border-[#D4AF37]/30 rounded-xl shadow-2xl shadow-[#D4AF37]/20 overflow-hidden z-50" ref={cartDropdownRef}>
                  <div className="p-4">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#D4AF37]/20">
                      <h3 className="text-white font-bold text-lg flex items-center gap-2">
                        <ShoppingCart className="w-5 h-5 text-[#D4AF37]" />
                        Giỏ Hàng
                      </h3>
                      <span className="text-[#D4AF37] font-semibold">{totalItems} sản phẩm</span>
                    </div>

                    {/* Cart Items or Empty State */}
                    {cartItems.length > 0 ? (
                      <>
                        {/* Cart Items - Show last 4 items */}
                        <div className="space-y-3 max-h-80 overflow-y-auto mb-4">
                          {cartItems.slice(-4).reverse().map((item) => (
                            <div key={item.id} className="flex gap-3 p-3 rounded-lg bg-gradient-to-br from-zinc-900/90 to-gray-900/80 border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 hover:bg-zinc-900 transition-all cursor-pointer">
                              <img 
                                src={item.image} 
                                alt={item.name}
                                className="w-16 h-16 object-cover rounded-lg border border-[#D4AF37]/20"
                              />
                              <div className="flex-1 min-w-0">
                                <h4 className="text-white font-medium text-sm truncate">{item.name}</h4>
                                <div className="flex items-center justify-between mt-1">
                                  <span className="text-[#D4AF37] font-bold text-sm">
                                    {item.price.toLocaleString('vi-VN')}₫
                                  </span>
                                  <span className="text-gray-400 text-xs">
                                    x{item.quantity}
                                  </span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Footer - View Cart Button */}
                        <div className="pt-4 border-t border-[#D4AF37]/20">
                          <Link 
                            to="/cart"
                            onClick={() => setCartDropdownOpen(false)}
                            className="block w-full py-3 bg-gradient-to-r from-[#D4AF37] to-yellow-500 text-black font-bold text-center rounded-lg hover:from-yellow-500 hover:to-[#D4AF37] transition-all hover:scale-105 shadow-lg shadow-[#D4AF37]/30"
                          >
                            Xem Tất Cả
                          </Link>
                        </div>
                      </>
                    ) : (
                      <div className="py-8 text-center">
                        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                          <ShoppingCart className="w-10 h-10 text-[#D4AF37]/50" />
                        </div>
                        <p className="text-gray-400 text-sm mb-6">Giỏ hàng của bạn đang trống</p>
                        <Link 
                          to="/products"
                          onClick={() => setCartDropdownOpen(false)}
                          className="inline-block px-8 py-3 bg-gradient-to-r from-[#D4AF37] to-yellow-500 text-black font-bold text-center rounded-lg hover:from-yellow-500 hover:to-[#D4AF37] transition-all hover:scale-105 shadow-lg shadow-[#D4AF37]/30"
                        >
                          Mua Sắm Ngay
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-[#D4AF37] hover:text-yellow-400 hover:bg-[#D4AF37]/10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </Button>

            {/* Cart - Mobile */}
            <div className="md:hidden relative">
              <button
                onClick={() => setCartDropdownOpen(!cartDropdownOpen)}
                className="relative group cursor-pointer"
              >
                <div className="p-2 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-yellow-500/20 border border-[#D4AF37]/30 group-hover:border-[#D4AF37] transition-all group-hover:shadow-lg group-hover:shadow-[#D4AF37]/30">
                  <ShoppingCart className="w-6 h-6 text-[#D4AF37] group-hover:text-yellow-400 transition-colors" />
                </div>
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-red-500 to-red-600 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-lg animate-pulse">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile Cart Dropdown */}
              {cartDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-80 bg-black/95 backdrop-blur-2xl border border-[#D4AF37]/30 rounded-xl shadow-2xl shadow-[#D4AF37]/20 overflow-hidden z-50" ref={cartDropdownRef}>
                  <div className="p-4">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#D4AF37]/20">
                      <h3 className="text-white font-bold text-lg flex items-center gap-2">
                        <ShoppingCart className="w-5 h-5 text-[#D4AF37]" />
                        Giỏ Hàng
                      </h3>
                      <span className="text-[#D4AF37] font-semibold">{totalItems} sp</span>
                    </div>

                    {/* Cart Items or Empty State */}
                    {cartItems.length > 0 ? (
                      <>
                        {/* Cart Items - Show last 4 items */}
                        <div className="space-y-3 max-h-80 overflow-y-auto mb-4">
                          {cartItems.slice(-4).reverse().map((item) => (
                            <div key={item.id} className="flex gap-3 p-3 rounded-lg bg-gradient-to-br from-zinc-900/90 to-gray-900/80 border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 hover:bg-zinc-900 transition-all cursor-pointer">
                              <img 
                                src={item.image} 
                                alt={item.name}
                                className="w-16 h-16 object-cover rounded-lg border border-[#D4AF37]/20"
                              />
                              <div className="flex-1 min-w-0">
                                <h4 className="text-white font-medium text-sm truncate">{item.name}</h4>
                                <div className="flex items-center justify-between mt-1">
                                  <span className="text-[#D4AF37] font-bold text-sm">
                                    {item.price.toLocaleString('vi-VN')}₫
                                  </span>
                                  <span className="text-gray-400 text-xs">
                                    x{item.quantity}
                                  </span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Footer - View Cart Button */}
                        <div className="pt-4 border-t border-[#D4AF37]/20">
                          <Link 
                            to="/cart"
                            onClick={() => setCartDropdownOpen(false)}
                            className="block w-full py-3 bg-gradient-to-r from-[#D4AF37] to-yellow-500 text-black font-bold text-center rounded-lg hover:from-yellow-500 hover:to-[#D4AF37] transition-all hover:scale-105 shadow-lg shadow-[#D4AF37]/30"
                          >
                            Xem Tất Cả
                          </Link>
                        </div>
                      </>
                    ) : (
                      <div className="py-8 text-center">
                        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                          <ShoppingCart className="w-10 h-10 text-[#D4AF37]/50" />
                        </div>
                        <p className="text-gray-400 text-sm mb-6">Giỏ hàng của bạn đang trống</p>
                        <Link 
                          to="/products"
                          onClick={() => setCartDropdownOpen(false)}
                          className="inline-block px-8 py-3 bg-gradient-to-r from-[#D4AF37] to-yellow-500 text-black font-bold text-center rounded-lg hover:from-yellow-500 hover:to-[#D4AF37] transition-all hover:scale-105 shadow-lg shadow-[#D4AF37]/30"
                        >
                          Mua Sắm Ngay
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gradient-to-br from-gray-900 to-black border-b border-[#D4AF37]/20 p-4 space-y-2 relative z-40 shadow-lg">
          <Link 
            to="/" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-3 px-4 text-white hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 rounded-lg transition-all font-semibold"
          >
            Trang Chủ
          </Link>
          <Link 
            to="/blog" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-3 px-4 text-white hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 rounded-lg transition-all font-semibold"
          >
            Blog
          </Link>
          <Link 
            to="/products" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-3 px-4 text-white hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 rounded-lg transition-all font-semibold"
          >
            Sản Phẩm
          </Link>
          <Link 
            to="/contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-3 px-4 text-white hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 rounded-lg transition-all font-semibold"
          >
            Liên Hệ
          </Link>
          
          {/* Mobile Auth Buttons */}
          <div className="pt-2 space-y-2 border-t border-[#D4AF37]/20 mt-4">
            <Button
              variant="ghost"
              className="w-full text-white hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 font-semibold transition-all justify-start"
              onClick={() => setMobileMenuOpen(false)}
            >
              Đăng Nhập
            </Button>
            <Button
              className="w-full bg-gradient-to-r from-[#D4AF37] to-yellow-500 text-black hover:from-yellow-500 hover:to-[#D4AF37] font-bold shadow-lg shadow-[#D4AF37]/30 justify-start"
              onClick={() => setMobileMenuOpen(false)}
            >
              Đăng Ký
            </Button>
          </div>
        </div>
      )}

      <main className="max-w-7xl mx-auto px-4 py-0">
        <Outlet />
      </main>

      <footer className="border-t border-[#D4AF37]/20 bg-gradient-to-br from-black via-gray-900 to-black text-white py-16 mt-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Decorative Top Line */}
          <div className="flex items-center justify-center mb-12">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
            <span className="mx-4 text-[#D4AF37] text-3xl">☯</span>
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] via-yellow-500 to-[#D4AF37] flex items-center justify-center shadow-lg shadow-[#D4AF37]/30">
                  <span className="text-black font-bold text-xl">☯</span>
                </div>
                <span className="font-bold text-2xl text-[#D4AF37]">Phong Thủy</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Mang đến giải pháp phong thủy chuyên nghiệp cho cuộc sống hài hòa và thịnh vượng.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-[#D4AF37] text-lg">Liên Kết</h3>
              <ul className="space-y-3 text-sm">
                <li><Link to="/" className="text-gray-400 hover:text-[#D4AF37] transition-colors flex items-center gap-2">→ Trang Chủ</Link></li>
                <li><Link to="/blog" className="text-gray-400 hover:text-[#D4AF37] transition-colors flex items-center gap-2">→ Blog</Link></li>
                <li><Link to="/products" className="text-gray-400 hover:text-[#D4AF37] transition-colors flex items-center gap-2">→ Sản Phẩm</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-[#D4AF37] text-lg">Hỗ Trợ</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors flex items-center gap-2">→ Liên Hệ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors flex items-center gap-2">→ Chính Sách</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors flex items-center gap-2">→ Giao Hàng</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-[#D4AF37] text-lg">Liên Hệ</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37] mt-0.5">✉</span>
                  <span>contact@phongthuyvn.com</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37] mt-0.5">☎</span>
                  <span>0123 456 789</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37] mt-0.5">📍</span>
                  <span>Hà Nội, Việt Nam</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-[#D4AF37]/20 mt-12 pt-8 text-center">
            <p className="text-sm text-gray-400">
              &copy; 2026 <span className="text-[#D4AF37] font-semibold">Phong Thủy Âm Dương</span>. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
      
      {/* Floating Social Media Bar */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2.5">
        {/* Facebook */}
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-blue-500/50 hover:scale-110 transition-all duration-300 border-2 border-white/20"
          title="Facebook"
        >
          <Facebook className="w-6 h-6 text-white" />
          <span className="absolute right-14 bg-black/90 text-white px-2.5 py-1 rounded-lg text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Facebook
          </span>
        </a>

        {/* Zalo */}
        <a
          href="https://zalo.me"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-blue-400/50 hover:scale-110 transition-all duration-300 border-2 border-white/20"
          title="Zalo"
        >
          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.83 1.324 5.352 3.4 7.096l-.906 3.367a.5.5 0 0 0 .725.572l3.631-2.055A10.276 10.276 0 0 0 12 20.486c5.523 0 10-4.145 10-9.243S17.523 2 12 2zm3.634 11.888h-2.927a.458.458 0 0 1-.458-.458V9.704h-2.054a.458.458 0 0 1-.324-.782l3.512-3.512a.458.458 0 0 1 .648 0l3.512 3.512a.458.458 0 0 1-.324.782h-2.054v3.726a.458.458 0 0 1-.458.458z"/>
          </svg>
          <span className="absolute right-14 bg-black/90 text-white px-2.5 py-1 rounded-lg text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Zalo
          </span>
        </a>

        {/* TikTok */}
        <a
          href="https://tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-12 h-12 bg-gradient-to-br from-black to-gray-900 rounded-full flex items-center justify-center shadow-lg hover:shadow-pink-500/50 hover:scale-110 transition-all duration-300 border-2 border-white/20"
          title="TikTok"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" fill="#FF004F"/>
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" fill="#00F2EA"/>
          </svg>
          <span className="absolute right-14 bg-black/90 text-white px-2.5 py-1 rounded-lg text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            TikTok
          </span>
        </a>

        {/* Shopee */}
        <a
          href="https://shopee.vn"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-orange-500/50 hover:scale-110 transition-all duration-300 border-2 border-white/20"
          title="Shopee"
        >
          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.03 5.5H4.97a.97.97 0 0 0-.97.97v11.06c0 .54.43.97.97.97h14.06c.54 0 .97-.43.97-.97V6.47a.97.97 0 0 0-.97-.97zm-6.53 9.7l-4.5-2.7V9.3l4.5 2.7v3.2zm.5-4.4L8.5 8.1l4.5-2.7 4.5 2.7-4.5 2.7zm.5 4.4v-3.2l4.5-2.7v3.2l-4.5 2.7z"/>
          </svg>
          <span className="absolute right-14 bg-black/90 text-white px-2.5 py-1 rounded-lg text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Shopee
          </span>
        </a>

        {/* Contact Button with Phone Icon */}
        <a
          href="tel:+84123456789"
          className="group relative w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-yellow-500 rounded-full flex items-center justify-center shadow-lg shadow-[#D4AF37]/30 hover:shadow-[#D4AF37]/60 hover:scale-110 transition-all duration-300 border-2 border-white/20 animate-ring hover:animate-none"
          title="Gọi ngay"
        >
          <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
          </svg>
          <span className="absolute right-14 bg-black/90 text-white px-2.5 py-1 rounded-lg text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Gọi Ngay
          </span>
        </a>
      </div>
    </div>
  );
}