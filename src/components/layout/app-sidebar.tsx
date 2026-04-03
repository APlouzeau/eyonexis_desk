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
import { ChevronRightIcon, Folder } from "lucide-react";
import { getFolders } from "@/lib/api/folders";
import { FolderTree } from "@/types/folders";
import { useState, useEffect } from "react";
import FolderItem from "./FolderItem";

// This is sample data.

const version = process.env.NEXT_PUBLIC_APP_VERSION || "0.0.1";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const [folders, setFolders] = useState<FolderTree[]>([]);

    useEffect(() => {
        getFolders().then(setFolders).catch(console.error);
    }, []);

    return (
        <Sidebar {...props}>
            <SidebarHeader>
                <VersionSwitcher versions={[version]} defaultVersion={version} />
                <SearchForm />
            </SidebarHeader>
            <SidebarContent className="gap-0">
                {/* We create a collapsible SidebarGroup for each parent. */}
                {folders.map((folder) => (
                    <FolderItem key={folder.id_folder} folder={folder} />
                ))}
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    );
}
