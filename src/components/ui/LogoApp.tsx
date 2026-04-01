interface LogoProps {
    className?: string; // Classe CSS pour le logo
}

export default function LogoApp({ className = "w-8 h-8" }: Readonly<LogoProps>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="14.5 9.5 72 82" className={className}>
            {/* Etoiles externes */}
            <ellipse
                cx="50"
                cy="50"
                rx="35"
                ry="40"
                fill="none"
                stroke="#ff2a5fc0"
                strokeWidth="1"
                opacity="1"
                strokeDasharray="1 5"
            />

            {/* Etoiles internes */}
            <ellipse
                cx="50"
                cy="50"
                rx="25"
                ry="35"
                fill="none"
                stroke="#ff2a5fc0"
                strokeWidth="1"
                opacity="1"
                strokeDasharray="2 4"
            />

            {/* Oeil */}
            <ellipse cx="50" cy="50" rx="21" ry="25" fill="none" stroke="#ff2a5fc0" strokeWidth="3" opacity="0.5" />
            <ellipse cx="50" cy="50" rx="7" ry="10" fill="#ff2a5fc0" opacity="0.8" />

            {/* Croix */}
            {/*             <polygon
                points="25,25 75,75 75,25 25,75 25,25"
                stroke="#ff2a5fc0"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.5"
                fill="none"
            /> */}
        </svg>
    );
}
