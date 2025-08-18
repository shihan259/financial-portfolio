import OverviewTabs from "@/components/ui/insurance/overview/tabs";
import NavHeader from "@/components/ui/nav-header/nav-header";

export default function Page() {
  return (
    <>
      <NavHeader currentPageTitle="Insurance" />

      <div className="p-4">
        <OverviewTabs />
      </div>
    </>
  );
}
