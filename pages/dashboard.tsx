

import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import {
  Bell,
  Plus,
  TrendingUp,
  Settings,
  BookCheck,
  Users,
  Briefcase,
  Clock,
  AlertCircle,
  CheckCircle2,
  Search,
  Calendar,
  BarChart as ChartIcon,
  Filter,
  MoreVertical,
  Star,
  ArrowUpRight,
  Zap,
  Target,
  FileText,
  MessageSquare,
  ChevronRight,
} from "lucide-react";

import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  ResponsiveContainer,
  Tooltip,
  Area,
  AreaChart,
} from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const chartData = [
  { month: "January", desktop: 186, mobile: 124 },
  { month: "February", desktop: 305, mobile: 145 },
  { month: "March", desktop: 237, mobile: 190 },
  { month: "April", desktop: 73, mobile: 82 },
  { month: "May", desktop: 209, mobile: 162 },
  { month: "June", desktop: 214, mobile: 185 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

const tasks = [
  {
    name: "Website Redesign",
    priority: "High",
    progress: 75,
    team: [
      { name: "John Doe", avatar: "https://i.pravatar.cc/150?u=jd" },
      { name: "Alice Smith", avatar: "https://i.pravatar.cc/150?u=as" },
      { name: "Mike Lee", avatar: "https://i.pravatar.cc/150?u=ml" },
    ],
    icon: "🎨",
    dueDate: "2024-04-15",
    comments: 8,
    attachments: 5,
  },
  {
    name: "Content Strategy",
    priority: "Medium",
    progress: 45,
    team: [
      { name: "Tom King", avatar: "https://i.pravatar.cc/150?u=tk" },
      { name: "Rachel Wood", avatar: "https://i.pravatar.cc/150?u=rw" },
    ],
    icon: "📝",
    dueDate: "2024-04-20",
    comments: 12,
    attachments: 3,
  },
  {
    name: "User Research",
    priority: "High",
    progress: 90,
    team: [
      { name: "Alice Smith", avatar: "https://i.pravatar.cc/150?u=as" },
      { name: "Mike Lee", avatar: "https://i.pravatar.cc/150?u=ml" },
    ],
    icon: "🔍",
    dueDate: "2024-04-10",
    comments: 15,
    attachments: 8,
  },
];

const projects = [
  {
    client: "Acme Corp",
    logo: "https://i.pravatar.cc/150?u=acme",
    hours: "32/40",
    upcoming: "Client Review",
    dueDate: "Tomorrow",
    status: "On Track",
    budget: "$12,000",
    completion: 80,
  },
  {
    client: "TechStart",
    logo: "https://i.pravatar.cc/150?u=tech",
    hours: "18/25",
    upcoming: "Team Meeting",
    dueDate: "Today",
    status: "At Risk",
    budget: "$8,500",
    completion: 45,
  },
  {
    client: "Global Inc",
    logo: "https://i.pravatar.cc/150?u=global",
    hours: "45/50",
    upcoming: "Final Delivery",
    dueDate: "Next Week",
    status: "Completed",
    budget: "$15,000",
    completion: 95,
  },
];

const activities = [
  {
    user: {
      name: "John Doe",
      avatar: "https://i.pravatar.cc/150?u=jd",
    },
    action: "completed",
    target: "Homepage Redesign",
    time: "2 hours ago",
    type: "task",
    metadata: {
      progress: 100,
      comments: 5,
    },
  },
  {
    user: {
      name: "Alice Smith",
      avatar: "https://i.pravatar.cc/150?u=as",
    },
    action: "commented on",
    target: "Brand Guidelines",
    time: "4 hours ago",
    type: "comment",
    metadata: {
      comment:
        "The color palette looks perfect! Ready for client presentation.",
    },
  },
  {
    user: {
      name: "Mike Lee",
      avatar: "https://i.pravatar.cc/150?u=ml",
    },
    action: "started",
    target: "User Testing",
    time: "Yesterday",
    type: "project",
    metadata: {
      deadline: "Next week",
      team: 4,
    },
  },
];

export default function Page() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "350px",
        } as React.CSSProperties
      }
    >
      <AppSidebar />
      <SidebarInset className="bg-background">
        {/* Enhanced Header */}
        <header className="bg-background/95 backdrop-blur-sm sticky top-0 z-10 flex items-center justify-between border-b px-6 py-4">
          <div className="flex items-center gap-4">
            <SidebarTrigger className="-ml-2" />
            <Separator orientation="vertical" className="h-6" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Dashboard
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Overview</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative hidden lg:block">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-64 pl-8 bg-muted/50 focus:bg-background transition-colors"
              />
            </div>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full relative hover:bg-primary/10 transition-colors"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 border-2 border-background animate-pulse"></span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-primary/10"
            >
              <Settings className="h-5 w-5" />
            </Button>
            <Separator orientation="vertical" className="h-6" />
            {/* <Avatar className="h-8 w-8 ring-2 ring-primary/10 transition-all hover:ring-4">
              <AvatarImage src="https://i.pravatar.cc/150?u=admin" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar> */}
          </div>
        </header>

        <div className="container mx-auto p-6 space-y-8 mt-4">
          {/* Welcome Section with Enhanced Design */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
                Welcome back, Admin 👋
              </h1>
              <p className="text-muted-foreground text-lg">
                Here's what's happening with your projects today.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="outline" className="hidden md:flex group">
                <Calendar className="mr-2 h-4 w-4 group-hover:text-primary transition-colors" />
                April 2024
              </Button>
              <Button variant="outline" className="group">
                <Filter className="mr-2 h-4 w-4 group-hover:text-primary transition-colors" />
                Filters
              </Button>
              <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300">
                <Plus className="mr-2 h-4 w-4" />
                New Project
              </Button>
            </div>
          </div>

          {/* Enhanced Stats Cards with Gradients */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="group hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-primary/5 to-primary/10 hover:from-primary/10 hover:to-primary/20">
              <CardHeader className="pb-2">
                <div className="rounded-full bg-primary/10 p-2.5 w-10 h-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <p className="text-3xl font-bold">21</p>
                  <p className="text-sm text-muted-foreground">
                    Tasks completed
                  </p>
                  <div className="flex items-center gap-1 text-sm font-medium text-emerald-600">
                    <ArrowUpRight className="h-4 w-4" />
                    12% from last month
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-blue-500/5 to-blue-500/10 hover:from-blue-500/10 hover:to-blue-500/20">
              <CardHeader className="pb-2">
                <div className="rounded-full bg-blue-500/10 p-2.5 w-10 h-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Briefcase className="h-5 w-5 text-blue-500" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <p className="text-3xl font-bold">15</p>
                  <p className="text-sm text-muted-foreground">
                    Active projects
                  </p>
                  <div className="flex items-center gap-1 text-sm font-medium text-emerald-600">
                    <ArrowUpRight className="h-4 w-4" />
                    8% from last month
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-purple-500/5 to-purple-500/10 hover:from-purple-500/10 hover:to-purple-500/20">
              <CardHeader className="pb-2">
                <div className="rounded-full bg-purple-500/10 p-2.5 w-10 h-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Users className="h-5 w-5 text-purple-500" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <p className="text-3xl font-bold">38</p>
                  <p className="text-sm text-muted-foreground">
                    Active clients
                  </p>
                  <div className="flex items-center gap-1 text-sm font-medium text-emerald-600">
                    <ArrowUpRight className="h-4 w-4" />
                    15% from last month
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-amber-500/5 to-amber-500/10 hover:from-amber-500/10 hover:to-amber-500/20">
              <CardHeader className="pb-2">
                <div className="rounded-full bg-amber-500/10 p-2.5 w-10 h-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Target className="h-5 w-5 text-amber-500" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <p className="text-3xl font-bold">92%</p>
                  <p className="text-sm text-muted-foreground">
                    Goals achieved
                  </p>
                  <div className="flex items-center gap-1 text-sm font-medium text-emerald-600">
                    <ArrowUpRight className="h-4 w-4" />
                    5% from last month
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Tasks and Chart Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between pb-2 bg-gradient-to-r from-background to-muted/30">
                <div>
                  <CardTitle className="text-xl font-semibold">
                    Your Tasks
                  </CardTitle>
                  <CardDescription>
                    Track your ongoing tasks and progress
                  </CardDescription>
                </div>
                <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Task
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {tasks.map((task, i) => (
                    <div
                      key={i}
                      className="group/task flex items-center gap-4 p-4 rounded-lg border bg-card hover:bg-accent/50 hover:shadow-md transition-all duration-300"
                    >
                      <div className="text-2xl group-hover/task:scale-110 transition-transform">
                        {task.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h3 className="font-medium truncate">
                              {task.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              Due {task.dueDate}
                            </p>
                          </div>
                          <span
                            className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              task.priority === "High"
                                ? "bg-red-100 text-red-700"
                                : "bg-yellow-100 text-yellow-700"
                            }`}
                          >
                            {task.priority}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 mb-3">
                          <Progress
                            value={task.progress}
                            className="flex-1 h-2 bg-muted/50"
                          />
                          <span className="text-sm text-muted-foreground whitespace-nowrap">
                            {task.progress}%
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex -space-x-2">
                            {task.team.map((member, j) => (
                              <Avatar
                                key={j}
                                className="h-6 w-6 border-2 border-background ring-2 ring-primary/10 transition-all hover:ring-4 hover:z-10"
                              >
                                <AvatarImage
                                  src={member.avatar}
                                  alt={member.name}
                                />
                                <AvatarFallback>
                                  {member.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                            ))}
                          </div>
                          <div className="flex items-center gap-3 text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <MessageSquare className="h-4 w-4" />
                              <span className="text-xs">{task.comments}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <FileText className="h-4 w-4" />
                              <span className="text-xs">
                                {task.attachments}
                              </span>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 opacity-0 group-hover/task:opacity-100 transition-opacity"
                            >
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Task Completion Trend</CardTitle>
                  <CardDescription>
                    Monthly task completion rate
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={chartData}
                      margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                    >
                      <defs>
                        <linearGradient
                          id="colorDesktop"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="hsl(var(--chart-1))"
                            stopOpacity={0.3}
                          />
                          <stop
                            offset="95%"
                            stopColor="hsl(var(--chart-1))"
                            stopOpacity={0}
                          />
                        </linearGradient>
                        <linearGradient
                          id="colorMobile"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="hsl(var(--chart-2))"
                            stopOpacity={0.3}
                          />
                          <stop
                            offset="95%"
                            stopColor="hsl(var(--chart-2))"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>
                      <CartesianGrid
                        vertical={false}
                        className="stroke-muted"
                        strokeDasharray="3 3"
                      />
                      <XAxis
                        dataKey="month"
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => value.slice(0, 3)}
                        className="text-xs"
                      />
                      <Tooltip
                        content={({ active, payload }) => {
                          if (!active || !payload) return null;
                          return (
                            <div className="rounded-lg border bg-background p-2 shadow-md">
                              <div className="grid grid-cols-2 gap-2">
                                <div className="flex items-center gap-1">
                                  <span className="h-2 w-2 rounded-full bg-[var(--color-desktop)]" />
                                  <span className="text-sm font-medium">
                                    Desktop
                                  </span>
                                </div>
                                <span className="text-sm font-medium">
                                  {payload[0].value}
                                </span>
                                <div className="flex items-center gap-1">
                                  <span className="h-2 w-2 rounded-full bg-[var(--color-mobile)]" />
                                  <span className="text-sm font-medium">
                                    Mobile
                                  </span>
                                </div>
                                <span className="text-sm font-medium">
                                  {payload[1].value}
                                </span>
                              </div>
                            </div>
                          );
                        }}
                      />
                      <Area
                        type="monotone"
                        dataKey="desktop"
                        stroke="hsl(var(--chart-1))"
                        fillOpacity={1}
                        fill="url(#colorDesktop)"
                      />
                      <Area
                        type="monotone"
                        dataKey="mobile"
                        stroke="hsl(var(--chart-2))"
                        fillOpacity={1}
                        fill="url(#colorMobile)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
              <CardFooter className="flex-col items-start gap-2 bg-muted/5">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <TrendingUp className="h-4 w-4 text-emerald-500" />
                  5.2% increase in completion rate
                </div>
                <p className="text-sm text-muted-foreground">
                  Based on the last 6 months of activity
                </p>
              </CardFooter>
            </Card>
          </div>

          {/* Enhanced Projects and Quick Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between pb-2 bg-gradient-to-r from-background to-muted/30">
                <div>
                  <CardTitle className="text-xl font-semibold">
                    Ongoing Projects
                  </CardTitle>
                  <CardDescription>
                    Track active project status and progress
                  </CardDescription>
                </div>
                <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Project
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {projects.map((project, i) => (
                    <div
                      key={i}
                      className="group/project p-4 rounded-lg border bg-card hover:bg-accent/50 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-10 w-10 ring-2 ring-primary/10 transition-all group-hover/project:ring-4">
                            <AvatarImage
                              src={project.logo}
                              alt={project.client}
                            />
                            <AvatarFallback>{project.client[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-medium flex items-center gap-2">
                              {project.client}
                              {project.status === "At Risk" && (
                                <Badge
                                  variant="destructive"
                                  className="ml-2 animate-pulse"
                                >
                                  At Risk
                                </Badge>
                              )}
                              {project.status === "On Track" && (
                                <Badge
                                  variant="default"
                                  className="bg-emerald-500 ml-2"
                                >
                                  On Track
                                </Badge>
                              )}
                              {project.status === "Completed" && (
                                <Badge variant="secondary" className="ml-2">
                                  Completed
                                </Badge>
                              )}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {project.hours} hours tracked
                            </p>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="opacity-0 group-hover/project:opacity-100 transition-opacity"
                        >
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-4">
                          <Progress
                            value={project.completion}
                            className="flex-1 h-2 bg-muted/50"
                          />
                          <span className="text-sm font-medium whitespace-nowrap">
                            {project.completion}%
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4 text-muted-foreground" />
                              <span>{project.dueDate}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Briefcase className="h-4 w-4 text-muted-foreground" />
                              <span>{project.budget}</span>
                            </div>
                          </div>
                          <div className="text-sm font-medium flex items-center gap-1">
                            {project.upcoming}
                            <ChevronRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover/project:opacity-100 group-hover/project:translate-x-0 transition-all" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Frequently used workflows</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-4">
                  <Button
                    className="h-auto flex-col items-center justify-center py-6 bg-gradient-to-br from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 group/button"
                    variant="default"
                  >
                    <Zap className="h-6 w-6 mb-2 group-hover/button:scale-110 transition-transform" />
                    <span>New Project</span>
                  </Button>
                  <Button
                    className="h-auto flex-col items-center justify-center py-6 bg-gradient-to-br from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 group/button"
                    variant="default"
                  >
                    <Users className="h-6 w-6 mb-2 group-hover/button:scale-110 transition-transform" />
                    <span>Add Client</span>
                  </Button>
                  <Button
                    className="h-auto flex-col items-center justify-center py-6 bg-gradient-to-br from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 group/button"
                    variant="default"
                  >
                    <BookCheck className="h-6 w-6 mb-2 group-hover/button:scale-110 transition-transform" />
                    <span>New Template</span>
                  </Button>
                  <Button
                    className="h-auto flex-col items-center justify-center py-6 bg-gradient-to-br from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 group/button"
                    variant="default"
                  >
                    <Clock className="h-6 w-6 mb-2 group-hover/button:scale-110 transition-transform" />
                    <span>Schedule</span>
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Recent Activity</CardTitle>
                    <Tabs defaultValue="all" className="w-auto">
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="all">All</TabsTrigger>
                        <TabsTrigger value="tasks">Tasks</TabsTrigger>
                        <TabsTrigger value="comments">Comments</TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {activities.map((activity, i) => (
                      <div
                        key={i}
                        className="group/activity flex items-start gap-4 pb-4 border-b last:border-0 hover:bg-accent/5 p-2 rounded-lg transition-colors"
                      >
                        <Avatar className="h-9 w-9 ring-2 ring-primary/10 transition-all group-hover/activity:ring-4">
                          <AvatarImage
                            src={activity.user.avatar}
                            alt={activity.user.name}
                          />
                          <AvatarFallback>
                            {activity.user.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm">
                            <span className="font-medium">
                              {activity.user.name}
                            </span>{" "}
                            {activity.action}{" "}
                            <span className="font-medium">
                              {activity.target}
                            </span>
                          </p>
                          {activity.type === "comment" && (
                            <p className="text-sm text-muted-foreground bg-muted/50 p-2 rounded-md">
                              {activity.metadata.comment}
                            </p>
                          )}
                          {activity.type === "task" && (
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Progress
                                value={activity.metadata.progress}
                                className="h-2 w-20"
                              />
                              <span>{activity.metadata.progress}%</span>
                              <Separator
                                orientation="vertical"
                                className="h-4"
                              />
                              <MessageSquare className="h-4 w-4" />
                              <span>{activity.metadata.comments}</span>
                            </div>
                          )}
                          {activity.type === "project" && (
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              <span>Due {activity.metadata.deadline}</span>
                              <Separator
                                orientation="vertical"
                                className="h-4"
                              />
                              <Users className="h-4 w-4" />
                              <span>{activity.metadata.team} team members</span>
                            </div>
                          )}
                          <p className="text-xs text-muted-foreground">
                            {activity.time}
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 opacity-0 group-hover/activity:opacity-100 transition-opacity"
                        >
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
