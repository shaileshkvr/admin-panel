"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const AppBarChart = () => {
  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "var(--chart-2)",
    },
    mobile: {
      label: "Mobile",
      color: "var(--chart-1)",
    },
  } satisfies ChartConfig;
  const chartData = [
    { month: "January", desktop: 1000, mobile: 600 },
    { month: "February", desktop: 3500, mobile: 1050 },
    { month: "March", desktop: 4400, mobile: 1400 },
    { month: "April", desktop: 6980, mobile: 2908 },
    { month: "May", desktop: 8890, mobile: 3600 },
    { month: "June", desktop: 9100, mobile: 4200 },
    { month: "July", desktop: 11400, mobile: 6100 },
    { month: "August", desktop: 19000, mobile: 12300 },
    { month: "September", desktop: 17490, mobile: 18100 },
    { month: "October", desktop: 15000, mobile: 24200 },
    { month: "November", desktop: 14050, mobile: 30300 },
    { month: "December", desktop: 13800, mobile: 36900 },
  ];

  return (
    <div>
      <h1 className="text-lg font-medium mb-5">Total Revenue</h1>
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(e) => e.slice(0, 3)}
          />
          <YAxis tickLine={false} tickMargin={10} axisLine={false} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
          <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default AppBarChart;
