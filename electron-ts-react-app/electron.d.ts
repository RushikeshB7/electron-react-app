export {};

declare global {
  interface Window {
    electron: {
      openAuth: (url: string) => void; // Define the `openAuth` function
    };
  }
}
