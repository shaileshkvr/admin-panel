"use client";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const AppAreaChart = () => {
  const chartConfig = {
    foreign: {
      label: "Foreign",
      color: "var(--chart-2)",
    },
    inHouse: {
      label: "InHouse",
      color: "var(--chart-3)",
    },
  } satisfies ChartConfig;
  const chartData = [
    { month: "January", foreign: 1220, inHouse: 3905 },
    { month: "February", foreign: 3500, inHouse: 2050 },
    { month: "March", foreign: 2100, inHouse: 1400 },
    { month: "April", foreign: 2980, inHouse: 2908 },
    { month: "May", foreign: 790, inHouse: 600 },
    { month: "June", foreign: 3100, inHouse: 4200 },
    { month: "July", foreign: 4400, inHouse: 5100 },
    { month: "August", foreign: 5100, inHouse: 3300 },
    { month: "September", foreign: 4490, inHouse: 4130 },
    { month: "October", foreign: 5000, inHouse: 2200 },
    { month: "November", foreign: 5050, inHouse: 3310 },
    { month: "December", foreign: 6800, inHouse: 3950 },
  ];

  return (
    <div>
      <h1 className="text-lg font-medium mb-5">Total Visitors</h1>
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <AreaChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis tickLine={false} axisLine={false} tickMargin={8} />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="line" />}
          />
          <defs>
            <linearGradient id="fillForeign" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="var(--color-foreign)"
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="var(--color-foreign)"
                stopOpacity={0.1}
              />
            </linearGradient>
            <linearGradient id="fillInHouse" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="var(--color-inHouse)"
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="var(--color-inHouse)"
                stopOpacity={0.1}
              />
            </linearGradient>
          </defs>
          <Area
            dataKey="foreign"
            type="natural"
            fill="url(#fillForeign)"
            fillOpacity={0.4}
            stroke="var(--color-foreign)"
            stackId="a"
          />
          <Area
            dataKey="inHouse"
            type="natural"
            fill="url(#fillInHouse)"
            fillOpacity={0.4}
            stroke="var(--color-inHouse)"
            stackId="a"
          />
          <ChartLegend content={<ChartLegendContent />} />
        </AreaChart>
      </ChartContainer>
    </div>
  );
};

export default AppAreaChart;
