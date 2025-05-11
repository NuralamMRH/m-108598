
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Anchor, ClipboardList, MapPin, Warehouse, Home, Menu, X, ChevronRight } from "lucide-react";

const SidebarItem = ({ 
  icon: Icon, 
  label, 
  to, 
  isActive,
  isCollapsed 
}: { 
  icon: React.ElementType; 
  label: string; 
  to: string;
  isActive: boolean;
  isCollapsed: boolean;
}) => (
  <Link
    to={to}
    className={cn(
      "flex items-center gap-2 px-3 py-2 rounded-md transition-colors",
      isActive 
        ? "bg-primary/10 text-primary" 
        : "hover:bg-muted"
    )}
  >
    <Icon className="h-5 w-5 shrink-0" />
    {!isCollapsed && <span>{label}</span>}
    {isActive && !isCollapsed && (
      <ChevronRight className="w-4 h-4 ml-auto" />
    )}
  </Link>
);

export default function DashboardLayout() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = window.location.pathname;

  const sidebarItems = [
    {
      icon: Home,
      label: "Trang chủ",
      to: "/"
    },
    {
      icon: Anchor,
      label: "Yêu cầu cập cảng",
      to: "/dashboard/port-request"
    },
    {
      icon: ClipboardList,
      label: "Nhật ký khai thác",
      to: "/dashboard/fishing-log"
    },
    {
      icon: MapPin,
      label: "Quản lý tàu",
      to: "/dashboard/vessel-management"
    },
    {
      icon: Warehouse,
      label: "Nhà máy chế biến",
      to: "/dashboard/processing"
    }
  ];

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside 
        className={cn(
          "bg-card border-r flex flex-col transition-all duration-300",
          isCollapsed ? "w-[60px]" : "w-[250px]"
        )}
      >
        <div className="p-4 border-b flex items-center justify-between">
          {!isCollapsed && <h1 className="font-bold text-lg">VMS Port</h1>}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {isCollapsed ? <Menu size={18} /> : <X size={18} />}
          </Button>
        </div>
        
        <div className="flex-1 py-4 overflow-y-auto">
          <nav className="px-2 space-y-1">
            {sidebarItems.map((item) => (
              <SidebarItem
                key={item.to}
                icon={item.icon}
                label={item.label}
                to={item.to}
                isActive={pathname === item.to}
                isCollapsed={isCollapsed}
              />
            ))}
          </nav>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 bg-background overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
