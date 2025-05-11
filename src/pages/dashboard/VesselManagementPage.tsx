
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function VesselManagementPage() {
  const vessels = [
    { id: "VN-1234-TS", name: "Tàu Cá Nam Định", owner: "Nguyễn Văn A", status: "Đang hoạt động" },
    { id: "VN-5678-TS", name: "Tàu Cá Hải Phòng", owner: "Trần Văn B", status: "Đang neo đậu" },
    { id: "VN-9012-TS", name: "Tàu Cá Quảng Ninh", owner: "Lê Thị C", status: "Đang hoạt động" },
    { id: "VN-3456-TS", name: "Tàu Cá Đà Nẵng", owner: "Phạm Văn D", status: "Bảo trì" }
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon" asChild>
            <Link to="/">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h1 className="text-2xl font-bold">Quản Lý Tàu</h1>
        </div>
        
        <Button>
          Đăng Ký Tàu Mới
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {vessels.map((vessel) => (
          <div key={vessel.id} className="bg-card p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold">{vessel.name}</h3>
              <span className={`text-sm px-2 py-1 rounded-full ${
                vessel.status === "Đang hoạt động" ? "bg-green-100 text-green-800" :
                vessel.status === "Đang neo đậu" ? "bg-blue-100 text-blue-800" :
                "bg-yellow-100 text-yellow-800"
              }`}>
                {vessel.status}
              </span>
            </div>
            <div className="space-y-2 text-sm mb-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Mã tàu:</span>
                <span>{vessel.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Chủ tàu:</span>
                <span>{vessel.owner}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Giấy phép:</span>
                <span>GP-{Math.floor(Math.random() * 1000)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Thiết bị định vị:</span>
                <span className="text-green-600">Đang hoạt động</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline">
                Xem chi tiết
              </Button>
              <Button variant="outline">
                Theo dõi
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
