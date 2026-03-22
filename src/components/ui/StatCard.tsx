interface StatCardProps {
    title: string;
    value: number;
    icon: React.ReactNode;
}

export default function StatCard({ title = "Titre", value = 0, icon }: Readonly<StatCardProps>) {
    return (
        <div className="p-4 rounded-xl border border-gray-400 bg-white shadow-sm flex items-center gap-4">
            {/* Zone icône à gauche */}
            <div className="text-muted-foreground px-2 flex items-center justify-center">{icon}</div>

            {/* Zone texte à droite, avec la ligne de séparation (border-l) */}
            <div className="flex flex-col border-l border-gray-400 pl-4 py-1">
                <div className="text-2xl font-bold text-foreground leading-none">{value}</div>
                <div className="text-xs font-medium text-muted-foreground mt-1">{title}</div>
            </div>
        </div>
    );
}
