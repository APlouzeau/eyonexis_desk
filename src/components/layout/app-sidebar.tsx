"use client";

import * as React from "react";

import { SearchForm } from "@/components/layout/search-form";
import { VersionSwitcher } from "@/components/layout/version-switcher";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from "@/components/ui/sidebar";
import { ChevronRightIcon } from "lucide-react";

// This is sample data.
const data = {
    versions: ["0.0.1", "0.0.2", "0.0.3"],
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

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar {...props}>
            <SidebarHeader>
                <VersionSwitcher versions={data.versions} defaultVersion={data.versions[0]} />
                <SearchForm />
            </SidebarHeader>
            <SidebarContent className="gap-0">
                {/* We create a collapsible SidebarGroup for each parent. */}
                {data.navMain.map((item) => (
                    <Collapsible key={item.title} title={item.title} className="group/collapsible ">
                        <SidebarGroup>
                            <SidebarGroupLabel
                                asChild
                                className="group/label text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                            >
                                <CollapsibleTrigger>
                                    {item.title}{" "}
                                    <ChevronRightIcon className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                                </CollapsibleTrigger>
                            </SidebarGroupLabel>
                            <CollapsibleContent className="overflow-hidden data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up">
                                <SidebarGroupContent>
                                    <SidebarMenu>
                                        {item.items.map((item) => (
                                            <SidebarMenuItem key={item.title}>
                                                <SidebarMenuButton asChild isActive={item.isActive}>
                                                    <a href={item.url}>{item.title}</a>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                        ))}
                                    </SidebarMenu>
                                </SidebarGroupContent>
                            </CollapsibleContent>
                        </SidebarGroup>
                    </Collapsible>
                ))}
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    );
}
