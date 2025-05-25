import React from 'react';
const Content = () => {
  return (
    <div className="container mx-auto px-4 py-8">
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
    
    {/* Sidebar */}
    <aside className="lg:col-span-4">
      <div className="bg-white shadow-md p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-4 border-b pb-2">Chuyên mục</h2>
        <ul className="space-y-2">
          <li>
            <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
              <img src="/path/to/icon.svg" alt="icon" className="w-5 h-5" />
              Vì Cộng đồng
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-2 text-blue-600 font-semibold">
              <img src="/path/to/newspaper.png" alt="icon" className="w-5 h-5" />
              Tin tức về DIAB
            </a>
          </li>
          {/* ... more categories ... */}
        </ul>
      </div>
    </aside>

    {/* Main Content */}
    <main className="lg:col-span-8">
      <h1 className="text-2xl font-bold mb-6">Tin tức về DIAB</h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {/* One post item */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <a href="#">
            <img
              src="https://diab.com.vn/wp-content/uploads/2022/01/7-sai-lam-thuong-gap.jpg"
              alt="Post Thumbnail"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-gray-500">Chẩn đoán và phác đồ điều trị</p>
              <h3 className="text-lg font-semibold mb-2">
                7 sai lầm thường gặp khi chăm sóc người đái tháo đường
              </h3>
              <p className="text-xs text-gray-400 mb-2">ngày 21/01/2022</p>
              <p className="text-sm text-gray-700">
                Để chăm sóc người đái tháo đường, người thân bên cạnh việc thấu cảm, sẻ chia và đồng hành...
              </p>
            </div>
          </a>
        </div>

        {/* Repeat post item as needed */}
      </div>
    </main>

  </div>
</div>
  );
}
export default Content;