interface LangageLabelProps {
    langage: string; // Le langage de programmation à afficher
    color?: string; // Couleur de l'indicateur (optionnelle, par défaut jaune)
}

export default function LangageLabel({ langage, color = "bg-yellow-500" }: Readonly<LangageLabelProps>) {
    return (
        <div className="flex flex-row px-2 py-1 rounded-full text-sm font-medium items-center">
            <span className={`flex w-3 h-3 me-3 ${color} rounded-full `}></span>
            {langage}
        </div>
    );
}
