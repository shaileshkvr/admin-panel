import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "./sidebar";
import Link from "next/link";

import {
  User,
  Inbox,
  Calendar,
  Search,
  Settings,
  User2,
  ChevronUp,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "./dropdown-menu";
// import Image from "next/image";

const AppSidebar = () => {
  const contentArr = [
    { id: 1, title: "Home", url: "#", icon: User },
    { id: 2, title: "Inbox", url: "#", icon: Inbox },
    { id: 3, title: "Calendar", url: "#", icon: Calendar },
    { id: 4, title: "Search", url: "#", icon: Search },
    { id: 5, title: "Settings", url: "#", icon: Settings },
  ];
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/">
              {/* <Image src="" alt="" /> */}
              <span>Fuzzy Trends</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarSeparator />
      {/* Sidebar content */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {contentArr.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      {/* Sidebar Footer Content */}
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 />
                  Shailesh Verma
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Account</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem variant="destructive">
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
