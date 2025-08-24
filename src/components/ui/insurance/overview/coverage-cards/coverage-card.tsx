import InsuranceCard from "../insurance-card";
import CoverageBadges from "./coverage-badges";
import { RadialStackedChart } from "@/components/ui/charts/radial-stacked";

const CoverageCard = () => {
  return (
    <InsuranceCard title={"Coverage"} description={<CoverageBadges />}>
      <RadialStackedChart></RadialStackedChart>
      <div className="space-y-2">
        <div className="text-center items-center leading-none font-xs">
          You're still missing coverages in
        </div>
        <div className="text-center text-muted-foreground leading-none font-xs">
          Critical Illness (Early), Death, Disability
        </div>
      </div>
    </InsuranceCard>
  );
};

export default CoverageCard;
