// import * as React from "react"
// import { ArchiveX, Command, File, Inbox, Send, Trash2 } from "lucide-react"

// import { NavUser } from "@/components/nav-user"
// import { Label } from "@/components/ui/label"
// import {
//   Sidebar,
//   SidebarContent,
//   SidebarFooter,
//   SidebarGroup,
//   SidebarGroupContent,
//   SidebarHeader,
//   SidebarInput,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
//   useSidebar,
// } from "@/components/ui/sidebar"
// import { Switch } from "@/components/ui/switch"

// // This is sample data
// const data = {
//   user: {
//     name: "John doe",
//     email: "m@example.com",
//     avatar: "/avatars/shadcn.jpg",
//   },
//   navMain: [
//     {
//       title: "Inbox",
//       url: "#",
//       icon: Inbox,
//       isActive: true,
//     },
//     {
//       title: "Drafts",
//       url: "#",
//       icon: File,
//       isActive: false,
//     },
//     {
//       title: "Sent",
//       url: "#",
//       icon: Send,
//       isActive: false,
//     },
//     {
//       title: "Junk",
//       url: "#",
//       icon: ArchiveX,
//       isActive: false,
//     },
//     {
//       title: "Trash",
//       url: "#",
//       icon: Trash2,
//       isActive: false,
//     },
//   ],
//   mails: [
//     {
//       name: "Dashboard",
//       email: "",
//       subject: "",
//       date: "",
//       teaser:
//         "Hi team, just a reminder about our meeting tomorrow at 10 AM.\nPlease come prepared with your project updates.",
//     },
//     {
//       name: "Tasks",
//       email: "",
//       subject: "",
//       date: "Yesterday",
//       teaser:
//         "Hi team, just a reminder about our meeting tomorrow at 10 AM.\nPlease come prepared with your project updates.",
//     },
//     {
//       name: "Jobs",
//       email: "",
//       subject: "",
//       date: "1 week ago",
//       teaser:
//         "To celebrate our recent project success, I'd like to organize a team dinner.\nAre you available next Friday evening? Please let me know your preferences.",
//     },
//     {
//       name: "On-boarding",
//       email: "",
//       subject: "",
//       date: "week ago",
//       teaser:
//         "To celebrate our recent project success, I'd like to organize a team dinner.\nAre you available next Friday evening? Please let me know your preferences.",
//     },
//     {
//       name: "Companies",
//       email: "",
//       subject: "",
//       date: "2 days ago",
//       teaser:
//         "To celebrate our recent project success, I'd like to organize a team dinner.\nAre you available next Friday evening? Please let me know your preferences.",
//     },
//     {
//       name: "Locations",
//       email: "",
//       subject: "",
//       date: "1 week ago",
//       teaser:
//         "To celebrate our recent project success, I'd like to organize a team dinner.\nAre you available next Friday evening? Please let me know your preferences.",
//     },
//     {
//       name: "Managers",
//       email: "",
//       subject: "",
//       date: "1 week ago",
//       teaser:
//         "To celebrate our recent project success, I'd like to organize a team dinner.\nAre you available next Friday evening? Please let me know your preferences.",
//     },
//     {
//       name: "Manage jobs",
//       email: "",
//       subject: "",
//       date: "1 week ago",
//       teaser:
//         "To celebrate our recent project success, I'd like to organize a team dinner.\nAre you available next Friday evening? Please let me know your preferences.",
//     },
//     {
//       name: "Job templates",
//       email: "",
//       subject: "",
//       date: "1 week ago",
//       teaser:
//         "To celebrate our recent project success, I'd like to organize a team dinner.\nAre you available next Friday evening? Please let me know your preferences.",
//     },
//   ],
// };

// export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
//   // Note: I'm using state to show active item.
//   // IRL you should use the url/router.
//   const [activeItem, setActiveItem] = React.useState(data.navMain[0])
//   const [mails, setMails] = React.useState(data.mails)
//   const { setOpen } = useSidebar()

//   return (
//     <Sidebar
//       collapsible="icon"
//       className="overflow-hidden *:data-[sidebar=sidebar]:flex-row"
//       {...props}
//     >
//       {/* This is the first sidebar */}
//       {/* We disable collapsible and adjust width to icon. */}
//       {/* This will make the sidebar appear as icons. */}
//       <Sidebar
//         collapsible="none"
//         className="w-[calc(var(--sidebar-width-icon)+1px)]! border-r"
//       >
//         <SidebarHeader>
//           <SidebarMenu>
//             <SidebarMenuItem>
//               <SidebarMenuButton size="lg" asChild className="md:h-8 md:p-0">
//                 <a href="#">
//                   <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
//                     <Command className="size-4" />
//                   </div>
//                   <div className="grid flex-1 text-left text-sm leading-tight">
//                     <span className="truncate font-medium">Acme Inc</span>
//                     <span className="truncate text-xs">Enterprise</span>
//                   </div>
//                 </a>
//               </SidebarMenuButton>
//             </SidebarMenuItem>
//           </SidebarMenu>
//         </SidebarHeader>
//         <SidebarContent>
//           <SidebarGroup>
//             <SidebarGroupContent className="px-1.5 md:px-0">
//               <SidebarMenu>
//                 {data.navMain.map((item) => (
//                   <SidebarMenuItem key={item.title}>
//                     <SidebarMenuButton
//                       tooltip={{
//                         children: item.title,
//                         hidden: false,
//                       }}
//                       onClick={() => {
//                         setActiveItem(item)
//                         const mail = data.mails.sort(() => Math.random() - 0.5)
//                         setMails(
//                           mail.slice(
//                             0,
//                             Math.max(5, Math.floor(Math.random() * 10) + 1)
//                           )
//                         )
//                         setOpen(true)
//                       }}
//                       isActive={activeItem?.title === item.title}
//                       className="px-2.5 md:px-2"
//                     >
//                       <item.icon />
//                       <span>{item.title}</span>
//                     </SidebarMenuButton>
//                   </SidebarMenuItem>
//                 ))}
//               </SidebarMenu>
//             </SidebarGroupContent>
//           </SidebarGroup>
//         </SidebarContent>
//         <SidebarFooter>
//           <NavUser user={data.user} />
//         </SidebarFooter>
//       </Sidebar>

//       {/* This is the second sidebar */}
//       {/* We disable collapsible and let it fill remaining space */}
//       <Sidebar collapsible="none" className="hidden flex-1 md:flex">
//         <SidebarHeader className="gap-3.5 border-b p-4">
//           <div className="flex w-full items-center justify-between">
//             <div className="text-foreground text-base font-medium">
//               Workflow
//             </div>
//             <Label className="flex items-center gap-2 text-sm">
//               <span>Updated</span>
//               <Switch className="shadow-none" />
//             </Label>
//           </div>
//           <SidebarInput placeholder="Type to search..." />
//         </SidebarHeader>
//         <SidebarContent>
//           <SidebarGroup className="px-0">
//             <SidebarGroupContent>
//               {mails.map((mail) => (
//                 <a
//                   href="#"
//                   key={mail.email}
//                   className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground flex flex-col items-start gap-2 border-b p-4 text-sm leading-tight whitespace-nowrap last:border-b-0"
//                 >
//                   <div className="flex w-full items-center gap-2">
//                     <span>{mail.name}</span>{" "}
//                     <span className="ml-auto text-xs">{mail.date}</span>
//                   </div>
//                   <span className="font-medium">{mail.subject}</span>
//                   <span className="line-clamp-2 w-[260px] text-xs whitespace-break-spaces">
//                     {mail.teaser}
//                   </span>
//                 </a>
//               ))}
//             </SidebarGroupContent>
//           </SidebarGroup>
//         </SidebarContent>
//       </Sidebar>
//     </Sidebar>
//   )
// }


import * as React from "react";
import { ArchiveX, Command, File, Inbox, Send, Trash2 } from "lucide-react";

import { NavUser } from "@/components/nav-user";
import { Label } from "@/components/ui/label";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

const data = {
  user: {
    name: "John doe",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Inbox",
      url: "#",
      icon: Inbox,
      isActive: true,
    },
    {
      title: "Drafts",
      url: "#",
      icon: File,
      isActive: false,
    },
    {
      title: "Sent",
      url: "#",
      icon: Send,
      isActive: false,
    },
    {
      title: "Junk",
      url: "#",
      icon: ArchiveX,
      isActive: false,
    },
    {
      title: "Trash",
      url: "#",
      icon: Trash2,
      isActive: false,
    },
  ],
  mails: [
    {
      name: "Dashboard",
      email: "",
      subject: "",
      date: "",
      teaser:
        "Hi team, just a reminder about our meeting tomorrow at 10 AM.\nPlease come prepared with your project updates.",
    },
    {
      name: "Tasks",
      email: "",
      subject: "",
      date: "Yesterday",
      teaser:
        "Hi team, just a reminder about our meeting tomorrow at 10 AM.\nPlease come prepared with your project updates.",
    },
    {
      name: "Jobs",
      email: "",
      subject: "",
      date: "1 week ago",
      teaser:
        "To celebrate our recent project success, I'd like to organize a team dinner.\nAre you available next Friday evening? Please let me know your preferences.",
    },
    {
      name: "On-boarding",
      email: "",
      subject: "",
      date: "week ago",
      teaser:
        "To celebrate our recent project success, I'd like to organize a team dinner.\nAre you available next Friday evening? Please let me know your preferences.",
    },
    {
      name: "Companies",
      email: "",
      subject: "",
      date: "2 days ago",
      teaser:
        "To celebrate our recent project success, I'd like to organize a team dinner.\nAre you available next Friday evening? Please let me know your preferences.",
    },
    {
      name: "Locations",
      email: "",
      subject: "",
      date: "1 week ago",
      teaser:
        "To celebrate our recent project success, I'd like to organize a team dinner.\nAre you available next Friday evening? Please let me know your preferences.",
    },
    {
      name: "Managers",
      email: "",
      subject: "",
      date: "1 week ago",
      teaser:
        "To celebrate our recent project success, I'd like to organize a team dinner.\nAre you available next Friday evening? Please let me know your preferences.",
    },
    {
      name: "Manage jobs",
      email: "",
      subject: "",
      date: "1 week ago",
      teaser:
        "To celebrate our recent project success, I'd like to organize a team dinner.\nAre you available next Friday evening? Please let me know your preferences.",
    },
    {
      name: "Job templates",
      email: "",
      subject: "",
      date: "1 week ago",
      teaser:
        "To celebrate our recent project success, I'd like to organize a team dinner.\nAre you available next Friday evening? Please let me know your preferences.",
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [activeItem, setActiveItem] = React.useState(data.navMain[0]);
  const [mails, setMails] = React.useState(data.mails);
  const [showMainSidebar, setShowMainSidebar] = React.useState(true);

  // Handle click on menu items
  const handleSidebarItemClick = (item: any) => {
    setActiveItem(item);
    const mail = data.mails.sort(() => Math.random() - 0.5);
    setMails(mail.slice(0, Math.max(9, Math.floor(Math.random() * 10) + 1)));

    // Only hide main sidebar on mobile
    if (window.innerWidth < 768) {
      setShowMainSidebar(false);
    }
  };

  // Go back on mobile
  const handleBackClick = () => {
    setShowMainSidebar(true);
  };

  return (
    <Sidebar
      collapsible="icon"
      className="min-h-screen h-full overflow-hidden *:data-[sidebar=sidebar]:flex-row"
      {...props}
    >
      <div
        className={`${showMainSidebar ? "block" : "hidden md:block"} h-full`}
      >
        <Sidebar
          collapsible="none"
          className="h-full w-[calc(var(--sidebar-width-icon)+1px)] border-r"
        >
          <SidebarHeader>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton size="lg" asChild className="md:h-8 md:p-0">
                  <a href="#">
                    <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                      <Command className="size-4" />
                    </div>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-medium">Acme Inc</span>
                      <span className="truncate text-xs">Enterprise</span>
                    </div>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>
          <SidebarContent className="flex-grow">
            <SidebarGroup>
              <SidebarGroupContent className="px-1.5 md:px-0">
                <SidebarMenu>
                  {data.navMain.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        tooltip={{ children: item.title, hidden: false }}
                        onClick={() => handleSidebarItemClick(item)}
                        isActive={activeItem?.title === item.title}
                        className="px-2.5 md:px-2"
                      >
                        <item.icon />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter className="mt-auto">
            <NavUser user={data.user} />
          </SidebarFooter>
        </Sidebar>
      </div>

      <div
        className={`${
          !showMainSidebar ? "block" : "hidden md:block"
        } h-full flex-1`}
      >
        <Sidebar
          collapsible="none"
          className="h-full w-full"
        >
          <SidebarHeader className="gap-3.5 border-b p-4">
            <div className="flex w-full items-center justify-between">
              <div className="text-foreground text-base font-medium">
                Workflow
              </div>
              <Label className="flex items-center gap-2 text-sm">
                <span>Updated</span>
                <Switch className="shadow-none" />
              </Label>
            </div>
            <SidebarInput placeholder="Type to search..." />
            <div className="block md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleBackClick}
                className="mt-2"
              >
                ← Back
              </Button>
            </div>
          </SidebarHeader>
          <SidebarContent className="h-[calc(100vh-180px)] overflow-y-auto">
            <SidebarGroup className="px-0">
              <SidebarGroupContent>
                {mails.map((mail, idx) => (
                  <a
                    href="#"
                    key={idx}
                    className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground flex flex-col items-start gap-2 border-b p-4 text-sm leading-tight whitespace-nowrap last:border-b-0"
                  >
                    <div className="flex w-full items-center gap-2">
                      <span>{mail.name}</span>
                      <span className="ml-auto text-xs">{mail.date}</span>
                    </div>
                    <span className="font-medium">{mail.subject}</span>
                    <span className="line-clamp-2 w-full max-w-[420px] text-xs whitespace-break-spaces">
                      {mail.teaser}
                    </span>
                  </a>
                ))}
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      </div>
    </Sidebar>
  );
}

