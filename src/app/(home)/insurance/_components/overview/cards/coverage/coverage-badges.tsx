import { Badge } from "@/components/shadcn-ui/badge";
import { CoverageType } from "@/app/(home)/insurance/coverage/_types/coverage-types";

const CoverageBadges = () => {
  return (
    <div className="flex flex-wrap gap-2">
      {Object.values(CoverageType).map((coverageType) => (
        <Badge key={coverageType} variant="success">
          {coverageType}
        </Badge>
      ))}
    </div>
  );
};

export default CoverageBadges;
