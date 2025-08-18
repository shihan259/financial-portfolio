import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/shadcn-ui/carousel";
import TimelineItem from "@/components/ui/timeline/timeline-item";
import TimelineHeader from "@/components/ui/timeline/timeline-header";

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
