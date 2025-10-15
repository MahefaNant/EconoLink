/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Eye, EyeOff, Loader2, Mail, Lock, LogIn } from "lucide-react";
import RightSideImage from "./components/RigthSideImage";
import GoogleButton from "./components/GoogleButton";
import { useAuthStore } from "@/stores/useAuthStore";
import { useRouter } from "@/i18n/routing";
import { loginAuth } from "./lib/loginAuth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorShake, setErrorShake] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const setUser = useAuthStore((state) => state.setUser);
  const router = useRouter();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");
    try {
      const user = await loginAuth(email, password);
      setUser(user);
      toast.success(`Welcome back, ${user.name || "User"}!`);
      router.push("/dashboard");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error: any) {
      setErrorMessage("Login failed");
      toast.error("Login failed", {
        description: "Check your credentials and try again.",
        duration: 4000,
      });
      setErrorShake(true);
      setTimeout(() => setErrorShake(false), 600);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <Card
          className={`w-full max-w-md shadow-xl rounded-2xl border transition-all duration-300 ${
            errorShake ? "border-red-500 animate-shake" : ""
          }`}
        >
          <CardHeader className="text-center space-y-2">
            {/* Logo */}
            <div className="flex justify-center mb-3">
              <Image
                src="/images/econolink-logo.png"
                alt="EconoLink Logo"
                width={60}
                height={60}
                className="rounded-md"
              />
            </div>
            <CardTitle className="text-2xl font-bold text-econolink-dark">
              Welcome back to EconoLink
            </CardTitle>
            <p className="text-sm text-gray-500">
              Manage your finances smarter — securely and efficiently.
            </p>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    disabled={loading}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`pl-9 ${
                      loading ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    disabled={loading}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`pl-9 pr-10 ${
                      loading ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full btn-econolink font-medium"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  <>
                    <LogIn className="h-4 w-4 mr-2" /> Sign In
                  </>
                )}
              </Button>
            </form>

            {errorMessage && (
              <p className="text-center text-red-600 text-sm mt-3">
                {errorMessage}
              </p>
            )}

            {/* Google Button */}
            <GoogleButton />
          </CardContent>

          <CardFooter className="flex justify-center text-sm text-gray-500">
            Don’t have an account?{" "}
            <button
              onClick={() => router.push("/register")}
              className="text-emerald-600 underline hover:text-emerald-700 cursor-pointer"
            >
              Sign up
            </button>
          </CardFooter>
        </Card>
      </div>

      {/* Right Side - Image */}
      <RightSideImage />
    </div>
  );
}
