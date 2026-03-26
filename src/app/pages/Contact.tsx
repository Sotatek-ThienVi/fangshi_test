import { useState } from "react";
import { Button } from "../components/ui/button";
import { Mail, Phone, MapPin, Clock, Send, User, MessageSquare } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "contact@phongthuyvn.com",
      subContent: "support@phongthuyvn.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Điện Thoại",
      content: "0123 456 789",
      subContent: "0987 654 321",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Địa Chỉ",
      content: "123 Đường Phong Thủy",
      subContent: "Quận Ba Đình, Hà Nội",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Giờ Làm Việc",
      content: "Thứ 2 - Thứ 6: 8:00 - 18:00",
      subContent: "Thứ 7 - CN: 9:00 - 17:00",
    },
  ];

  const subjects = [
    "Tư vấn phong thủy",
    "Đặt hàng sản phẩm",
    "Hỗ trợ kỹ thuật",
    "Hợp tác kinh doanh",
    "Khác",
  ];

  return (
    <div className="py-12">
      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center mb-6">
          <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
          <span className="mx-4 text-[#D4AF37] text-4xl">☯</span>
          <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
        </div>
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white via-[#D4AF37] to-white bg-clip-text text-transparent">
          Liên Hệ Với Chúng Tôi
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Chúng tôi luôn sẵn sàng tư vấn và hỗ trợ bạn trong hành trình tìm kiếm sự hài hòa và thịnh vượng
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Contact Information */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-[#D4AF37]/10 via-black/50 to-black/50 backdrop-blur-xl border border-[#D4AF37]/30 rounded-2xl p-8 shadow-2xl shadow-[#D4AF37]/10">
            <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
              <span className="text-[#D4AF37] text-4xl">✉️</span>
              Thông Tin Liên Hệ
            </h2>
            <p className="text-gray-400 mb-8">
              Hãy liên hệ với chúng tôi qua các kênh sau
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-black/50 backdrop-blur-xl border border-[#D4AF37]/20 rounded-xl p-6 hover:border-[#D4AF37]/50 transition-all hover:shadow-lg hover:shadow-[#D4AF37]/20 group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-gradient-to-br from-[#D4AF37]/20 to-yellow-500/20 rounded-lg border border-[#D4AF37]/30 group-hover:border-[#D4AF37] transition-all">
                      <div className="text-[#D4AF37] group-hover:text-yellow-400 transition-colors">
                        {info.icon}
                      </div>
                    </div>
                    <h3 className="font-bold text-white text-lg">{info.title}</h3>
                  </div>
                  <p className="text-gray-300 font-medium mb-1">{info.content}</p>
                  <p className="text-gray-400 text-sm">{info.subContent}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-gradient-to-br from-[#D4AF37]/10 via-black/50 to-black/50 backdrop-blur-xl border border-[#D4AF37]/30 rounded-2xl p-8 shadow-2xl shadow-[#D4AF37]/10 h-64 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-[#D4AF37] mx-auto mb-4" />
              <p className="text-gray-400">Bản đồ vị trí</p>
              <p className="text-gray-500 text-sm mt-2">123 Đường Phong Thủy, Quận Ba Đình, Hà Nội</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gradient-to-br from-[#D4AF37]/10 via-black/50 to-black/50 backdrop-blur-xl border border-[#D4AF37]/30 rounded-2xl p-8 shadow-2xl shadow-[#D4AF37]/10">
          <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
            <span className="text-[#D4AF37] text-4xl">📝</span>
            Gửi Tin Nhắn
          </h2>
          <p className="text-gray-400 mb-8">
            Điền thông tin bên dưới và chúng tôi sẽ phản hồi sớm nhất
          </p>

          {submitSuccess && (
            <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg">
              <p className="text-green-400 text-sm flex items-center gap-2">
                <span className="text-xl">✓</span>
                Gửi tin nhắn thành công! Chúng tôi sẽ liên hệ với bạn sớm.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-white font-semibold mb-2 flex items-center gap-2">
                <User className="w-4 h-4 text-[#D4AF37]" />
                Họ và Tên
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black/50 border border-[#D4AF37]/30 rounded-lg text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 transition-all"
                placeholder="Nhập họ và tên của bạn"
              />
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-2 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#D4AF37]" />
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-[#D4AF37]/30 rounded-lg text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 transition-all"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-white font-semibold mb-2 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                  Số Điện Thoại
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-[#D4AF37]/30 rounded-lg text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 transition-all"
                  placeholder="0123 456 789"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-white font-semibold mb-2 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#D4AF37]" />
                Chủ Đề
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 pr-10 bg-black/50 border border-[#D4AF37]/30 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 transition-all cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23D4AF37%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem] bg-[center_right_0.75rem] bg-no-repeat"
              >
                <option value="" className="bg-black">Chọn chủ đề</option>
                {subjects.map((subject) => (
                  <option key={subject} value={subject} className="bg-black">
                    {subject}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-white font-semibold mb-2 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#D4AF37]" />
                Tin Nhắn
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-black/50 border border-[#D4AF37]/30 rounded-lg text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 transition-all resize-none"
                placeholder="Nhập nội dung tin nhắn của bạn..."
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-[#D4AF37] to-yellow-500 text-black hover:from-yellow-500 hover:to-[#D4AF37] font-bold py-6 text-lg shadow-lg shadow-[#D4AF37]/30 hover:shadow-[#D4AF37]/50 transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                  Đang gửi...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" />
                  Gửi Tin Nhắn
                </span>
              )}
            </Button>
          </form>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gradient-to-br from-[#D4AF37]/10 via-black/50 to-black/50 backdrop-blur-xl border border-[#D4AF37]/30 rounded-2xl p-8 shadow-2xl shadow-[#D4AF37]/10">
        <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
          <span className="text-[#D4AF37] text-4xl">❓</span>
          Câu Hỏi Thường Gặp
        </h2>
        <p className="text-gray-400 mb-8">
          Những câu hỏi phổ biến từ khách hàng
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              q: "Thời gian phản hồi là bao lâu?",
              a: "Chúng tôi sẽ phản hồi trong vòng 24h làm việc",
            },
            {
              q: "Có tư vấn trực tiếp không?",
              a: "Có, bạn có thể đặt lịch hẹn tư vấn trực tiếp",
            },
            {
              q: "Phí tư vấn là bao nhiêu?",
              a: "Tư vấn cơ bản miễn phí, tư vấn chuyên sâu tính phí",
            },
            {
              q: "Có giao hàng toàn quốc không?",
              a: "Có, chúng tôi giao hàng toàn quốc",
            },
          ].map((faq, index) => (
            <div
              key={index}
              className="bg-black/50 backdrop-blur-xl border border-[#D4AF37]/20 rounded-xl p-6 hover:border-[#D4AF37]/50 transition-all"
            >
              <h3 className="font-bold text-white mb-2 flex items-start gap-2">
                <span className="text-[#D4AF37] mt-0.5">Q:</span>
                <span>{faq.q}</span>
              </h3>
              <p className="text-gray-400 flex items-start gap-2 ml-6">
                <span className="text-[#D4AF37]">A:</span>
                <span>{faq.a}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}