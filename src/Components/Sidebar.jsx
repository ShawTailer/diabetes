import { NavLink } from 'react-router-dom';

const sections = [
  { label: 'Về chúng tôi', slug: 've-chung-toi' },
  { label: 'Sản phẩm', slug: 'san-pham' },
  { label: 'Kiến thức về đái tháo đường', slug: 'kien-thuc' },
  { label: 'Tin tức chương trình', slug: 'tin-tuc' },
];

export default function Sidebar() {
  return (
    <aside className="bg-white shadow-md p-4 rounded-lg w-full lg:w-[250px]">
      <h2 className="text-xl font-bold mb-4">Danh mục</h2>
      <ul className="space-y-3">
        {sections.map(({ label, slug }) => (
          <li key={slug}>
            <NavLink
              to={`/info/${slug}`}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md transition ${
                  isActive ? 'bg-blue-100 text-blue-700 font-semibold' : 'text-gray-700 hover:bg-gray-100'
                }`
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}
