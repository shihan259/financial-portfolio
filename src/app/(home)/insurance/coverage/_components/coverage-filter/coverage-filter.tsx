import { Card, CardContent } from "@/components/shadcn-ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/shadcn-ui/carousel";
import { Toggle } from "@/components/shadcn-ui/toggle";

const coverageCategories = [
  "Death",
  "Critical Illness",
  "Disability",
  "Critical Illness (Early)",
  "Accident",
  "Hospitalisation",
];

const CoverageFilter = () => {
  return (
    // <div className=" w-[400px]">
    <Carousel
      opts={{
        align: "start",
        dragFree: true,
      }}
      className="overflow-x-hidden mask-l-from-98% mask-r-from-98% md:mask-l-from-100% mb-4"
    >
      <CarouselContent className="w-135 lg:w-auto">
        {Array.from(coverageCategories).map((category, index) => (
          <CarouselItem key={index} className=" basis-auto">
            <Toggle className="border rounded" aria-label="Toggle category">
              {category}
            </Toggle>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
        <CarouselNext /> */}
    </Carousel>
    // </div>
  );
};

export default CoverageFilter;
