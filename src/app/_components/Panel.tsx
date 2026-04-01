import LangageLabel from "@/components/ui/LangageLabel";
import StaticProgressBar from "@/components/ui/StaticProgressBar";

interface PanelProps {
    title: string;
    icon: React.ReactNode;
}

export default function Panel({ title = "Titre du panneau", icon }: Readonly<PanelProps>) {
    return (
        <div className="p-6 rounded-xl border border-gray-400 bg-white shadow-sm w-full max-w-6xl">
            {/* En-tête avec l'icône et le titre */}
            <div className="flex items-center gap-2 mb-6">
                <div className="text-muted-foreground px-2 flex items-center justify-center">{icon}</div>
                <h3 className="font-semibold text-foreground text-sm">{title}</h3>
            </div>

            {/* Contenu du panneau */}
            <StaticProgressBar progress={50} color="#1672F3" />
            <div className="pt-4">
                <LangageLabel langage="JavaScript" color="bg-yellow-500" />
                <LangageLabel langage="Python" color="bg-green-500" />
                <LangageLabel langage="Rust" color="bg-red-500" />
                <LangageLabel langage="PHP" color="bg-blue-500" />
            </div>
        </div>
    );
}
