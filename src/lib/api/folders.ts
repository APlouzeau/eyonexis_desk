import { FolderTree } from "@/types/folders";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export async function getFolders(): Promise<FolderTree[]> {
    try {
        const response = await fetch(`${BASE_URL}/folder-tree`);
        if (!response.ok) {
            throw new Error("Failed to fetch folders : " + response.statusText);
        }
        const data = await response.json();
        console.log("Fetched folders successfully", data);
        return data;
    } catch (error) {
        throw new Error("Failed to fetch folders : " + error);
    }
}
