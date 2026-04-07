import { Note } from "@/types/notes";

export default function NotePage({ idNote, title, subtitle, idFolder, createdAt, updatedAt }: Note) {
    return (
        <div>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <p>Note ID: {idNote}</p>
            <p>Folder ID: {idFolder}</p>
            <p>Created At: {createdAt.toString()}</p>
            <p>Updated At: {updatedAt.toString()}</p>
        </div>
    );
}
