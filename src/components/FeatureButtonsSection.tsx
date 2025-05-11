
import { Anchor, MapPin, Warehouse, ClipboardList } from "lucide-react";
import { Link } from "react-router-dom";

const FeatureButton = ({
  title,
  icon: Icon,
  color,
  link,
  bgColor
}: {
  title: string;
  icon: React.ElementType;
  color: string;
  link: string;
  bgColor: string;
}) => {
  return (
    <Link 
      to={link}
      className="relative group aspect-square flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-lg overflow-hidden"
    >
      {/* Circle background */}
      <div 
        className="absolute w-[120%] h-[120%] rounded-full opacity-80 animate-spin-slow"
        style={{ backgroundColor: bgColor }}
      />
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full p-4">
        <div className="mb-4">
          <Icon className="h-12 w-12" style={{ color }} />
        </div>
        
        <h3 className="text-lg font-bold" style={{ color }}>
          {title}
        </h3>
      </div>
    </Link>
  );
};

export default function FeatureButtonsSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            VMS iUU Port Authority
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Truy xuất nguồn gốc và kiểm soát chất lượng thủy sản bằng công nghệ blockchain
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <FeatureButton 
            title="YÊU CẦU CẬP CẢNG" 
            icon={Anchor} 
            color="#ffffff"
            bgColor="#1E88E5"
            link="/dashboard/port-request"
          />
          <FeatureButton 
            title="NHẬT KÝ KHAI THÁC" 
            icon={ClipboardList}
            color="#ffffff" 
            bgColor="#0D47A1"
            link="/dashboard/fishing-log"
          />
          <FeatureButton 
            title="QUẢN LÝ TÀU" 
            icon={MapPin}
            color="#ffffff" 
            bgColor="#1565C0"
            link="/dashboard/vessel-management"
          />
          <FeatureButton 
            title="NHÀ MÁY CHẾ BIẾN THỦY SẢN" 
            icon={Warehouse}
            color="#ffffff" 
            bgColor="#1976D2"
            link="/dashboard/processing"
          />
        </div>
      </div>
    </section>
  );
}
