import CoverageCard from "@/app/(home)/insurance/_components/overview/cards/coverage/coverage-card";
import InsuranceCard from "@/app/(home)/insurance/_components/overview/cards/insurance-card";
import GanttChart from "@/components/ui/charts/gantt";

const Overview = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-auto">
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
