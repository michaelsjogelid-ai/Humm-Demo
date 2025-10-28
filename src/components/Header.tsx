import { Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

export function Header() {
    const { user } = useAuth();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm border-b border-white/10">
            <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-14">
                <div className="flex items-center min-w-[120px]">
                    <Link to="/">
                        <h2 className="text-xl sm:text-2xl font-bold text-white hover:text-white/90 transition-colors">
                            Hummm
                        </h2>
                    </Link>
                </div>

                <nav className="hidden md:flex items-center justify-center gap-6 lg:gap-8 flex-1">
                    <Link
                        to="/my-idea"
                        className="text-sm text-white/80 hover:text-white transition-colors"
                    >
                        My Idea
                    </Link>
                    <Link
                        to="/my-dashboard"
                        className="text-sm text-white/80 hover:text-white transition-colors"
                    >
                        My Dashboard
                    </Link>
                    <Link
                        to="/resources"
                        className="text-sm text-white/80 hover:text-white transition-colors"
                    >
                        Resources
                    </Link>
                    <Link
                        to="/my-account"
                        className="text-sm text-white/80 hover:text-white transition-colors"
                    >
                        My Account
                    </Link>
                    {!user && (
                        <Link
                            to="/login"
                            className="text-sm text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-colors"
                        >
                            Sign In
                        </Link>
                    )}
                </nav>

                <div className="flex items-center gap-3 sm:gap-4 min-w-[120px] justify-end">
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/60 hover:text-white transition-colors"
                        aria-label="Instagram"
                    >
                        <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/60 hover:text-white transition-colors"
                        aria-label="LinkedIn"
                    >
                        <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/60 hover:text-white transition-colors"
                        aria-label="X (Twitter)"
                    >
                        <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                    <a
                        href="https://tiktok.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/60 hover:text-white transition-colors"
                        aria-label="TikTok"
                    >
                        <svg
                            className="w-4 h-4 sm:w-5 sm:h-5"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                        </svg>
                    </a>
                </div>
            </div>
        </header>
    );
}
