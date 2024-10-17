import { Sidebar } from "@/components";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-2 bg-gray-200 min-h-screen position-relative">
       <Sidebar />
      </div>

      <div className="col-span-10 bg-white p-4">{children}</div>
    </div>
  );
}
