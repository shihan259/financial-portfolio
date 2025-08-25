import Overview from "@/app/(home)/insurance/_components/overview/overview";
import Timeline from "@/app/(home)/insurance/_components/timeline/timeline";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/shadcn-ui/tabs";
import { useTranslations } from "next-intl";

const OverviewTabs = () => {
  const t = useTranslations("overview.tabs");

  return (
    <div className="center mb-4 w-full">
      <Tabs defaultValue={t("overview")} className="w-full">
        <TabsList className="w-full">
          <TabsTrigger value={t("overview")}>{t("overview")}</TabsTrigger>
          <TabsTrigger value={t("timeline")}>{t("timeline")}</TabsTrigger>
        </TabsList>
        <TabsContent value={t("overview")}>
          <Overview />
        </TabsContent>

        <TabsContent value={t("timeline")}>
          <Timeline />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default OverviewTabs;
