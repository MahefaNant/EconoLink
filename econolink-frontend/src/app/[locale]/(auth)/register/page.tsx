"use client";

import RightSideImage from "../login/components/RigthSideImage";
import RegisterForm from "./components/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <RegisterForm />
      </div>

      {/* Right Side - Image */}
      <RightSideImage />
    </div>
  );
}
