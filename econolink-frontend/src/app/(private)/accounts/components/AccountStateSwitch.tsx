import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { TAccount } from "@/types/TAccount";
import { fetcher } from "@/lib/fetcher";
import { useTranslations } from "next-intl";

interface Props {
  account: TAccount;
}

export function AccountStateSwitch({ account }: Props) {
  const tAcc = useTranslations("Accounts");
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState<boolean>(!!account.is_active);

  const toggleState = async (checked: boolean) => {
    setActive(checked);
    setLoading(true);

    try {
      await fetcher(`/account/state/${account.id}?state=${checked}`, {
        method: "PATCH",
      });
    } catch {
      setActive(!checked);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-3 mt-3">
      <Switch
        checked={active}
        onCheckedChange={toggleState}
        disabled={loading}
      />

      <span
        className={`text-sm font-bold ${
          active ? "text-green-600" : "text-gray-500"
        }`}
      >
        {active ? tAcc("list.active") : tAcc("list.inactive")}
      </span>
    </div>
  );
}
