"use client";

import {
  Label,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/shadcn-ui/chart";

const chartData = [
  {
    accident: 20,
    hospitalisation: 30,
    death: 20,
    disability: 15,
    criticalIllness: 10,
    criticalIllnessEarly: 5,
  },
];

const chartConfig = {
  accident: {
    label: "Accident",
    color: "var(--chart-1)",
  },
  hospitalisation: {
    label: "Hospitalisation",
    color: "var(--chart-2)",
  },
  death: {
    label: "Death",
    color: "var(--chart-3)",
  },
  disability: {
    label: "Disability",
    color: "var(--chart-4)",
  },
  criticalIllness: {
    label: "Critical Illness",
    color: "var(--chart-5)",
  },
  criticalIllnessEarly: {
    label: "Critical Illness (Early)",
    color: "var(--chart-6)",
  },
} satisfies ChartConfig;

export function RadialStackedChart() {
  const totalPercentage =
    chartData[0].accident +
    chartData[0].hospitalisation +
    chartData[0].death +
    chartData[0].disability +
    chartData[0].criticalIllness +
    chartData[0].criticalIllnessEarly;

  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square w-full max-w-[250px] h-35"
    >
      <RadialBarChart
        data={chartData}
        endAngle={180}
        innerRadius={80}
        outerRadius={130}
        cx="50%"
        cy="75%"
      >
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) - 16}
                      className="fill-foreground text-2xl font-bold"
                    >
                      {`${totalPercentage.toString()}%`}
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 4}
                      className="fill-muted-foreground"
                    >
                      Coverage
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </PolarRadiusAxis>
        <RadialBar
          dataKey="accident"
          stackId="a"
          cornerRadius={0}
          fill="var(--color-accident)"
        />
        <RadialBar
          dataKey="hospitalisation"
          stackId="a"
          cornerRadius={0}
          fill="var(--color-hospitalisation)"
        />
        <RadialBar
          dataKey="death"
          stackId="a"
          cornerRadius={0}
          fill="var(--color-death)"
        />
        <RadialBar
          dataKey="disability"
          stackId="a"
          cornerRadius={0}
          fill="var(--color-disability)"
        />
        <RadialBar
          dataKey="criticalIllness"
          stackId="a"
          cornerRadius={0}
          fill="var(--color-criticalIllness)"
        />
        <RadialBar
          dataKey="criticalIllnessEarly"
          stackId="a"
          cornerRadius={0}
          fill="var(--color-criticalIllnessEarly)"
        />
        {/* <RadialBar
            dataKey="mobile"
            fill="var(--color-mobile)"
            stackId="a"
            cornerRadius={5}
            className="stroke-transparent stroke-2"
          /> */}
      </RadialBarChart>
    </ChartContainer>
  );
}
