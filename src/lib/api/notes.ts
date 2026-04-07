import { Note } from "@/types/notes";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export async function getNoteBySlug(slug: string): Promise<Note[]> {
    try {
        const response = await fetch(`${BASE_URL}/notes/${slug}`);
        if (!response.ok) {
            throw new Error("Failed to fetch note : " + response.statusText);
        }
        const data = await response.json();
        console.log("Fetched note successfully", data);
        return data;
    } catch (error) {
        throw new Error("Failed to fetch note : " + error);
    }
}
