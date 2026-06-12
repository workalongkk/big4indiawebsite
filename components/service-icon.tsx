import {
  Building2,
  BadgeCheck,
  Receipt,
  Landmark,
  Scale,
  ShieldCheck,
  Users,
  Award,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  Building2,
  BadgeCheck,
  Receipt,
  Landmark,
  Scale,
  ShieldCheck,
  Users,
  Award,
};

export function ServiceIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = ICONS[name] ?? Building2;
  return <Icon className={className} aria-hidden="true" />;
}
