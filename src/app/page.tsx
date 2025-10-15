import Navbar from "./components/main/Navbar";
import Sidebar from "./components/main/Sidebar";
import { IconMapPin } from "./components/icons";

const stats = [
  {
    label: "Customers",
    value: "3,781",
    change: "+11.01%",
    tone: "positive" as const,
    accent: "#E6F1FF",
  },
  {
    label: "Orders",
    value: "1,219",
    change: "-0.03%",
    tone: "negative" as const,
    accent: "#EEF4FF",
  },
  {
    label: "Revenue",
    value: "$695",
    change: "+15.03%",
    tone: "positive" as const,
    accent: "#EAF7F3",
  },
  {
    label: "Growth",
    value: "30.1%",
    change: "+6.08%",
    tone: "positive" as const,
    accent: "#E8F0FF",
  },
];

const revenueByLocation = [
  { city: "New York", value: "72k" },
  { city: "San Francisco", value: "39k" },
  { city: "Sydney", value: "25k" },
  { city: "Singapore", value: "61k" },
];

const projections = [12, 16, 19, 21, 23, 24];

const TrendArrow = ({ trend }: { trend: "positive" | "negative" }) => (
  <svg
    viewBox="0 0 24 24"
    className={`h-9 w-9 rounded-2xl p-2 ${
      trend === "positive"
        ? "bg-[#D8EBFF] text-[#2264F2]"
        : "bg-[#FDEEEF] text-[#D1435B]"
    }`}
  >
    {trend === "positive" ? (
      <path
        d="M6 15 12 9l6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ) : (
      <path
        d="M6 9 12 15l6-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    )}
  </svg>
);

const TrendBadge = ({ change, tone }: { change: string; tone: "positive" | "negative" }) => (
  <span
    className={`inline-flex items-center gap-1 rounded-full px-2.5 text-xs font-medium ${
      tone === "positive"
        ? "bg-[#E0F2EE] text-[#1A7F5A]"
        : "bg-[#FCE4E8] text-[#C23647]"
    }`}
  >
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" stroke="currentColor" fill="none" strokeWidth={2}>
      {tone === "positive" ? (
        <path d="M6 13.5 12 7.5l6 6" />
      ) : (
        <path d="M6 10.5 12 16.5l6-6" />
      )}
    </svg>
    {change}
  </span>
);

const BarChart = ({ values }: { values: number[] }) => {
  const max = Math.max(...values, 1);
  return (
    <div className="flex h-56 items-end justify-between gap-4">
      {values.map((value, index) => (
        <div key={index} className="flex w-full flex-col items-center gap-2">
          <div
            className="w-full rounded-lg bg-[#D8E5FF]"
            style={{ height: `${(value / max) * 100}%` }}
          />
          <span className="text-xs text-slate-400">{["Jan", "Feb", "Mar", "Apr", "May", "Jun"][index]}</span>
        </div>
      ))}
    </div>
  );
};

const LineChart = () => (
  <svg viewBox="0 0 540 220" preserveAspectRatio="none" className="h-48 w-full">
    <defs>
      <linearGradient id="revenueGradient" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#D2E5FF" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#D2E5FF" stopOpacity="0.1" />
      </linearGradient>
    </defs>
    <polyline
      points="0,150 90,130 180,140 270,110 360,120 450,80 540,60"
      fill="none"
      stroke="#0F172A"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <polyline
      points="0,180 90,170 180,180 270,150 360,140 450,120 540,90"
      fill="none"
      stroke="#3B82F6"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <polygon
      points="0,220 0,180 90,170 180,180 270,150 360,140 450,120 540,90 540,220"
      fill="url(#revenueGradient)"
      opacity="0.5"
    />
  </svg>
);

export default function Home() {
  return (
    <div className="flex min-h-screen bg-[#F5F7FB] text-[#1A1F36]">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Navbar sectionLabel="Dashboards" pageLabel="Default" />
        <main className="flex-1 overflow-y-auto px-8 py-8">
          <div className="flex flex-col gap-8">
            <div>
              <h1 className="text-3xl font-semibold text-[#1C1F2E]">eCommerce</h1>
            </div>

            <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
              <div className="grid gap-6 sm:grid-cols-2">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center justify-between rounded-3xl border border-[#E5EAF3] bg-white px-5 py-5 shadow-sm"
                    style={{ backgroundColor: stat.accent }}
                  >
                    <div>
                      <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                      <div className="mt-4 flex items-center gap-3">
                        <span className="text-3xl font-semibold text-[#1C1F2E]">{stat.value}</span>
                        <TrendBadge change={stat.change} tone={stat.tone} />
                      </div>
                    </div>
                    <TrendArrow trend={stat.tone} />
                  </div>
                ))}
              </div>
              <div className="rounded-3xl border border-[#E5EAF3] bg-white p-6 shadow-sm">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500">Projections vs Actuals</p>
                    <h3 className="mt-2 text-2xl font-semibold text-[#1C1F2E]">30M</h3>
                  </div>
                  <button className="rounded-xl border border-[#E5EAF3] px-3 py-1 text-xs font-semibold text-[#4C5A73]">
                    6 months
                  </button>
                </div>
                <BarChart values={projections} />
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
              <div className="rounded-3xl border border-[#E5EAF3] bg-white p-6 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-slate-500">Revenue</p>
                    <div className="mt-2 flex flex-wrap items-end gap-6">
                      <div>
                        <p className="text-3xl font-semibold text-[#1C1F2E]">$58,211</p>
                        <span className="text-xs text-slate-400">Current Week</span>
                      </div>
                      <div>
                        <p className="text-3xl font-semibold text-[#1C1F2E]">$68,768</p>
                        <span className="text-xs text-slate-400">Previous Week</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#3B82F6]" /> Current Week
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#0F172A]" /> Previous Week
                    </span>
                  </div>
                </div>
                <div className="mt-8">
                  <LineChart />
                </div>
              </div>

              <div className="rounded-3xl border border-[#E5EAF3] bg-white p-6 shadow-sm">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500">Revenue by Location</p>
                    <h3 className="mt-2 text-2xl font-semibold text-[#1C1F2E]">Locations</h3>
                  </div>
                  <button className="rounded-xl border border-[#E5EAF3] px-3 py-1 text-xs font-semibold text-[#4C5A73]">
                    View all
                  </button>
                </div>
                <div className="mb-6 rounded-2xl bg-[#F4F6FF] p-6">
                  <div className="flex items-center gap-3 text-sm font-medium text-[#1C1F2E]">
                    <IconMapPin className="h-4 w-4 stroke-[1.6]" />
                    Global Coverage
                  </div>
                  <p className="mt-3 text-xs text-slate-500">
                    Top performing regions pulled from last 12 months of revenue.
                  </p>
                </div>
                <ul className="space-y-4">
                  {revenueByLocation.map((entry) => (
                    <li key={entry.city} className="flex items-center justify-between text-sm text-[#1C1F2E]">
                      <span className="flex items-center gap-2 text-slate-600">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#3B82F6]" />
                        {entry.city}
                      </span>
                      <span className="text-[#1C1F2E] font-semibold">{entry.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
