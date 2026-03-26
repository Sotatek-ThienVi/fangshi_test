import { useParams, Link, useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react";
import { blogs, ContentBlock } from "../data/mockData";

export function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">Không tìm thấy bài viết</h2>
        <Link to="/blog">
          <Button className="bg-[#D4AF37] text-black hover:bg-[#C4A030]">Quay lại Blog</Button>
        </Link>
      </div>
    );
  }

  const relatedBlogs = blogs.filter(
    (b) => b.category === blog.category && b.id !== blog.id
  ).slice(0, 3);

  // Render content block based on type
  const renderContentBlock = (block: ContentBlock, index: number) => {
    switch (block.type) {
      case "heading":
        const HeadingTag = `h${block.level || 2}` as keyof JSX.IntrinsicElements;
        return (
          <HeadingTag
            key={index}
            className={`font-bold mt-8 mb-4 bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(212,175,55,0.4)] ${
              block.level === 2 ? "text-3xl" : block.level === 3 ? "text-2xl" : "text-xl"
            }`}
          >
            {block.content}
          </HeadingTag>
        );
      
      case "image":
        return (
          <div key={index} className="my-8">
            <img
              src={block.content}
              alt={block.alt || "Blog image"}
              className="w-full rounded-xl shadow-lg shadow-black/20 border-2 border-[#D4AF37]/20"
            />
            {block.alt && (
              <p className="text-sm text-center text-amber-200/80 mt-3 italic">
                {block.alt}
              </p>
            )}
          </div>
        );
      
      case "quote":
        return (
          <div key={index} className="bg-gradient-to-br from-[#D4AF37]/20 via-[#D4AF37]/10 to-transparent border-l-4 border-[#D4AF37] p-6 my-8 rounded-lg backdrop-blur-sm">
            <p className="text-lg italic text-amber-50 leading-relaxed font-medium">
              "{block.content}"
            </p>
          </div>
        );
      
      case "text":
      default:
        return (
          <p key={index} className="text-base text-gray-100 leading-relaxed mb-6">
            {block.content}
          </p>
        );
    }
  };

  return (
    <div className="space-y-8">
      {/* Back Button */}
      <Button
        variant="ghost"
        onClick={() => navigate("/blog")}
        className="hover:text-[#D4AF37] hover:bg-[#D4AF37]/10"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Quay lại
      </Button>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto">
        {/* Category Badge */}
        <div className="text-center mb-6">
          <Badge className="bg-[#D4AF37]/10 text-[#D4AF37] border-0 px-4 py-1.5">
            {blog.category}
          </Badge>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-center mb-8 bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(212,175,55,0.4)]">
          {blog.title}
        </h1>
        
        {/* Meta Information */}
        <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>{blog.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{blog.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{blog.readTime}</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-12">
          <img 
            src={blog.image} 
            alt={blog.title}
            className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-2xl shadow-black/30 border-2 border-[#D4AF37]/20"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          {/* Excerpt as intro */}
          <p className="text-xl text-amber-100/90 mb-10 leading-relaxed font-medium border-l-4 border-[#D4AF37]/30 pl-6 italic">
            {blog.excerpt}
          </p>
          
          {/* Rich Content Blocks */}
          {blog.contentBlocks ? (
            <div className="space-y-2">
              {blog.contentBlocks.map((block, index) => renderContentBlock(block, index))}
            </div>
          ) : (
            // Fallback to plain content if no contentBlocks
            <div className="space-y-6 text-gray-100 leading-relaxed">
              {blog.content.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          )}
        </div>

        {/* Share Button */}
        <div className="flex justify-center mt-12 pt-8 border-t border-border">
          <Button
            variant="outline"
            className="border-[#D4AF37]/40 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] transition-all"
          >
            <Share2 className="w-4 h-4 mr-2" />
            Chia sẻ bài viết
          </Button>
        </div>
      </article>

      {/* Related Blogs */}
      {relatedBlogs.length > 0 && (
        <div className="max-w-6xl mx-auto space-y-6 pt-12 border-t border-border">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(212,175,55,0.4)]">
            Bài Viết Liên Quan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedBlogs.map((relatedBlog) => (
              <Link key={relatedBlog.id} to={`/blog/${relatedBlog.id}`}>
                <div className="h-full hover:shadow-2xl hover:shadow-[#D4AF37]/30 transition-all border-2 border-[#D4AF37]/40 hover:border-[#D4AF37] rounded-xl overflow-hidden bg-gradient-to-br from-zinc-900/90 via-gray-900/80 to-black/90 backdrop-blur-xl cursor-pointer">
                  <img 
                    src={relatedBlog.image} 
                    alt={relatedBlog.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5 space-y-3">
                    <Badge className="bg-[#D4AF37]/10 text-[#D4AF37] border-0">
                      {relatedBlog.category}
                    </Badge>
                    <h3 className="font-semibold line-clamp-2 bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 bg-clip-text text-transparent hover:from-[#D4AF37] hover:via-yellow-400 hover:to-[#D4AF37] transition-all drop-shadow-[0_2px_8px_rgba(212,175,55,0.3)]">
                      {relatedBlog.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {relatedBlog.excerpt}
                    </p>
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