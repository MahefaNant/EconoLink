import Image from "next/image";
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
import GoogleButton from "./GoogleButton";
import { FormEvent, useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function LoginForm() {
  const t = useTranslations("Auth");
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorShake, setErrorShake] = useState(false);

  const { login, loading, errorMessage } = useLogin();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
    } catch {
      setErrorShake(true);
      setTimeout(() => setErrorShake(false), 600);
    }
  };

  return (
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
          {t("Login.welcome")}
        </CardTitle>
        <p className="text-sm text-gray-500">{t("common.sub-welcome")}</p>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-600">E-mail</label>
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
              {t("Login.form.password")}
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
        {t("Login.have-account")}
        <button
          onClick={() => router.push("/register")}
          className="text-emerald-600 underline hover:text-emerald-700 cursor-pointer"
        >
          {t("common.signup")}
        </button>
      </CardFooter>

      <CardFooter className="flex justify-center text-sm text-gray-500">
        <button
          onClick={() => router.push("/")}
          className="text-emerald-600 underline hover:text-emerald-700 cursor-pointer"
        >
          {t("common.back-home")}
        </button>
      </CardFooter>
    </Card>
  );
}
