import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/shadcn-ui/carousel";
import TimelineHeader from "@/app/(home)/insurance/_components/timeline/timeline-header";
import TimelineItem from "@/app/(home)/insurance/_components/timeline/timeline-item";

export default function Timeline() {
  return (
    <div className="grid center w-auto">
      <Carousel className="grid max-w-[80%]">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1 mt-2">
                <TimelineHeader />
                <TimelineItem />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="" />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
