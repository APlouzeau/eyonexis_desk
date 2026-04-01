"use client";

import * as React from "react";
import { Minus, Plus } from "lucide-react";

import { SearchForm } from "@/components/layout/search-form";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
    navMain: [
        {
            title: "Environnements",
            url: "#",
            items: [
                {
                    title: "Linux",
                    url: "#",
                },
                {
                    title: "Windows",
                    url: "#",
                },
                {
                    title: "MacOS",
                    url: "#",
                },
            ],
        },
        {
            title: "Langages",
            url: "#",
            items: [
                {
                    title: "Rust",
                    url: "#",
                },
                {
                    title: "C#",
                    url: "#",
                    isActive: true,
                },
                {
                    title: "PHP",
                    url: "#",
                },
                {
                    title: "Python",
                    url: "#",
                },
                {
                    title: "JavaScript",
                    url: "#",
                },
                {
                    title: "TypeScript",
                    url: "#",
                },
            ],
        },
        {
            title: "Frameworks",
            url: "#",
            items: [
                {
                    title: "React",
                    url: "#",
                },
                {
                    title: "NextJS",
                    url: "#",
                },
                {
                    title: "Symfony",
                    url: "#",
                },
            ],
        },
        {
            title: "Architecture",
            url: "#",
            items: [
                {
                    title: "Docker",
                    url: "#",
                },
                {
                    title: "Traefik",
                    url: "#",
                },
            ],
        },
    ],
};

export default function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar {...props}>
            <SidebarHeader>
                <SearchForm />
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarMenu>
                        {data.navMain.map((item, index) => (
                            <Collapsible key={item.title} defaultOpen={index === 1} className="group/collapsible">
                                <SidebarMenuItem>
                                    <CollapsibleTrigger asChild>
                                        <SidebarMenuButton>
                                            {item.title}{" "}
                                            <Plus className="ml-auto group-data-[state=open]/collapsible:hidden" />
                                            <Minus className="ml-auto group-data-[state=closed]/collapsible:hidden" />
                                        </SidebarMenuButton>
                                    </CollapsibleTrigger>
                                    {item.items?.length ? (
                                        <CollapsibleContent>
                                            <SidebarMenuSub>
                                                {item.items.map((item) => (
                                                    <SidebarMenuSubItem key={item.title}>
                                                        <SidebarMenuSubButton asChild isActive={item.isActive}>
                                                            <a href={item.url}>{item.title}</a>
                                                        </SidebarMenuSubButton>
                                                    </SidebarMenuSubItem>
                                                ))}
                                            </SidebarMenuSub>
                                        </CollapsibleContent>
                                    ) : null}
                                </SidebarMenuItem>
                            </Collapsible>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    );
}
