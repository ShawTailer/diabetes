import { useParams } from 'react-router-dom';
import Sidebar from './Sidebar';
import About from './About';
import Knowledge from './Knowledge';
import Medicine from './Medicine';
import News from './News';
export default function InfoPage() {
  const { section } = useParams();

  const renderContent = () => {
    switch (section) {
      case 've-chung-toi':
        return <About />;
      case 'san-pham':
        return <Medicine/>;
      case 'kien-thuc':
        return <Knowledge/>;
      case 'tin-tuc':
        return <News/>;
      default:
        return <p className="text-gray-500">Chọn một mục từ thanh bên để xem nội dung.</p>;
    }
  };

  return (
    <div style={{ marginLeft: '5%', marginRight: '5%' }} className="mt-6 px-0 sm:px-4 py-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/4">
          <Sidebar />
        </div>
        <div className="lg:w-2/3 bg-white p-6  shadow border border-gray-300 rounded-2xl">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}