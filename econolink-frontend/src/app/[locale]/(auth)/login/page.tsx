"use client";

import RightSideImage from "./components/RigthSideImage";
import LoginForm from "./components/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <LoginForm />
      </div>

      {/* Right Side - Image */}
      <RightSideImage />
    </div>
  );
}
