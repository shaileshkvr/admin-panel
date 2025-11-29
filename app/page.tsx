import AppAreaChart from "@/components/ui/AppAreaChart";
import AppBarChart from "@/components/ui/AppBarChart";
import AppPieChart from "@/components/ui/AppPieChart";
import App from "next/app";

const HomePage = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4 px-4">
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppBarChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <AppAreaChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppPieChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">test</div>
      <div className="bg-primary-foreground p-4 rounded-lg">test</div>
    </div>
  );
};

export default HomePage;
