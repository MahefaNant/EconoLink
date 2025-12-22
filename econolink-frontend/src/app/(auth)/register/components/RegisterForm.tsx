import { FormEvent, useState } from "react";
import { useRegister } from "../hooks/useRegister";
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
import {
  Eye,
  EyeOff,
  Loader2,
  Mail,
  Lock,
  LogIn,
  User,
  Beaker,
  AlertTriangle,
} from "lucide-react";
import GoogleButton from "../../login/components/GoogleButton";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const isBeta = process.env.NEXT_PUBLIC_BETA_MODE === "true";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retapePassword, setRetapePassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorShake, setErrorShake] = useState(false);

  const { register, loading, errorMessage } = useRegister();
  const router = useRouter();
  const t = useTranslations("Auth");
  const tB = useTranslations("Beta");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (isBeta) return;
    try {
      await register(name, email, password, retapePassword);
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
        {isBeta && (
          <div className="mx-4 mb-4 rounded-xl border border-orange-300 bg-orange-50 p-4 text-center animate-fade-in">
            <div className="flex items-center justify-center gap-2 text-orange-600 font-semibold">
              <Beaker className="h-5 w-5" />
              {tB("title")}
            </div>

            <p className="mt-2 text-sm text-orange-700">{tB("description")}</p>

            <div className="mt-3 flex items-center justify-center gap-2 text-xs text-orange-600">
              <AlertTriangle className="h-4 w-4" />
              {tB("note")}
            </div>
          </div>
        )}

        {/* Logo */}
        <div className="flex justify-center mb-3">
          <Image
            src="/icons/econolink-logo.png"
            alt="EconoLink Logo"
            width={60}
            height={60}
            className="rounded-md cursor-pointer"
            onClick={() => router.push("/")}
          />
        </div>
        <CardTitle className="text-2xl font-bold text-econolink-dark">
          {t("Register.welcome")}
        </CardTitle>
        <p className="text-md text-gray-500 font-extrabold">
          {t("Register.sub-register")}
        </p>
        <p className="text-sm text-gray-500">{t("common.sub-welcome")}</p>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-600">
              {t("Register.form.name")}
            </label>
            <div className="relative">
              <User className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="your_name"
                value={name}
                disabled={loading || isBeta}
                onChange={(e) => setName(e.target.value)}
                className={`pl-9 ${
                  loading ? "opacity-70 cursor-not-allowed" : ""
                }`}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-600">E-mail</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
              <Input
                type="email"
                placeholder="you@example.com"
                value={email}
                disabled={loading || isBeta}
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
              {t("Register.form.password")}
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                disabled={loading || isBeta}
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

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-600">
              {t("Register.form.r-password")}
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={retapePassword}
                disabled={loading || isBeta}
                onChange={(e) => setRetapePassword(e.target.value)}
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
            disabled={loading || isBeta}
            className={`w-full font-medium ${
              isBeta ? "bg-gray-300 cursor-not-allowed" : "btn-econolink"
            }`}
          >
            {isBeta ? (
              <>
                <Beaker className="h-4 w-4 mr-2" />
                {tB("cta")}
              </>
            ) : loading ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Signing in...
              </>
            ) : (
              <>
                <LogIn className="h-4 w-4 mr-2" /> {t("common.signup")}
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
        {t("Register.have-account")}
        <button
          onClick={() => router.push("/login")}
          className="text-emerald-600 underline hover:text-emerald-700 cursor-pointer"
        >
          {t("common.signin")}
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
