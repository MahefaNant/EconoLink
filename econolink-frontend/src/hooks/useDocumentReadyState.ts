import { useSyncExternalStore } from "react";

const subscribe = (callback: () => void) => {
  document.addEventListener("readystatechange", callback);
  return () => document.removeEventListener("readystatechange", callback);
};

const getSnapshot = () => document.readyState === "complete";
const getServerSnapshot = () => false;

const useDocumentReadyState = (): boolean => {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};

export default useDocumentReadyState;
