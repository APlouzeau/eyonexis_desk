interface StaticProgressBarProps {
    progress: number; // Valeur de progression entre 0 et 100
    color?: string; // Couleur de la barre de progression (optionnelle)
}

export default function StaticProgressBar({ progress = 0, color = "#3b82f6" }: Readonly<StaticProgressBarProps>) {
    return (
        <div className="w-full bg-gray-200 rounded-full h-4">
            <div
                className="h-4 rounded-full"
                style={{
                    width: `${progress}%`,
                    backgroundColor: color,
                }}
            />
        </div>
    );
}
