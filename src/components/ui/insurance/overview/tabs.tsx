import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/shadcn-ui/tabs";
import Overview from "@/components/ui/insurance/overview/overview";
import Timeline from "@/components/ui/insurance/timeline/timeline";

const InsuranceTabs = () => {
  return (
    <div className="center mb-4 w-full">
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger value="overview" className="capitalize">
            overview
          </TabsTrigger>
          <TabsTrigger value="timeline" className="capitalize">
            timeline
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Overview />
        </TabsContent>

        <TabsContent value="timeline">
          <Timeline />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default InsuranceTabs;
