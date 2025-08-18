import GanttChart from "@/components/ui/charts/gantt";
import InsuranceCard from "@/components/ui/insurance/insurance-card";
import CoverageCard from "@/components/ui/insurance/overview/coverage-cards/coverage-card";

const Overview = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <CoverageCard></CoverageCard>
        <InsuranceCard title={"Savings"}></InsuranceCard>
        <InsuranceCard title={"Investments"}></InsuranceCard>
      </div>
      <div className="mt-4 min-h-fit">
        <GanttChart></GanttChart>
      </div>
    </>
  );
};

export default Overview;
