"use client";
import useDocumentReadyState from "@/hooks/useDocumentReadyState";
import UserProfile from "./components/UserProfile";

export default function SettingsPage() {
  const isDocumentReady = useDocumentReadyState();
  if (!isDocumentReady) return null;
  return (
    <>
      <UserProfile />
    </>
  );
}
