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
import { Eye, EyeOff, Loader2, Mail, Lock, LogIn, Info } from "lucide-react";
import GoogleButton from "./GoogleButton";
import { FormEvent, useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const t = useTranslations("Auth");
  const tB = useTranslations("Beta");
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorShake, setErrorShake] = useState(false);

  const { login, loading, errorMessage } = useLogin();

  const isBeta = process.env.NEXT_PUBLIC_BETA_MODE === "true";
  const betaEmail = process.env.NEXT_PUBLIC_BETA_TEST_EMAIL;
  const betaPassword = process.env.NEXT_PUBLIC_BETA_TEST_PASSWORD;

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
        <div className="flex justify-center mb-3">
          <Image
            src="/icons/econolink-logo.png"
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

      {/* Discrete Beta Info */}
      {isBeta && betaEmail && betaPassword && (
        <div className="mx-6 mb-4 rounded-lg bg-blue-50 border border-blue-200 px-4 py-3 text-sm text-blue-700">
          <div className="flex items-center gap-2 font-medium mb-1">
            <Info className="h-4 w-4" />
            {tB("title")}
          </div>
          <p className="text-xs">
            {tB("email")} <span className="font-mono">{betaEmail}</span>
            <br />
            {tB("password")} <span className="font-mono">{betaPassword}</span>
          </p>
        </div>
      )}

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
                className="pl-9"
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
                className="pl-9 pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3.5 text-gray-400"
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

        <GoogleButton />
      </CardContent>

      <CardFooter className="flex justify-center text-sm text-gray-500">
        {t("Login.have-account")}
        <button
          onClick={() => router.push("/register")}
          className="text-emerald-600 underline ml-1"
        >
          {t("common.signup")}
        </button>
      </CardFooter>

      <CardFooter className="flex justify-center text-sm text-gray-500">
        <button
          onClick={() => router.push("/")}
          className="text-emerald-600 underline"
        >
          {t("common.back-home")}
        </button>
      </CardFooter>
    </Card>
  );
}
