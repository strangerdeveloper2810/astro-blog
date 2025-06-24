// Google Analytics gtag global declarations
declare global {
    interface Window {
        gtag: (...args: any[]) => void;
        dataLayer: any[];
    }

    function gtag(...args: any[]): void;
}

export { }; 