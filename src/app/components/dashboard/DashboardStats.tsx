import { TrendBadge } from "./TrendBadge";
import { stats } from "./constants";

export const DashboardStats = () => {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="flex flex-col gap-5 rounded-[24px] px-6 py-6"
          style={{ backgroundColor: stat.accent }}
        >
          <p className="text-xl font-medium text-black ">{stat.label}</p>
          <div className="flex items-baseline justify-between gap-2 text-[#1C1C1C]">
            <span className="text-4xl font-semibold tracking-tight">{stat.value}</span>
            <TrendBadge change={stat.change} tone={stat.tone} />
          </div>
        </div>
      ))}
    </div>
  );
};
