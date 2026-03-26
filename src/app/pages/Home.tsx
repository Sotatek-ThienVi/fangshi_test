import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Sparkles, BookOpen, ShoppingBag, TrendingUp, ArrowRight, Star, Clock, Eye, Tag } from "lucide-react";

export function Home() {
  // Mock Featured Products
  const featuredProducts = [
    {
      id: 1,
      name: "Vòng Tay Ngọc Bích Phong Thủy",
      price: 850000,
      originalPrice: 1200000,
      image: "https://images.unsplash.com/photo-1771575520167-9c2fce565593?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW5nJTIwc2h1aSUyMGphZGUlMjBicmFjZWxldHxlbnwxfHx8fDE3NzQ1NDMyNDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Vòng Tay",
      rating: 4.8,
      sold: 1200,
      tag: "Bán Chạy"
    },
    {
      id: 2,
      name: "Cây Thủy Tinh Phát Tài",
      price: 1500000,
      originalPrice: 2000000,
      image: "https://images.unsplash.com/photo-1714999497355-2bfd49f58552?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW5nJTIwc2h1aSUyMGNyeXN0YWwlMjB0cmVlfGVufDF8fHx8MTc3NDU0MzI0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Cây Phong Thủy",
      rating: 4.9,
      sold: 850,
      tag: "Hot"
    },
    {
      id: 3,
      name: "Mèo Thần Tài May Mắn",
      price: 650000,
      originalPrice: 900000,
      image: "https://images.unsplash.com/photo-1772632711932-1651ea4eb2d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW5nJTIwc2h1aSUyMGx1Y2t5JTIwY2F0JTIwbWFuZWtpJTIwbmVrb3xlbnwxfHx8fDE3NzQ1NDMyNDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Tượng Phong Thủy",
      rating: 4.7,
      sold: 2100,
      tag: "Giảm 30%"
    },
    {
      id: 4,
      name: "Tượng Rồng Vàng Phong Thủy",
      price: 2200000,
      originalPrice: 3000000,
      image: "https://images.unsplash.com/photo-1759544651447-c9fba120849f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW5nJTIwc2h1aSUyMGRyYWdvbiUyMHN0YXR1ZXxlbnwxfHx8fDE3NzQ1NDMyNDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Tượng Phong Thủy",
      rating: 5.0,
      sold: 450,
      tag: "Mới Về"
    },
    {
      id: 5,
      name: "Cây Tre Phong Thủy",
      price: 380000,
      originalPrice: 500000,
      image: "https://images.unsplash.com/photo-1771574208653-bd245bd6eb1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW5nJTIwc2h1aSUyMGJhbWJvbyUyMHBsYW50fGVufDF8fHx8MTc3NDU0MzI0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Cây Phong Thủy",
      rating: 4.6,
      sold: 1800,
      tag: "Bán Chạy"
    },
    {
      id: 6,
      name: "Đồng Xu Phong Thủy 5 Đế",
      price: 120000,
      originalPrice: 180000,
      image: "https://images.unsplash.com/photo-1771575520167-9c2fce565593?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW5nJTIwc2h1aSUyMGNvaW5zJTIwQ2hpbmVzZXxlbnwxfHx8fDE3NzQ1NDMyNDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Vật Phẩm",
      rating: 4.8,
      sold: 3200,
      tag: "Giá Tốt"
    },
  ];

  // Mock Blog Posts
  const latestBlogs = [
    {
      id: 1,
      title: "Phong Thủy Nhà Ở: Bí Quyết Chọn Hướng Tốt Nhất",
      excerpt: "Khám phá những nguyên tắc cơ bản để chọn hướng nhà phù hợp với mệnh, mang lại vượng khí và thịnh vượng cho gia đình...",
      image: "https://images.unsplash.com/photo-1772891036572-aa205b38ef01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMGFyY2hpdGVjdHVyZSUyMHBhbm9yYW1pYyUyMHdpZGV8ZW58MXx8fHwxNzc0NTM1NjMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Phong Thủy Nhà Ở",
      views: 12500,
      date: "26/03/2026",
      readTime: "8 phút"
    },
    {
      id: 2,
      title: "5 Vật Phẩm Phong Thủy Không Thể Thiếu Trong Văn Phòng",
      excerpt: "Tìm hiểu về những vật phẩm phong thủy giúp tăng cường vượng khí, thăng tiến sự nghiệp và cải thiện tài vận...",
      image: "https://images.unsplash.com/photo-1761437856311-3ba13025f161?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnb2xkJTIwcGF0dGVybiUyMHRleHR1cmV8ZW58MXx8fHwxNzc0NTM1NjMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Phong Thủy Văn Phòng",
      views: 8900,
      date: "25/03/2026",
      readTime: "6 phút"
    },
    {
      id: 3,
      title: "Cách Xác Định Mệnh Ngũ Hành Của Bạn",
      excerpt: "Hướng dẫn chi tiết cách tra cứu mệnh theo năm sinh, từ đó chọn đúng màu sắc, hướng nhà và vật phẩm phù hợp...",
      image: "https://images.unsplash.com/photo-1714999497355-2bfd49f58552?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW5nJTIwc2h1aSUyMGNyeXN0YWwlMjB0cmVlfGVufDF8fHx8MTc3NDU0MzI0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Mệnh Ngũ Hành",
      views: 15200,
      date: "24/03/2026",
      readTime: "10 phút"
    },
  ];

  // Product Categories
  const categories = [
    { name: "Vòng Tay", icon: "📿", count: 120, color: "from-emerald-500 to-teal-500" },
    { name: "Tượng Phong Thủy", icon: "🗿", count: 85, color: "from-amber-500 to-orange-500" },
    { name: "Cây Phong Thủy", icon: "🌿", count: 65, color: "from-green-500 to-emerald-500" },
    { name: "Đá Quý", icon: "💎", count: 150, color: "from-blue-500 to-purple-500" },
    { name: "Tranh Phong Thủy", icon: "🖼️", count: 90, color: "from-pink-500 to-rose-500" },
    { name: "Đồng Xu", icon: "💰", count: 45, color: "from-yellow-500 to-amber-500" },
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section - Compact */}
      <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden mx-4 my-8 rounded-3xl shadow-2xl">
        <div className="absolute inset-0 z-0 rounded-3xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1772891036572-aa205b38ef01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMGFyY2hpdGVjdHVyZSUyMHBhbm9yYW1pYyUyMHdpZGV8ZW58MXx8fHwxNzc0NTM1NjMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Phong Thủy Banner"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-red-950/50 to-[#D4AF37]/60 z-[2]" />
        
        <div className="max-w-6xl mx-auto px-4 space-y-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#D4AF37]/20 backdrop-blur-md border border-[#D4AF37]/50 rounded-full mb-4">
            <span className="text-[#D4AF37] text-2xl">☯</span>
            <span className="text-white/90 text-sm font-semibold tracking-wider">PHONG THỦY CHÍNH HIỆU</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white drop-shadow-2xl">
            Phong Thủy Vượng Khí
          </h1>
          
          <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto drop-shadow-lg leading-relaxed">
            Mang lại cân bằng và thịnh vượng cho cuộc sống
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link to="/products">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-[#D4AF37] to-yellow-500 text-black hover:from-yellow-500 hover:to-[#D4AF37] font-bold px-10 py-6 text-lg shadow-2xl hover:shadow-[#D4AF37]/50 transition-all transform hover:scale-105"
              >
                <ShoppingBag className="w-5 h-5 mr-2" />
                Mua Sắm Ngay
              </Button>
            </Link>
            <Link to="/blog">
              <Button 
                size="lg"
                variant="outline"
                className="bg-white/20 backdrop-blur-md border-2 border-white text-white hover:bg-white hover:text-black font-bold px-10 py-6 text-lg shadow-2xl transition-all transform hover:scale-105"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Đọc Blog
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">Danh Mục Sản Phẩm</h2>
            <p className="text-gray-400">Khám phá các danh mục phong thủy đa dạng</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat, index) => (
              <Link
                key={index}
                to={`/products?category=${cat.name.toLowerCase()}`}
                className="group relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-[#D4AF37]/20 hover:border-[#D4AF37] rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                <div className="relative">
                  <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">{cat.icon}</div>
                  <h3 className="text-white font-semibold mb-1 text-sm">{cat.name}</h3>
                  <p className="text-[#D4AF37] text-xs font-medium">{cat.count} sản phẩm</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 px-4 bg-gradient-to-br from-[#D4AF37]/5 via-black to-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                <Sparkles className="w-8 h-8 text-[#D4AF37]" />
                Sản Phẩm Nổi Bật
              </h2>
              <p className="text-gray-400">Những sản phẩm phong thủy được ưa chuộng nhất</p>
            </div>
            <Link to="/products">
              <Button
                variant="outline"
                className="hidden md:flex border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all"
              >
                Xem Tất Cả
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="group relative bg-gradient-to-br from-zinc-900/90 via-gray-900/80 to-black/90 backdrop-blur-xl border-2 border-[#D4AF37]/40 hover:border-[#D4AF37] rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-[#D4AF37]/30 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                {/* Tag */}
                {product.tag && (
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1">
                    <Tag className="w-3 h-3" />
                    {product.tag}
                  </div>
                )}

                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-black/20">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="text-[#D4AF37] text-xs font-semibold mb-2">{product.category}</div>
                  <h3 className="bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 bg-clip-text text-transparent font-extrabold text-xl mb-3 line-clamp-2 group-hover:from-[#D4AF37] group-hover:via-yellow-400 group-hover:to-[#D4AF37] transition-all drop-shadow-[0_2px_8px_rgba(212,175,55,0.3)]">
                    {product.name}
                  </h3>

                  {/* Rating & Sold */}
                  <div className="flex items-center gap-4 mb-3 text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-white font-medium">{product.rating}</span>
                    </div>
                    <div className="text-gray-400">
                      Đã bán {product.sold}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-[#D4AF37]">
                      {product.price.toLocaleString('vi-VN')}₫
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      {product.originalPrice.toLocaleString('vi-VN')}₫
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile View All Button */}
          <div className="mt-8 text-center md:hidden">
            <Link to="/products">
              <Button
                variant="outline"
                className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all"
              >
                Xem Tất Cả Sản Phẩm
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-[#D4AF37]" />
                Bài Viết Mới Nhất
              </h2>
              <p className="text-gray-400">Kiến thức phong thủy cập nhật hàng ngày</p>
            </div>
            <Link to="/blog">
              <Button
                variant="outline"
                className="hidden md:flex border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all"
              >
                Xem Tất Cả
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestBlogs.map((blog) => (
              <Link
                key={blog.id}
                to={`/blog/${blog.id}`}
                className="group relative bg-gradient-to-br from-zinc-900/90 via-gray-900/80 to-black/90 backdrop-blur-xl border-2 border-[#D4AF37]/40 hover:border-[#D4AF37] rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-[#D4AF37]/30 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-black/20">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-[#D4AF37] text-black text-xs font-bold rounded-full">
                    {blog.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 bg-clip-text text-transparent font-extrabold text-xl mb-3 line-clamp-2 group-hover:from-[#D4AF37] group-hover:via-yellow-400 group-hover:to-[#D4AF37] transition-all drop-shadow-[0_2px_8px_rgba(212,175,55,0.3)]">
                    {blog.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {blog.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        <span>{blog.views.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{blog.readTime}</span>
                      </div>
                    </div>
                    <span>{blog.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile View All Button */}
          <div className="mt-8 text-center md:hidden">
            <Link to="/blog">
              <Button
                variant="outline"
                className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all"
              >
                Xem Tất Cả Bài Viết
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="relative py-20 px-4 overflow-hidden mx-4 rounded-3xl my-8">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950 to-[#D4AF37]">
          <img 
            src="https://images.unsplash.com/photo-1761437856311-3ba13025f161?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnb2xkJTIwcGF0dGVybiUyMHRleHR1cmV8ZW58MXx8fHwxNzc0NTM1NjMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Pattern"
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
        </div>
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-block mb-4">
            <span className="px-6 py-3 bg-[#D4AF37] text-black rounded-full text-sm font-bold shadow-lg">
              🎯 ưu đãi đặc biệt
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-2xl">
            Giảm Giá Lên Đến <span className="text-[#D4AF37]">40%</span>
            <br />
            Cho Khách Hàng Mới
          </h2>
          <p className="text-xl text-white/95 max-w-2xl mx-auto">
            Đăng ký ngay hôm nay để nhận ưu đãi đặc biệt và tư vấn miễn phí
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-[#D4AF37] to-yellow-500 text-black hover:from-yellow-500 hover:to-[#D4AF37] font-bold px-10 py-6 text-lg shadow-2xl hover:scale-105 transition-transform"
            >
              Đăng Ký Ngay
            </Button>
            <Link to="/contact">
              <Button 
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-md border-2 border-white text-white hover:bg-white hover:text-black font-bold px-10 py-6 text-lg shadow-2xl hover:scale-105 transition-transform"
              >
                Tư Vấn Miễn Phí
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#D4AF37]/5 via-black to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Tại Sao Chọn Chúng Tôi?</h2>
            <p className="text-gray-400">
              Chúng tôi mang đến giải pháp phong thủy toàn diện và chuyên nghiệp
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all hover:shadow-2xl rounded-2xl p-8 text-center space-y-4 bg-gradient-to-br from-white/5 to-transparent hover:-translate-y-2 duration-300">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#D4AF37] to-yellow-600 flex items-center justify-center mx-auto shadow-lg group-hover:shadow-[#D4AF37]/50 group-hover:scale-110 transition-transform">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Kiến Thức Sâu Rộng</h3>
              <p className="text-gray-400 leading-relaxed">
                Đội ngũ chuyên gia với hơn 20 năm kinh nghiệm trong lĩnh vực phong thủy
              </p>
            </div>

            <div className="group relative overflow-hidden border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all hover:shadow-2xl rounded-2xl p-8 text-center space-y-4 bg-gradient-to-br from-white/5 to-transparent hover:-translate-y-2 duration-300">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center mx-auto shadow-lg group-hover:shadow-red-500/50 group-hover:scale-110 transition-transform">
                <ShoppingBag className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Sản Phẩm Chính Hãng</h3>
              <p className="text-gray-400 leading-relaxed">
                100% vật phẩm phong thủy chính hãng, được kiểm định chất lượng
              </p>
            </div>

            <div className="group relative overflow-hidden border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all hover:shadow-2xl rounded-2xl p-8 text-center space-y-4 bg-gradient-to-br from-white/5 to-transparent hover:-translate-y-2 duration-300">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center mx-auto shadow-lg group-hover:shadow-emerald-500/50 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Hiệu Quả Kiểm Chứng</h3>
              <p className="text-gray-400 leading-relaxed">
                Hàng nghìn khách hàng hài lòng và thay đổi tích cực trong cuộc sống
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-900 via-gray-900 to-black">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { number: "10K+", label: "Khách Hàng", color: "from-[#D4AF37] to-yellow-500" },
            { number: "500+", label: "Sản Phẩm", color: "from-red-500 to-orange-500" },
            { number: "20+", label: "Năm Kinh Nghiệm", color: "from-emerald-500 to-teal-500" },
            { number: "99%", label: "Hài Lòng", color: "from-blue-500 to-purple-500" },
          ].map((stat, index) => (
            <div key={index} className="group relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:border-white/40 rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-300">
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
              <div className="relative">
                <div className={`text-5xl md:text-6xl font-bold bg-gradient-to-r ${stat.color} text-transparent bg-clip-text mb-3`}>
                  {stat.number}
                </div>
                <div className="text-white/90 font-medium text-lg">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}