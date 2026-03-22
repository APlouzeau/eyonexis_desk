interface RecentlyAddedProps {
    title: string;
    language: string;
    status: string;
    date: string;
}

export default function RecentlyAdded({
    title = "Titre de l'entrée",
    language = "Langage",
    status = "Publié",
    date = "1 févr.",
}: Readonly<RecentlyAddedProps>) {
    return (
        <div className="flex items-center justify-between py-3  border-gray-400">
            {/* Gauche : Titre et Tag du langage */}
            <div className="flex items-center gap-3">
                <span className="font-medium text-sm text-foreground">{title}</span>
                <span className="px-2 py-0.5 bg-blue-50 text-blue-600 border border-blue-100 rounded text-xs font-medium">
                    {language}
                </span>
            </div>
            {/* Droite : Badge de statut et date */}
            <div className="flex items-center gap-4">
                <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 rounded text-xs font-medium">{status}</span>
                <span className="text-xs text-muted-foreground w-16 text-right">{date}</span>
            </div>
        </div>
    );
}
