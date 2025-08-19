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
    <>
      <Carousel
        opts={{
          align: "start",
          dragFree: true,
          dragThreshold: 1000
        }}
        className="mb-4"
      >
        <CarouselContent>
          {Array.from(coverageCategories).map((category, index) => (
            <CarouselItem key={index} className="basis-auto">
              <div className="p-1 space-x-4">
                <Toggle
                  className="border rounded px-4"
                  aria-label="Toggle category"
                >
                  {category}
                </Toggle>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious /> */}
        {/* <CarouselNext /> */}
      </Carousel>
    </>
  );
};

export default CoverageFilter;
