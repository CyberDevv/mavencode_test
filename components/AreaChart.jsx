"use client";

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Area, AreaChart } from "recharts";

const chartConfig = {
  desktop: {
    label: "Purchase",
    color: "hsl(var(--chart-1))",
  },
};

export function AreaChartComp({chartData}) {
  return (
    <div>
      <ChartContainer config={chartConfig}>
        <AreaChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: 0,
            right: 0,
          }}
        >
          {/* <CartesianGrid vertical={false} /> */}
          {/* <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
              /> */}
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="dot" hideLabel />}
          />
          <Area
            dataKey="purchase"
            type="linear"
            fill="#bfdbfe"
            fillOpacity={0.4}
            strokeWidth={2}
            stroke="#2563eb"
          />
          <ChartLegend
            content={
              <ChartLegendContent verticalAlign="top" label="Purchase" />
            }
          />
        </AreaChart>
      </ChartContainer>
    </div>
  );
}
