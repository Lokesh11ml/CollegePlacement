import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { AdminDashboard } from "@/components/admin/AdminDashboard";

export default function AdminDashboardPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const userRole = localStorage.getItem("userRole");
    if (!userRole || userRole !== "admin") {
      navigate("/");
    }
  }, [navigate]);

  return (
    <DashboardLayout title="Admin Dashboard" userRole="admin">
      <AdminDashboard />
    </DashboardLayout>
  );
}