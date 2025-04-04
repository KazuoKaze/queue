// import React, { useState } from "react";
// import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
// import { AppSidebar } from "@/components/app-sidebar";
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Separator } from "@/components/ui/separator";
// import { Label } from "@/components/ui/label";
// import { Badge } from "@/components/ui/badge";
// import { Progress } from "@/components/ui/progress";

// import {
//   Plus,
//   Search,
//   Settings,
//   Bell,
//   FileText,
//   Trash2,
//   MoreVertical,
//   Calendar,
//   Users,
//   Clock,
//   ChevronRight,
//   Layout,
//   Layers,
//   Sparkles,
//   Target,
//   ArrowRight,
//   CheckCircle,
//   AlertCircle,
//   Copy,
// } from "lucide-react";

// // Sample template data
// const templates = [
//   {
//     id: 1,
//     name: "Website Project Template",
//     description: "Complete website development workflow",
//     taskCount: 8,
//     createdAt: "2024-03-15",
//     category: "Development",
//     usageCount: 24,
//     status: "Popular",
//     tasks: [
//       {
//         title: "Initial Planning",
//         priority: "High",
//         dueOffset: 3,
//         assignee: "John Doe",
//         type: "Planning",
//       },
//       // ... more tasks
//     ],
//   },
//   {
//     id: 2,
//     name: "Marketing Campaign Template",
//     description: "Strategic marketing campaign setup",
//     taskCount: 5,
//     createdAt: "2024-03-10",
//     category: "Marketing",
//     usageCount: 15,
//     status: "New",
//     tasks: [
//       {
//         title: "Campaign Strategy",
//         priority: "High",
//         dueOffset: 2,
//         assignee: "Alice Smith",
//         type: "Strategy",
//       },
//     ],
//   },
//   {
//     id: 3,
//     name: "Client Onboarding Template",
//     description: "Streamlined client onboarding process",
//     taskCount: 6,
//     createdAt: "2024-03-05",
//     category: "Operations",
//     usageCount: 32,
//     status: "Trending",
//     tasks: [
//       {
//         title: "Welcome Meeting",
//         priority: "High",
//         dueOffset: 1,
//         assignee: "Mike Lee",
//         type: "Meeting",
//       },
//     ],
//   },
// ];

// const taskTypes = [
//   { value: "development", label: "Development", icon: Layout },
//   { value: "design", label: "Design", icon: Layers },
//   { value: "marketing", label: "Marketing", icon: Target },
//   { value: "planning", label: "Planning", icon: Calendar },
// ];

// export default function TemplatesPage() {
//   const [isNewTemplateOpen, setIsNewTemplateOpen] = useState(false);
//   const [newTemplate, setNewTemplate] = useState({
//     name: "",
//     description: "",
//     category: "",
//     tasks: [
//       { title: "", priority: "Medium", dueOffset: 1, assignee: "", type: "" },
//     ],
//   });

//   const addTask = () => {
//     setNewTemplate((prev) => ({
//       ...prev,
//       tasks: [
//         ...prev.tasks,
//         { title: "", priority: "Medium", dueOffset: 1, assignee: "", type: "" },
//       ],
//     }));
//   };

//   const removeTask = (index: number) => {
//     setNewTemplate((prev) => ({
//       ...prev,
//       tasks: prev.tasks.filter((_, i) => i !== index),
//     }));
//   };

//   return (
//     <SidebarProvider
//       style={
//         {
//           "--sidebar-width": "350px",
//         } as React.CSSProperties
//       }
//     >
//       <AppSidebar />
//       <SidebarInset className="bg-background">
//         {/* Enhanced Header */}
//         <header className="bg-background/95 backdrop-blur-sm sticky top-0 z-10 flex items-center justify-between border-b px-6 py-4">
//           <div className="flex items-center gap-4">
//             <SidebarTrigger className="-ml-2" />
//             <Separator orientation="vertical" className="h-6" />
//             <Breadcrumb>
//               <BreadcrumbList>
//                 <BreadcrumbItem className="hidden md:block">
//                   <BreadcrumbLink
//                     href="#"
//                     className="text-muted-foreground hover:text-foreground"
//                   >
//                     Dashboard
//                   </BreadcrumbLink>
//                 </BreadcrumbItem>
//                 <BreadcrumbSeparator className="hidden md:block" />
//                 <BreadcrumbItem>
//                   <BreadcrumbPage>Overview</BreadcrumbPage>
//                 </BreadcrumbItem>
//               </BreadcrumbList>
//             </Breadcrumb>
//           </div>
//           <div className="flex items-center gap-6">
//             <div className="relative hidden lg:block">
//               <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
//               <Input
//                 type="search"
//                 placeholder="Search..."
//                 className="w-64 pl-8 bg-muted/50 focus:bg-background transition-colors"
//               />
//             </div>
//             <Button
//               variant="outline"
//               size="icon"
//               className="rounded-full relative hover:bg-primary/10 transition-colors"
//             >
//               <Bell className="h-5 w-5" />
//               <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 border-2 border-background animate-pulse"></span>
//             </Button>
//             <Button
//               variant="ghost"
//               size="icon"
//               className="rounded-full hover:bg-primary/10"
//             >
//               <Settings className="h-5 w-5" />
//             </Button>
//             <Separator orientation="vertical" className="h-6" />
//             {/* <Avatar className="h-8 w-8 ring-2 ring-primary/10 transition-all hover:ring-4">
//               <AvatarImage src="https://i.pravatar.cc/150?u=admin" />
//               <AvatarFallback>AD</AvatarFallback>
//             </Avatar> */}
//           </div>
//         </header>

//         <div className="container mx-auto p-6 space-y-8">
//           {/* Enhanced Welcome Section */}
//           <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-8 backdrop-blur-sm border">
//             <div className="absolute inset-0 bg-grid-white/10" />
//             <div className="relative">
//               <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
//                 <div className="space-y-2">
//                   <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
//                     Template Management
//                   </h1>
//                   <p className="text-muted-foreground text-lg max-w-2xl">
//                     Create and manage project templates to streamline your
//                     workflow. Start with a template to ensure consistency across
//                     your projects.
//                   </p>
//                 </div>
//                 <Dialog>
//                   <DialogTrigger asChild>
//                     <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 shadow-lg hover:shadow-primary/25 group">
//                       <Plus className="mr-2 h-4 w-4 group-hover:rotate-90 transition-transform duration-300" />
//                       New Template
//                     </Button>
//                   </DialogTrigger>
//                   <DialogContent className="sm:max-w-[800px]">
//                     <DialogHeader>
//                       <DialogTitle className="text-2xl">
//                         Create New Template
//                       </DialogTitle>
//                       <DialogDescription>
//                         Design a new project template with predefined tasks and
//                         workflows
//                       </DialogDescription>
//                     </DialogHeader>
//                     <div className="space-y-8 py-4">
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         <div className="space-y-2">
//                           <Label htmlFor="template-name">Template Name</Label>
//                           <Input
//                             id="template-name"
//                             placeholder="Enter template name"
//                             value={newTemplate.name}
//                             onChange={(e) =>
//                               setNewTemplate((prev) => ({
//                                 ...prev,
//                                 name: e.target.value,
//                               }))
//                             }
//                             className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
//                           />
//                         </div>
//                         <div className="space-y-2">
//                           <Label>Category</Label>
//                           <Select
//                             value={newTemplate.category}
//                             onValueChange={(value) =>
//                               setNewTemplate((prev) => ({
//                                 ...prev,
//                                 category: value,
//                               }))
//                             }
//                           >
//                             <SelectTrigger>
//                               <SelectValue placeholder="Select category" />
//                             </SelectTrigger>
//                             <SelectContent>
//                               {taskTypes.map((type) => (
//                                 <SelectItem key={type.value} value={type.value}>
//                                   <div className="flex items-center gap-2">
//                                     <type.icon className="h-4 w-4" />
//                                     <span>{type.label}</span>
//                                   </div>
//                                 </SelectItem>
//                               ))}
//                             </SelectContent>
//                           </Select>
//                         </div>
//                       </div>

//                       <div className="space-y-2">
//                         <Label htmlFor="template-description">
//                           Description
//                         </Label>
//                         <Input
//                           id="template-description"
//                           placeholder="Brief description of the template"
//                           value={newTemplate.description}
//                           onChange={(e) =>
//                             setNewTemplate((prev) => ({
//                               ...prev,
//                               description: e.target.value,
//                             }))
//                           }
//                           className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
//                         />
//                       </div>

//                       <div className="space-y-4">
//                         <div className="flex items-center justify-between">
//                           <div className="space-y-1">
//                             <h4 className="text-sm font-medium">Tasks</h4>
//                             <p className="text-sm text-muted-foreground">
//                               Add tasks to your template
//                             </p>
//                           </div>
//                           <Button
//                             onClick={addTask}
//                             variant="outline"
//                             size="sm"
//                             className="h-8 group"
//                           >
//                             <Plus className="h-4 w-4 mr-1 group-hover:rotate-90 transition-transform duration-300" />{" "}
//                             Add Task
//                           </Button>
//                         </div>

//                         <div className="space-y-4 max-h-[400px] overflow-y-auto pr-4">
//                           {newTemplate.tasks.map((task, index) => (
//                             <Card
//                               key={index}
//                               className="relative group border-2 hover:border-primary/20 transition-all duration-300"
//                             >
//                               <CardHeader className="pb-2">
//                                 <div className="flex items-start justify-between gap-4">
//                                   <div className="flex-1 space-y-4">
//                                     <Input
//                                       placeholder="Task title"
//                                       value={task.title}
//                                       onChange={(e) => {
//                                         const newTasks = [...newTemplate.tasks];
//                                         newTasks[index].title = e.target.value;
//                                         setNewTemplate((prev) => ({
//                                           ...prev,
//                                           tasks: newTasks,
//                                         }));
//                                       }}
//                                       className="text-lg font-medium transition-all duration-300 focus:ring-2 focus:ring-primary/20"
//                                     />
//                                     <div className="flex items-center gap-2 flex-wrap">
//                                       {taskTypes.map((type) => (
//                                         <Button
//                                           key={type.value}
//                                           variant={
//                                             task.type === type.value
//                                               ? "default"
//                                               : "outline"
//                                           }
//                                           size="sm"
//                                           className="h-8"
//                                           onClick={() => {
//                                             const newTasks = [
//                                               ...newTemplate.tasks,
//                                             ];
//                                             newTasks[index].type = type.value;
//                                             setNewTemplate((prev) => ({
//                                               ...prev,
//                                               tasks: newTasks,
//                                             }));
//                                           }}
//                                         >
//                                           <type.icon className="h-4 w-4 mr-1" />
//                                           {type.label}
//                                         </Button>
//                                       ))}
//                                     </div>
//                                   </div>
//                                   <Button
//                                     variant="ghost"
//                                     size="icon"
//                                     className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
//                                     onClick={() => removeTask(index)}
//                                   >
//                                     <Trash2 className="h-4 w-4 text-destructive" />
//                                   </Button>
//                                 </div>
//                               </CardHeader>
//                               <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                                 <div className="space-y-2">
//                                   <Label>Priority</Label>
//                                   <Select
//                                     value={task.priority}
//                                     onValueChange={(value) => {
//                                       const newTasks = [...newTemplate.tasks];
//                                       newTasks[index].priority = value;
//                                       setNewTemplate((prev) => ({
//                                         ...prev,
//                                         tasks: newTasks,
//                                       }));
//                                     }}
//                                   >
//                                     <SelectTrigger>
//                                       <SelectValue placeholder="Select priority" />
//                                     </SelectTrigger>
//                                     <SelectContent>
//                                       <SelectItem value="High">
//                                         <div className="flex items-center gap-2">
//                                           <AlertCircle className="h-4 w-4 text-red-500" />
//                                           <span>High</span>
//                                         </div>
//                                       </SelectItem>
//                                       <SelectItem value="Medium">
//                                         <div className="flex items-center gap-2">
//                                           <Clock className="h-4 w-4 text-yellow-500" />
//                                           <span>Medium</span>
//                                         </div>
//                                       </SelectItem>
//                                       <SelectItem value="Low">
//                                         <div className="flex items-center gap-2">
//                                           <CheckCircle className="h-4 w-4 text-green-500" />
//                                           <span>Low</span>
//                                         </div>
//                                       </SelectItem>
//                                     </SelectContent>
//                                   </Select>
//                                 </div>
//                                 <div className="space-y-2">
//                                   <Label>Due Date Offset (days)</Label>
//                                   <Input
//                                     type="number"
//                                     min="1"
//                                     value={task.dueOffset}
//                                     onChange={(e) => {
//                                       const newTasks = [...newTemplate.tasks];
//                                       newTasks[index].dueOffset = parseInt(
//                                         e.target.value
//                                       );
//                                       setNewTemplate((prev) => ({
//                                         ...prev,
//                                         tasks: newTasks,
//                                       }));
//                                     }}
//                                     className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
//                                   />
//                                 </div>
//                                 <div className="space-y-2">
//                                   <Label>Assignee</Label>
//                                   <Input
//                                     placeholder="Assignee name"
//                                     value={task.assignee}
//                                     onChange={(e) => {
//                                       const newTasks = [...newTemplate.tasks];
//                                       newTasks[index].assignee = e.target.value;
//                                       setNewTemplate((prev) => ({
//                                         ...prev,
//                                         tasks: newTasks,
//                                       }));
//                                     }}
//                                     className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
//                                   />
//                                 </div>
//                               </CardContent>
//                             </Card>
//                           ))}
//                         </div>
//                       </div>

//                       <div className="flex justify-end gap-3">
//                         <Button
//                           variant="outline"
//                           onClick={() => setIsNewTemplateOpen(false)}
//                         >
//                           Cancel
//                         </Button>
//                         <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300">
//                           Save Template
//                         </Button>
//                       </div>
//                     </div>
//                   </DialogContent>
//                 </Dialog>
//               </div>
//             </div>
//           </div>

//           {/* Enhanced Templates Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {templates.map((template) => (
//               <Card
//                 key={template.id}
//                 className="group hover:shadow-xl transition-all duration-300 relative overflow-hidden"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
//                 <CardHeader className="pb-2">
//                   <div className="flex items-start justify-between">
//                     <div className="space-y-1">
//                       <div className="flex items-center gap-2">
//                         <CardTitle className="text-xl font-semibold">
//                           {template.name}
//                         </CardTitle>
//                         {template.status === "Popular" && (
//                           <Badge
//                             variant="default"
//                             className="bg-primary/20 text-primary"
//                           >
//                             <Sparkles className="h-3 w-3 mr-1" /> Popular
//                           </Badge>
//                         )}
//                         {template.status === "New" && (
//                           <Badge
//                             variant="default"
//                             className="bg-green-500/20 text-green-700"
//                           >
//                             New
//                           </Badge>
//                         )}
//                         {template.status === "Trending" && (
//                           <Badge
//                             variant="default"
//                             className="bg-blue-500/20 text-blue-700"
//                           >
//                             Trending
//                           </Badge>
//                         )}
//                       </div>
//                       <CardDescription className="line-clamp-2">
//                         {template.description}
//                       </CardDescription>
//                     </div>
//                     <Button
//                       variant="ghost"
//                       size="icon"
//                       className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
//                     >
//                       <MoreVertical className="h-4 w-4" />
//                     </Button>
//                   </div>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="space-y-4">
//                     <div className="flex items-center gap-4 text-sm text-muted-foreground">
//                       <div className="flex items-center gap-1">
//                         <Calendar className="h-4 w-4" />
//                         <span>
//                           Created{" "}
//                           {new Date(template.createdAt).toLocaleDateString()}
//                         </span>
//                       </div>
//                       <div className="flex items-center gap-1">
//                         <Users className="h-4 w-4" />
//                         <span>Used {template.usageCount} times</span>
//                       </div>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <Progress value={75} className="h-2" />
//                       <span className="text-sm font-medium">
//                         {template.taskCount} tasks
//                       </span>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <Button variant="outline" className="flex-1 group/edit">
//                         <span className="flex items-center">
//                           Edit Template
//                           <ArrowRight className="h-4 w-4 ml-2 opacity-0 group-hover/edit:opacity-100 group-hover/edit:translate-x-1 transition-all" />
//                         </span>
//                       </Button>
//                       <Button className="flex-1 bg-gradient-to-r from-primary to-primary/80 group/use">
//                         <span className="flex items-center">
//                           Use Template
//                           <Copy className="h-4 w-4 ml-2 opacity-0 group-hover/use:opacity-100 group-hover/use:rotate-12 transition-all" />
//                         </span>
//                       </Button>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </SidebarInset>
//     </SidebarProvider>
//   );
// }



// "use client";

// import React, { useState } from "react";
// import {
//   SidebarProvider,
//   SidebarInset,
//   SidebarTrigger,
// } from "@/components/ui/sidebar";
// import { AppSidebar } from "@/components/app-sidebar";
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Separator } from "@/components/ui/separator";
// import { Label } from "@/components/ui/label";
// import { Badge } from "@/components/ui/badge";
// import { Progress } from "@/components/ui/progress";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// import {
//   Plus,
//   Search,
//   Settings,
//   Bell,
//   FileText,
//   Trash2,
//   MoreVertical,
//   Calendar,
//   Users,
//   Clock,
//   ChevronRight,
//   Layout,
//   Layers,
//   Sparkles,
//   Target,
//   ArrowRight,
//   CheckCircle,
//   AlertCircle,
//   Copy,
//   Folder,
//   Star,
//   TrendingUp,
//   Filter,
// } from "lucide-react";

// // Sample template data
// const templates = [
//   {
//     id: 1,
//     name: "Website Project Template",
//     description: "Complete website development workflow",
//     taskCount: 8,
//     createdAt: "2024-03-15",
//     category: "Development",
//     usageCount: 24,
//     status: "Popular",
//     progress: 75,
//     starred: true,
//     tasks: [
//       {
//         title: "Initial Planning",
//         priority: "High",
//         dueOffset: 3,
//         assignee: "John Doe",
//         type: "Planning",
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: "Marketing Campaign Template",
//     description: "Strategic marketing campaign setup",
//     taskCount: 5,
//     createdAt: "2024-03-10",
//     category: "Marketing",
//     usageCount: 15,
//     status: "New",
//     progress: 45,
//     starred: false,
//     tasks: [
//       {
//         title: "Campaign Strategy",
//         priority: "High",
//         dueOffset: 2,
//         assignee: "Alice Smith",
//         type: "Strategy",
//       },
//     ],
//   },
//   {
//     id: 3,
//     name: "Client Onboarding Template",
//     description: "Streamlined client onboarding process",
//     taskCount: 6,
//     createdAt: "2024-03-05",
//     category: "Operations",
//     usageCount: 32,
//     status: "Trending",
//     progress: 90,
//     starred: true,
//     tasks: [
//       {
//         title: "Welcome Meeting",
//         priority: "High",
//         dueOffset: 1,
//         assignee: "Mike Lee",
//         type: "Meeting",
//       },
//     ],
//   },
// ];

// const taskTypes = [
//   { value: "development", label: "Development", icon: Layout },
//   { value: "design", label: "Design", icon: Layers },
//   { value: "marketing", label: "Marketing", icon: Target },
//   { value: "planning", label: "Planning", icon: Calendar },
// ];

// export default function TemplatesPage() {
//   const [isNewTemplateOpen, setIsNewTemplateOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [newTemplate, setNewTemplate] = useState({
//     name: "",
//     description: "",
//     category: "",
//     tasks: [
//       { title: "", priority: "Medium", dueOffset: 1, assignee: "", type: "" },
//     ],
//   });

//   const addTask = () => {
//     setNewTemplate((prev) => ({
//       ...prev,
//       tasks: [
//         ...prev.tasks,
//         { title: "", priority: "Medium", dueOffset: 1, assignee: "", type: "" },
//       ],
//     }));
//   };

//   const removeTask = (index: number) => {
//     setNewTemplate((prev) => ({
//       ...prev,
//       tasks: prev.tasks.filter((_, i) => i !== index),
//     }));
//   };

//   const filteredTemplates = templates.filter((template) => {
//     const matchesSearch = template.name
//       .toLowerCase()
//       .includes(searchQuery.toLowerCase());
//     const matchesCategory =
//       selectedCategory === "all" ||
//       template.category.toLowerCase() === selectedCategory.toLowerCase();
//     return matchesSearch && matchesCategory;
//   });

//   const starredTemplates = filteredTemplates.filter((t) => t.starred);
//   const recentTemplates = filteredTemplates.sort(
//     (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
//   );

//   return (
//     <SidebarProvider
//       style={
//         {
//           "--sidebar-width": "350px",
//         } as React.CSSProperties
//       }
//     >
//       <AppSidebar />
//       <SidebarInset className="bg-background">
//         {/* Enhanced Header */}
//         <header className="bg-background/95 backdrop-blur-sm sticky top-0 z-10 flex items-center justify-between border-b px-6 py-4">
//           <div className="flex items-center gap-4">
//             <SidebarTrigger className="-ml-2" />
//             <Separator orientation="vertical" className="h-6" />
//             <Breadcrumb>
//               <BreadcrumbList>
//                 <BreadcrumbItem className="hidden md:block">
//                   <BreadcrumbLink
//                     href="#"
//                     className="text-muted-foreground hover:text-foreground"
//                   >
//                     Dashboard
//                   </BreadcrumbLink>
//                 </BreadcrumbItem>
//                 <BreadcrumbSeparator className="hidden md:block" />
//                 <BreadcrumbItem>
//                   <BreadcrumbPage>Templates</BreadcrumbPage>
//                 </BreadcrumbItem>
//               </BreadcrumbList>
//             </Breadcrumb>
//           </div>
//           <div className="flex items-center gap-6">
//             <div className="relative hidden lg:block">
//               <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
//               <Input
//                 type="search"
//                 placeholder="Search templates..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-64 pl-8 bg-muted/50 focus:bg-background transition-colors"
//               />
//             </div>
//             <Button
//               variant="outline"
//               size="icon"
//               className="rounded-full relative hover:bg-primary/10 transition-colors"
//             >
//               <Bell className="h-5 w-5" />
//               <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 border-2 border-background animate-pulse"></span>
//             </Button>
//             <Button
//               variant="ghost"
//               size="icon"
//               className="rounded-full hover:bg-primary/10"
//             >
//               <Settings className="h-5 w-5" />
//             </Button>
//             <Separator orientation="vertical" className="h-6" />
//           </div>
//         </header>

//         <div className="container mx-auto p-6 space-y-8">
//           {/* Enhanced Welcome Section */}
//           <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-8 backdrop-blur-sm border">
//             <div className="absolute inset-0 bg-grid-white/10" />
//             <div className="relative">
//               <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
//                 <div className="space-y-2">
//                   <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
//                     Template Management
//                   </h1>
//                   <p className="text-muted-foreground text-lg max-w-2xl">
//                     Create and manage project templates to streamline your
//                     workflow. Start with a template to ensure consistency across
//                     your projects.
//                   </p>
//                 </div>
//                 <Dialog>
//                   <DialogTrigger asChild>
//                     <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 shadow-lg hover:shadow-primary/25 group">
//                       <Plus className="mr-2 h-4 w-4 group-hover:rotate-90 transition-transform duration-300" />
//                       New Template
//                     </Button>
//                   </DialogTrigger>
//                   <DialogContent className="sm:max-w-[800px]">
//                     {/* Dialog content remains the same */}
//                   </DialogContent>
//                 </Dialog>
//               </div>

//               {/* Quick Stats */}
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
//                 <Card className="bg-white/50 backdrop-blur-sm hover:bg-white/60 transition-colors">
//                   <CardHeader className="pb-2">
//                     <CardTitle className="text-sm font-medium text-muted-foreground">
//                       Total Templates
//                     </CardTitle>
//                     <div className="text-2xl font-bold">{templates.length}</div>
//                   </CardHeader>
//                 </Card>
//                 <Card className="bg-white/50 backdrop-blur-sm hover:bg-white/60 transition-colors">
//                   <CardHeader className="pb-2">
//                     <CardTitle className="text-sm font-medium text-muted-foreground">
//                       Active Projects
//                     </CardTitle>
//                     <div className="text-2xl font-bold">12</div>
//                   </CardHeader>
//                 </Card>
//                 <Card className="bg-white/50 backdrop-blur-sm hover:bg-white/60 transition-colors">
//                   <CardHeader className="pb-2">
//                     <CardTitle className="text-sm font-medium text-muted-foreground">
//                       Team Members
//                     </CardTitle>
//                     <div className="text-2xl font-bold">8</div>
//                   </CardHeader>
//                 </Card>
//               </div>
//             </div>
//           </div>

//           {/* Filter Section */}
//           <div className="flex items-center justify-between gap-4 flex-wrap">
//             <div className="flex items-center gap-4">
//               <Select
//                 value={selectedCategory}
//                 onValueChange={setSelectedCategory}
//               >
//                 <SelectTrigger className="w-[180px]">
//                   <Filter className="h-4 w-4 mr-2" />
//                   <SelectValue placeholder="Filter by category" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="all">All Categories</SelectItem>
//                   {taskTypes.map((type) => (
//                     <SelectItem key={type.value} value={type.value}>
//                       <div className="flex items-center gap-2">
//                         <type.icon className="h-4 w-4" />
//                         <span>{type.label}</span>
//                       </div>
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>
//             <div className="flex items-center gap-2">
//               <Button variant="outline" size="sm" className="h-8">
//                 <Clock className="h-4 w-4 mr-1" /> Recent
//               </Button>
//               <Button variant="outline" size="sm" className="h-8">
//                 <Star className="h-4 w-4 mr-1" /> Starred
//               </Button>
//               <Button variant="outline" size="sm" className="h-8">
//                 <TrendingUp className="h-4 w-4 mr-1" /> Popular
//               </Button>
//             </div>
//           </div>

//           {/* Template Tabs */}
//           <Tabs defaultValue="all" className="space-y-6">
//             <TabsList>
//               <TabsTrigger value="all">All Templates</TabsTrigger>
//               <TabsTrigger value="starred">Starred</TabsTrigger>
//               <TabsTrigger value="recent">Recent</TabsTrigger>
//             </TabsList>

//             <TabsContent value="all" className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {filteredTemplates.map((template) => (
//                   <TemplateCard key={template.id} template={template} />
//                 ))}
//               </div>
//             </TabsContent>

//             <TabsContent value="starred" className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {starredTemplates.map((template) => (
//                   <TemplateCard key={template.id} template={template} />
//                 ))}
//               </div>
//             </TabsContent>

//             <TabsContent value="recent" className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {recentTemplates.map((template) => (
//                   <TemplateCard key={template.id} template={template} />
//                 ))}
//               </div>
//             </TabsContent>
//           </Tabs>
//         </div>
//       </SidebarInset>
//     </SidebarProvider>
//   );
// }

// function TemplateCard({ template }) {
//   return (
//     <Card className="group hover:shadow-xl transition-all duration-300 relative overflow-hidden border-2 hover:border-primary/20">
//       <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
//       <CardHeader className="pb-2">
//         <div className="flex items-start justify-between">
//           <div className="space-y-1">
//             <div className="flex items-center gap-2">
//               <CardTitle className="text-xl font-semibold">
//                 {template.name}
//               </CardTitle>
//               {template.status === "Popular" && (
//                 <Badge variant="default" className="bg-primary/20 text-primary">
//                   <Sparkles className="h-3 w-3 mr-1" /> Popular
//                 </Badge>
//               )}
//               {template.status === "New" && (
//                 <Badge
//                   variant="default"
//                   className="bg-green-500/20 text-green-700"
//                 >
//                   New
//                 </Badge>
//               )}
//               {template.status === "Trending" && (
//                 <Badge
//                   variant="default"
//                   className="bg-blue-500/20 text-blue-700"
//                 >
//                   <TrendingUp className="h-3 w-3 mr-1" /> Trending
//                 </Badge>
//               )}
//             </div>
//             <CardDescription className="line-clamp-2">
//               {template.description}
//             </CardDescription>
//           </div>
//           <Button
//             variant="ghost"
//             size="icon"
//             className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
//           >
//             <MoreVertical className="h-4 w-4" />
//           </Button>
//         </div>
//       </CardHeader>
//       <CardContent>
//         <div className="space-y-4">
//           <div className="flex items-center gap-4 text-sm text-muted-foreground">
//             <div className="flex items-center gap-1">
//               <Calendar className="h-4 w-4" />
//               <span>
//                 Created {new Date(template.createdAt).toLocaleDateString()}
//               </span>
//             </div>
//             <div className="flex items-center gap-1">
//               <Users className="h-4 w-4" />
//               <span>Used {template.usageCount} times</span>
//             </div>
//           </div>
//           <div className="flex items-center gap-2">
//             <Progress value={template.progress} className="h-2" />
//             <span className="text-sm font-medium">
//               {template.taskCount} tasks
//             </span>
//           </div>
//           <div className="flex items-center gap-3">
//             <Button variant="outline" className="flex-1 group/edit">
//               <span className="flex items-center">
//                 Edit Template
//                 <ArrowRight className="h-4 w-4 ml-2 opacity-0 group-hover/edit:opacity-100 group-hover/edit:translate-x-1 transition-all" />
//               </span>
//             </Button>
//             <Button className="flex-1 bg-gradient-to-r from-primary to-primary/80 group/use">
//               <span className="flex items-center">
//                 Use Template
//                 <Copy className="h-4 w-4 ml-2 opacity-0 group-hover/use:opacity-100 group-hover/use:rotate-12 transition-all" />
//               </span>
//             </Button>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }



// "use client";

// import React, { useState } from "react";
// import {
//   SidebarProvider,
//   SidebarInset,
//   SidebarTrigger,
// } from "@/components/ui/sidebar";
// import { AppSidebar } from "@/components/app-sidebar";
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Separator } from "@/components/ui/separator";
// import { Label } from "@/components/ui/label";
// import { Badge } from "@/components/ui/badge";
// import { Progress } from "@/components/ui/progress";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

// import {
//   Plus,
//   Search,
//   Settings,
//   Bell,
//   FileText,
//   Trash2,
//   MoreVertical,
//   Calendar,
//   Users,
//   Clock,
//   ChevronRight,
//   Layout,
//   Layers,
//   Sparkles,
//   Target,
//   ArrowRight,
//   CheckCircle,
//   AlertCircle,
//   Copy,
//   Folder,
//   Star,
//   TrendingUp,
//   Filter,
//   ArrowUpRight,
//   Edit3,
//   Trash,
//   Share2,
//   Archive,
//   PieChart,
//   Activity,
//   ListTodo,
// } from "lucide-react";

// // Sample template data
// const templates = [
//   {
//     id: 1,
//     name: "Website Project Template",
//     description: "Complete website development workflow",
//     taskCount: 8,
//     createdAt: "2024-03-15",
//     category: "Development",
//     usageCount: 24,
//     status: "Popular",
//     progress: 75,
//     starred: true,
//     tasks: [
//       {
//         title: "Initial Planning",
//         priority: "High",
//         dueOffset: 3,
//         assignee: "John Doe",
//         type: "Planning",
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: "Marketing Campaign Template",
//     description: "Strategic marketing campaign setup",
//     taskCount: 5,
//     createdAt: "2024-03-10",
//     category: "Marketing",
//     usageCount: 15,
//     status: "New",
//     progress: 45,
//     starred: false,
//     tasks: [
//       {
//         title: "Campaign Strategy",
//         priority: "High",
//         dueOffset: 2,
//         assignee: "Alice Smith",
//         type: "Strategy",
//       },
//     ],
//   },
//   {
//     id: 3,
//     name: "Client Onboarding Template",
//     description: "Streamlined client onboarding process",
//     taskCount: 6,
//     createdAt: "2024-03-05",
//     category: "Operations",
//     usageCount: 32,
//     status: "Trending",
//     progress: 90,
//     starred: true,
//     tasks: [
//       {
//         title: "Welcome Meeting",
//         priority: "High",
//         dueOffset: 1,
//         assignee: "Mike Lee",
//         type: "Meeting",
//       },
//     ],
//   },
// ];

// const taskTypes = [
//   { value: "development", label: "Development", icon: Layout },
//   { value: "design", label: "Design", icon: Layers },
//   { value: "marketing", label: "Marketing", icon: Target },
//   { value: "planning", label: "Planning", icon: Calendar },
// ];

// export default function TemplatesPage() {
//     const [isNewTemplateOpen, setIsNewTemplateOpen] = useState(false);
//     const [searchQuery, setSearchQuery] = useState("");
//     const [selectedCategory, setSelectedCategory] = useState("all");
//     const [newTemplate, setNewTemplate] = useState({
//       name: "",
//       description: "",
//       category: "",
//       tasks: [
//         { title: "", priority: "Medium", dueOffset: 1, assignee: "", type: "" },
//       ],
//     });

//     const addTask = () => {
//       setNewTemplate((prev) => ({
//         ...prev,
//         tasks: [
//           ...prev.tasks,
//           { title: "", priority: "Medium", dueOffset: 1, assignee: "", type: "" },
//         ],
//       }));
//     };

//     const removeTask = (index: number) => {
//       setNewTemplate((prev) => ({
//         ...prev,
//         tasks: prev.tasks.filter((_, i) => i !== index),
//       }));
//     };

//     const filteredTemplates = templates.filter((template) => {
//       const matchesSearch = template.name
//         .toLowerCase()
//         .includes(searchQuery.toLowerCase());
//       const matchesCategory =
//         selectedCategory === "all" ||
//         template.category.toLowerCase() === selectedCategory.toLowerCase();
//       return matchesSearch && matchesCategory;
//     });

//     const starredTemplates = filteredTemplates.filter((t) => t.starred);
//     const recentTemplates = filteredTemplates.sort(
//       (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
//     );

//   return (
//     <SidebarProvider
//       style={
//         {
//           "--sidebar-width": "350px",
//         } as React.CSSProperties
//       }
//     >
//       <AppSidebar />
//       <SidebarInset className="bg-background">
//         {/* Header remains the same */}
//         <header className="bg-background/95 backdrop-blur-sm sticky top-0 z-10 flex items-center justify-between border-b px-6 py-4">
//           <div className="flex items-center gap-4">
//             <SidebarTrigger className="-ml-2" />
//             <Separator orientation="vertical" className="h-6" />
//             <Breadcrumb>
//               <BreadcrumbList>
//                 <BreadcrumbItem className="hidden md:block">
//                   <BreadcrumbLink
//                     href="#"
//                     className="text-muted-foreground hover:text-foreground"
//                   >
//                     Dashboard
//                   </BreadcrumbLink>
//                 </BreadcrumbItem>
//                 <BreadcrumbSeparator className="hidden md:block" />
//                 <BreadcrumbItem>
//                   <BreadcrumbPage>Templates</BreadcrumbPage>
//                 </BreadcrumbItem>
//               </BreadcrumbList>
//             </Breadcrumb>
//           </div>
//           <div className="flex items-center gap-6">
//             <div className="relative hidden lg:block">
//               <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
//               <Input
//                 type="search"
//                 placeholder="Search templates..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-64 pl-8 bg-muted/50 focus:bg-background transition-colors"
//               />
//             </div>
//             <Button
//               variant="outline"
//               size="icon"
//               className="rounded-full relative hover:bg-primary/10 transition-colors"
//             >
//               <Bell className="h-5 w-5" />
//               <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 border-2 border-background animate-pulse"></span>
//             </Button>
//             <Button
//               variant="ghost"
//               size="icon"
//               className="rounded-full hover:bg-primary/10"
//             >
//               <Settings className="h-5 w-5" />
//             </Button>
//             <Separator orientation="vertical" className="h-6" />
//           </div>
//         </header>
//         <div className="container mx-auto p-6 space-y-8">
//           {/* Welcome Section remains the same */}

//           <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-8 backdrop-blur-sm border">
//             <div className="absolute inset-0 bg-grid-white/10" />
//             <div className="relative">
//               <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
//                 <div className="space-y-2">
//                   <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
//                     Template Management
//                   </h1>
//                   <p className="text-muted-foreground text-lg max-w-2xl">
//                     Create and manage project templates to streamline your
//                     workflow. Start with a template to ensure consistency across
//                     your projects.
//                   </p>
//                 </div>
//                 <Dialog>
//                   <DialogTrigger asChild>
//                     <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 shadow-lg hover:shadow-primary/25 group">
//                       <Plus className="mr-2 h-4 w-4 group-hover:rotate-90 transition-transform duration-300" />
//                       New Template
//                     </Button>
//                   </DialogTrigger>
//                   <DialogContent className="sm:max-w-[800px]">
//                     {/* Dialog content remains the same */}
//                   </DialogContent>
//                 </Dialog>
//               </div>
        //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        //         <Card className="bg-white/50 backdrop-blur-sm hover:bg-white/60 transition-colors">
        //           <CardHeader className="pb-2">
        //             <div className="flex items-start justify-between">
        //               <div>
        //                 <CardTitle className="text-sm font-medium text-muted-foreground">
        //                   Total Templates
        //                 </CardTitle>
        //                 <div className="flex items-baseline gap-2">
        //                   <div className="text-2xl font-bold">
        //                     {templates.length}
        //                   </div>
        //                   <span className="text-xs text-green-600 flex items-center">
        //                     <ArrowUpRight className="h-3 w-3" />
        //                     +2 this week
        //                   </span>
        //                 </div>
        //               </div>
        //               <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
        //                 <FileText className="h-4 w-4 text-primary" />
        //               </div>
        //             </div>
        //             <div className="mt-4 flex items-center gap-4 text-sm">
        //               <div className="flex items-center gap-1 text-muted-foreground">
        //                 <Activity className="h-4 w-4" />
        //                 <span>12 active</span>
        //               </div>
        //               <div className="flex items-center gap-1 text-muted-foreground">
        //                 <Archive className="h-4 w-4" />
        //                 <span>3 archived</span>
        //               </div>
        //             </div>
        //           </CardHeader>
        //         </Card>

        //         <Card className="bg-white/50 backdrop-blur-sm hover:bg-white/60 transition-colors">
        //           <CardHeader className="pb-2">
        //             <div className="flex items-start justify-between">
        //               <div>
        //                 <CardTitle className="text-sm font-medium text-muted-foreground">
        //                   Active Projects
        //                 </CardTitle>
        //                 <div className="flex items-baseline gap-2">
        //                   <div className="text-2xl font-bold">12</div>
        //                   <span className="text-xs text-green-600 flex items-center">
        //                     <ArrowUpRight className="h-3 w-3" />
        //                     +3 this month
        //                   </span>
        //                 </div>
        //               </div>
        //               <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
        //                 <PieChart className="h-4 w-4 text-primary" />
        //               </div>
        //             </div>
        //             <div className="mt-4 flex items-center gap-4 text-sm">
        //               <div className="flex items-center gap-1 text-muted-foreground">
        //                 <CheckCircle className="h-4 w-4" />
        //                 <span>8 on track</span>
        //               </div>
        //               <div className="flex items-center gap-1 text-muted-foreground">
        //                 <AlertCircle className="h-4 w-4" />
        //                 <span>4 at risk</span>
        //               </div>
        //             </div>
        //           </CardHeader>
        //         </Card>

        //         <Card className="bg-white/50 backdrop-blur-sm hover:bg-white/60 transition-colors">
        //           <CardHeader className="pb-2">
        //             <div className="flex items-start justify-between">
        //               <div>
        //                 <CardTitle className="text-sm font-medium text-muted-foreground">
        //                   Team Members
        //                 </CardTitle>
        //                 <div className="flex items-baseline gap-2">
        //                   <div className="text-2xl font-bold">8</div>
        //                   <span className="text-xs text-green-600 flex items-center">
        //                     <ArrowUpRight className="h-3 w-3" />
        //                     +1 new
        //                   </span>
        //                 </div>
        //               </div>
        //               <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
        //                 <Users className="h-4 w-4 text-primary" />
        //               </div>
        //             </div>
        //             <div className="mt-4 flex items-center gap-4 text-sm">
        //               <div className="flex items-center gap-1 text-muted-foreground">
        //                 <Activity className="h-4 w-4" />
        //                 <span>6 active now</span>
        //               </div>
        //               <div className="flex items-center gap-1 text-muted-foreground">
        //                 <ListTodo className="h-4 w-4" />
        //                 <span>24 tasks</span>
        //               </div>
        //             </div>
        //           </CardHeader>
        //         </Card>
        //       </div>
        //     </div>
        //   </div>

          

//           {/* Filter Section remains the same */}

//           <div className="flex items-center justify-between gap-4 flex-wrap">
//             <div className="flex items-center gap-4">
//               <Select
//                 value={selectedCategory}
//                 onValueChange={setSelectedCategory}
//               >
//                 <SelectTrigger className="w-[180px]">
//                   <Filter className="h-4 w-4 mr-2" />
//                   <SelectValue placeholder="Filter by category" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="all">All Categories</SelectItem>
//                   {taskTypes.map((type) => (
//                     <SelectItem key={type.value} value={type.value}>
//                       <div className="flex items-center gap-2">
//                         <type.icon className="h-4 w-4" />
//                         <span>{type.label}</span>
//                       </div>
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>
//             <div className="flex items-center gap-2">
//               <Button variant="outline" size="sm" className="h-8">
//                 <Clock className="h-4 w-4 mr-1" /> Recent
//               </Button>
//               <Button variant="outline" size="sm" className="h-8">
//                 <Star className="h-4 w-4 mr-1" /> Starred
//               </Button>
//               <Button variant="outline" size="sm" className="h-8">
//                 <TrendingUp className="h-4 w-4 mr-1" /> Popular
//               </Button>
//             </div>
//           </div>

//           {/* Template Tabs */}
//           <Tabs defaultValue="all" className="space-y-6">
//             <TabsList>
//               <TabsTrigger value="all">All Templates</TabsTrigger>
//               <TabsTrigger value="starred">Starred</TabsTrigger>
//               <TabsTrigger value="recent">Recent</TabsTrigger>
//             </TabsList>

//             <TabsContent value="all" className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {filteredTemplates.map((template) => (
//                   <TemplateCard key={template.id} template={template} />
//                 ))}
//               </div>
//             </TabsContent>

//             <TabsContent value="starred" className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {starredTemplates.map((template) => (
//                   <TemplateCard key={template.id} template={template} />
//                 ))}
//               </div>
//             </TabsContent>

//             <TabsContent value="recent" className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {recentTemplates.map((template) => (
//                   <TemplateCard key={template.id} template={template} />
//                 ))}
//               </div>
//             </TabsContent>

//             {/* Other TabsContent sections remain the same */}
//           </Tabs>

//           {/* Enhanced New Template Dialog */}
//           <Dialog>
//             <DialogTrigger asChild>
//               <Button className="fixed bottom-6 right-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 shadow-lg hover:shadow-primary/25 group rounded-full">
//                 <Plus className="mr-2 h-4 w-4 group-hover:rotate-90 transition-transform duration-300" />
//                 New Template
//               </Button>
//             </DialogTrigger>
//             <DialogContent className="sm:max-w-[800px]">
//               <DialogHeader>
//                 <DialogTitle className="text-2xl font-bold">
//                   Create New Template
//                 </DialogTitle>
//                 <DialogDescription>
//                   Design a new project template with predefined tasks and
//                   workflows.
//                 </DialogDescription>
//               </DialogHeader>
//               <div className="mt-6 space-y-8">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div className="space-y-4">
//                     <div>
//                       <Label
//                         htmlFor="template-name"
//                         className="text-sm font-medium"
//                       >
//                         Template Name
//                       </Label>
//                       <Input
//                         id="template-name"
//                         placeholder="Enter template name"
//                         className="mt-1.5"
//                       />
//                     </div>
//                     <div>
//                       <Label className="text-sm font-medium">Category</Label>
//                       <Select>
//                         <SelectTrigger className="mt-1.5">
//                           <SelectValue placeholder="Select category" />
//                         </SelectTrigger>
//                         <SelectContent>
//                           {taskTypes.map((type) => (
//                             <SelectItem key={type.value} value={type.value}>
//                               <div className="flex items-center gap-2">
//                                 <type.icon className="h-4 w-4" />
//                                 <span>{type.label}</span>
//                               </div>
//                             </SelectItem>
//                           ))}
//                         </SelectContent>
//                       </Select>
//                     </div>
//                   </div>
//                   <div>
//                     <Label
//                       htmlFor="template-description"
//                       className="text-sm font-medium"
//                     >
//                       Description
//                     </Label>
//                     <Input
//                       id="template-description"
//                       placeholder="Brief description of the template"
//                       className="mt-1.5"
//                     />
//                   </div>
//                 </div>

//                 <Separator />

//                 <div className="space-y-4">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <h4 className="text-sm font-medium">Tasks</h4>
//                       <p className="text-sm text-muted-foreground">
//                         Add tasks to your template
//                       </p>
//                     </div>
//                     <Button
//                       onClick={addTask}
//                       variant="outline"
//                       size="sm"
//                       className="h-8 group"
//                     >
//                       <Plus className="h-4 w-4 mr-1 group-hover:rotate-90 transition-transform duration-300" />
//                       Add Task
//                     </Button>
//                   </div>

//                   <div className="space-y-4">
//                     {newTemplate.tasks.map((task, index) => (
//                       <Card
//                         key={index}
//                         className="relative group hover:shadow-md transition-all"
//                       >
//                         <CardHeader className="pb-2">
//                           <div className="flex items-center gap-4">
//                             <Input
//                               placeholder="Task title"
//                               value={task.title}
//                               className="text-lg font-medium"
//                             />
//                             <Button
//                               variant="ghost"
//                               size="icon"
//                               className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
//                               onClick={() => removeTask(index)}
//                             >
//                               <Trash2 className="h-4 w-4 text-destructive" />
//                             </Button>
//                           </div>
//                         </CardHeader>
//                         <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                           <div>
//                             <Label>Priority</Label>
//                             <Select value={task.priority}>
//                               <SelectTrigger className="mt-1.5">
//                                 <SelectValue placeholder="Select priority" />
//                               </SelectTrigger>
//                               <SelectContent>
//                                 <SelectItem value="High">
//                                   <div className="flex items-center gap-2">
//                                     <AlertCircle className="h-4 w-4 text-red-500" />
//                                     <span>High</span>
//                                   </div>
//                                 </SelectItem>
//                                 <SelectItem value="Medium">
//                                   <div className="flex items-center gap-2">
//                                     <Clock className="h-4 w-4 text-yellow-500" />
//                                     <span>Medium</span>
//                                   </div>
//                                 </SelectItem>
//                                 <SelectItem value="Low">
//                                   <div className="flex items-center gap-2">
//                                     <CheckCircle className="h-4 w-4 text-green-500" />
//                                     <span>Low</span>
//                                   </div>
//                                 </SelectItem>
//                               </SelectContent>
//                             </Select>
//                           </div>
//                           <div>
//                             <Label>Due Date Offset (days)</Label>
//                             <Input
//                               type="number"
//                               min="1"
//                               value={task.dueOffset}
//                               className="mt-1.5"
//                             />
//                           </div>
//                           <div>
//                             <Label>Assignee</Label>
//                             <Input
//                               placeholder="Assignee name"
//                               value={task.assignee}
//                               className="mt-1.5"
//                             />
//                           </div>
//                         </CardContent>
//                       </Card>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="flex justify-end gap-3">
//                   <Button variant="outline">Cancel</Button>
//                   <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
//                     Save Template
//                   </Button>
//                 </div>
//               </div>
//             </DialogContent>
//           </Dialog>
//         </div>
//       </SidebarInset>
//     </SidebarProvider>
//   );
// }

// function TemplateCard({ template }) {
//   return (
//     <Card className="group hover:shadow-xl transition-all duration-300 relative overflow-hidden border hover:border-primary/20">
//       <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
//       <CardHeader className="pb-2">
//         <div className="flex items-start justify-between">
//           <div className="space-y-1">
//             <div className="flex items-center gap-2">
//               <CardTitle className="text-xl font-semibold">
//                 {template.name}
//               </CardTitle>
//               {template.status === "Popular" && (
//                 <Badge variant="default" className="bg-primary/20 text-primary">
//                   <Sparkles className="h-3 w-3 mr-1" /> Popular
//                 </Badge>
//               )}
//               {template.status === "New" && (
//                 <Badge
//                   variant="default"
//                   className="bg-green-500/20 text-green-700"
//                 >
//                   New
//                 </Badge>
//               )}
//               {template.status === "Trending" && (
//                 <Badge
//                   variant="default"
//                   className="bg-blue-500/20 text-blue-700"
//                 >
//                   <TrendingUp className="h-3 w-3 mr-1" /> Trending
//                 </Badge>
//               )}
//             </div>
//             <CardDescription className="line-clamp-2">
//               {template.description}
//             </CardDescription>
//           </div>
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
//               >
//                 <MoreVertical className="h-4 w-4" />
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="end" className="w-48">
//               <DropdownMenuLabel>Template Actions</DropdownMenuLabel>
//               <DropdownMenuSeparator />
//               <DropdownMenuItem>
//                 <Edit3 className="h-4 w-4 mr-2" /> Edit Template
//               </DropdownMenuItem>
//               <DropdownMenuItem>
//                 <Share2 className="h-4 w-4 mr-2" /> Share Template
//               </DropdownMenuItem>
//               <DropdownMenuItem>
//                 <Archive className="h-4 w-4 mr-2" /> Archive Template
//               </DropdownMenuItem>
//               <DropdownMenuSeparator />
//               <DropdownMenuItem className="text-destructive">
//                 <Trash className="h-4 w-4 mr-2" /> Delete Template
//               </DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>
//         </div>
//       </CardHeader>
//       <CardContent>
//         <div className="space-y-4">
//           <div className="flex items-center justify-between text-sm text-muted-foreground">
//             <div className="flex items-center gap-1">
//               <Calendar className="h-4 w-4" />
//               <span>{new Date(template.createdAt).toLocaleDateString()}</span>
//             </div>
//             <div className="flex items-center gap-1">
//               <Users className="h-4 w-4" />
//               <span>{template.usageCount} uses</span>
//             </div>
//             <div className="flex items-center gap-1">
//               <ListTodo className="h-4 w-4" />
//               <span>{template.taskCount} tasks</span>
//             </div>
//           </div>
//           <Progress value={template.progress} className="h-2" />
//           <div className="flex items-center gap-3">
//             <Button
//               variant="outline"
//               className="flex-1 h-9 justify-center group/edit"
//             >
//               <span className="flex items-center">
//                 Edit
//                 <ArrowRight className="h-4 w-4 ml-2 opacity-0 group-hover/edit:opacity-100 group-hover/edit:translate-x-1 transition-all" />
//               </span>
//             </Button>
//             <Button className="flex-1 h-9 justify-center bg-gradient-to-r from-primary to-primary/80 group/use">
//               <span className="flex items-center">
//                 Use
//                 <Copy className="h-4 w-4 ml-2 opacity-0 group-hover/use:opacity-100 group-hover/use:rotate-12 transition-all" />
//               </span>
//             </Button>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }



// "use client";

// import React, { useState } from "react";
// import {
//   Plus,
//   Search,
//   Settings,
//   Bell,
//   FileText,
//   Trash2,
//   MoreVertical,
//   Calendar,
//   Users,
//   Clock,
//   ChevronRight,
//   Layout,
//   Layers,
//   Sparkles,
//   Target,
//   ArrowRight,
//   CheckCircle,
//   AlertCircle,
//   Copy,
//   Star,
//   TrendingUp,
//   Filter,
//   ArrowUpRight,
//   Edit3,
//   Trash,
//   Share2,
//   Archive,
//   PieChart,
//   Activity,
//   ListTodo,
// } from "lucide-react";

// import {
//   SidebarProvider,
//   SidebarInset,
//   SidebarTrigger,
// } from "@/components/ui/sidebar";
// import { AppSidebar } from "@/components/app-sidebar";
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Separator } from "@/components/ui/separator";
// import { Label } from "@/components/ui/label";
// import { Badge } from "@/components/ui/badge";
// import { Progress } from "@/components/ui/progress";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Textarea } from "@/components/ui/textarea";

// // Sample template data
// const templates = [
//   {
//     id: 1,
//     name: "Website Project Template",
//     description: "Complete website development workflow",
//     taskCount: 8,
//     createdAt: "2024-03-15",
//     category: "Development",
//     usageCount: 24,
//     status: "Popular",
//     progress: 75,
//     starred: true,
//     tasks: [
//       {
//         title: "Initial Planning",
//         priority: "High",
//         dueOffset: 3,
//         assignee: "John Doe",
//         type: "Planning",
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: "Marketing Campaign Template",
//     description: "Strategic marketing campaign setup",
//     taskCount: 5,
//     createdAt: "2024-03-10",
//     category: "Marketing",
//     usageCount: 15,
//     status: "New",
//     progress: 45,
//     starred: false,
//     tasks: [
//       {
//         title: "Campaign Strategy",
//         priority: "High",
//         dueOffset: 2,
//         assignee: "Alice Smith",
//         type: "Strategy",
//       },
//     ],
//   },
//   {
//     id: 3,
//     name: "Client Onboarding Template",
//     description: "Streamlined client onboarding process",
//     taskCount: 6,
//     createdAt: "2024-03-05",
//     category: "Operations",
//     usageCount: 32,
//     status: "Trending",
//     progress: 90,
//     starred: true,
//     tasks: [
//       {
//         title: "Welcome Meeting",
//         priority: "High",
//         dueOffset: 1,
//         assignee: "Mike Lee",
//         type: "Meeting",
//       },
//     ],
//   },
// ];

// const taskTypes = [
//   { value: "development", label: "Development", icon: Layout },
//   { value: "design", label: "Design", icon: Layers },
//   { value: "marketing", label: "Marketing", icon: Target },
//   { value: "planning", label: "Planning", icon: Calendar },
// ];

// interface Task {
//   title: string;
//   priority: string;
//   dueOffset: number;
//   assignee: string;
// }

// interface Template {
//   name: string;
//   category: string;
//   description: string;
//   tasks: Task[];
// }

// export default function TemplatesPage() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [isNewTemplateOpen, setIsNewTemplateOpen] = useState(false);
//   const [newTemplate, setNewTemplate] = useState({
//     name: "",
//     description: "",
//     category: "",
//     tasks: [
//       { title: "", priority: "Medium", dueOffset: 1, assignee: "", type: "" },
//     ],
//   });

// //   const addTask = () => {
// //     setNewTemplate((prev) => ({
// //       ...prev,
// //       tasks: [
// //         ...prev.tasks,
// //         { title: "", priority: "Medium", dueOffset: 1, assignee: "", type: "" },
// //       ],
// //     }));
// //   };

// //   const removeTask = (index: number) => {
// //     setNewTemplate((prev) => ({
// //       ...prev,
// //       tasks: prev.tasks.filter((_, i) => i !== index),
// //     }));
// //   };

//   const filteredTemplates = templates.filter((template) => {
//     const matchesSearch = template.name
//       .toLowerCase()
//       .includes(searchQuery.toLowerCase());
//     const matchesCategory =
//       selectedCategory === "all" ||
//       template.category.toLowerCase() === selectedCategory.toLowerCase();
//     return matchesSearch && matchesCategory;
//   });

//   const starredTemplates = filteredTemplates.filter((t) => t.starred);
//   const recentTemplates = filteredTemplates.sort(
//     (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
//   );
    
    
//       const [isOpen, setIsOpen] = useState(false);
//       const [template, setTemplate] = useState<Template>({
//         name: "",
//         category: "",
//         description: "",
//         tasks: [],
//       });

//       const addTask = () => {
//         setTemplate((prev) => ({
//           ...prev,
//           tasks: [
//             ...prev.tasks,
//             { title: "", priority: "", dueOffset: 1, assignee: "" },
//           ],
//         }));
//       };

//       const removeTask = (index: number) => {
//         setTemplate((prev) => ({
//           ...prev,
//           tasks: prev.tasks.filter((_, i) => i !== index),
//         }));
//       };

//   return (
//     <SidebarProvider
//       style={
//         {
//           "--sidebar-width": "350px",
//         } as React.CSSProperties
//       }
//     >
//       <AppSidebar />
//       <SidebarInset className="bg-background">
//         <header className="bg-background/95 backdrop-blur-sm sticky top-0 z-10 flex items-center justify-between border-b px-6 py-4">
//           <div className="flex items-center gap-4">
//             <SidebarTrigger className="-ml-2" />
//             <Separator orientation="vertical" className="h-6" />
//             <Breadcrumb>
//               <BreadcrumbList>
//                 <BreadcrumbItem className="hidden md:block">
//                   <BreadcrumbLink
//                     href="#"
//                     className="text-muted-foreground hover:text-foreground"
//                   >
//                     Dashboard
//                   </BreadcrumbLink>
//                 </BreadcrumbItem>
//                 <BreadcrumbSeparator className="hidden md:block" />
//                 <BreadcrumbItem>
//                   <BreadcrumbPage>Templates</BreadcrumbPage>
//                 </BreadcrumbItem>
//               </BreadcrumbList>
//             </Breadcrumb>
//           </div>
//           <div className="flex items-center gap-6">
//             <div className="relative hidden lg:block">
//               <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
//               <Input
//                 type="search"
//                 placeholder="Search templates..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-64 pl-8 bg-muted/50 focus:bg-background transition-colors"
//               />
//             </div>
//             <Button
//               variant="outline"
//               size="icon"
//               className="rounded-full relative hover:bg-primary/10 transition-colors"
//             >
//               <Bell className="h-5 w-5" />
//               <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 border-2 border-background animate-pulse"></span>
//             </Button>
//             <Button
//               variant="ghost"
//               size="icon"
//               className="rounded-full hover:bg-primary/10"
//             >
//               <Settings className="h-5 w-5" />
//             </Button>
//             <Separator orientation="vertical" className="h-6" />
//           </div>
//         </header>

//         <div className="container mx-auto p-6 space-y-8">
//           <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-8 backdrop-blur-sm border">
//             <div className="absolute inset-0 bg-grid-white/10" />
//             <div className="relative">
//               <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
//                 <div className="space-y-2">
//                   <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
//                     Template Management
//                   </h1>
//                   <p className="text-muted-foreground text-lg max-w-2xl">
//                     Create and manage project templates to streamline your
//                     workflow. Start with a template to ensure consistency across
//                     your projects.
//                   </p>
//                 </div>
//                 <Dialog open={isOpen} onOpenChange={setIsOpen}>
//                   <DialogTrigger asChild>
//                     <Button className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 hover:from-primary/90 hover:via-primary/80 hover:to-primary/70 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/20 group rounded-lg">
//                       <Plus className="mr-2 h-4 w-4 group-hover:rotate-90 transition-transform duration-300" />
//                       New Template
//                     </Button>
//                   </DialogTrigger>
//                   <DialogContent className="sm:max-w-[800px] h-[85vh] p-0 rounded-2xl border-primary/20 shadow-2xl backdrop-blur-xl bg-background/95">
//                     <DialogHeader className="px-6 py-4 bg-gradient-to-br from-background via-background/95 to-muted/50 sticky top-0 z-10 border-b border-primary/20 backdrop-blur-xl rounded-t-2xl">
//                       <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent flex items-center gap-2">
//                         <Sparkles className="h-6 w-6 text-primary animate-pulse" />
//                         Create New Template
//                       </DialogTitle>
//                       <DialogDescription className="text-muted-foreground">
//                         Design a new project template with predefined tasks and
//                         workflows.
//                       </DialogDescription>
//                     </DialogHeader>

//                     <div className="flex flex-col h-full overflow-hidden">
//                       <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                           <div className="space-y-4">
//                             <div className="bg-muted/30 p-6 rounded-xl space-y-3 backdrop-blur-sm border border-primary/10 hover:border-primary/20 transition-colors shadow-sm hover:shadow-lg hover:shadow-primary/5 group">
//                               <Label
//                                 htmlFor="template-name"
//                                 className="text-sm font-medium flex items-center gap-2"
//                               >
//                                 <Layout className="h-4 w-4 text-primary group-hover:rotate-180 transition-transform duration-500" />
//                                 Template Name
//                               </Label>
//                               <Input
//                                 id="template-name"
//                                 placeholder="Enter template name"
//                                 value={template.name}
//                                 onChange={(e) =>
//                                   setTemplate((prev) => ({
//                                     ...prev,
//                                     name: e.target.value,
//                                   }))
//                                 }
//                                 className="border-primary/20 focus:border-primary transition-colors bg-background/50 focus:ring-primary/20 focus:ring-offset-2 focus:ring-offset-background"
//                               />
//                             </div>
//                             <div className="bg-muted/30 p-6 rounded-xl space-y-3 backdrop-blur-sm border border-primary/10 hover:border-primary/20 transition-colors shadow-sm hover:shadow-lg hover:shadow-primary/5 group">
//                               <Label className="text-sm font-medium flex items-center gap-2">
//                                 <Target className="h-4 w-4 text-primary group-hover:rotate-180 transition-transform duration-500" />
//                                 Category
//                               </Label>
//                               <Select
//                                 value={template.category}
//                                 onValueChange={(value) =>
//                                   setTemplate((prev) => ({
//                                     ...prev,
//                                     category: value,
//                                   }))
//                                 }
//                               >
//                                 <SelectTrigger className="border-primary/20 focus:border-primary transition-colors bg-background/50">
//                                   <SelectValue placeholder="Select category" />
//                                 </SelectTrigger>
//                                 <SelectContent>
//                                   {taskTypes.map((type) => (
//                                     <SelectItem
//                                       key={type.value}
//                                       value={type.value}
//                                       className="group"
//                                     >
//                                       <div className="flex items-center gap-2">
//                                         <type.icon className="h-4 w-4 text-primary group-hover:rotate-180 transition-transform duration-500" />
//                                         <span>{type.label}</span>
//                                       </div>
//                                     </SelectItem>
//                                   ))}
//                                 </SelectContent>
//                               </Select>
//                             </div>
//                           </div>
//                           <div className="bg-muted/30 p-6 rounded-xl space-y-3 backdrop-blur-sm border border-primary/10 hover:border-primary/20 transition-colors shadow-sm hover:shadow-lg hover:shadow-primary/5 group">
//                             <Label
//                               htmlFor="template-description"
//                               className="text-sm font-medium flex items-center gap-2"
//                             >
//                               <ListTodo className="h-4 w-4 text-primary group-hover:rotate-180 transition-transform duration-500" />
//                               Description
//                             </Label>
//                             <Textarea
//                               id="template-description"
//                               placeholder="Brief description of the template"
//                               value={template.description}
//                               onChange={(e) =>
//                                 setTemplate((prev) => ({
//                                   ...prev,
//                                   description: e.target.value,
//                                 }))
//                               }
//                               className="border-primary/20 focus:border-primary transition-colors bg-background/50 min-h-[120px] resize-none focus:ring-primary/20 focus:ring-offset-2 focus:ring-offset-background"
//                             />
//                             <p className="text-xs text-muted-foreground">
//                               Provide a clear and concise description of what
//                               this template is used for.
//                             </p>
//                           </div>
//                         </div>

//                         <Separator className="my-6 bg-primary/20" />

//                         <div>
//                           <div className="flex items-center justify-between mb-6">
//                             <div>
//                               <h4 className="text-sm font-medium flex items-center gap-2">
//                                 <ListTodo className="h-4 w-4 text-primary" />
//                                 Tasks
//                               </h4>
//                               <p className="text-sm text-muted-foreground">
//                                 Add tasks to your template
//                               </p>
//                             </div>
//                             <Button
//                               onClick={addTask}
//                               variant="outline"
//                               size="sm"
//                               className="h-8 hover:bg-primary/10 hover:text-primary transition-colors group border-primary/20"
//                             >
//                               <Plus className="h-4 w-4 mr-2 group-hover:rotate-90 transition-transform duration-300" />
//                               Add Task
//                             </Button>
//                           </div>

//                           <div className="space-y-4">
//                             {template.tasks.map((task, index) => (
//                               <Card
//                                 key={index}
//                                 className="relative group border-primary/10 hover:border-primary/30 transition-colors bg-muted/30 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/5 animate-in slide-in-from-left duration-500"
//                                 style={{
//                                   animationDelay: `${index * 100}ms`,
//                                 }}
//                               >
//                                 <CardHeader className="pb-2">
//                                   <div className="flex items-center gap-4">
//                                     <div className="flex items-center gap-2 flex-1">
//                                       <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded-md">
//                                         #{index + 1}
//                                       </span>
//                                       <Input
//                                         placeholder="Task title"
//                                         value={task.title}
//                                         onChange={(e) => {
//                                           const newTasks = [...template.tasks];
//                                           newTasks[index] = {
//                                             ...task,
//                                             title: e.target.value,
//                                           };
//                                           setTemplate((prev) => ({
//                                             ...prev,
//                                             tasks: newTasks,
//                                           }));
//                                         }}
//                                         className="text-lg font-medium border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 px-0"
//                                       />
//                                     </div>
//                                     <Button
//                                       variant="ghost"
//                                       size="icon"
//                                       onClick={() => removeTask(index)}
//                                       className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-destructive/10 hover:text-destructive"
//                                     >
//                                       <Trash2 className="h-4 w-4" />
//                                     </Button>
//                                   </div>
//                                 </CardHeader>
//                                 <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                                   <div className="space-y-2">
//                                     <Label className="text-sm flex items-center gap-2">
//                                       <Target className="h-4 w-4 text-primary" />
//                                       Priority
//                                     </Label>
//                                     <Select
//                                       value={task.priority}
//                                       onValueChange={(value) => {
//                                         const newTasks = [...template.tasks];
//                                         newTasks[index] = {
//                                           ...task,
//                                           priority: value,
//                                         };
//                                         setTemplate((prev) => ({
//                                           ...prev,
//                                           tasks: newTasks,
//                                         }));
//                                       }}
//                                     >
//                                       <SelectTrigger className="border-primary/20 bg-background/50">
//                                         <SelectValue placeholder="Select priority" />
//                                       </SelectTrigger>
//                                       <SelectContent>
//                                         <SelectItem value="High">
//                                           <div className="flex items-center gap-2">
//                                             <AlertCircle className="h-4 w-4 text-red-500" />
//                                             <span>High</span>
//                                           </div>
//                                         </SelectItem>
//                                         <SelectItem value="Medium">
//                                           <div className="flex items-center gap-2">
//                                             <Clock className="h-4 w-4 text-yellow-500" />
//                                             <span>Medium</span>
//                                           </div>
//                                         </SelectItem>
//                                         <SelectItem value="Low">
//                                           <div className="flex items-center gap-2">
//                                             <CheckCircle className="h-4 w-4 text-green-500" />
//                                             <span>Low</span>
//                                           </div>
//                                         </SelectItem>
//                                       </SelectContent>
//                                     </Select>
//                                   </div>
//                                   <div className="space-y-2">
//                                     <Label className="text-sm flex items-center gap-2">
//                                       <Calendar className="h-4 w-4 text-primary" />
//                                       Due Date Offset (days)
//                                     </Label>
//                                     <Input
//                                       type="number"
//                                       min="1"
//                                       value={task.dueOffset}
//                                       onChange={(e) => {
//                                         const newTasks = [...template.tasks];
//                                         newTasks[index] = {
//                                           ...task,
//                                           dueOffset: parseInt(e.target.value),
//                                         };
//                                         setTemplate((prev) => ({
//                                           ...prev,
//                                           tasks: newTasks,
//                                         }));
//                                       }}
//                                       className="border-primary/20 bg-background/50"
//                                     />
//                                   </div>
//                                   <div className="space-y-2">
//                                     <Label className="text-sm flex items-center gap-2">
//                                       <Users className="h-4 w-4 text-primary" />
//                                       Assignee
//                                     </Label>
//                                     <Input
//                                       placeholder="Assignee name"
//                                       value={task.assignee}
//                                       onChange={(e) => {
//                                         const newTasks = [...template.tasks];
//                                         newTasks[index] = {
//                                           ...task,
//                                           assignee: e.target.value,
//                                         };
//                                         setTemplate((prev) => ({
//                                           ...prev,
//                                           tasks: newTasks,
//                                         }));
//                                       }}
//                                       className="border-primary/20 bg-background/50"
//                                     />
//                                   </div>
//                                 </CardContent>
//                               </Card>
//                             ))}
//                           </div>
//                         </div>
//                       </div>

//                       <div className="sticky bottom-0 flex justify-end gap-3 p-4 bg-gradient-to-t from-background via-background/95 to-background/80 backdrop-blur-xl border-t border-primary/20">
//                         <Button
//                           variant="outline"
//                           onClick={() => setIsOpen(false)}
//                           className="hover:bg-destructive/10 hover:text-destructive hover:border-destructive/30"
//                         >
//                           Cancel
//                         </Button>
//                         <Button
//                           onClick={() => {
//                             // Handle save template logic here
//                             setIsOpen(false);
//                           }}
//                           className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 hover:from-primary/90 hover:via-primary/80 hover:to-primary/70 shadow-lg hover:shadow-xl hover:shadow-primary/20"
//                         >
//                           <CheckCircle className="h-4 w-4 mr-2" />
//                           Save Template
//                         </Button>
//                       </div>
//                     </div>
//                   </DialogContent>
//                 </Dialog>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
//                 <Card className="bg-white/50 backdrop-blur-sm hover:bg-white/60 transition-colors">
//                   <CardHeader className="pb-2">
//                     <div className="flex items-start justify-between">
//                       <div>
//                         <CardTitle className="text-sm font-medium text-muted-foreground">
//                           Total Templates
//                         </CardTitle>

//                         <div className="flex items-baseline gap-2">
//                           <div className="text-2xl font-bold">
//                             {templates.length}
//                           </div>

//                           <span className="text-xs text-green-600 flex items-center">
//                             <ArrowUpRight className="h-3 w-3" />
//                             +2 this week
//                           </span>
//                         </div>
//                       </div>

//                       <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
//                         <FileText className="h-4 w-4 text-primary" />
//                       </div>
//                     </div>

//                     <div className="mt-4 flex items-center gap-4 text-sm">
//                       <div className="flex items-center gap-1 text-muted-foreground">
//                         <Activity className="h-4 w-4" />
//                         <span>12 active</span>
//                       </div>

//                       <div className="flex items-center gap-1 text-muted-foreground">
//                         <Archive className="h-4 w-4" />
//                         <span>3 archived</span>
//                       </div>
//                     </div>
//                   </CardHeader>
//                 </Card>

//                 <Card className="bg-white/50 backdrop-blur-sm hover:bg-white/60 transition-colors">
//                   <CardHeader className="pb-2">
//                     <div className="flex items-start justify-between">
//                       <div>
//                         <CardTitle className="text-sm font-medium text-muted-foreground">
//                           Active Projects
//                         </CardTitle>

//                         <div className="flex items-baseline gap-2">
//                           <div className="text-2xl font-bold">12</div>

//                           <span className="text-xs text-green-600 flex items-center">
//                             <ArrowUpRight className="h-3 w-3" />
//                             +3 this month
//                           </span>
//                         </div>
//                       </div>

//                       <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
//                         <PieChart className="h-4 w-4 text-primary" />
//                       </div>
//                     </div>

//                     <div className="mt-4 flex items-center gap-4 text-sm">
//                       <div className="flex items-center gap-1 text-muted-foreground">
//                         <CheckCircle className="h-4 w-4" />
//                         <span>8 on track</span>
//                       </div>

//                       <div className="flex items-center gap-1 text-muted-foreground">
//                         <AlertCircle className="h-4 w-4" />
//                         <span>4 at risk</span>
//                       </div>
//                     </div>
//                   </CardHeader>
//                 </Card>
//                 <Card className="bg-white/50 backdrop-blur-sm hover:bg-white/60 transition-colors">
//                   <CardHeader className="pb-2">
//                     <div className="flex items-start justify-between">
//                       <div>
//                         <CardTitle className="text-sm font-medium text-muted-foreground">
//                           Team Members
//                         </CardTitle>

//                         <div className="flex items-baseline gap-2">
//                           <div className="text-2xl font-bold">8</div>

//                           <span className="text-xs text-green-600 flex items-center">
//                             <ArrowUpRight className="h-3 w-3" />
//                             +1 new
//                           </span>
//                         </div>
//                       </div>

//                       <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
//                         <Users className="h-4 w-4 text-primary" />
//                       </div>
//                     </div>

//                     <div className="mt-4 flex items-center gap-4 text-sm">
//                       <div className="flex items-center gap-1 text-muted-foreground">
//                         <Activity className="h-4 w-4" />
//                         <span>6 active now</span>
//                       </div>

//                       <div className="flex items-center gap-1 text-muted-foreground">
//                         <ListTodo className="h-4 w-4" />
//                         <span>24 tasks</span>
//                       </div>
//                     </div>
//                   </CardHeader>
//                 </Card>
//               </div>
//             </div>
//           </div>

//           <div className="flex items-center justify-between gap-4 flex-wrap">
//             <div className="flex items-center gap-4">
//               <Select
//                 value={selectedCategory}
//                 onValueChange={setSelectedCategory}
//               >
//                 <SelectTrigger className="w-[180px]">
//                   <Filter className="h-4 w-4 mr-2" />
//                   <SelectValue placeholder="Filter by category" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="all">All Categories</SelectItem>
//                   {taskTypes.map((type) => (
//                     <SelectItem key={type.value} value={type.value}>
//                       <div className="flex items-center gap-2">
//                         <type.icon className="h-4 w-4" />
//                         <span>{type.label}</span>
//                       </div>
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>
//             <div className="flex items-center gap-2">
//               <Button variant="outline" size="sm" className="h-8">
//                 <Clock className="h-4 w-4 mr-1" /> Recent
//               </Button>
//               <Button variant="outline" size="sm" className="h-8">
//                 <Star className="h-4 w-4 mr-1" /> Starred
//               </Button>
//               <Button variant="outline" size="sm" className="h-8">
//                 <TrendingUp className="h-4 w-4 mr-1" /> Popular
//               </Button>
//             </div>
//           </div>

//           <Tabs defaultValue="all" className="space-y-6">
//             <TabsList>
//               <TabsTrigger value="all">All Templates</TabsTrigger>
//               <TabsTrigger value="starred">Starred</TabsTrigger>
//               <TabsTrigger value="recent">Recent</TabsTrigger>
//             </TabsList>

//             <TabsContent value="all" className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {filteredTemplates.map((template) => (
//                   <TemplateCard key={template.id} template={template} />
//                 ))}
//               </div>
//             </TabsContent>

//             <TabsContent value="starred" className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {starredTemplates.map((template) => (
//                   <TemplateCard key={template.id} template={template} />
//                 ))}
//               </div>
//             </TabsContent>

//             <TabsContent value="recent" className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {recentTemplates.map((template) => (
//                   <TemplateCard key={template.id} template={template} />
//                 ))}
//               </div>
//             </TabsContent>
//           </Tabs>
//         </div>
//       </SidebarInset>
//     </SidebarProvider>
//   );
// }

// function TemplateCard({ template }) {
//   return (
//     <Card className="group hover:shadow-xl transition-all duration-300 relative overflow-hidden border hover:border-primary/20">
//       <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
//       <CardHeader className="pb-2">
//         <div className="flex items-start justify-between">
//           <div className="space-y-1">
//             <div className="flex items-center gap-2">
//               <CardTitle className="text-xl font-semibold">
//                 {template.name}
//               </CardTitle>
//               <div className="flex items-center gap-2">
//                 {template.status === "Popular" && (
//                   <Badge
//                     variant="default"
//                     className="bg-primary/20 text-primary"
//                   >
//                     <Sparkles className="h-3 w-3 mr-1" /> Popular
//                   </Badge>
//                 )}
//                 {template.status === "New" && (
//                   <Badge
//                     variant="default"
//                     className="bg-green-500/20 text-green-700"
//                   >
//                     New
//                   </Badge>
//                 )}
//                 {template.status === "Trending" && (
//                   <Badge
//                     variant="default"
//                     className="bg-blue-500/20 text-blue-700"
//                   >
//                     <TrendingUp className="h-3 w-3 mr-1" /> Trending
//                   </Badge>
//                 )}
//               </div>
//             </div>
//             <CardDescription className="line-clamp-2">
//               {template.description}
//             </CardDescription>
//           </div>
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 // className="h-8 w-8 -mt-1 opacity-0 group-hover:opacity-100 transition-opacity"
//               >
//                 {/* <MoreVertical className="h-4 w-4" /> */}
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="end" className="w-48">
//               <DropdownMenuLabel>Template Actions</DropdownMenuLabel>
//               <DropdownMenuSeparator />
//               <DropdownMenuItem>
//                 <Edit3 className="h-4 w-4 mr-2" /> Edit Template
//               </DropdownMenuItem>
//               <DropdownMenuItem>
//                 <Share2 className="h-4 w-4 mr-2" /> Share Template
//               </DropdownMenuItem>
//               <DropdownMenuItem>
//                 <Archive className="h-4 w-4 mr-2" /> Archive Template
//               </DropdownMenuItem>
//               <DropdownMenuSeparator />
//               <DropdownMenuItem className="text-destructive">
//                 <Trash className="h-4 w-4 mr-2" /> Delete Template
//               </DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>
//         </div>
//       </CardHeader>
//       <CardContent>
//         <div className="space-y-4">
//           <div className="flex items-center justify-between text-sm text-muted-foreground">
//             <div className="flex items-center gap-1">
//               <Calendar className="h-4 w-4" />
//               <span>{new Date(template.createdAt).toLocaleDateString()}</span>
//             </div>
//             <div className="flex items-center gap-1">
//               <Users className="h-4 w-4" />
//               <span>{template.usageCount} uses</span>
//             </div>
//             <div className="flex items-center gap-1">
//               <ListTodo className="h-4 w-4" />
//               <span>{template.taskCount} tasks</span>
//             </div>
//           </div>
//           <Progress value={template.progress} className="h-2" />
//           <div className="flex items-center gap-3">
//             <Button
//               variant="outline"
//                           className="flex-1 h-9 justify-center group/edit text-center"
//                           style={{textAlign: 'center'}}
//             >
//               <span className="flex items-center text-center">
//                 Edit template
                
//               </span>
//             </Button>
//             <Button className="flex-1 h-9 justify-center bg-gradient-to-r from-primary to-primary/80 group/use">
//               <span className="flex items-center">
//                 Use template
                
//               </span>
//             </Button>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }




"use client";

import React, { useState } from "react";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Textarea } from "@/components/ui/textarea";

import {
  Plus,
  Search,
  Settings,
  Bell,
  FileText,
  Trash2,
  MoreVertical,
  Calendar,
  Users,
  Clock,
  ChevronRight,
  Layout,
  Layers,
  Sparkles,
  Target,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Copy,
  Star,
  TrendingUp,
  Filter,
  ArrowUpRight,
  Edit3,
  Trash,
  Share2,
  Archive,
  PieChart,
  Activity,
  ListTodo,
  Menu,
} from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";

// Sample template data
const templates = [
  {
    id: 1,
    name: "Website Project Template",
    description: "Complete website development workflow",
    taskCount: 8,
    createdAt: "2024-03-15",
    category: "Development",
    usageCount: 24,
    status: "Popular",
    progress: 75,
    starred: true,
    tasks: [
      {
        title: "Initial Planning",
        priority: "High",
        dueOffset: 3,
        assignee: "John Doe",
        type: "Planning",
      },
    ],
  },
  {
    id: 2,
    name: "Marketing Campaign Template",
    description: "Strategic marketing campaign setup",
    taskCount: 5,
    createdAt: "2024-03-10",
    category: "Marketing",
    usageCount: 15,
    status: "New",
    progress: 45,
    starred: false,
    tasks: [
      {
        title: "Campaign Strategy",
        priority: "High",
        dueOffset: 2,
        assignee: "Alice Smith",
        type: "Strategy",
      },
    ],
  },
  {
    id: 3,
    name: "Client Onboarding Template",
    description: "Streamlined client onboarding process",
    taskCount: 6,
    createdAt: "2024-03-05",
    category: "Operations",
    usageCount: 32,
    status: "Trending",
    progress: 90,
    starred: true,
    tasks: [
      {
        title: "Welcome Meeting",
        priority: "High",
        dueOffset: 1,
        assignee: "Mike Lee",
        type: "Meeting",
      },
    ],
  },
];

const taskTypes = [
  { value: "development", label: "Development", icon: Layout },
  { value: "design", label: "Design", icon: Layers },
  { value: "marketing", label: "Marketing", icon: Target },
  { value: "planning", label: "Planning", icon: Calendar },
];

interface Task {
  title: string;
  priority: string;
  dueOffset: number;
  assignee: string;
}

interface Template {
  name: string;
  category: string;
  description: string;
  tasks: Task[];
}

export default function TemplatesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isOpen, setIsOpen] = useState(false);
  const [template, setTemplate] = useState<Template>({
    name: "",
    category: "",
    description: "",
    tasks: [],
  });

  const addTask = () => {
    setTemplate((prev) => ({
      ...prev,
      tasks: [
        ...prev.tasks,
        { title: "", priority: "", dueOffset: 1, assignee: "" },
      ],
    }));
  };

  const removeTask = (index: number) => {
    setTemplate((prev) => ({
      ...prev,
      tasks: prev.tasks.filter((_, i) => i !== index),
    }));
  };

  const filteredTemplates = templates.filter((template) => {
    const matchesSearch = template.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" ||
      template.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  const starredTemplates = filteredTemplates.filter((t) => t.starred);
  const recentTemplates = filteredTemplates.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

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
        <header className="bg-background/95 backdrop-blur-sm sticky top-0 z-10 flex items-center justify-between border-b px-4 sm:px-6 py-4">
          <div className="flex items-center gap-4">
            <SidebarTrigger className="-ml-2" />
            <Separator orientation="vertical" className="h-6 hidden sm:block" />
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
                  <BreadcrumbPage>Templates</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex items-center gap-2 sm:gap-6">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden rounded-full hover:bg-primary/10"
            >
              <Search className="h-5 w-5" />
            </Button>

            <div className="relative hidden lg:block">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search templates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 pl-8 bg-muted/50 focus:bg-background transition-colors"
              />
            </div>

            <Button
              variant="outline"
              size="icon"
              className="rounded-full relative hover:bg-primary/10 transition-colors hidden sm:flex"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 border-2 border-background animate-pulse"></span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-primary/10 hidden sm:flex"
            >
              <Settings className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="sm:hidden rounded-full hover:bg-primary/10"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </header>

        <div className="container mx-auto px-4 sm:px-6 py-6 space-y-8">
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-4 sm:p-8 backdrop-blur-sm border">
            <div className="absolute inset-0 bg-grid-white/10" />
            <div className="relative">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-2">
                  <h1 className="text-4xl sm:text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
                    Template Management
                  </h1>
                  <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
                    Create and manage project templates to streamline your
                    workflow. Start with a template to ensure consistency across
                    your projects.
                  </p>
                </div>
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 hover:from-primary/90 hover:via-primary/80 hover:to-primary/70 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/20 group rounded-lg w-full sm:w-auto">
                      <Plus className="mr-2 h-4 w-4 group-hover:rotate-90 transition-transform duration-300" />
                      New Template
                    </Button>
                  </DialogTrigger>
                  <DialogContent style={{zIndex: '999'}} className="sm:max-w-[800px] h-[85vh] p-0 rounded-2xl border-primary/20 shadow-2xl backdrop-blur-xl bg-background/95">
                    <DialogHeader className="px-6 py-4 bg-gradient-to-br from-background via-background/95 to-muted/50 sticky top-0 z-10 border-b border-primary/20 backdrop-blur-xl rounded-t-2xl">
                      <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent flex items-center gap-2">
                        <Sparkles className="h-6 w-6 text-primary animate-pulse" />
                        Create New Template
                      </DialogTitle>
                      <DialogDescription className="text-muted-foreground">
                        Design a new project template with predefined tasks and
                        workflows.
                      </DialogDescription>
                    </DialogHeader>

                    <div className="flex flex-col h-full overflow-hidden">
                      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <div className="bg-muted/30 p-6 rounded-xl space-y-3 backdrop-blur-sm border border-primary/10 hover:border-primary/20 transition-colors shadow-sm hover:shadow-lg hover:shadow-primary/5 group">
                              <Label
                                htmlFor="template-name"
                                className="text-sm font-medium flex items-center gap-2"
                              >
                                <Layout className="h-4 w-4 text-primary group-hover:rotate-180 transition-transform duration-500" />
                                Template Name
                              </Label>
                              <Input
                                id="template-name"
                                placeholder="Enter template name"
                                value={template.name}
                                onChange={(e) =>
                                  setTemplate((prev) => ({
                                    ...prev,
                                    name: e.target.value,
                                  }))
                                }
                                className="border-primary/20 focus:border-primary transition-colors bg-background/50 focus:ring-primary/20 focus:ring-offset-2 focus:ring-offset-background"
                              />
                            </div>
                            <div className="bg-muted/30 p-6 rounded-xl space-y-3 backdrop-blur-sm border border-primary/10 hover:border-primary/20 transition-colors shadow-sm hover:shadow-lg hover:shadow-primary/5 group">
                              <Label className="text-sm font-medium flex items-center gap-2">
                                <Target className="h-4 w-4 text-primary group-hover:rotate-180 transition-transform duration-500" />
                                Category
                              </Label>
                              <Select
                                value={template.category}
                                onValueChange={(value) =>
                                  setTemplate((prev) => ({
                                    ...prev,
                                    category: value,
                                  }))
                                }
                              >
                                <SelectTrigger className="border-primary/20 focus:border-primary transition-colors bg-background/50">
                                  <SelectValue placeholder="Select category" />
                                </SelectTrigger>
                                <SelectContent>
                                  {taskTypes.map((type) => (
                                    <SelectItem
                                      key={type.value}
                                      value={type.value}
                                      className="group"
                                    >
                                      <div className="flex items-center gap-2">
                                        <type.icon className="h-4 w-4 text-primary group-hover:rotate-180 transition-transform duration-500" />
                                        <span>{type.label}</span>
                                      </div>
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          <div className="bg-muted/30 p-6 rounded-xl space-y-3 backdrop-blur-sm border border-primary/10 hover:border-primary/20 transition-colors shadow-sm hover:shadow-lg hover:shadow-primary/5 group">
                            <Label
                              htmlFor="template-description"
                              className="text-sm font-medium flex items-center gap-2"
                            >
                              <ListTodo className="h-4 w-4 text-primary group-hover:rotate-180 transition-transform duration-500" />
                              Description
                            </Label>
                            <Textarea
                              id="template-description"
                              placeholder="Brief description of the template"
                              value={template.description}
                              onChange={(e) =>
                                setTemplate((prev) => ({
                                  ...prev,
                                  description: e.target.value,
                                }))
                              }
                              className="border-primary/20 focus:border-primary transition-colors bg-background/50 min-h-[120px] resize-none focus:ring-primary/20 focus:ring-offset-2 focus:ring-offset-background"
                            />
                            <p className="text-xs text-muted-foreground">
                              Provide a clear and concise description of what
                              this template is used for.
                            </p>
                          </div>
                        </div>

                        <Separator className="my-6 bg-primary/20" />

                        <div>
                          <div className="flex items-center justify-between mb-6">
                            <div>
                              <h4 className="text-sm font-medium flex items-center gap-2">
                                <ListTodo className="h-4 w-4 text-primary" />
                                Tasks
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                Add tasks to your template
                              </p>
                            </div>
                            <Button
                              onClick={addTask}
                              variant="outline"
                              size="sm"
                              className="h-8 hover:bg-primary/10 hover:text-primary transition-colors group border-primary/20"
                            >
                              <Plus className="h-4 w-4 mr-2 group-hover:rotate-90 transition-transform duration-300" />
                              Add Task
                            </Button>
                          </div>

                          <div className="space-y-4">
                            {template.tasks.map((task, index) => (
                              <Card
                                key={index}
                                className="relative group border-primary/10 hover:border-primary/30 transition-colors bg-muted/30 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/5 animate-in slide-in-from-left duration-500"
                                style={{
                                  animationDelay: `${index * 100}ms`,
                                }}
                              >
                                <CardHeader className="pb-2">
                                  <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-2 flex-1">
                                      <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded-md">
                                        #{index + 1}
                                      </span>
                                      <Input
                                        placeholder="Task title"
                                        value={task.title}
                                        onChange={(e) => {
                                          const newTasks = [...template.tasks];
                                          newTasks[index] = {
                                            ...task,
                                            title: e.target.value,
                                          };
                                          setTemplate((prev) => ({
                                            ...prev,
                                            tasks: newTasks,
                                          }));
                                        }}
                                        className="text-lg font-medium border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 px-0"
                                      />
                                    </div>
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      onClick={() => removeTask(index)}
                                      className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-destructive/10 hover:text-destructive"
                                    >
                                      <Trash2 className="h-4 w-4" />
                                    </Button>
                                  </div>
                                </CardHeader>
                                <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                  <div className="space-y-2">
                                    <Label className="text-sm flex items-center gap-2">
                                      <Target className="h-4 w-4 text-primary" />
                                      Priority
                                    </Label>
                                    <Select
                                      value={task.priority}
                                      onValueChange={(value) => {
                                        const newTasks = [...template.tasks];
                                        newTasks[index] = {
                                          ...task,
                                          priority: value,
                                        };
                                        setTemplate((prev) => ({
                                          ...prev,
                                          tasks: newTasks,
                                        }));
                                      }}
                                    >
                                      <SelectTrigger className="border-primary/20 bg-background/50">
                                        <SelectValue placeholder="Select priority" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="High">
                                          <div className="flex items-center gap-2">
                                            <AlertCircle className="h-4 w-4 text-red-500" />
                                            <span>High</span>
                                          </div>
                                        </SelectItem>
                                        <SelectItem value="Medium">
                                          <div className="flex items-center gap-2">
                                            <Clock className="h-4 w-4 text-yellow-500" />
                                            <span>Medium</span>
                                          </div>
                                        </SelectItem>
                                        <SelectItem value="Low">
                                          <div className="flex items-center gap-2">
                                            <CheckCircle className="h-4 w-4 text-green-500" />
                                            <span>Low</span>
                                          </div>
                                        </SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </div>
                                  <div className="space-y-2">
                                    <Label className="text-sm flex items-center gap-2">
                                      <Calendar className="h-4 w-4 text-primary" />
                                      Due Date Offset (days)
                                    </Label>
                                    <Input
                                      type="number"
                                      min="1"
                                      value={task.dueOffset}
                                      onChange={(e) => {
                                        const newTasks = [...template.tasks];
                                        newTasks[index] = {
                                          ...task,
                                          dueOffset: parseInt(e.target.value),
                                        };
                                        setTemplate((prev) => ({
                                          ...prev,
                                          tasks: newTasks,
                                        }));
                                      }}
                                      className="border-primary/20 bg-background/50"
                                    />
                                  </div>
                                  <div className="space-y-2">
                                    <Label className="text-sm flex items-center gap-2">
                                      <Users className="h-4 w-4 text-primary" />
                                      Assignee
                                    </Label>
                                    <Input
                                      placeholder="Assignee name"
                                      value={task.assignee}
                                      onChange={(e) => {
                                        const newTasks = [...template.tasks];
                                        newTasks[index] = {
                                          ...task,
                                          assignee: e.target.value,
                                        };
                                        setTemplate((prev) => ({
                                          ...prev,
                                          tasks: newTasks,
                                        }));
                                      }}
                                      className="border-primary/20 bg-background/50"
                                    />
                                  </div>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="sticky bottom-0 flex justify-end gap-3 p-4 bg-gradient-to-t from-background via-background/95 to-background/80 backdrop-blur-xl border-t border-primary/20">
                        <Button
                          variant="outline"
                          onClick={() => setIsOpen(false)}
                          className="hover:bg-destructive/10 hover:text-destructive hover:border-destructive/30"
                        >
                          Cancel
                        </Button>
                        <Button
                          onClick={() => {
                            // Handle save template logic here
                            setIsOpen(false);
                          }}
                          className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 hover:from-primary/90 hover:via-primary/80 hover:to-primary/70 shadow-lg hover:shadow-xl hover:shadow-primary/20"
                        >
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Save Template
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8">
                <Card className="bg-white/50 backdrop-blur-sm hover:bg-white/60 transition-colors">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-sm font-medium text-muted-foreground">
                          Total Templates
                        </CardTitle>
                        <div className="flex items-baseline gap-2">
                          <div className="text-2xl font-bold">
                            {templates.length}
                          </div>
                          <span className="text-xs text-green-600 flex items-center">
                            <ArrowUpRight className="h-3 w-3" />
                            +2 this week
                          </span>
                        </div>
                      </div>
                      <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <FileText className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                    <div className="mt-4 flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Activity className="h-4 w-4" />
                        <span>12 active</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Archive className="h-4 w-4" />
                        <span>3 archived</span>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card className="bg-white/50 backdrop-blur-sm hover:bg-white/60 transition-colors">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-sm font-medium text-muted-foreground">
                          Active Projects
                        </CardTitle>
                        <div className="flex items-baseline gap-2">
                          <div className="text-2xl font-bold">12</div>
                          <span className="text-xs text-green-600 flex items-center">
                            <ArrowUpRight className="h-3 w-3" />
                            +3 this month
                          </span>
                        </div>
                      </div>
                      <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <PieChart className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                    <div className="mt-4 flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <CheckCircle className="h-4 w-4" />
                        <span>8 on track</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <AlertCircle className="h-4 w-4" />
                        <span>4 at risk</span>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card className="bg-white/50 backdrop-blur-sm hover:bg-white/60 transition-colors">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-sm font-medium text-muted-foreground">
                          Team Members
                        </CardTitle>
                        <div className="flex items-baseline gap-2">
                          <div className="text-2xl font-bold">8</div>
                          <span className="text-xs text-green-600 flex items-center">
                            <ArrowUpRight className="h-3 w-3" />
                            +1 new
                          </span>
                        </div>
                      </div>
                      <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Users className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                    <div className="mt-4 flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Activity className="h-4 w-4" />
                        <span>6 active now</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <ListTodo className="h-4 w-4" />
                        <span>24 tasks</span>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="w-full sm:w-auto">
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="w-full sm:w-[180px]">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {taskTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      <div className="flex items-center gap-2">
                        <type.icon className="h-4 w-4" />
                        <span>{type.label}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
              <Button
                variant="outline"
                size="sm"
                className="h-8 whitespace-nowrap"
              >
                <Clock className="h-4 w-4 mr-1" /> Recent
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-8 whitespace-nowrap"
              >
                <Star className="h-4 w-4 mr-1" /> Starred
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-8 whitespace-nowrap"
              >
                <TrendingUp className="h-4 w-4 mr-1" /> Popular
              </Button>
            </div>
          </div>

          <Tabs defaultValue="all" className="space-y-6">
            <TabsList className="">
              <TabsTrigger value="all" className="flex-1 sm:flex-none">
                All Templates
              </TabsTrigger>
              <TabsTrigger value="starred" className="flex-1 sm:flex-none">
                Starred
              </TabsTrigger>
              <TabsTrigger value="recent" className="flex-1 sm:flex-none">
                Recent
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {filteredTemplates.map((template) => (
                  <TemplateCard key={template.id} template={template} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="starred" className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {starredTemplates.map((template) => (
                  <TemplateCard key={template.id} template={template} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="recent" className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {recentTemplates.map((template) => (
                  <TemplateCard key={template.id} template={template} />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <Button className="fixed bottom-6 right-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 shadow-lg hover:shadow-primary/25 group rounded-full md:hidden">
            <Plus className="h-5 w-5" />
          </Button>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

const templateActions = [
  { label: "Edit Template", icon: <Edit3 className="h-4 w-4 mr-2" /> },
  { label: "Share Template", icon: <Share2 className="h-4 w-4 mr-2" /> },
  { label: "Archive Template", icon: <Archive className="h-4 w-4 mr-2" /> },
  {
    label: "Delete Template",
    icon: <Trash className="h-4 w-4 mr-2 text-red-500" />,
    destructive: true,
  },
];

function TemplateCard({ template }) {
    const [open, setOpen] = useState(false);

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 relative overflow-hidden border hover:border-primary/20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <CardTitle className="text-xl sm:text-xl font-semibold">
                {template.name}
              </CardTitle>
              <div className="flex flex-wrap items-center gap-2">
                {template.status === "Popular" && (
                  <Badge
                    variant="default"
                    className="bg-primary/20 text-primary"
                  >
                    <Sparkles className="h-3 w-3 mr-1" /> Popular
                  </Badge>
                )}
                {template.status === "New" && (
                  <Badge
                    variant="default"
                    className="bg-green-500/20 text-green-700"
                  >
                    New
                  </Badge>
                )}
                {template.status === "Trending" && (
                  <Badge
                    variant="default"
                    className="bg-blue-500/20 text-blue-700"
                  >
                    <TrendingUp className="h-3 w-3 mr-1" /> Trending
                  </Badge>
                )}
              </div>
            </div>
            <CardDescription className="line-clamp-2 text-sm mt-2">
              {template.description}
            </CardDescription>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                              className="h-8 w-8"
                              style={{zIndex: '999'}}
              >
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuLabel>Template Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Edit3 className="h-4 w-4 mr-2" /> Edit Template
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Share2 className="h-4 w-4 mr-2" /> Share Template
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Archive className="h-4 w-4 mr-2" /> Archive Template
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">
                <Trash className="h-4 w-4 mr-2" /> Delete Template
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {/* <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                              className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                              style={{zIndex: '999'}}
              >
                <MoreVertical className="h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-48 p-0">
              <Command>
                <CommandInput placeholder="Search actions..." />
                <CommandEmpty>No actions found.</CommandEmpty>
                <CommandGroup>
                  {templateActions.map((action) => (
                    <CommandItem
                      key={action.label}
                      onSelect={() => {
                        setOpen(false);
                        // onAction(action.label);
                      }}
                    >
                      {action.icon} {action.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover> */}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-2 sm:flex sm:items-center sm:justify-between text-sm text-muted-foreground gap-2">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span className="text-xs sm:text-sm">
                {new Date(template.createdAt).toLocaleDateString()}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span className="text-xs sm:text-sm">
                {template.usageCount} uses
              </span>
            </div>
            <div className="flex items-center gap-1">
              <ListTodo className="h-4 w-4" />
              <span className="text-xs sm:text-sm">
                {template.taskCount} tasks
              </span>
            </div>
          </div>
          <Progress value={template.progress} className="h-2" />
          <div className="flex items-center gap-2 sm:gap-3">
            <Button
              variant="outline"
              className="flex-1 h-8 sm:h-9 text-sm justify-center group/edit"
            >
              <span className="flex items-center">
                Edit template
                {/* <ArrowRight className="h-4 w-4 ml-2 opacity-0 group-hover/edit:opacity-100 group-hover/edit:translate-x-1 transition-all" /> */}
              </span>
            </Button>
            <Button className="flex-1 h-8 sm:h-9 text-sm justify-center bg-gradient-to-r from-primary to-primary/80 group/use">
              <span className="flex items-center">
                Use template
                {/* <Copy className="h-4 w-4 ml-2 opacity-0 group-hover/use:opacity-100 group-hover/use:rotate-12 transition-all" /> */}
              </span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}