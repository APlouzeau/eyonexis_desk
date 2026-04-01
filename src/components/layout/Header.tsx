import Link from "next/link";
import LogoApp from "../ui/LogoApp";

export default function Header() {
    return (
        <header className="flex items-center border-b border-gray-300">
            <Link href="/" className="p-4">
                <LogoApp className="w-15 h-15" />
            </Link>
            <div className="flex justify-center w-full">
                <Link href="/" className="self-start">
                    <h1 className="text-4xl justify-center font-display text-eyonexis">EYONEXIS</h1>
                </Link>
            </div>
        </header>
    );
}
