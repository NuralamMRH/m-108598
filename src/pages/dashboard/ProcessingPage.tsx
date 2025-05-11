
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function ProcessingPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon" asChild>
            <Link to="/">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h1 className="text-2xl font-bold">Nhà Máy Chế Biến Thủy Sản</h1>
        </div>
        
        <Button>
          Thêm Lô Hàng Mới
        </Button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-card p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-bold mb-2">Tổng Quan</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Lô hàng đang xử lý:</span>
              <span className="font-bold">12</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Sản lượng hôm nay:</span>
              <span className="font-bold">1,250 kg</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Đạt tiêu chuẩn:</span>
              <span className="font-bold text-green-600">98%</span>
            </div>
          </div>
        </div>
        
        <div className="bg-card p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-bold mb-2">Truy Xuất</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Lô hàng đã xác minh:</span>
              <span className="font-bold">245</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Đơn hàng xuất khẩu:</span>
              <span className="font-bold">28</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Đối tác nhập khẩu:</span>
              <span className="font-bold">14</span>
            </div>
          </div>
        </div>
        
        <div className="bg-card p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-bold mb-2">Chứng Nhận</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">HACCP:</span>
              <span className="font-bold text-green-600">Đã chứng nhận</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">ISO 22000:</span>
              <span className="font-bold text-green-600">Đã chứng nhận</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">MSC:</span>
              <span className="font-bold text-yellow-600">Đang xử lý</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-card rounded-lg p-6 shadow-sm">
        <h3 className="text-lg font-bold mb-4">Lô Hàng Mới Nhất</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="py-2 px-4 text-left">Mã Lô</th>
                <th className="py-2 px-4 text-left">Ngày Nhập</th>
                <th className="py-2 px-4 text-left">Nguồn Gốc</th>
                <th className="py-2 px-4 text-left">Sản Phẩm</th>
                <th className="py-2 px-4 text-left">Khối Lượng</th>
                <th className="py-2 px-4 text-left">Trạng Thái</th>
                <th className="py-2 px-4 text-left">Hành Động</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4].map((item) => (
                <tr key={item} className="border-b hover:bg-muted/50">
                  <td className="py-3 px-4">LH-{item}00{Math.floor(Math.random() * 10)}</td>
                  <td className="py-3 px-4">01/05/2025</td>
                  <td className="py-3 px-4">Cảng Cát Lái</td>
                  <td className="py-3 px-4">Cá Ngừ</td>
                  <td className="py-3 px-4">{Math.floor(Math.random() * 500) + 100} kg</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-800 text-xs">
                      Đang xử lý
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <Button variant="outline" size="sm">
                      Xem chi tiết
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
