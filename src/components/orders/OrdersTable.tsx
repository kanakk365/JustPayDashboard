import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

type OrderStatus = "in-progress" | "complete" | "pending" | "approved" | "rejected";

type Order = {
  id: string;
  user: {
    name: string;
    badge?: string;
    color: string;
    avatarUrl?: string;
  };
  project: string;
  address: string;
  dateLabel: string;
  status: OrderStatus;
  selected?: boolean;
};

const orders: Order[] = [
  {
    id: "#CMP801",
    user: { name: "Natali Craig", badge: "NC", color: "#F4F0FF" },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    dateLabel: "Just now",
    status: "in-progress",
  },
  {
    id: "#CMP802",
    user: { name: "Kate Morrison", badge: "KM", color: "#E8F8E4" },
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    dateLabel: "A minute ago",
    status: "complete",
  },
  {
    id: "#CMP803",
    user: { name: "Drew Cano", badge: "DC", color: "#FFE9D6" },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    dateLabel: "1 hour ago",
    status: "pending",
  },
  {
    id: "#CMP804",
    user: { name: "Orlando Diggs", badge: "OD", color: "#E4E9FF" },
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    dateLabel: "Yesterday",
    status: "approved",
    selected: true,
  },
  {
    id: "#CMP805",
    user: { name: "Andi Lane", badge: "AL", color: "#FFE4E8" },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    dateLabel: "Feb 2, 2023",
    status: "rejected",
  },
  {
    id: "#CMP801",
    user: { name: "Natali Craig", badge: "NC", color: "#F4F0FF" },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    dateLabel: "Just now",
    status: "in-progress",
  },
  {
    id: "#CMP802",
    user: { name: "Kate Morrison", badge: "KM", color: "#E8F8E4" },
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    dateLabel: "A minute ago",
    status: "complete",
  },
  {
    id: "#CMP803",
    user: { name: "Drew Cano", badge: "DC", color: "#FFE9D6" },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    dateLabel: "1 hour ago",
    status: "pending",
  },
  {
    id: "#CMP804",
    user: { name: "Orlando Diggs", badge: "OD", color: "#E4E9FF" },
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    dateLabel: "Yesterday",
    status: "approved",
  },
  {
    id: "#CMP805",
    user: { name: "Andi Lane", badge: "AL", color: "#FFE4E8" },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    dateLabel: "Feb 2, 2023",
    status: "rejected",
  },
];

const statusTokens: Record<
  OrderStatus,
  { label: string; dot: string; text: string; background: string }
> = {
  "in-progress": {
    label: "In Progress",
    dot: "bg-[#6F52ED]",
    text: "text-[#5B67F1]",
    background: "bg-[#EEF1FF]",
  },
  complete: {
    label: "Complete",
    dot: "bg-[#4CAF50]",
    text: "text-[#388E3C]",
    background: "bg-[#E8F5E9]",
  },
  pending: {
    label: "Pending",
    dot: "bg-[#F1C232]",
    text: "text-[#B68900]",
    background: "bg-[#FFF8E6]",
  },
  approved: {
    label: "Approved",
    dot: "bg-[#4C9D61]",
    text: "text-[#357A46]",
    background: "bg-[#E8F4EC]",
  },
  rejected: {
    label: "Rejected",
    dot: "bg-[#EB5757]",
    text: "text-[#C62828]",
    background: "bg-[#FDECEA]",
  },
};

const actionButtonClass =
  "inline-flex h-10 w-10 items-center justify-center rounded-full ";

const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    stroke="#98A0B5"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
  >
    <circle cx="7.5" cy="7.5" r="4.75" />
    <path d="M11.25 11.25L14 14" />
  </svg>
);

const PlusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    stroke="#1C1F2E"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 3.5V14.5" />
    <path d="M3.5 9H14.5" />
  </svg>
);

const FilterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    stroke="#1C1F2E"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3.75 6H14.25" />
    <path d="M6 9H12" />
    <path d="M7.5 12H10.5" />
  </svg>
);

const SortIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    stroke="#1C1F2E"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6.25 4.5L3.5 7.25L6.25 10" />
    <path d="M11.75 13.5L14.5 10.75L11.75 8" />
    <path d="M3.5 7.25H14.5" />
    <path d="M3.5 10.75H14.5" />
  </svg>
);

const CalendarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    stroke="#98A0B5"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2.5" y="3" width="11" height="10.5" rx="1.5" />
    <path d="M5 2V4" />
    <path d="M11 2V4" />
    <path d="M2.5 6H13.5" />
  </svg>
);

const EllipsisIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#98A0B5"
  >
    <circle cx="3.5" cy="8" r="1" />
    <circle cx="8" cy="8" r="1" />
    <circle cx="12.5" cy="8" r="1" />
  </svg>
);

const Checkbox = ({ checked }: { checked?: boolean }) => (
  <label className="relative inline-flex h-5 w-5 items-center justify-center">
    <input
      type="checkbox"
      defaultChecked={checked}
      className="peer h-4 w-4 rounded border border-[#D3D9E6] text-[#1C1F2E] accent-[#1C1F2E]"
    />
    <span className="sr-only">Select row</span>
  </label>
);

const StatusBadge = ({ status }: { status: OrderStatus }) => {
  const token = statusTokens[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs ",
        token.text
      )}
    >
      <span className={cn("h-1 w-1 rounded-full", token.dot)} />
      {token.label}
    </span>
  );
};

const Avatar = ({ name, badge, color, avatarUrl }: Order["user"]) => (
  <span
    className="flex h-10 w-10 items-center justify-center rounded-full text-xs font-semibold text-[#1C1F2E]"
    style={avatarUrl ? undefined : { backgroundColor: color }}
  >
    {avatarUrl ? (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={avatarUrl} alt={name} className="h-full w-full rounded-full object-cover" />
    ) : (
      (badge || name.slice(0, 2)).toUpperCase()
    )}
  </span>
);

const Pagination = () => (
  <div className="flex items-center justify-between px-6 pb-6 pt-4 text-sm text-[#7A8499]">
    <span>Showing 1-10 of 32 results</span>
    <div className="flex items-center gap-2">
      {[
        { label: "Prev", content: "<" },
        { label: "1", content: "1", active: true },
        { label: "2", content: "2" },
        { label: "3", content: "3" },
        { label: "4", content: "4" },
        { label: "5", content: "5" },
        { label: "Next", content: ">" },
      ].map((item) => (
        <button
          key={item.label}
          type="button"
          className={cn(
            "flex h-8 w-8 items-center justify-center rounded-full border border-transparent text-sm font-medium transition",
            item.active
              ? "bg-[#1C1F2E] text-white"
              : "bg-white text-[#1C1F2E] hover:border-[#E1E5F1] hover:bg-[#F6F6FB]"
          )}
        >
          {item.content}
        </button>
      ))}
    </div>
  </div>
);

export const OrdersTable = () => {
  return (
    <ScrollArea className="h-full w-full">
      <div className="flex flex-col gap-6 px-8 py-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-lg font-semibold text-[#1C1F2E]">Orders List</h1>
          </div>
        </div>

        <div className="flex bg-[#f7f9fb] rounded-lg p-1 py-3 flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button type="button" className={actionButtonClass}>
              <PlusIcon />
              <span className="sr-only">Add order</span>
            </button>
            <button type="button" className={actionButtonClass}>
              <FilterIcon />
              <span className="sr-only">Filter orders</span>
            </button>
            <button type="button" className={actionButtonClass}>
              <SortIcon />
              <span className="sr-only">Sort orders</span>
            </button>
          </div>

          <div className="relative w-full max-w-[260px]">
            <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
              <SearchIcon />
            </span>
            <input
              type="search"
              placeholder="Search"
              className="h-11 w-full rounded-lg border border-[#E1E5F1] bg-white pl-10 pr-4 text-sm text-[#1C1F2E] outline-none transition focus:border-[#1C1F2E] focus:ring-2 focus:ring-[#1C1F2E]/10"
            />
          </div>
        </div>

        <div className="overflow-hidden bg-white">
          <div className="min-w-[1100px]">
            <table className="min-w-full table-fixed">
              <thead className=" text-xs font-semibold text-[#7A8499]">
                <tr className="border-b border-[#E8EBF4]">
                  <th scope="col" className="w-8 py-2 text-left">
                    <Checkbox />
                  </th>
                  <th scope="col" className="px-6 py-2 text-left text-sm font-thin ">Order ID</th>
                  <th scope="col" className="px-6 py-2 text-left text-sm font-thin ">User</th>
                  <th scope="col" className="px-6 py-2 text-left text-sm font-thin ">Project</th>
                  <th scope="col" className="px-6 py-2 text-left text-sm font-thin ">Address</th>
                  <th scope="col" className="px-6 py-2 text-left text-sm font-thin ">Date</th>
                  <th scope="col" className="px-6 py-2 text-left text-sm font-thin ">Status</th>
                  <th scope="col" className="px-6 py-2 text-right text-sm font-thin" aria-label="Actions" />
                </tr>
              </thead>
              <tbody className="text-sm text-[#1C1F2E]">
                {orders.map((order, index) => (
                  <tr
                    key={`${order.id}-${index}`}
                    className={cn(
                      "transition border-b border-[#E8EBF4]",
                      order.selected
                        ? "bg-[#F2F4FA]"
                        : index % 2 === 1
                        ? "bg-[#FCFDFE]"
                        : "bg-white",
                      "hover:bg-[#F6F8FC]"
                    )}
                  >
                    <td className="w-8 py-2 align-middle">
                      <Checkbox checked={order.selected} />
                    </td>
                    <td className="px-6 py-2 align-middle text-black">{order.id}</td>
                    <td className="px-6 py-2 align-middle">
                      <div className="flex items-center gap-3">
                        <Avatar {...order.user} />
                        <span className=" text-black">{order.user.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-2 align-middle text-black">{order.project}</td>
                    <td className="px-6 py-2 align-middle text-black">
                      <span className="block truncate">{order.address}</span>
                    </td>
                    <td className="px-6 py-2 align-middle text-black">
                      <span className="flex items-center gap-2">
                        <CalendarIcon />
                        {order.dateLabel}
                      </span>
                    </td>
                    <td className="px-6 py-2 align-middle">
                      <StatusBadge status={order.status} />
                    </td>
                    <td className="px-6 py-2 align-middle text-right">
                      <button type="button" className="inline-flex justify-end">
                        <span className="sr-only">More actions</span>
                        <EllipsisIcon />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Pagination />
        </div>
      </div>
      <ScrollBar />
    </ScrollArea>
  );
};



