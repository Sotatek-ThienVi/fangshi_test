export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  contentBlocks?: ContentBlock[]; // Rich content format
  category: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
}

export interface ContentBlock {
  type: 'text' | 'image' | 'heading' | 'quote';
  content: string;
  alt?: string; // for images
  level?: number; // for headings (2, 3, 4)
}

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: number;
  stock: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export const blogCategories = [
  "Tất cả",
  "Phong Thủy Nhà Ở",
  "Phong Thủy Văn Phòng",
  "Phong Thủy Tuổi",
  "Phong Thủy Tài Lộc",
];

export const productCategories = [
  "Tất cả",
  "Tượng Phong Thủy",
  "Đá Phong Thủy",
  "Tranh Phong Thủy",
  "Cây Phong Thủy",
  "Trang Sức",
];

export const blogs: Blog[] = [
  {
    id: "1",
    title: "Cách Bố Trí Bàn Làm Việc Hợp Phong Thủy Để Thu Hút Tài Lộc",
    excerpt: "Khám phá những nguyên tắc cơ bản để bố trí bàn làm việc theo phong thủy, giúp tăng năng suất và thu hút vận may trong công việc.",
    content: "Bàn làm việc là nơi chúng ta dành phần lớn thời gian trong ngày. Một bàn làm việc được bố trí hợp phong thủy không chỉ giúp tăng năng suất mà còn mang lại may mắn và thành công trong sự nghiệp...",
    contentBlocks: [
      {
        type: "text",
        content: "Bàn làm việc là nơi chúng ta dành phần lớn thời gian trong ngày, là không gian mà chúng ta tạo ra giá trị và phát triển sự nghiệp. Theo phong thủy, việc bố trí bàn làm việc hợp lý không chỉ giúp tăng năng suất làm việc mà còn có thể thu hút tài lộc, thăng tiến và may mắn trong công việc."
      },
      {
        type: "text",
        content: "Một bàn làm việc được bố trí đúng phong thủy sẽ giúp năng lượng tích cực lưu thông, tạo sự tập trung và sáng tạo cho người sử dụng. Điều quan trọng nhất là phải hiểu rõ các nguyên tắc cơ bản và áp dụng một cách linh hoạt phù hợp với không gian làm việc của mình."
      },
      {
        type: "heading",
        content: "Vị Trí Đặt Bàn Làm Việc",
        level: 2
      },
      {
        type: "text",
        content: "Vị trí đặt bàn làm việc là yếu tố quan trọng nhất trong phong thủy văn phòng. Theo nguyên tắc, bàn làm việc nên được đặt ở vị trí 'tựa sơn vọng thủy', tức là có tường chắc chắn phía sau (tựa sơn) và tầm nhìn rộng phía trước (vọng thủy). Điều này tạo cảm giác an toàn và kiểm soát, giúp người làm việc tự tin và có cái nhìn tổng quan."
      },
      {
        type: "image",
        content: "https://images.unsplash.com/photo-1703355685639-d558d1b0f63e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3NzQ0ODkyNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
        alt: "Bố trí bàn làm việc hiện đại theo phong thủy"
      },
      {
        type: "text",
        content: "Tránh đặt bàn làm việc quay lưng vào cửa hoặc ngồi trực diện với cửa. Nếu không thể tránh, hãy sử dụng gương để có thể quan sát được người đi vào. Cũng cần tránh ngồi dưới xà ngang, đèn chùm lớn hoặc kệ sách treo tường phía trên đầu vì điều này tạo áp lực tinh thần không tốt."
      },
      {
        type: "heading",
        content: "Cách Sắp Xếp Đồ Vật Trên Bàn",
        level: 2
      },
      {
        type: "text",
        content: "Theo phong thủy, bề mặt bàn làm việc nên được chia thành 9 cung tương ứng với các khía cạnh khác nhau của cuộc sống và sự nghiệp. Góc phía trước bên trái là vị trí của tài lộc, nên đặt cây xanh hoặc vật phẩm phong thủy thu hút tiền bạc. Góc phía sau bên phải là vị trí của quý nhân, có thể đặt ảnh gia đình hoặc vật phẩm tượng trưng cho sự hỗ trợ."
      },
      {
        type: "text",
        content: "Giữ bàn làm việc luôn gọn gàng, sạch sẽ là nguyên tắc quan trọng. Bàn làm việc lộn xộn sẽ làm tắc nghẽn dòng chảy năng lượng, gây mất tập trung và giảm hiệu suất công việc. Hãy chỉ để những vật dụng cần thiết trên bàn và sử dụng ngăn kéo để cất giữ đồ không dùng thường xuyên."
      },
      {
        type: "image",
        content: "https://images.unsplash.com/photo-1772034292097-447be2dd32ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx6ZW4lMjBvZmZpY2UlMjBtZWRpdGF0aW9uJTIwc3BhY2V8ZW58MXx8fHwxNzc0NTQ2MjQ1fDA&ixlib=rb-4.1.0&q=80&w=1080",
        alt: "Không gian làm việc zen và gọn gàng"
      },
      {
        type: "heading",
        content: "Màu Sắc Và Ánh Sáng",
        level: 2
      },
      {
        type: "text",
        content: "Màu sắc của bàn làm việc và không gian xung quanh cũng ảnh hưởng đến phong thủy. Màu gỗ tự nhiên, nâu, đen là những màu mang tính chất của ngũ hành Thổ và Thủy, tốt cho sự nghiệp. Tránh sử dụng quá nhiều màu đỏ hoặc những màu quá chói lọi gây phân tán."
      },
      {
        type: "text",
        content: "Ánh sáng cũng rất quan trọng. Nên có đủ ánh sáng tự nhiên, nhưng tránh ánh sáng chiếu trực tiếp gây chói. Nếu thiếu ánh sáng tự nhiên, hãy bổ sung đèn bàn với ánh sáng vàng ấm tạo cảm giác thoải mái và tập trung."
      },
      {
        type: "heading",
        content: "Vật Phẩm Phong Thủy Trên Bàn Làm Việc",
        level: 2
      },
      {
        type: "text",
        content: "Một số vật phẩm phong thủy có thể giúp tăng cường năng lượng tích cực cho bàn làm việc. Cây xanh nhỏ như kim tiền, phát tài giúp thanh lọc không khí và mang lại may mắn. Tượng Phật Di Lặc hoặc Thần Tài đặt ở vị trí hợp lý có thể thu hút tài lộc. Thạch anh tự nhiên giúp tập trung và xua tan năng lượng tiêu cực."
      },
      {
        type: "quote",
        content: "Một bàn làm việc gọn gàng là một tâm trí trong sáng. Phong thủy không phải là mê tín mà là nghệ thuật sắp xếp không gian để tối ưu hóa năng lượng sống."
      },
      {
        type: "heading",
        content: "Lời Kết",
        level: 2
      },
      {
        type: "text",
        content: "Việc bố trí bàn làm việc theo phong thủy không khó và không tốn kém. Chỉ cần hiểu các nguyên tắc cơ bản và áp dụng phù hợp với hoàn cảnh của mình. Hãy bắt đầu từ những thay đổi nhỏ như dọn dẹp bàn làm việc, điều chỉnh vị trí và thêm vài vật phẩm phong thủy. Bạn sẽ nhận thấy sự khác biệt trong năng suất làm việc và vận khí của mình."
      }
    ],
    category: "Phong Thủy Văn Phòng",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
    author: "Thầy Nguyễn Văn Minh",
    date: "2026-03-20",
    readTime: "5 phút đọc",
  },
  {
    id: "2",
    title: "Phong Thủy Phòng Ngủ: Tạo Không Gian Nghỉ Ngơi Lý Tưởng",
    excerpt: "Hướng dẫn chi tiết cách bố trí phòng ngủ theo phong thủy để có giấc ngủ ngon và tăng cường sức khỏe, mối quan hệ gia đình.",
    content: "Phòng ngủ là nơi chúng ta nghỉ ngơi và phục hồi năng lượng. Việc bố trí phòng ngủ đúng cách theo phong thủy có thể cải thiện chất lượng giấc ngủ và mang lại hạnh phúc cho gia đình...",
    category: "Phong Thủy Nhà Ở",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    author: "Thầy Trần Đức Phúc",
    date: "2026-03-18",
    readTime: "7 phút đọc",
  },
  {
    id: "3",
    title: "Màu Sắc Hợp Mệnh: Chọn Màu Theo Ngũ Hành",
    excerpt: "Tìm hiểu cách chọn màu sắc phù hợp với mệnh của bạn để tăng cường vận khí và sức khỏe trong cuộc sống hàng ngày.",
    content: "Trong phong thủy, màu sắc đóng vai trò quan trọng trong việc cân bằng ngũ hành và tăng cường vận khí. Mỗi mệnh sẽ có những màu sắc phù hợp riêng...",
    category: "Phong Thủy Tuổi",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab",
    author: "Thầy Lê Hoàng Nam",
    date: "2026-03-15",
    readTime: "6 phút đọc",
  },
  {
    id: "4",
    title: "Cây Phong Thủy Mang Lại May Mắn Cho Gia Đình",
    excerpt: "Danh sách các loại cây phong thủy phổ biến và cách chăm sóc để mang lại tài lộc, sức khỏe cho gia đình.",
    content: "Cây cối không chỉ làm đẹp không gian sống mà còn có tác dụng thanh lọc không khí và mang lại năng lượng tích cực theo phong thủy...",
    category: "Phong Thủy Nhà Ở",
    image: "https://images.unsplash.com/photo-1463320726281-696a485928c7",
    author: "Thầy Nguyễn Văn Minh",
    date: "2026-03-12",
    readTime: "8 phút đọc",
  },
  {
    id: "5",
    title: "Đặt Tượng Phật Di Lặc Đúng Vị Trí Để Thu Hút Tài Lộc",
    excerpt: "Hướng dẫn cách đặt và thờ tượng Phật Di Lặc theo phong thủy để mang lại may mắn và thịnh vượng cho gia chủ.",
    content: "Phật Di Lặc là biểu tượng của sự vui vẻ, hạnh phúc và thịnh vượng. Việc đặt tượng Phật Di Lặc đúng vị trí có thể thu hút tài lộc và may mắn...",
    category: "Phong Thủy Tài Lộc",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2",
    author: "Thầy Trần Đức Phúc",
    date: "2026-03-10",
    readTime: "5 phút đọc",
  },
  {
    id: "6",
    title: "Phong Thủy Bếp: Nơi Quyết Định Sức Khỏe Và Tài Lộc",
    excerpt: "Những điều cần lưu ý khi bố trí nhà bếp theo phong thủy để đảm bảo sức khỏe và tài vận cho cả gia đình.",
    content: "Nhà bếp trong phong thủy được xem là trung tâm của gia đình, nơi quyết định sức khỏe và tài vận. Bố trí bếp đúng cách có thể mang lại nhiều may mắn...",
    category: "Phong Thủy Nhà Ở",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba",
    author: "Thầy Lê Hoàng Nam",
    date: "2026-03-08",
    readTime: "6 phút đọc",
  },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Tượng Phật Di Lặc Ngồi",
    price: 850000,
    description: "Tượng Phật Di Lặc bằng đồng thau cao cấp, mang lại may mắn và tài lộc cho gia đình. Kích thước: 20cm.",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    category: "Tượng Phong Thủy",
    rating: 4.8,
    stock: 15,
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
  },
  {
    id: "3",
    name: "Tranh Ngựa Mã Đáo Thành Công",
    price: 1200000,
    description: "Tranh đá quý khảm ngựa trên nền vàng, mang ý nghĩa thành công rực rỡ trong sự nghiệp. Kích thước: 80x60cm.",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5",
    category: "Tranh Phong Thủy",
    rating: 4.7,
    stock: 8,
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
  },
  {
    id: "6",
    name: "Đá Thạch Anh Tím Tự Nhiên",
    price: 450000,
    description: "Khối đá thạch anh tím nguyên khối, giúp thanh lọc năng lượng và mang lại bình an. Trọng lượng: 500g.",
    image: "https://images.unsplash.com/photo-1615655406736-b37c4fabf923",
    category: "Đá Phong Thủy",
    rating: 4.8,
    stock: 20,
  },
  {
    id: "7",
    name: "Cây Lan Ý Phong Thủy",
    price: 180000,
    description: "Cây lan ý trong chậu sứ trắng thanh lịch, dễ chăm sóc và mang lại may mắn. Cao 25cm.",
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a",
    category: "Cây Phong Thủy",
    rating: 4.5,
    stock: 40,
  },
  {
    id: "8",
    name: "Tranh Cửu Ngư Quần Hội",
    price: 980000,
    description: "Tranh thêu tay cá chép hội tụ, mang ý nghĩa sum vầy và tài lộc dồi dào. Kích thước: 70x50cm.",
    image: "https://images.unsplash.com/photo-1547582423-2e6f36cd5f7e",
    category: "Tranh Phong Thủy",
    rating: 4.9,
    stock: 12,
  },
  {
    id: "9",
    name: "Vòng Tay Đá Obsidian",
    price: 280000,
    description: "Vòng tay đá obsidian đen bóng tự nhiên, có tác dụng hóa giải sát khí và bảo vệ. Size: 10mm.",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338",
    category: "Trang Sức",
    rating: 4.7,
    stock: 30,
  },
  {
    id: "10",
    name: "Tượng Thần Tài Đứng",
    price: 680000,
    description: "Tượng Thần Tài bằng đồng đỏ, mang lại tài lộc và thịnh vượng cho gia chủ. Cao 18cm.",
    image: "https://images.unsplash.com/photo-1604881991720-f91add269bed",
    category: "Tượng Phong Thủy",
    rating: 4.8,
    stock: 18,
  },
  {
    id: "11",
    name: "Cây Phát Tài Núi",
    price: 320000,
    description: "Cây phát tài núi trong chậu gốm, dễ sống và mang ý nghĩa phát tài phát lộc. Cao 35cm.",
    image: "https://images.unsplash.com/photo-1509937528035-ad76254b0356",
    category: "Cây Phong Thủy",
    rating: 4.6,
    stock: 35,
  },
  {
    id: "12",
    name: "Đá Thạch Anh Vàng",
    price: 550000,
    description: "Khối đá thạch anh vàng tự nhiên, thu hút tài lộc và may mắn. Trọng lượng: 600g.",
    image: "https://images.unsplash.com/photo-1611078489935-0cb964de46d6",
    category: "Đá Phong Thủy",
    rating: 4.9,
    stock: 15,
  },
];