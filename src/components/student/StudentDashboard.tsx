import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Building2, 
  Calendar, 
  Clock, 
  DollarSign, 
  MapPin, 
  Users, 
  FileText,
  TrendingUp,
  CheckCircle,
  AlertCircle,
  User
} from "lucide-react";

export const StudentDashboard = () => {
  // Mock data - will be replaced with real data from Supabase
  const stats = {
    appliedJobs: 5,
    shortlisted: 2,
    interviewsScheduled: 1,
    placementOffers: 0,
  };

  const upcomingDrives = [
    {
      id: 1,
      company: "Tech Corp",
      role: "Software Engineer",
      salary: "₹12 LPA",
      location: "Bangalore",
      date: "2024-10-15",
      applicants: 156,
      status: "Open",
      deadline: "2024-10-10",
    },
    {
      id: 2,
      company: "InnovateSoft",
      role: "Frontend Developer",
      salary: "₹8 LPA",
      location: "Pune",
      date: "2024-10-20",
      applicants: 89,
      status: "Open",
      deadline: "2024-10-15",
    },
    {
      id: 3,
      company: "DataAnalytics Inc",
      role: "Data Analyst",
      salary: "₹10 LPA",
      location: "Hyderabad",
      date: "2024-10-25",
      applicants: 67,
      status: "Applied",
      deadline: "2024-10-20",
    },
  ];

  const recentApplications = [
    {
      id: 1,
      company: "TechGlobal",
      role: "Full Stack Developer",
      appliedDate: "2024-09-25",
      status: "Shortlisted",
      nextRound: "Technical Interview",
    },
    {
      id: 2,
      company: "StartupXYZ",
      role: "React Developer",
      appliedDate: "2024-09-20",
      status: "Under Review",
      nextRound: "Waiting for response",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open":
        return "bg-success text-success-foreground";
      case "Applied":
        return "bg-primary text-primary-foreground";
      case "Shortlisted":
        return "bg-accent text-accent-foreground";
      case "Under Review":
        return "bg-warning text-warning-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="space-y-8">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Applications</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.appliedJobs}</div>
            <p className="text-xs text-muted-foreground">Jobs applied to</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Shortlisted</CardTitle>
            <CheckCircle className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">{stats.shortlisted}</div>
            <p className="text-xs text-muted-foreground">Interviews pending</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Interviews</CardTitle>
            <Calendar className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">{stats.interviewsScheduled}</div>
            <p className="text-xs text-muted-foreground">This week</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Offers</CardTitle>
            <TrendingUp className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent">{stats.placementOffers}</div>
            <p className="text-xs text-muted-foreground">Placement offers</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Upcoming Placement Drives */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5" />
              Upcoming Placement Drives
            </CardTitle>
            <CardDescription>Apply to new opportunities</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingDrives.map((drive) => (
              <div key={drive.id} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold">{drive.company}</h3>
                    <p className="text-sm text-muted-foreground">{drive.role}</p>
                  </div>
                  <Badge className={getStatusColor(drive.status)}>
                    {drive.status}
                  </Badge>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <DollarSign className="h-3 w-3" />
                    <span>{drive.salary}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    <span>{drive.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{new Date(drive.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    <span>{drive.applicants} applicants</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>Deadline: {new Date(drive.deadline).toLocaleDateString()}</span>
                  </div>
                  <Button 
                    size="sm" 
                    disabled={drive.status === "Applied"}
                    className={drive.status === "Applied" ? "" : "bg-gradient-primary"}
                  >
                    {drive.status === "Applied" ? "Applied" : "Apply Now"}
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Applications */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Recent Applications
            </CardTitle>
            <CardDescription>Track your application status</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentApplications.map((app) => (
              <div key={app.id} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold">{app.company}</h3>
                    <p className="text-sm text-muted-foreground">{app.role}</p>
                  </div>
                  <Badge className={getStatusColor(app.status)}>
                    {app.status}
                  </Badge>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Applied on:</span>
                    <span>{new Date(app.appliedDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Next step:</span>
                    <span className="font-medium">{app.nextRound}</span>
                  </div>
                </div>

                {app.status === "Shortlisted" && (
                  <div className="pt-2">
                    <div className="flex items-center gap-2 text-success text-sm">
                      <CheckCircle className="h-4 w-4" />
                      <span>Congratulations! Check your email for interview details.</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Profile Completion */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-warning" />
            Complete Your Profile
          </CardTitle>
          <CardDescription>
            A complete profile increases your chances of getting selected
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Profile Completion</span>
              <span className="font-medium">75%</span>
            </div>
            <Progress value={75} className="h-2" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="justify-start">
              <FileText className="mr-2 h-4 w-4" />
              Upload Resume
            </Button>
            <Button variant="outline" className="justify-start">
              <User className="mr-2 h-4 w-4" />
              Add Skills
            </Button>
            <Button variant="outline" className="justify-start">
              <Building2 className="mr-2 h-4 w-4" />
              Update Experience
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};