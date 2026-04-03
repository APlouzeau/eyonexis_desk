import { FolderTree } from "@/types/folders";
import { CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import { ChevronRightIcon, FileTextIcon } from "lucide-react";
import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import { Collapsible } from "@/components/ui/collapsible";
import { useState } from "react";

export default function FolderItem({ folder, depth = 0 }: Readonly<{ folder: FolderTree; depth?: number }>) {
    const [collapsibleOpen, setCollapsibleOpen] = useState(false);
    return (
        <Collapsible
            key={folder.folder_name}
            title={folder.folder_name}
            className="group/collapsible"
            onOpenChange={setCollapsibleOpen}
            open={collapsibleOpen}
        >
            <SidebarGroup style={{ paddingLeft: `${depth * 10}px` }}>
                <SidebarGroupLabel
                    asChild
                    className="group/label text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                >
                    <CollapsibleTrigger>
                        {folder.folder_name}{" "}
                        <ChevronRightIcon
                            className={`ml-auto transition-transform ${collapsibleOpen ? "rotate-90" : ""}`}
                        />
                    </CollapsibleTrigger>
                </SidebarGroupLabel>
                <CollapsibleContent>
                    <SidebarMenu style={{ paddingLeft: `${depth * 10}px` }}>
                        {folder.notes.map((note) => (
                            <SidebarMenuItem key={note.id}>
                                <SidebarMenuButton asChild>
                                    <a href={note.title}>
                                        <FileTextIcon className="mr-2" />
                                        {note.title}
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                    {/* Les sous-dossiers — appel récursif ici */}
                    {folder.children.map((child) => (
                        <FolderItem key={child.id_folder} folder={child} depth={depth + 1} />
                    ))}
                </CollapsibleContent>
            </SidebarGroup>
        </Collapsible>
    );
}
