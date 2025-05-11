
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function FishingLogPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon" asChild>
            <Link to="/">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h1 className="text-2xl font-bold">Nhật Ký Khai Thác</h1>
        </div>
        
        <Button>
          Thêm Nhật Ký Mới
        </Button>
      </div>
      
      <div className="bg-card rounded-lg p-6 shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="py-2 px-4 text-left">Mã Nhật Ký</th>
                <th className="py-2 px-4 text-left">Tàu Cá</th>
                <th className="py-2 px-4 text-left">Ngày Đánh Bắt</th>
                <th className="py-2 px-4 text-left">Vị Trí</th>
                <th className="py-2 px-4 text-left">Sản Lượng</th>
                <th className="py-2 px-4 text-left">Trạng Thái</th>
                <th className="py-2 px-4 text-left">Hành Động</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((item) => (
                <tr key={item} className="border-b hover:bg-muted/50">
                  <td className="py-3 px-4">NK-{item}00{Math.floor(Math.random() * 10)}</td>
                  <td className="py-3 px-4">VN-{Math.floor(Math.random() * 1000)}</td>
                  <td className="py-3 px-4">01/05/2025</td>
                  <td className="py-3 px-4">Vịnh Hạ Long</td>
                  <td className="py-3 px-4">{Math.floor(Math.random() * 100) + 50} kg</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs">
                      Đã xác nhận
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <Button variant="outline" size="sm">
                      Chi tiết
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
