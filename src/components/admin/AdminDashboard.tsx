import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  Building2, 
  Calendar, 
  TrendingUp,
  Plus,
  Eye,
  Edit,
  Download,
  UserCheck,
  Mail,
  FileText
} from "lucide-react";

export const AdminDashboard = () => {
  // Mock data - will be replaced with real data from Supabase
  const stats = {
    totalStudents: 1247,
    activeCompanies: 23,
    placementDrives: 8,
    studentsPlaced: 156,
  };

  const recentCompanies = [
    {
      id: 1,
      name: "Tech Corp",
      industry: "Technology",
      roles: 3,
      applications: 89,
      selected: 12,
      status: "Active",
    },
    {
      id: 2,
      name: "InnovateSoft",
      industry: "Software",
      roles: 2,
      applications: 67,
      selected: 8,
      status: "Interview Phase",
    },
    {
      id: 3,
      name: "DataAnalytics Inc",
      industry: "Analytics",
      roles: 1,
      applications: 45,
      selected: 0,
      status: "Applications Open",
    },
  ];

  const upcomingDrives = [
    {
      id: 1,
      company: "Global Tech Solutions",
      date: "2024-10-15",
      roles: ["Software Engineer", "DevOps Engineer"],
      eligibleStudents: 234,
      registered: 178,
    },
    {
      id: 2,
      company: "StartupHub",
      date: "2024-10-20",
      roles: ["Frontend Developer"],
      eligibleStudents: 156,
      registered: 89,
    },
  ];

  const pendingActions = [
    {
      id: 1,
      type: "Shortlist Review",
      company: "Tech Corp",
      count: 23,
      urgent: true,
    },
    {
      id: 2,
      type: "Interview Schedule",
      company: "InnovateSoft",
      count: 12,
      urgent: false,
    },
    {
      id: 3,
      type: "Student Verification",
      company: "DataAnalytics Inc",
      count: 8,
      urgent: false,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-success text-success-foreground";
      case "Interview Phase":
        return "bg-warning text-warning-foreground";
      case "Applications Open":
        return "bg-primary text-primary-foreground";
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
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalStudents}</div>
            <p className="text-xs text-muted-foreground">Registered students</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Companies</CardTitle>
            <Building2 className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{stats.activeCompanies}</div>
            <p className="text-xs text-muted-foreground">Hiring partners</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Placement Drives</CardTitle>
            <Calendar className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">{stats.placementDrives}</div>
            <p className="text-xs text-muted-foreground">This semester</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Students Placed</CardTitle>
            <TrendingUp className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">{stats.studentsPlaced}</div>
            <p className="text-xs text-muted-foreground">Success rate: 65%</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Dashboard Tabs */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="companies">Companies</TabsTrigger>
          <TabsTrigger value="students">Students</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Upcoming Drives */}
            <Card className="shadow-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Upcoming Drives
                  </CardTitle>
                  <Button size="sm" className="bg-gradient-primary">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Drive
                  </Button>
                </div>
                <CardDescription>Manage placement drive schedules</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingDrives.map((drive) => (
                  <div key={drive.id} className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold">{drive.company}</h3>
                        <p className="text-sm text-muted-foreground">
                          {new Date(drive.date).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex flex-wrap gap-1">
                        {drive.roles.map((role, index) => (
                          <Badge key={index} variant="secondary">
                            {role}
                          </Badge>
                        ))}
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Eligible: </span>
                          <span className="font-medium">{drive.eligibleStudents}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Registered: </span>
                          <span className="font-medium text-primary">{drive.registered}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Pending Actions */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserCheck className="h-5 w-5" />
                  Pending Actions
                </CardTitle>
                <CardDescription>Tasks requiring immediate attention</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {pendingActions.map((action) => (
                  <div key={action.id} className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold flex items-center gap-2">
                          {action.type}
                          {action.urgent && (
                            <Badge className="bg-destructive text-destructive-foreground">
                              Urgent
                            </Badge>
                          )}
                        </h3>
                        <p className="text-sm text-muted-foreground">{action.company}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold">{action.count}</div>
                        <div className="text-xs text-muted-foreground">pending</div>
                      </div>
                    </div>
                    <Button 
                      size="sm" 
                      className={action.urgent ? "bg-destructive hover:bg-destructive/90" : "bg-gradient-primary"}
                    >
                      Review Now
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="companies" className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-5 w-5" />
                  Company Management
                </CardTitle>
                <Button className="bg-gradient-primary">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Company
                </Button>
              </div>
              <CardDescription>Manage partner companies and job postings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentCompanies.map((company) => (
                  <div key={company.id} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <h3 className="font-semibold text-lg">{company.name}</h3>
                          <Badge className={getStatusColor(company.status)}>
                            {company.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{company.industry}</p>
                        <div className="grid grid-cols-3 gap-4 text-sm">
                          <div>
                            <span className="text-muted-foreground">Roles: </span>
                            <span className="font-medium">{company.roles}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Applications: </span>
                            <span className="font-medium">{company.applications}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Selected: </span>
                            <span className="font-medium text-success">{company.selected}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Eye className="mr-2 h-4 w-4" />
                          View
                        </Button>
                        <Button size="sm" variant="outline">
                          <Mail className="mr-2 h-4 w-4" />
                          Contact
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="students" className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Student Management
              </CardTitle>
              <CardDescription>Monitor student profiles and applications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button variant="outline" className="justify-start h-auto p-4">
                  <div className="space-y-2">
                    <Users className="h-6 w-6" />
                    <div className="text-left">
                      <div className="font-semibold">View All Students</div>
                      <div className="text-sm text-muted-foreground">Browse student profiles</div>
                    </div>
                  </div>
                </Button>
                <Button variant="outline" className="justify-start h-auto p-4">
                  <div className="space-y-2">
                    <FileText className="h-6 w-6" />
                    <div className="text-left">
                      <div className="font-semibold">Verify Profiles</div>
                      <div className="text-sm text-muted-foreground">Review pending applications</div>
                    </div>
                  </div>
                </Button>
                <Button variant="outline" className="justify-start h-auto p-4">
                  <div className="space-y-2">
                    <Download className="h-6 w-6" />
                    <div className="text-left">
                      <div className="font-semibold">Export Data</div>
                      <div className="text-sm text-muted-foreground">Download student lists</div>
                    </div>
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Reports & Analytics
              </CardTitle>
              <CardDescription>Generate placement reports and statistics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold">Quick Reports</h3>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      <Download className="mr-2 h-4 w-4" />
                      Placement Summary (PDF)
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Download className="mr-2 h-4 w-4" />
                      Company-wise Report (Excel)
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Download className="mr-2 h-4 w-4" />
                      Student Analytics (PDF)
                    </Button>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold">Custom Reports</h3>
                  <div className="space-y-2">
                    <Button className="w-full bg-gradient-primary">
                      Generate Custom Report
                    </Button>
                    <p className="text-sm text-muted-foreground">
                      Create detailed reports with custom filters and date ranges
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};