export {};

declare global {
  interface Window {
    getScreenDetails: Function;
    self: Window;
  }
}
