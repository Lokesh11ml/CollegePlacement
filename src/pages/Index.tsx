import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  // Check if user is already logged in
  const userRole = localStorage.getItem("userRole");
  
  if (userRole === "student") {
    navigate("/student");
    return null;
  }
  
  if (userRole === "admin") {
    navigate("/admin");
    return null;
  }

  // Redirect to auth page if not logged in
  navigate("/auth");
  return null;
};

export default Index;
