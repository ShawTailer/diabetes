import React from 'react';
export default function  Knowledge ()  {
    return (
        <div className="px-2 sm:px-6 py-10 space-y-8 text-gray-800">
        <h2 className="text-3xl font-bold text-[#00665C]">
          Kiến thức về đái tháo đường
        </h2>
  
        {/* Section 1 */}
        <div>
          <h3 className="text-xl font-semibold mb-2">1. Bệnh đái tháo đường là gì? Được phân loại như thế nào?</h3>
          <p>Đái tháo đường là dạng bệnh rối loạn chuyển hóa khiến lượng đường trong máu tăng cao hơn bình thường do cơ thể không sản xuất đủ insulin hoặc kháng insulin, hoặc do cả hai.</p>
          <div className="flex justify-center">
              <img src='/diabetic1.png' className='p-4' />
          </div>
          <p className="mt-2 font-semibold">Bệnh đái tháo đường được chia thành:</p>
          <ul className="list-disc list-inside space-y-1 pl-4 mt-2">
            <li><strong>Type I:</strong> Cơ thể không sản xuất hoặc sản xuất rất ít insulin.</li>
            <li><strong>Type II:</strong> Có insulin nhưng không được sử dụng hiệu quả.</li>
            <li><strong>Thai kỳ:</strong> Xảy ra trong thời gian mang thai, thường hết sau khi sinh.</li>
            <li><strong>Tiền đái tháo đường:</strong> Đường huyết cao hơn bình thường nhưng chưa tới mức đái tháo đường.</li>
          </ul>
          <p className="mt-2">Việc phát hiện sớm và điều chỉnh lối sống có thể phòng tránh được bệnh, đặc biệt là tránh tiến triển thành type II.</p>
        </div>
  
        {/* Section 2 */}
        <div>
          <h3 className="text-xl font-semibold mb-2">2. Bệnh đái tháo đường là do những nguyên nhân nào?</h3>
          <ul className="list-disc list-inside space-y-4 pl-4 text-justify">
            <li>
              <strong>Type I:</strong> 
              Tuy chưa thể kết luận chính xác nguyên nhân gây bệnh, nhưng đái tháo đường type I được cho là hậu quả của việc hệ miễn dịch nhầm lẫn và tấn công phá hủy các tế bào beta trong tuyến tụy – những tế bào đảm nhiệm vai trò sản xuất insulin. Khi các tế bào này bị phá hủy, cơ thể sẽ không có hoặc có rất ít insulin, khiến lượng glucose tích tụ trong máu tăng cao. Ngoài ra, yếu tố môi trường và di truyền cũng được xem là những yếu tố có thể làm tăng nguy cơ mắc bệnh type I.
            </li>
            
            <li>
              <strong>Type II và tiền đái tháo đường:</strong> 
              Hiện vẫn chưa xác định được nguyên nhân chính xác gây ra bệnh type II và tiền đái tháo đường. Tuy nhiên, có nhiều bằng chứng cho thấy yếu tố di truyền, thừa cân – béo phì và lối sống ít vận động có thể góp phần làm tăng nguy cơ mắc bệnh. Điều quan trọng cần lưu ý là không phải tất cả những người mắc đái tháo đường type II hay tiền đái tháo đường đều bị thừa cân. Điều này cho thấy các yếu tố khác cũng đóng vai trò quan trọng trong cơ chế bệnh sinh.
            </li>

            <li>
              <strong>Thai kỳ:</strong> 
              Bệnh đái tháo đường thai kỳ chủ yếu do các hormone được nhau thai tiết ra trong quá trình mang thai, gây ra tình trạng kháng insulin trong cơ thể người mẹ. Khi kháng insulin xảy ra, cơ thể không thể sử dụng insulin hiệu quả, dẫn đến tình trạng đường huyết tăng cao. Đây là một cơ chế sinh lý bình thường trong thai kỳ, nhưng nếu không được kiểm soát tốt, có thể dẫn đến đái tháo đường thai kỳ.
            </li>
          </ul>
        </div>
  
        {/* Section 3 */}
        <div>
          <h3 className="text-xl font-semibold mb-2">3. Đái tháo đường và những biểu hiện thường gặp</h3>
          <p className="text-justify">
            Ở giai đoạn đầu, phần lớn các trường hợp mắc bệnh đều không có biểu hiện rõ ràng, và nếu có thì rất dễ bị nhầm lẫn với các bệnh lý khác. Vì vậy, nhiều bệnh nhân cảm thấy hoang mang và bất ngờ khi được chẩn đoán mắc bệnh, đặc biệt khi chỉ số đường huyết đã tăng cao. 
          </p>
          <p className="mt-2 text-justify">
            Bên cạnh đó, biểu hiện của bệnh đái tháo đường rất đa dạng, phụ thuộc vào thể trạng của người bệnh cũng như các bệnh lý mạn tính khác mà người đó có thể đang mắc phải. Tiểu đường thai kỳ cũng khiến nhiều chị em phụ nữ cảm thấy lo lắng vì có thể ảnh hưởng đến cả mẹ và thai nhi.
          </p>
          <p className="mt-2 font-medium">Do đó, các bác sĩ khuyến cáo bạn nên lắng nghe cơ thể và đi khám sớm nếu gặp phải các dấu hiệu sau:</p>

          <ul className="list-disc list-inside space-y-2 pl-4 mt-3 text-justify">
            <li>
              Cơ thể luôn cảm thấy mệt mỏi, dù đã ăn uống đầy đủ nhưng vẫn thường xuyên cảm thấy đói và hay khát nước.
            </li>
            <li>
              Sụt cân không rõ nguyên nhân.
            </li>
            <li>
              Đi tiểu nhiều lần trong ngày, đặc biệt là về đêm.
            </li>
            <li>
              Thị lực suy giảm dần theo thời gian.
            </li>
            <li>
              Vết thương lâu lành, da dễ bị mẩn ngứa, kèm theo tình trạng tê bì tay chân.
            </li>
            <li>
              Ở bệnh nhân nam: Có thể xuất hiện tình trạng rối loạn cương dương, giảm ham muốn tình dục.
            </li>
            <li>
              Ở bệnh nhân nữ: Thường xuyên bị viêm nhiễm phụ khoa, da khô và ngứa ngáy kéo dài.
            </li>
          </ul>
        </div>
  
        {/* Section 4 */}
        <div>
          <h3 className="text-xl font-semibold mb-2">4. Các biến chứng nguy hiểm từ bệnh đái tháo đường</h3>

          <p className="text-justify">
            Nếu không được điều trị kịp thời và đúng cách, bệnh đái tháo đường có thể gây ra những biến chứng vô cùng nguy hiểm, ảnh hưởng nghiêm trọng đến sức khỏe và chất lượng sống của người bệnh. Dưới đây là một số biến chứng thường gặp ở bệnh nhân mắc bệnh đái tháo đường:
          </p>
          <div className="flex justify-center">
              <img src='/diabetic2.png' className='p-4' />
          </div>
          <p className="italic text-sm mt-2 text-gray-600">
            Xét nghiệm đái tháo đường sớm và điều trị kịp thời là cách hiệu quả để phòng tránh các biến chứng nguy hiểm.
          </p>

          <ul className="list-disc list-inside space-y-2 pl-4 mt-3 text-justify">
            <li>
              Tình trạng tăng đường huyết kéo dài có thể gây tổn thương các tế bào thần kinh, đồng thời làm tăng nguy cơ xơ vữa động mạch và thiếu máu não. Từ đó làm giảm nguồn cung cấp oxy và dinh dưỡng cho tế bào não, khiến người bệnh mệt mỏi, dễ bị trầm cảm. Bên cạnh đó, sự lo lắng về việc kiểm soát bệnh cũng là yếu tố khiến bệnh nhân rơi vào trạng thái trầm cảm.
            </li>
            <li>
              Gây suy giảm trí nhớ, ảnh hưởng đến khả năng tư duy và tập trung.
            </li>
            <li>
              Gây suy giảm thị lực, làm tăng nguy cơ mắc bệnh võng mạc đái tháo đường — một biến chứng phổ biến có thể dẫn đến mù lòa nếu không được điều trị.
            </li>
            <li>
              Tăng nguy cơ mắc các bệnh ngoài da, đặc biệt là nhiễm trùng da do hệ miễn dịch suy yếu.
            </li>
            <li>
              Làm chậm quá trình lành vết thương, khiến các tổn thương nhỏ có thể trở nên nghiêm trọng.
            </li>
            <li>
              Tăng nguy cơ mắc bệnh thận mạn tính, tổn thương thần kinh ngoại vi, và đặc biệt là các bệnh lý tim mạch như cao huyết áp, đau thắt ngực, nhồi máu cơ tim và đột quỵ nếu không kiểm soát đường huyết hiệu quả.
            </li>
            <li>
              Với phụ nữ mang thai, đái tháo đường thai kỳ có thể dẫn đến tiền sản giật, sinh non, sảy thai hoặc phải sinh mổ. Ngoài ra, mẹ có nguy cơ cao mắc đái tháo đường type II trong tương lai. Thai nhi có thể tăng trưởng quá mức, dễ mắc dị tật bẩm sinh, hội chứng suy hô hấp sau sinh, thậm chí có thể tử vong nếu không được theo dõi sát sao.
            </li>
          </ul>
        </div>

  
        {/* Section 5 */}
        <div>
          <h3 className="text-xl font-semibold mb-2">5. Phương pháp chẩn đoán và điều trị đái tháo đường</h3>

          <p className="font-semibold mt-2">Phương pháp chẩn đoán bệnh phổ biến:</p>
          <ul className="list-disc list-inside space-y-2 pl-4 mt-2 text-justify">
            <li>
              <strong>Xét nghiệm HbA1C:</strong> Được sử dụng để theo dõi mức đường huyết trung bình của bệnh nhân trong khoảng thời gian 2 đến 3 tháng gần nhất. Kết quả xét nghiệm giúp bác sĩ đánh giá chính xác mức độ tiến triển và kiểm soát bệnh.
            </li>
            <li>
              <strong>Xét nghiệm FPG (Glucose huyết tương lúc đói):</strong> Người bệnh cần nhịn ăn ít nhất 8 tiếng trước khi lấy máu để kiểm tra nồng độ glucose huyết tương, giúp xác định nguy cơ hoặc chẩn đoán bệnh.
            </li>
            <li>
              <strong>Xét nghiệm dung nạp glucose:</strong> Được thực hiện bằng cách uống dung dịch glucose và theo dõi sự thay đổi của đường huyết trong vài giờ sau đó. Phương pháp này giúp đánh giá phản ứng của cơ thể với lượng đường nạp vào.
            </li>
            <li>
              <strong>Xét nghiệm glucose huyết tương ngẫu nhiên:</strong> Xét nghiệm đo đường huyết tại một thời điểm bất kỳ trong ngày, thường được dùng trong các trường hợp cấp tính hoặc sàng lọc nhanh.
            </li>
          </ul>

          <p className="italic text-sm mt-4 text-gray-600">
            Điều chỉnh thói quen ăn uống và lối sống là bước quan trọng đầu tiên để kiểm soát hiệu quả bệnh đái tháo đường.
          </p>

          <p className="font-semibold mt-4">Phương pháp điều trị bệnh:</p>
          <ul className="list-disc list-inside space-y-2 pl-4 mt-2 text-justify">
            <li>
              <strong>Điều chỉnh chế độ ăn uống và sinh hoạt:</strong> Việc duy trì chế độ ăn lành mạnh, giảm tinh bột, tăng cường chất xơ và vận động thể chất giúp kiểm soát lượng đường trong máu hiệu quả, đặc biệt trong giai đoạn đầu của bệnh.
            </li>
            <div className="flex justify-center">
              <img src='/diabetic3.png' className='p-4' />
            </div>
            <li>
              <strong>Sử dụng thuốc:</strong> 
              Đối với bệnh nhân đái tháo đường type I, việc sử dụng insulin là bắt buộc để bù đắp cho sự thiếu hụt hoàn toàn insulin trong cơ thể. Trong khi đó, bệnh nhân đái tháo đường type II có thể được chỉ định dùng các loại thuốc uống hoặc thuốc tiêm giúp cơ thể sử dụng insulin hiệu quả hơn hoặc kích thích sản xuất insulin.
            </li>
          </ul>
        </div>

      </div>
    );
}