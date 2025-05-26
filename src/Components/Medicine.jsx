export default function Medicine() {
    return (
      <div className="px-6 py-8 space-y-6 text-gray-800">
        <h2 className="text-3xl font-bold mb-4 text-[#00665C]">
          Thông tin thuốc: Metformin STELLA 850mg
        </h2>
  
        <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="w-full md:w-1/2 space-y-2">
                <p><strong>Tên thuốc:</strong> Metformin STELLA 850mg</p>
                <p><strong>Hoạt chất:</strong> Metformin hydrochloride</p>
                <p><strong>Tá dược:</strong> Vừa đủ 1 viên</p>
                <p><strong>Dạng bào chế:</strong> Viên nén bao phim</p>
            </div>

            {/* Image section */}
            <div className="w-full md:w-1/3">
                <img
                src="/medicine.png"
                alt="Metformin STELLA 850mg"
                className="rounded-xl shadow-md w-full object-contain"
                />
            </div>
        </div>
  
        <div>
          <h3 className="text-xl font-semibold mb-2">Liều dùng</h3>
          <ul className="list-disc list-inside pl-4 space-y-2 text-justify">
            <li><strong>Người lớn có chức năng thận bình thường (GFR ≥ 90 ml/phút):</strong> Khởi đầu 500 mg hoặc 850 mg, dùng 2–3 lần/ngày trong hoặc sau bữa ăn. Sau 10–15 ngày, điều chỉnh liều dựa trên glucose huyết. Tối đa 3g/ngày chia 3 lần.</li>
            <li><strong>Chuyển từ thuốc khác:</strong> Ngừng thuốc cũ và bắt đầu dùng metformin như liều trên.</li>
            <li><strong>Phối hợp với insulin:</strong> Metformin dùng 2–3 lần/ngày (500 hoặc 850 mg), liều insulin điều chỉnh theo glucose huyết.</li>
            <li><strong>Người cao tuổi:</strong> Cần đánh giá chức năng thận thường xuyên, điều chỉnh liều theo GFR.</li>
            <li><strong>Suy thận:</strong> Đánh giá GFR trước và định kỳ. Với bệnh nhân có nguy cơ suy thận hoặc lớn tuổi, kiểm tra mỗi 3–6 tháng.</li>
            <li><strong>Trẻ em từ 10 tuổi trở lên:</strong> Bắt đầu 500 mg/lần/ngày trong hoặc sau bữa ăn. Sau 10–15 ngày có thể chỉnh liều, tối đa 2g/ngày chia 2–3 lần.</li>
            <li><strong>Ngừng metformin khi chụp có cản quang iod:</strong> Với eGFR 30–60 ml/phút/1.73m², người có bệnh gan, nghiện rượu hoặc suy tim, ngừng thuốc trước/sau khi chụp. Đánh giá lại eGFR sau 48h, chỉ dùng lại nếu thận ổn định.</li>
          </ul>
        </div>
  
        <div>
          <h3 className="text-xl font-semibold mb-2">Cách dùng</h3>
          <p className="text-justify">
            Thuốc dùng đường uống. Uống cùng hoặc sau bữa ăn với một cốc nước đầy (khoảng 150ml).
          </p>
        </div>
  
        <div>
          <h3 className="text-xl font-semibold mb-2">Chỉ định điều trị</h3>
          <p className="text-justify">
            Điều trị đái tháo đường tuýp 2, đặc biệt ở bệnh nhân thừa cân khi thay đổi chế độ ăn và luyện tập không đủ kiểm soát glucose huyết.
            Metformin có thể dùng đơn trị hoặc phối hợp với thuốc uống khác hoặc insulin ở người lớn.
            Ở trẻ em từ 10 tuổi trở lên và thanh thiếu niên, metformin cũng có thể dùng đơn trị hoặc phối hợp insulin.
            Ngoài ra, metformin được chứng minh có khả năng giảm biến chứng ở bệnh nhân đái tháo đường type 2 thừa cân.
          </p>
        </div>
  
        <div>
          <h3 className="text-xl font-semibold mb-2">Chống chỉ định</h3>
          <ul className="list-disc list-inside pl-4 space-y-2 text-justify">
            <li>Tiền sử dị ứng với metformin hoặc bất kỳ tá dược nào của thuốc.</li>
            <li>Suy thận nặng (eGFR &lt; 30 ml/phút/1.73 m²).</li>
            <li>Toan chuyển hóa cấp/mạn, bao gồm nhiễm toan ceton do đái tháo đường.</li>
            <li>Tiền hôn mê do đái tháo đường.</li>
            <li>Các tình trạng cấp tính ảnh hưởng đến chức năng thận: mất nước, nhiễm trùng nặng, sốc.</li>
            <li>Các bệnh có thể gây thiếu oxy mô: suy tim mất bù, suy hô hấp, nhồi máu cơ tim gần đây, sốc.</li>
            <li>Suy gan, ngộ độc rượu cấp, hoặc nghiện rượu mạn tính.</li>
          </ul>
        </div>
        <div className="overflow-x-auto">
        <h3 className="text-xl font-semibold mb-4">Tác dụng không mong muốn</h3>
            <table className="table-auto border border-gray-400 w-full text-left">
                <thead className="bg-gray-100">
                <tr>
                    <th className="border border-gray-400 px-3 py-2">Trên hệ/cơ quan</th>
                    <th className="border border-gray-400 px-3 py-2">Thường gặp</th>
                    <th className="border border-gray-400 px-3 py-2">Ít gặp</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="border border-gray-400 px-3 py-2">Tiêu hóa</td>
                    <td className="border border-gray-400 px-3 py-2">
                    Chán ăn, buồn nôn, nôn, tiêu chảy, đau thượng vị, táo bón, ợ nóng
                    </td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                </tr>
                <tr>
                    <td className="border border-gray-400 px-3 py-2">Da</td>
                    <td className="border border-gray-400 px-3 py-2">
                    Ban, mày đay, nhạy cảm với ánh sáng
                    </td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                </tr>
                <tr>
                    <td className="border border-gray-400 px-3 py-2">Chuyển hóa</td>
                    <td className="border border-gray-400 px-3 py-2">
                    Giảm nồng độ vitamin B12
                    </td>
                    <td className="border border-gray-400 px-3 py-2">
                    Nhiễm acid lactic
                    </td>
                </tr>
                <tr>
                    <td className="border border-gray-400 px-3 py-2">Huyết học</td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                    <td className="border border-gray-400 px-3 py-2">
                    Loạn sản máu, thiếu máu bất sản, thiếu máu tan huyết, suy tuỷ, giảm tiểu cầu, mất bạch cầu hạt
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <div className="space-y-4 text-gray-800">
        <div>
            <h3 className="text-xl font-semibold mb-2">Thận trọng</h3>
            <ul className="list-disc list-inside space-y-2 pl-4 text-justify">
            <li>
                <strong>Nguy cơ nhiễm toan lactic:</strong> Cần theo dõi ở bệnh nhân suy thận, suy gan, nghiện rượu hoặc có bệnh cấp làm giảm oxy mô.
            </li>
            <li>
                <strong>Trẻ 10–12 tuổi:</strong> Thận trọng khi dùng do có ít dữ liệu lâm sàng hỗ trợ.
            </li>
            <li>
                <strong>Thai kỳ:</strong> Có thể cân nhắc sử dụng nếu thực sự cần thiết, đặc biệt khi thay thế hoặc bổ sung insulin.
            </li>
            <li>
                <strong>Cho con bú:</strong> Không khuyến cáo sử dụng.
            </li>
            <li>
                <strong>Lái xe và vận hành máy móc:</strong> An toàn khi dùng đơn trị liệu. Tuy nhiên, cần cảnh báo hạ đường huyết nếu phối hợp với sulfonylurea, insulin hoặc repaglinide.
            </li>
            </ul>
        </div>

        {/* Tương tác thuốc */}
        <div>
            <h3 className="text-xl font-semibold mb-2">Tương tác thuốc</h3>
            <p className="text-justify">
            Metformin có thể giảm hiệu quả nếu dùng cùng các thuốc làm tăng đường huyết như corticosteroid, lợi tiểu, estrogen. 
            Furosemid và cimetidin có thể làm tăng nồng độ metformin trong máu, làm tăng nguy cơ gặp tác dụng phụ. 
            Các thuốc cationic khác có thể cạnh tranh đào thải qua thận, dẫn đến tăng độc tính của metformin.
            </p>
        </div>

        {/* Bảo quản & đóng gói */}
        <div>
            <h3 className="text-xl font-semibold mb-2">Thông tin bảo quản & đóng gói</h3>
            <ul className="list-disc list-inside space-y-2 pl-4 text-justify">
            <li><strong>Hạn sử dụng:</strong> 36 tháng</li>
            <li><strong>Bao bì - Đóng gói:</strong> Hộp 4 vỉ x 15 viên</li>
            <li><strong>Điều kiện bảo quản:</strong> Bảo quản nơi khô ráo, nhiệt độ dưới 30°C, tránh ánh sáng trực tiếp.</li>
            </ul>
        </div>

        {/* Ưu điểm */}
        <div>
            <h3 className="text-xl font-semibold mb-2">Ưu điểm của Metformin</h3>
            <ul className="list-disc list-inside space-y-2 pl-4 text-justify">
            <li>Thuốc dạng viên nén, kích thước nhỏ, dễ uống.</li>
            <li>Giá cả hợp lý, phù hợp với nhiều đối tượng sử dụng.</li>
            <li>
                Hiệu quả cao trong điều trị bệnh ĐTĐ tuýp 2 không phụ thuộc insulin.
            </li>
            <li>
                Có khả năng làm giảm tổn thương tim do Trastuzumab gây ra, thông qua điều biến chức năng và động lực học của ty thể mà không ảnh hưởng đến hiệu quả điều trị ung thư.
            </li>
            <li>
                Sản xuất bởi Stellapharm – doanh nghiệp có hơn 20 năm kinh nghiệm, nhà máy đạt chuẩn GMP-WHO, đảm bảo chất lượng cao và độ tin cậy.
            </li>
            </ul>
        </div>

        {/* Nhược điểm */}
        <div>
            <h3 className="text-xl font-semibold mb-2">Nhược điểm của Metformin</h3>
            <ul className="list-disc list-inside space-y-2 pl-4 text-justify">
            <li>Thuốc kê đơn – cần có chỉ định của bác sĩ trước khi sử dụng.</li>
            <li>Có thể gặp một số tác dụng phụ trong quá trình điều trị, như rối loạn tiêu hóa hoặc nhiễm toan lactic.</li>
            </ul>
        </div>

        {/* Đăng ký */}
        <div>
            <h3 className="text-xl font-semibold mb-2">Thông tin đăng ký thuốc</h3>
            <ul className="list-disc list-inside space-y-2 pl-4">
            <li><strong>Công ty đăng ký:</strong> Công ty TNHH Liên doanh Stellapharm</li>
            <li><strong>Công ty sản xuất:</strong> Công ty TNHH Liên doanh Stellapharm</li>
            <li><strong>Số đăng ký:</strong> VD-26565-17</li>
            <li><strong>Ngày hết hạn SĐK:</strong> 30/12/2027</li>
            <li><strong>Số quyết định:</strong> 854/QĐ-QLD</li>
            <li><strong>Năm cấp:</strong> 30/12/2022</li>
            </ul>
        </div>
        </div>
      </div>
    );
  }
  