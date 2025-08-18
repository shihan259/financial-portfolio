"use client";

import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart, ResponsiveContainer } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcn-ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/shadcn-ui/chart";

export const description = "A donut chart with text";

const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 190, fill: "var(--color-other)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "var(--chart-1)",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-1)",
  },
  firefox: {
    label: "Firefox",
    color: "var(--chart-1)",
  },
  edge: {
    label: "Edge",
    color: "var(--chart-2)",
  },
  other: {
    label: "Other",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function ChartPieDonutText() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, []);

  return (
    <>
      <div className="space-y-2 mt-3">
        <div className="text-center items-center gap-2 leading-none font-xs">
          You're still missing coverages in
        </div>
        <div className="text-center text-muted-foreground leading-none font-xs">
          Critical Illness (Early), Death, Disability
        </div>
      </div>
      {/* <div className="center mt-3 flex items-center gap-2 leading-none font-xs">
        You're all covered!
      </div> */}
      <div className="z-">
        <ResponsiveContainer>
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[200px]"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={chartData}
                dataKey="visitors"
                nameKey="browser"
                innerRadius={65}
                strokeWidth={5}
              >
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-foreground text-3xl font-bold"
                          >
                            100%
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-muted-foreground"
                          >
                            Coverage
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </Pie>
            </PieChart>
          </ChartContainer>
        </ResponsiveContainer>
      </div>
    </>
  );
}
