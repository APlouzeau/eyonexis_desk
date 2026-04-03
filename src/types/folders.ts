import { UUID } from "crypto";
import { NoteListTree } from "./notes";

export type FolderTree = {
    id_folder: UUID;
    folder_name: string;
    children: FolderTree[];
    notes: NoteListTree[];
};
