import { useEffect, useRef, useCallback } from "react";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import {
    ImageIcon,
    FileUp,
    Figma,
    MonitorIcon,
    CircleUserRound,
    ArrowUpIcon,
    Paperclip,
    PlusIcon,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

interface UseAutoResizeTextareaProps {
    minHeight: number;
    maxHeight?: number;
}

function useAutoResizeTextarea({
    minHeight,
    maxHeight,
}: UseAutoResizeTextareaProps) {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const adjustHeight = useCallback(
        (reset?: boolean) => {
            const textarea = textareaRef.current;
            if (!textarea) return;

            if (reset) {
                textarea.style.height = `${minHeight}px`;
                return;
            }

            textarea.style.height = `${minHeight}px`;

            const newHeight = Math.max(
                minHeight,
                Math.min(
                    textarea.scrollHeight,
                    maxHeight ?? Number.POSITIVE_INFINITY
                )
            );

            textarea.style.height = `${newHeight}px`;
        },
        [minHeight, maxHeight]
    );

    useEffect(() => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = `${minHeight}px`;
        }
    }, [minHeight]);

    useEffect(() => {
        const handleResize = () => adjustHeight();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [adjustHeight]);

    return { textareaRef, adjustHeight };
}

export function VercelV0Chat() {
    const [value, setValue] = useState("");
    const { textareaRef, adjustHeight } = useAutoResizeTextarea({
        minHeight: 60,
        maxHeight: 200,
    });
    const { user } = useAuth();
    const navigate = useNavigate();

    const handleSend = () => {
        if (!user) {
            navigate('/login');
            return;
        }
        if (value.trim()) {
            setValue("");
            adjustHeight(true);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="flex flex-col items-center w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 space-y-6 sm:space-y-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black dark:text-white text-center px-4">
                Turn your Idea into Reality
            </h1>

            <div className="w-full">
                <div className="relative bg-neutral-900 rounded-xl border border-neutral-800">
                    <div className="overflow-y-auto">
                        <Textarea
                            ref={textareaRef}
                            value={value}
                            onChange={(e) => {
                                setValue(e.target.value);
                                adjustHeight();
                            }}
                            onKeyDown={handleKeyDown}
                            placeholder="I want to build..."
                            className={cn(
                                "w-full px-3 sm:px-4 py-3",
                                "resize-none",
                                "bg-transparent",
                                "border-none",
                                "text-white text-sm sm:text-base",
                                "focus:outline-none",
                                "focus-visible:ring-0 focus-visible:ring-offset-0",
                                "placeholder:text-neutral-500 placeholder:text-sm",
                                "min-h-[60px]"
                            )}
                            style={{
                                overflow: "hidden",
                            }}
                        />
                    </div>

                    <div className="flex items-center justify-between p-2 sm:p-3 gap-2">
                        <div className="flex items-center gap-1 sm:gap-2">
                            <button
                                type="button"
                                className="group p-2 hover:bg-neutral-800 rounded-lg transition-colors flex items-center gap-1 touch-manipulation min-h-[44px] min-w-[44px] justify-center sm:min-h-0 sm:min-w-0"
                                aria-label="Attach files"
                            >
                                <Paperclip className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                                <span className="text-xs text-zinc-400 hidden lg:group-hover:inline transition-opacity">
                                    Attach
                                </span>
                            </button>
                        </div>
                        <div className="flex items-center gap-1 sm:gap-2">
                            <button
                                type="button"
                                className="px-2 sm:px-3 py-2 rounded-lg text-xs sm:text-sm text-zinc-400 transition-colors border border-dashed border-zinc-700 hover:border-zinc-600 hover:bg-zinc-800 flex items-center justify-between gap-1 touch-manipulation min-h-[44px] sm:min-h-0"
                                aria-label="Add project"
                            >
                                <PlusIcon className="w-4 h-4" />
                                <span className="hidden sm:inline">Project</span>
                            </button>
                            <button
                                type="button"
                                onClick={handleSend}
                                disabled={!value.trim()}
                                className={cn(
                                    "px-2 sm:px-2.5 py-2 rounded-lg text-sm transition-colors border border-zinc-700 hover:border-zinc-600 hover:bg-zinc-800 flex items-center justify-center gap-1 touch-manipulation min-h-[44px] min-w-[44px] sm:min-h-0 sm:min-w-0",
                                    value.trim() && user
                                        ? "bg-white text-black hover:bg-gray-100"
                                        : "text-zinc-400 cursor-not-allowed"
                                )}
                                aria-label={user ? "Send message" : "Sign in to send message"}
                                title={user ? "Send message" : "Sign in to send message"}
                            >
                                <ArrowUpIcon
                                    className={cn(
                                        "w-4 h-4 sm:w-5 sm:h-5",
                                        value.trim() && user
                                            ? "text-black"
                                            : "text-zinc-400"
                                    )}
                                />
                                <span className="sr-only">Send</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-4">
                    <ActionButton
                        icon={<ImageIcon className="w-4 h-4" />}
                        label="Clone a Screenshot"
                    />
                    <ActionButton
                        icon={<Figma className="w-4 h-4" />}
                        label="Import from Figma"
                    />
                    <ActionButton
                        icon={<FileUp className="w-4 h-4" />}
                        label="Upload a Project"
                    />
                    <ActionButton
                        icon={<MonitorIcon className="w-4 h-4" />}
                        label="Landing Page"
                    />
                    <ActionButton
                        icon={<CircleUserRound className="w-4 h-4" />}
                        label="Sign Up Form"
                    />
                </div>
            </div>
        </div>
    );
}

interface ActionButtonProps {
    icon: React.ReactNode;
    label: string;
}

function ActionButton({ icon, label }: ActionButtonProps) {
    return (
        <button
            type="button"
            className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-neutral-900 hover:bg-neutral-800 rounded-full border border-neutral-800 text-neutral-400 hover:text-white transition-colors touch-manipulation min-h-[44px] whitespace-nowrap text-xs sm:text-sm"
            aria-label={label}
        >
            {icon}
            <span className="text-xs sm:text-sm">{label}</span>
        </button>
    );
}
