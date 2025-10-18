import { LineChart } from "./LineChart";

export const RevenueChart = () => {
  return (
    <div className="rounded-3xl bg-[#f7f9fb] py-6 px-3">
      <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
        <p className="text-blg font-semibold text-[#0F172A]">Revenue</p>
        <span className="hidden h-4 w-px bg-neutral-300 md:block" />
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2 whitespace-nowrap">
            <span className="h-2 w-2 rounded-full bg-[#111827]" />
            <span className="text-sm  text-black ">Current Week</span>
            <span className="text-sm font-semibold text-[#111827]">$58,211</span>
          </span>
          <span className="flex items-center gap-2 whitespace-nowrap">
            <span className="h-2 w-2 rounded-full bg-neutral-300 " />
            <span className="text-sm  text-black">Previous Week</span>
            <span className="text-sm font-semibold text-[#111827]">$68,768</span>
          </span>
        </div>
      </div>
      <div className="mt-8 h-96  w-full">
        <LineChart className="h-full w-full" />
      </div>
    </div>
  );
};
