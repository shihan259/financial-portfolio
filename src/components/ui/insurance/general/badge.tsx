import { Badge } from "@/components/shadcn-ui/badge";

interface BadgeProps {
  label: string;
  variant: "default" | "outline" | "secondary" | "destructive";
}

const GeneralBadge: React.FC<BadgeProps> = ({ label, variant }) => {
  return <Badge variant={variant}>{label}</Badge>;
};

export default GeneralBadge;
