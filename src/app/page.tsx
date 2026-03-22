/* eslint-disable react/no-unescaped-entities */
import StatCard from "@/components/ui/StatCard";

import { Code, Folder, Layers, BookOpen, TrendingUp, Clock } from "@/app/_components/icons/DashboardIcons";
import RecentlyAdded from "@/app/_components/RecentlyAdded";
import Panel from "@/components/ui/Panel";

export default function Home() {
    return (
        <div className="min-h-full flex flex-col items-center">
            <h2 className="text-xl font-bold text-foreground tracking-tight flex gap-2">
                <TrendingUp className="w-5 h-5" />
                Tableau de bord
            </h2>
            <div>
                <p>Vue d'ensemble de la base de connaissances</p>
                <section className="flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-6xl mt-8">
                        <StatCard title="Entrées" value={2} icon={<Code className="w-5 h-5" />} />
                        <StatCard title="Langages" value={2} icon={<Layers className="w-5 h-5" />} />
                        <StatCard title="Catégories" value={3} icon={<Folder className="w-5 h-5" />} />
                        <StatCard title="Tags uniques" value={6} icon={<BookOpen className="w-5 h-5" />} />
                    </div>
                </section>
                <section>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-6xl mt-8 rounded-xl bg-white shadow-sm">
                        <Panel title="Répartition par catégorie" icon={<Folder className="w-5 h-5" />} />
                        <Panel title="Répartition par langage" icon={<Code className="w-5 h-5" />} />
                    </div>
                </section>
                <section>
                    <div className="flex flex-col p-6 rounded-xl border border-gray-400 bg-white shadow-sm mt-8 w-full max-w-6xl">
                        {/* En-tête avec l'horloge bleue */}
                        <div className="flex items-center gap-2 mb-6">
                            <Clock className="w-5 h-5 text-blue-500" />
                            <h3 className="font-semibold text-foreground text-sm">Entrées récentes</h3>
                        </div>
                        {/* La liste des lignes */}
                        <RecentlyAdded
                            title="Utilisation de useCallback et useMemo"
                            language="JavaScript"
                            status="Publié"
                            date="1 févr."
                        />
                    </div>
                </section>
            </div>
        </div>
    );
}
