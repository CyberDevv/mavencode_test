"use client";

import { LabelList, Pie, PieChart } from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export function PieChartStyle1({chartData}) {
  const chartConfig = chartData.reduce((acc, { label, value, fill }) => {
    acc[label] = {
      value: `${value}%`,
      color: fill,
    };
    return acc;
  }, {});
  
  return (
    <div className="flex flex-col">
      <div className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="label"
              innerRadius={60}
            >
              {" "}
              <LabelList
                dataKey="label"
                className="fill-background"
                stroke="#FFF"
                fontSize={12}
                formatter={(value) => chartConfig[value]?.value}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </div>
    </div>
  );
}
