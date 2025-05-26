import { FaArrowDown, FaWeight, FaMoneyBillWave, FaGlobe, FaUserMd, FaDumbbell,FaPills, FaUtensils, FaRunning, FaRegSmile, FaHeartbeat, FaShieldAlt, FaUsers } from "react-icons/fa";
import { useState } from "react";

const items = [
    {
      icon: <FaPills className="text-lg" />,
      title: "DÙNG THUỐC ĐÚNG CÁCH",
      content: [
        "Biết cách sử dụng thuốc đái tháo đường an toàn, hiệu quả.",
        "Nắm bắt bí quyết phòng tránh quên thuốc & dự phòng thuốc khi cần thiết."
      ],
      color: "bg-lime-200",
    },
    {
      icon: <FaUtensils className="text-lg" />,
      title: "ĂN UỐNG LÀNH MẠNH",
      content: [
        "Bác sĩ dinh dưỡng tư vấn và giải đáp mọi câu hỏi",
        "Huấn luyện viên sức khoẻ đồng hành:",
        "+ Điều chỉnh dinh dưỡng dựa trên thói quen ăn uống, không áp dụng thực đơn mẫu.",
        "+ Hướng dẫn tăng/giảm lượng thức ăn tuỳ theo nhóm chất có trong mỗi bữa.",
        "+ Hướng dẫn cách chế biến và sắp xếp thứ tự ăn uống phù hợp.",
        "+ Theo sát, động viên áp dụng thói quen ăn uống mới mọi lúc, mọi nơi.",
        "Bài học video: Trang bị kiến thức toàn diện về dinh dưỡng và sử dụng hiệu quả bộ dụng cụ được tặng kèm"
      ],
      color: "bg-lime-300",
    },
    {
      icon: <FaRunning className="text-lg" />,
      title: "VẬN ĐỘNG AN TOÀN",
      content: [
        "Chuyên gia vận động tư vấn tập luyện phù hợp",
        "Huấn luyện viên sức khoẻ đồng hành:",
        "+ Thiết lập chế độ vận động phù hợp theo thể trạng.",
        "+ Động viên, hướng dẫn kích hoạt hormone hạnh phúc trong tập luyện.",
        "Bài học video: Trang bị kiến thức để tập luyện an toàn và biết cách tăng cường vận động mọi nơi, mọi lúc."
      ],
      color: "bg-green-200",
    },
    {
      icon: <FaRegSmile className="text-lg" />,
      title: "KIỂM SOÁT LO ÂU",
      content: [
        "Chuyên gia tâm lý tư vấn và thảo gỡ vấn đề ảnh hưởng sức khỏe tinh thần",
        "Huấn luyện viên đồng hành:",
        "+ Biết cách kiểm soát căng thẳng, hít thở đúng cách & nâng cao chất lượng giấc ngủ.",
        "+ Luyện tập bộ môn Thiền & Yoga giúp giải toả căng thẳng hiệu quả.",
        "+ Cùng chia sẻ, thấu hiểu những khó khăn, lo lắng khi đối mặt và điều trị bệnh.",
        "Bài học video: Hiểu cơ thể và nhận biết dấu hiệu của sự căng thẳng, nắm vững kiến thức về tâm lý, tinh thần."
      ],
      color: "bg-sky-100",
    },
    {
      icon: <FaHeartbeat className="text-lg" />,
      title: "THEO DÕI SỨC KHOẺ",
      content: [
        "Hiểu rõ về chỉ số đường huyết, HbA1c và cách kiểm soát qua loạt video bài học.",
        "Được hướng dẫn sử dụng máy đo đường huyết được tặng kèm và theo dõi đường huyết bằng ứng dụng.",
        "Huấn luyện viên tư vấn, thiết lập lịch đo đường huyết cá nhân và hỗ trợ đọc kết quả."
      ],
      color: "bg-sky-200",
    },
    {
      icon: <FaShieldAlt className="text-lg" />,
      title: "PHÒNG TRÁNH BIẾN CHỨNG",
      content: [
        "Hiểu rõ mức độ nguy hiểm và nguyên nhân dẫn đến biến chứng mạn tính",
        "Nhận biết sớm và biết cách phòng tránh các biến chứng trên thận, mắt, tim, bàn chân,…"
      ],
      color: "bg-sky-300",
    },
    {
      icon: <FaUsers className="text-lg" />,
      title: "CỘNG ĐỒNG SẺ CHIA",
      content: [
        "Gia nhập cộng đồng đái tháo đường khoẻ mạnh, cùng chia sẻ, động viên và học hỏi."
      ],
      color: "bg-sky-400",
    },
];
const benefits = [
  {
    icon: <FaArrowDown className="text-3xl text-white" />,
    title: "GIẢM 1,2% HbA1c GIẢM BIẾN CHỨNG",
    description:
      "Theo Nghiên cứu, cứ giảm 1% HbA1c thì giảm 43% nguy cơ cắt cụt chi, 16% nguy cơ suy tim và yên tâm loại bỏ 20 - 30% nguy cơ biến chứng vi mạch.",
    bgColor: "bg-teal-600",
  },
  {
    icon: <FaWeight className="text-3xl text-white" />,
    title: "GIẢM 3–5% CÂN NẶNG",
    description:
      "Việc giảm chỉ 5% trọng lượng cơ thể đã được chứng minh giúp giảm bớt lượng thuốc điều trị dài hạn tiểu đường và giảm nguy cơ mắc các biến chứng.",
    bgColor: "bg-yellow-500",
  },
  {
    icon: <FaMoneyBillWave className="text-3xl text-white" />,
    title: "GIẢM 50% CHI PHÍ ĐIỀU TRỊ",
    description:
      "Kết hợp điều chỉnh lối sống giúp tối ưu hoá phác đồ điều trị và tiết kiệm chi phí điều trị các biến chứng.",
    bgColor: "bg-green-500",
  },
  {
    icon: <FaGlobe className="text-3xl text-white" />,
    title: "100% ONLINE",
    description:
      "Chương trình trực tuyến linh hoạt, kết nối dễ dàng phù hợp mọi lứa tuổi và mọi người, ở bất cứ nơi đâu.",
    bgColor: "bg-orange-500",
  },
  {
    icon: <FaUserMd className="text-3xl text-white" />,
    title: "ĐỘI NGŨ BÁC SĨ VÀ CHUYÊN GIA SÁT CÁNH",
    description:
      "Bác sĩ và chuyên gia giàu kinh nghiệm đến từ nhiều lĩnh vực: nội tiết, dinh dưỡng, vận động, tâm lý, tinh thần… luôn sẵn sàng lắng nghe, hỗ trợ, tư vấn bất kỳ lúc nào.",
    bgColor: "bg-cyan-700",
  },
  {
    icon: <FaDumbbell className="text-3xl text-white" />,
    title: "HLV SỨC KHOẺ CÁ NHÂN ĐỒNG HÀNH",
    description:
      "Huấn luyện viên sức khoẻ đồng hành xuyên suốt hành trình thay đổi, thực hiện cam kết và đạt được mục tiêu sức khoẻ.",
    bgColor: "bg-red-500",
  },
];

export default function BenefitsGrid() {
const [openIndex, setOpenIndex] = useState(null);
  return (
    <div>
        <div className="text-[#00665C] text-2xl font-bold uppercase text-center">
            LỢI ÍCH KHI THAM GIA
        </div>
        <div className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
            {benefits.map((item, index) => (
            <div
                key={index}
                className={`rounded-xl p-6 shadow-lg text-white ${item.bgColor} flex flex-col gap-4`}
            >
                <div>{item.icon}</div>
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-sm leading-relaxed">{item.description}</p>
            </div>
            ))}
        </div>
        
        </div>
        <div className="max-w-5xl mx-auto my-10 px-4 space-y-4">
        <div className="text-[#00665C] text-2xl font-bold uppercase text-center">
            NỘI DUNG CHƯƠNG TRÌNH
        </div>
        {items.map((item, index) => (
            <div key={index} className={`${item.color} rounded-lg shadow`}>
            <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between px-4 py-3 font-bold text-left"
            >
                <div className="flex items-center gap-2">
                {item.icon}
                {item.title}
                </div>
                <span>{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
                <div className="px-6 pb-4 text-sm space-y-1">
                {item.content.map((line, i) => (
                    <p key={i} className={`${line.startsWith("+") ? "ml-4" : ""}`}>
                    - {line}
                    </p>
                ))}
                </div>
            )}
            </div>
        ))}
        </div>
    </div>
  );
}
