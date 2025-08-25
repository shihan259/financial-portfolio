import InsuranceCard from "@/app/(home)/insurance/_components/overview/cards/insurance-card";
import CoverageBadges from "@/app/(home)/insurance/_components/overview/cards/coverage/coverage-badges";
import { RadialStackedChart } from "@/components/ui/charts/radial-stacked";
import { useTranslations } from "next-intl";

const CoverageCard = () => {
  const t = useTranslations("overview.cards.coverage");

  return (
    <InsuranceCard title={t("title")} description={<CoverageBadges />}>
      <RadialStackedChart></RadialStackedChart>
      <div className="space-y-2">
        <div className="text-center text-muted-foreground items-center leading-none font-xs">
          Your monthly expense for coverage policies is
        </div>
        <div className="text-center font-bold leading-none font-xs">$500</div>
      </div>
    </InsuranceCard>
  );
};

export default CoverageCard;
