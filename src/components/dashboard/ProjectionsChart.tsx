"use client";

import { Bar, BarChart as ReBarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { projections } from "./constants";
import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

export const ProjectionsChart = () => {
  return (
    <div className="rounded-[24px] bg-[#F7F9FB] px-5 py-5">
      <div className="mb-5">
        <p className="text-base font-semibold text-[#1C1F2E]">Projections vs Actuals</p>
      </div>
      <ChartContainer
        config={{
          actual: {
            label: "Actual",
            color: "#9DB9D5",
          },
          projectedDelta: {
            label: "Projected",
            color: "#CEDCEB",
          },
        }}
        className="w-full h-60"
      >
        <ReBarChart
          data={projections.map((item) => ({
            month: item.month,
            actual: item.actual,
            projectedDelta: item.projectedDelta,
            projected: item.actual + item.projectedDelta,
          }))}
          stackOffset="none"
        >
          <CartesianGrid vertical={false} stroke="#E3E8EE" />
          <YAxis
            domain={[0, 30]}
            ticks={[0, 10, 20, 30]}
            tickLine={false}
            axisLine={false}
            tick={{ fill: "#CBD5E1", fontSize: 12 }}
            width={32}
            tickFormatter={(value) => `${value}M`}
          />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={8}
            axisLine={false}
            tick={{ fill: "#94A3B8", fontSize: 12 }}
          />
          <ChartTooltip
            cursor={{ fill: "rgba(148, 163, 184, 0.15)" }}
            content={<ChartTooltipContent hideLabel formatter={(value) => [`${value}M`]} />}
          />
          <Bar
            dataKey="actual"
            stackId="projection"
            fill="var(--color-actual)"
            radius={[0, 0, 0, 0]}
            barSize={32}
          />
          <Bar
            dataKey="projectedDelta"
            stackId="projection"
            fill="var(--color-projectedDelta)"
            radius={[6, 6, 0, 0]}
            barSize={32}
          />
        </ReBarChart>
      </ChartContainer>
    </div>
  );
};
