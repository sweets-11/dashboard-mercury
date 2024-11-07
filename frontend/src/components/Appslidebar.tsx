import { Home, CheckSquare, Repeat, DollarSign, CreditCard, TrendingUp, User } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import logo from "../assets/mercury-demo-dark.png";
// Menu items.
const items = [
    {
        title: "Home",
        url: "/",
        icon: Home,
    },
    {
        title: "Tasks",
        url: "/tasks",
        icon: CheckSquare,
    },
    {
        title: "Transactions",
        url: "/transactions",
        icon: Repeat,
    },
    {
        title: "Payments",
        url: "/payments",
        icon: DollarSign,
    },
    {
        title: "Cards",
        url: "/cards",
        icon: CreditCard,
    },
    {
        title: "Capital",
        url: "/capital",
        icon: TrendingUp,
    },
    {
        title: "Accounts",
        url: "/accounts",
        icon: User,
    },
]

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className="text-lg mb-5 mt-2" >
                        <img src={logo} alt="Logo" className="w-10 h-10 rounded-md mr-5" />
                        <a className="font-bold" href="/">Mercury Demo</a>
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}


                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
