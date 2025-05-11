
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function PortRequestPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon" asChild>
            <Link to="/">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h1 className="text-2xl font-bold">Yêu Cầu Cập Cảng</h1>
        </div>
        
        <Button>
          Tạo Yêu Cầu Mới
        </Button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-card p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold">Yêu cầu #{item}00{Math.floor(Math.random() * 10)}</h3>
              <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">
                Đã duyệt
              </span>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tên tàu:</span>
                <span>VN-{item}000-TS</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Ngày yêu cầu:</span>
                <span>01/05/2025</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Cảng đến:</span>
                <span>Cảng Cát Lái</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Trạng thái:</span>
                <span className="text-green-600">Đã duyệt</span>
              </div>
            </div>
            <Button variant="outline" className="w-full mt-4">
              Xem chi tiết
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
