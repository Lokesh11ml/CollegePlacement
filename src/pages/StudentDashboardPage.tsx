import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StudentDashboard } from "@/components/student/StudentDashboard";

export default function StudentDashboardPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const userRole = localStorage.getItem("userRole");
    if (!userRole || userRole !== "student") {
      navigate("/");
    }
  }, [navigate]);

  return (
    <DashboardLayout title="Student Dashboard" userRole="student">
      <StudentDashboard />
    </DashboardLayout>
  );
}