import Overview from "@/app/(home)/insurance/_components/overview/overview";
import Timeline from "@/app/(home)/insurance/_components/timeline/timeline";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/shadcn-ui/tabs";

const OverviewTabs = () => {
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

export default OverviewTabs;
