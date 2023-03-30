 <h2>Script này cho phép bạn chuyển đổi tệp tin .ts sang định dạng Excel (.xls hoặc .xlsx) và ngược lại.</h2>

Yêu cầu hệ thống
Cài đặt Node.js
Các bước thực hiện

1.**Cài đặt các phụ thuộc**
   - Sau khi đã tải xuống mã nguồn, hãy mở Terminal và điều hướng đến thư mục chứa mã nguồn. Tiếp theo, sử dụng lệnh sau để cài đặt các thành phần phụ thuộc:
   + RUN `composer install`
   + RUN `composer require phpoffice/phpspreadsheet`
   + RUN `npm install -g ts-node`

2. **Export file .ts sang Excel**
   Bạn có thể chuyển đổi tệp tin .ts sang định dạng Excel bằng cách sử dụng lệnh sau trong terminal:<br>
   // Di chuyển file cần translate vào fodel file_translate <br>
    + RUN `ts-node export.ts` *//để chuyển đổi data trong file .ts sang dạng json <br>*
    + RUN `php export.php` *//Lệnh này sẽ chuyển đổi tệp tin data.ts sang định dạng Excel.<br>*

3. **Import file Excel vào .ts**
  - Bạn có thể chuyển đổi tệp Excel sang định dạng .ts bằng cách sử dụng lệnh sau trong terminal:<br>
  - Copy file excel vào fodel file_excel
  - RUN `php import.php`

4. **Kết luận**
- Đó là các bước để sử dụng script import và export file .ts sang định dạng Excel. Việc chuyển đổi tệp tin giữa các định dạng này rất hữu ích khi bạn cần phân tích hoặc chỉnh sửa dữ liệu trong các bảng tính.
