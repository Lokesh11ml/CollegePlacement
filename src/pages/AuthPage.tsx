import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { LoginForm } from "@/components/auth/LoginForm";
import { RegisterForm } from "@/components/auth/RegisterForm";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (email: string, password: string, role: "student" | "admin") => {
    // TODO: Implement actual authentication with Supabase
    console.log("Login attempt:", { email, role });
    
    // Simulate successful login
    localStorage.setItem("userRole", role);
    localStorage.setItem("userEmail", email);
    
    toast({
      title: "Login Successful",
      description: `Welcome back! Redirecting to ${role} dashboard...`,
    });

    // Redirect based on role
    if (role === "admin") {
      navigate("/admin");
    } else {
      navigate("/student");
    }
  };

  const handleRegister = async (data: any) => {
    // TODO: Implement actual registration with Supabase
    console.log("Registration attempt:", data);
    
    toast({
      title: "Registration Successful",
      description: "Your account has been created. Please sign in.",
    });
    
    setIsLogin(true);
  };

  return (
    <AuthLayout
      title={isLogin ? "Welcome Back" : "Create Account"}
      description={isLogin ? "Sign in to access your placement portal" : "Join the placement system"}
    >
      {isLogin ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <RegisterForm onRegister={handleRegister} />
      )}
      
      <div className="mt-6 text-center">
        <p className="text-sm text-muted-foreground">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
        </p>
        <Button
          variant="link"
          onClick={() => setIsLogin(!isLogin)}
          className="text-primary hover:text-primary-hover"
        >
          {isLogin ? "Create Student Account" : "Sign In"}
        </Button>
      </div>
    </AuthLayout>
  );
}