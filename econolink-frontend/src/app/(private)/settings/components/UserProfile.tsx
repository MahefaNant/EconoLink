"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import Image from "next/image";
import useUserProfile from "../hooks/useUserProfile";
import { useTranslations } from "next-intl";
import { Save } from "lucide-react";

export default function UserProfile() {
  const {
    avatars,
    currencies,
    user,
    form,
    loading,
    handleSave,
    handleChange,
    errorShake,
    successShake,
  } = useUserProfile();

  const t = useTranslations("Settings.Profile");
  if (!user)
    return (
      <p className="text-center text-sm text-muted-foreground py-10">
        {t("loading")}
      </p>
    );

  return (
    <div className="flex justify-center py-10 px-4">
      <Card
        className={`w-full max-w-3xl shadow-lg border rounded-2xl ${
          errorShake ? "border-red-500 animate-shake" : ""
        } ${successShake ? "border-green-500 animate-success" : ""}`}
      >
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-2xl font-semibold text-primary">
            {t("title")}
          </CardTitle>
          <p className="text-sm text-muted-foreground">{t("desc")}</p>
        </CardHeader>

        <CardContent className="grid gap-6 md:grid-cols-2">
          {/* Email */}
          <div className="md:col-span-2">
            <Label>{t("Form.email")}</Label>
            <div className="mt-1 rounded-md border px-3 py-2 bg-muted/10 text-sm">
              {form.email}
            </div>
          </div>

          {/* Nom */}
          <div>
            <Label className="mb-1">{t("Form.name")}</Label>
            <Input
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />
          </div>

          {/* Avatar */}
          <div>
            <Label className="mb-1">{t("Form.avatar")}</Label>
            <Select
              value={form.avatar}
              onValueChange={(v) => handleChange("avatar", v)}
            >
              <SelectTrigger>
                <SelectValue placeholder={t("Form.placeholder.avatar")} />
              </SelectTrigger>
              <SelectContent>
                {avatars.map((a) => (
                  <SelectItem key={a.url} value={a.url}>
                    <div className="flex items-center gap-2">
                      <Image
                        src={a.url}
                        alt={a.name}
                        className="object-cover rounded-full"
                        width={30}
                        height={30}
                        priority={true}
                      />
                      {a.name}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {form.avatar && (
              <Image
                src={form.avatar}
                alt={form.name}
                className="mt-2 rounded-full object-cover border mx-auto"
                width={50}
                height={50}
                priority={true}
              />
            )}
          </div>

          {/* Devise */}
          <div>
            <Label className="mb-1">{t("Form.currency")}</Label>
            <Select
              value={form.currency}
              onValueChange={(v) => handleChange("currency", v)}
            >
              <SelectTrigger>
                <SelectValue placeholder={t("Form.placeholder.currency")} />
              </SelectTrigger>
              <SelectContent>
                {currencies.map((c) => (
                  <SelectItem key={c} value={c}>
                    {c}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Dates non modifiables */}
          <div>
            <Label>{t("Form.create-on")}</Label>
            <div className="mt-1 rounded-md border px-3 py-2 bg-muted/10 text-sm">
              {new Date(user.created_at).toLocaleString()}
            </div>
          </div>
          <div>
            <Label>{t("Form.maj")}</Label>
            <div className="mt-1 rounded-md border px-3 py-2 bg-muted/10 text-sm">
              {new Date(user.updated_at).toLocaleString()}
            </div>
          </div>

          {/* Bouton */}
          <div className="md:col-span-2 text-center pt-4">
            <Button
              disabled={loading}
              onClick={handleSave}
              className="bg-green-600 hover:bg-green-700 transition-colors text-white"
            >
              <Save />
              {loading ? t("Form.button.recording") : t("Form.button.save")}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
