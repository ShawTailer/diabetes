import { NavLink } from 'react-router-dom';

const sections = [
  { icon: "/newspaper.png", label: 'Về chúng tôi', slug: 've-chung-toi' },
  { icon: "/open-book.png", label: 'Tin tức chương trình', slug: 'tin-tuc' },
  { icon: "/hoat-dong-1.svg", label: 'Kiến thức về đái tháo đường', slug: 'kien-thuc' },
  { icon: "/cau-chuyen-thanh-cong-icon.svg", label: 'Sản phẩm', slug: 'san-pham' },
];

export default function Sidebar() {
  return (
    <aside className="hidden md:block sticky top-6 bg-white shadow-md p-4 rounded-2xl w-full border border-gray-300 z-10">
      <h2 className="text-2xl font-bold mb-4">Danh mục</h2>
      <ul className="space-y-0">
        {sections.map(({ icon, label, slug }) => (
          <li key={slug}>
            <NavLink
              to={`/info/${slug}`}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 transition font-semibold border-b border-gray-200 text-medium ${
                  isActive
                    ? 'text-[rgb(20,148,138)] font-bold'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-[rgb(20,148,138)]'
                }`
              }
            >
              <img src={icon} alt="" className="w-6 h-6" />
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}
