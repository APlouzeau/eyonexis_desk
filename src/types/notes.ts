import { UUID } from "node:crypto";

export type NoteListTree = {
    id: string;
    title: string;
    folderId: string;
};

export type Note = {
    idNote: UUID;
    title: string;
    subtitle: string;
    idFolder: UUID;
    createdAt: Date;
    updatedAt: Date;
};

export type NoteBlock = {
    idNoteBlock: UUID;
    idNote: UUID;
    blockType: Block;
    content: string;
    orderIndex: number;
    metadata: JSON;
    createdAt: Date;
};

export type Block = "text" | "code" | "heading" | "note" | "list";
