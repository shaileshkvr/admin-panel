import CardList from "@/components/CardList";
import EditUser from "@/components/EditUser";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import {
  BadgeCheckIcon,
  CandyIcon,
  CitrusIcon,
  FlameIcon,
  ShieldIcon,
} from "lucide-react";

const userBadges = [
  {
    badgeId: 1,
    name: "Verified User",
    description: "This user is verified by admin.",
    icon: BadgeCheckIcon,
    bgColor: "bg-blue-500/40",
    borderColor: "border-blue-500/50",
  },
  {
    badgeId: 2,
    name: "Admin",
    description: "Admins have full access to the system and can manage users.",
    icon: ShieldIcon,
    bgColor: "bg-green-500/40",
    borderColor: "border-green-500/50",
  },
  {
    badgeId: 3,
    name: "Awarded",
    description: "Outstanding performer of the year.",
    icon: CandyIcon,
    bgColor: "bg-yellow-500/40",
    borderColor: "border-yellow-500/50",
  },
  {
    badgeId: 4,
    name: "Elite Coder",
    description: "Contributed 10k lines of code.",
    icon: FlameIcon,
    bgColor: "bg-red-500/40",
    borderColor: "border-red-500/50",
  },
  {
    badgeId: 5,
    name: "Popular",
    description: "Popular contributer in the community.",
    icon: CitrusIcon,
    bgColor: "bg-orange-500/40",
    borderColor: "border-orange-500/50",
  },
];

const SingleUserPage = () => {
  // In real-world scenario, the badges will be fetched from servers.

  return (
    <div className="">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">DashBoard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/users">Users</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Shailesh Kr Verma</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
        </BreadcrumbList>
      </Breadcrumb>
      {/* Conatiner */}
      <div className="mt-4 flex flex-col xl:flex-row gap-8">
        {/* LEFT SECTION */}
        <div className="w-full xl:w-1/3 space-y-6">
          {/* User Badges */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="text-lg font-semibold">Badges</h1>
            <div className="flex gap-4 mt-4">
              {userBadges.map((badge) => (
                <HoverCard key={badge.badgeId}>
                  <HoverCardTrigger>
                    <badge.icon
                      className={`rounded-full border p-1 ${badge.bgColor} ${badge.borderColor}`}
                      size={36}
                    />
                  </HoverCardTrigger>
                  <HoverCardContent>
                    <h1 className="text-lg font-semibold">{badge.name}</h1>
                    <p className="text-sm font-normal">{badge.description}</p>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>
          </div>
          {/* Information Container */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <h1 className="text-lg font-semibold">User Information</h1>
              <Sheet>
                <SheetTrigger asChild>
                  <Button>Edit User</Button>
                </SheetTrigger>
                <EditUser />
              </Sheet>
            </div>
            {/* User Details */}
            <div className="space-y-3 mt-4">
              <div className="flex flex-col gap-2 mb-8">
                <p className="text-sm text-muted-foreground">
                  Profile Completion
                </p>
                <Progress value={72} />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Username:</span>
                <span className="">Shaileshkvr</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Email:</span>
                <span className="">Shailesh@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Phone:</span>
                <span className="">+91 9876543210</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Location:</span>
                <span className="">Lucknow, India</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Role:</span>
                <Badge variant="outline" className="text-sm bg-blue-500/20">
                  Admin
                </Badge>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Joined on 12-12-2025
              </p>
            </div>
          </div>
          {/* Card List Conatiner*/}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <CardList title="Latest Transactions" />
          </div>
        </div>
        {/* RIGHT SECTION */}
        <div className="w-full xl:w-2/3 space-y-6">
          {/* User Card Container */}
          <div className="bg-primary-foreground p-4 rounded-lg space-y-2">
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src="https://avatars.githubusercontent.com/u/126746445?s=400&u=b0faf43c3744f8ee17904beecfe8668864345be0&v=4" />
                <AvatarFallback>SKV</AvatarFallback>
              </Avatar>
              <h1 className="text-xl font-semibold">Shailesh Verma</h1>
            </div>
            <p className="text-sm text-muted-foreground">
              <p>
                Passionate developer with 5 years of experience in building web
                applications.
              </p>
              <p>
                Skilled in React, NextJS, Node.js, Fastify, and database
                management.
              </p>
              <p>
                Enthusiastic about open-source contributions and community
                engagement.
              </p>
            </p>
          </div>
          {/* User Chart Container */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="text-lg font-semibold">Chart</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleUserPage;
