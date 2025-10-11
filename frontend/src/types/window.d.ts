// Extend the Window interface to include custom properties
export {};

declare global {
    interface Window {
        flash: (message: string, type?: "success" | "error" | "warning" | "info") => void;
    }
}
