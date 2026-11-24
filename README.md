# 🌱 SaveBite — Nền tảng Kết nối & Chống Lãng phí Thực phẩm

**SaveBite** là nền tảng công nghệ kết nối các cửa hàng F&B, tiệm bánh, siêu thị mini có nguồn thực phẩm chất lượng còn dư vào cuối ngày với người tiêu dùng mong muốn mua sắm tiết kiệm. Dự án hướng tới mục tiêu kép: **giảm thiểu lãng phí thực phẩm ra môi trường** và **tối ưu hóa lợi ích kinh tế** cho cả người bán lẫn người mua.

---

## 1. Bối cảnh & Bài toán thực tế

* **Phía Cửa hàng (Merchant):** Vào cuối mỗi ngày, các tiệm bánh mì, quán ăn, cửa hàng tiện lợi thường tồn đọng một lượng thực phẩm chế biến trong ngày hoặc hàng cận date vẫn đảm bảo an toàn vệ sinh thực phẩm (ATVSTP). Nếu bỏ đi sẽ gây lãng phí lớn về chi phí nguyên vật liệu và vận hành. Tuy nhiên, chủ quán thường không có thời gian chụp ảnh, đăng bán từng món lẻ.
* **Phía Người tiêu dùng (Customer):** Nhiều sinh viên, người lao động và hộ gia đình có nhu cầu mua thực phẩm ngon, chất lượng với mức giá hợp lý nhưng gặp rào cản trong việc tiếp cận nguồn hàng giảm giá uy tín vào khung giờ cuối ngày.

---

## 2. Giải pháp & Điểm sáng tạo cốt lõi

SaveBite giải quyết điểm nghẽn của thị trường thông qua mô hình **Mystery Box (Túi thực phẩm bất ngờ)** kết hợp quy trình đặt trước – tự đến lấy (**Self-Pickup**):

* **Túi thực phẩm bất ngờ (Mystery Box):** Thay vì đăng lẻ từng sản phẩm, cửa hàng đóng gói các phần thực phẩm còn dư theo các mức giá cố định, giảm từ **30% – 50%** so với giá trị thực. Điều này giúp chủ quán đăng bán chỉ trong dưới 30 giây và tạo trải nghiệm khám phá thú vị cho khách hàng.
* **Ưu tiên Tự đến lấy (Self-Pickup):** Khách hàng đặt mua và thanh toán trước trên nền tảng, sau đó ghé cửa hàng nhận túi trong khung giờ cố định (ví dụ: `20:00 – 21:30`) trên đường đi học/đi làm về. Cơ chế này giúp triệt tiêu phí giao hàng, giữ trọn vẹn giá trị "tiết kiệm" của đơn hàng.
* **Đa điểm chạm (Omnichannel):** Triển khai trên **Mobile Web (PWA)**, **Mobile App (iOS/Android)** và định hướng tích hợp **Zalo Mini App** để giảm tối đa rào cản tải ứng dụng mới của người dùng Việt.

---

## 3. Tính năng chính & Cơ chế vận hành an toàn

### Dành cho Khách hàng (Customer)
* **Tìm kiếm theo vị trí (GPS):** Tự động quét và hiển thị các cửa hàng đang mở bán Mystery Box trong bán kính `1 – 5 km`.
* **Thanh toán trực tuyến tức thì:** Tích hợp mã **VietQR** động giúp thanh toán nhanh chóng, hạn chế tình trạng đặt giữ chỗ ảo rồi không đến nhận.
* **Nhận hàng bằng mã QR:** Hệ thống cấp mã QR riêng cho từng đơn hàng để khách xuất trình tại quầy.
* **Đánh giá & Minh bạch chất lượng:** Hệ thống đánh giá sao và phản hồi thực tế sau mỗi lần nhận túi giúp cộng đồng tự động sàng lọc các cửa hàng uy tín.

### Dành cho Cửa hàng (Merchant)
* **Xác thực ATVSTP:** Quy trình kiểm duyệt giấy phép kinh doanh và chứng nhận an toàn thực phẩm trước khi mở bán.
* **Đăng bán siêu tốc (< 30 giây):** Chủ quán chỉ cần nhập 3 thông số: *Số lượng túi*, *Mức giá bán*, và *Khung giờ nhận hàng*.
* **Quét mã QR đối soát:** Nhân viên quét mã QR của khách để xác nhận giao hàng thành công và ghi nhận doanh thu vào ví.

### Cơ chế bảo vệ hệ thống (System Safeguards)
* **Khóa giữ chỗ tồn kho (Inventory Lock):** Sử dụng cơ chế khóa tạm thời trong 5 phút khi có người bấm thanh toán, ngăn chặn lỗi bán vượt số lượng (overselling) khi nhiều người cùng săn túi cùng lúc.
* **Ký quỹ & Hoàn tiền tự động (Escrow):** Tiền thanh toán được hệ thống giữ trung gian và chỉ giải ngân cho cửa hàng (sau khi trừ hoa hồng) khi mã QR được quét thành công. Nếu cửa hàng đóng cửa đột xuất, hệ thống tự động hoàn tiền cho khách.

---

## 4. Kiến trúc Công nghệ (Tối ưu chi phí MVP)

Hệ thống được thiết kế theo kiến trúc **API-First**, sử dụng xuyên suốt hệ sinh thái **TypeScript** cùng các công nghệ mã nguồn mở miễn phí để tối ưu chi phí vận hành giai đoạn đầu:

| Thành phần | Công nghệ sử dụng | Vai trò trong hệ thống |
| :--- | :--- | :--- |
| **Mobile Web (PWA)** | Next.js + Tailwind CSS | Giao diện web mượt mà trên di động, hỗ trợ SEO và dễ dàng chuyển đổi sang Zalo Mini App. |
| **Mobile App** | React Native (Expo) | Ứng dụng gốc trên iOS & Android, tái sử dụng tới 70% logic code từ bản Web. |
| **Backend API** | Node.js (NestJS) | Xử lý nghiệp vụ lõi: Quản lý đơn hàng, Thanh toán, Thông báo và Đối soát ví. |
| **Cơ sở dữ liệu** | PostgreSQL + PostGIS | Lưu trữ dữ liệu giao dịch an toàn (ACID) và truy vấn tọa độ bản đồ bán kính GPS tốc độ cao. |
| **Caching & Locking** | Redis (Upstash) | Xử lý khóa tồn kho thời gian thực và quản lý phiên truy cập. |
| **Bản đồ & Thanh toán** | OpenStreetMap + VietQR/PayOS | Hiển thị bản đồ miễn phí và tự động xác nhận giao dịch chuyển khoản ngân hàng. |

---

## 5. Mô hình Kinh doanh (Business Model)

1. **Hoa hồng trên mỗi đơn hàng (Commission Fee):** Nguồn thu chính ở giai đoạn đầu. Cửa hàng tham gia hoàn toàn miễn phí và chỉ chia sẻ tỷ lệ hoa hồng khi bán được hàng thành công.
2. **Gói quảng bá hiển thị (Promoted Listings):** Giúp các cửa hàng đẩy vị trí hiển thị lên đầu danh sách tìm kiếm hoặc gắn nhãn nổi bật.
3. **Phí thành viên cửa hàng (Merchant Subscription):** Cung cấp các công cụ phân tích dữ liệu hàng tồn nâng cao, quản lý chuỗi nhiều chi nhánh và ưu đãi chiết khấu hoa hồng.

---

## 6. Lộ trình Phát triển (Roadmap)

* **Giai đoạn 1 — Core MVP:** Ra mắt bản Mobile Web (PWA) với các tính năng cốt lõi: Đăng nhập SĐT (OTP), tìm quán quanh đây, đăng bán nhanh Mystery Box, thanh toán VietQR và xác nhận nhận hàng qua mã QR.
* **Giai đoạn 2 — Giữ chân & Tối ưu trải nghiệm:** Tích hợp thông báo đẩy (Push Notification / Zalo ZNS) nhắc giờ mở bán của quán yêu thích, hệ thống đánh giá chất lượng và bảng thống kê lượng thực phẩm đã "giải cứu" cho chủ quán.
* **Giai đoạn 3 — Mở rộng hệ sinh thái:** Phát hành ứng dụng chính thức trên App Store & Google Play, tích hợp API giao hàng chặng ngắn (Ahamove/GrabExpress) và mở bán các gói quảng bá doanh nghiệp.
