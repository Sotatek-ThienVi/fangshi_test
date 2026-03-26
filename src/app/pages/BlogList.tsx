import { useState } from "react";
import { Link } from "react-router";
import { Search } from "lucide-react";
import { blogs, blogCategories } from "../data/mockData";

export function BlogList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Tất cả");

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Tất cả" || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(212,175,55,0.4)]">Blog Phong Thủy</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Khám phá kiến thức phong thủy chuyên sâu từ các chuyên gia hàng đầu
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Search Input */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
          <input
            type="text"
            placeholder="Tìm kiếm bài viết..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border-2 border-[#D4AF37]/40 rounded-lg bg-gradient-to-br from-zinc-900/90 to-gray-900/80 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all"
          />
        </div>
        
        {/* Category Select */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="md:w-64 px-4 py-2.5 pr-10 border-2 border-[#D4AF37]/40 rounded-lg bg-gradient-to-br from-zinc-900/90 to-gray-900/80 text-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23D4AF37%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem] bg-[center_right_0.75rem] bg-no-repeat"
        >
          {blogCategories.map((cat) => (
            <option key={cat} value={cat} className="bg-black">
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Results count */}
      <div className="text-sm text-muted-foreground">
        Tìm thấy {filteredBlogs.length} bài viết
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBlogs.map((blog) => (
          <Link key={blog.id} to={`/blog/${blog.id}`}>
            <div className="h-full hover:shadow-2xl hover:shadow-[#D4AF37]/30 transition-all border-2 border-[#D4AF37]/40 hover:border-[#D4AF37] rounded-xl overflow-hidden bg-gradient-to-br from-zinc-900/90 via-gray-900/80 to-black/90 backdrop-blur-xl cursor-pointer">
              <img 
                src={blog.image} 
                alt={blog.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-xs">
                    {blog.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{blog.readTime}</span>
                </div>
                
                <h3 className="bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 bg-clip-text text-transparent text-lg font-extrabold line-clamp-2 hover:from-[#D4AF37] hover:via-yellow-400 hover:to-[#D4AF37] transition-all drop-shadow-[0_2px_8px_rgba(212,175,55,0.3)]">
                  {blog.title}
                </h3>
                
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {blog.excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-black to-[#D4AF37] flex items-center justify-center">
                      <span className="text-white text-xs">☯</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{blog.author}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{blog.date}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredBlogs.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">Không tìm thấy bài viết phù hợp</p>
        </div>
      )}
    </div>
  );
}