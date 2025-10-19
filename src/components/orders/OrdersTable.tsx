import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { IconSearch } from "@/components/icons";
import { ListFilter, ArrowUpDown } from "lucide-react";

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
    user: { name: "Natali Craig", badge: "NC", color: "#F4F0FF", avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    dateLabel: "Just now",
    status: "in-progress",
  },
  {
    id: "#CMP802",
    user: { name: "Kate Morrison", badge: "KM", color: "#E8F8E4", avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    dateLabel: "A minute ago",
    status: "complete",
  },
  {
    id: "#CMP803",
    user: { name: "Drew Cano", badge: "DC", color: "#FFE9D6", avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    dateLabel: "1 hour ago",
    status: "pending",
  },
  {
    id: "#CMP804",
    user: { name: "Orlando Diggs", badge: "OD", color: "#E4E9FF", avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" },
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    dateLabel: "Yesterday",
    status: "approved",
    selected: true,
  },
  {
    id: "#CMP805",
    user: { name: "Andi Lane", badge: "AL", color: "#FFE4E8", avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    dateLabel: "Feb 2, 2023",
    status: "rejected",
  },
  {
    id: "#CMP801",
    user: { name: "Natali Craig", badge: "NC", color: "#F4F0FF", avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    dateLabel: "Just now",
    status: "in-progress",
  },
  {
    id: "#CMP802",
    user: { name: "Kate Morrison", badge: "KM", color: "#E8F8E4", avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    dateLabel: "A minute ago",
    status: "complete",
  },
  {
    id: "#CMP803",
    user: { name: "Drew Cano", badge: "DC", color: "#FFE9D6", avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    dateLabel: "1 hour ago",
    status: "pending",
  },
  {
    id: "#CMP804",
    user: { name: "Orlando Diggs", badge: "OD", color: "#E4E9FF", avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" },
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    dateLabel: "Yesterday",
    status: "approved",
  },
  {
    id: "#CMP805",
    user: { name: "Andi Lane", badge: "AL", color: "#FFE4E8", avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    dateLabel: "Feb 2, 2023",
    status: "rejected",
  },
];

const statusTokens: Record<
  OrderStatus,
  {
    label: string;
    dot: string;
    text: string;
    background: string;
    darkBackground?: string;
    darkText?: string;
  }
> = {
  "in-progress": {
    label: "In Progress",
    dot: "bg-[#6F52ED]",
    text: "text-[#5B67F1] dark:text-[#B9C1FF]",
    background: "bg-[#EEF1FF]",
    darkBackground: "dark:bg-[#2B2D45]",
  },
  complete: {
    label: "Complete",
    dot: "bg-[#4CAF50]",
    text: "text-[#388E3C] dark:text-[#A0E8AE]",
    background: "bg-[#E8F5E9]",
    darkBackground: "dark:bg-[#1F3A28]",
  },
  pending: {
    label: "Pending",
    dot: "bg-[#F1C232]",
    text: "text-[#B68900] dark:text-[#F1C232]",
    background: "bg-[#FFF8E6]",
    darkBackground: "dark:bg-[#3A2E10]",
  },
  approved: {
    label: "Approved",
    dot: "bg-[#4C9D61]",
    text: "text-[#357A46] dark:text-[#A8E4C0]",
    background: "bg-[#E8F4EC]",
    darkBackground: "dark:bg-[#1C3224]",
  },
  rejected: {
    label: "Rejected",
    dot: "bg-[#EB5757]",
    text: "text-[#C62828] dark:text-[#FF9CA1]",
    background: "bg-[#FDECEA]",
    darkBackground: "dark:bg-[#3B1E1F]",
  },
};

const actionButtonClass =
  "inline-flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition hover:text-foreground hover:bg-muted/70  dark:hover:bg-muted/40";

const PlusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
  >
    <path d="M9 3.5V14.5" />
    <path d="M3.5 9H14.5" />
  </svg>
);

const CalendarIcon = () => (
  <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-muted-foreground">
    <path d="M11 1H9.5V0.5C9.5 0.367392 9.44732 0.240215 9.35355 0.146447C9.25979 0.0526784 9.13261 0 9 0C8.86739 0 8.74021 0.0526784 8.64645 0.146447C8.55268 0.240215 8.5 0.367392 8.5 0.5V1H3.5V0.5C3.5 0.367392 3.44732 0.240215 3.35355 0.146447C3.25979 0.0526784 3.13261 0 3 0C2.86739 0 2.74021 0.0526784 2.64645 0.146447C2.55268 0.240215 2.5 0.367392 2.5 0.5V1H1C0.734784 1 0.48043 1.10536 0.292893 1.29289C0.105357 1.48043 0 1.73478 0 2V12C0 12.2652 0.105357 12.5196 0.292893 12.7071C0.48043 12.8946 0.734784 13 1 13H11C11.2652 13 11.5196 12.8946 11.7071 12.7071C11.8946 12.5196 12 12.2652 12 12V2C12 1.73478 11.8946 1.48043 11.7071 1.29289C11.5196 1.10536 11.2652 1 11 1ZM2.5 2V2.5C2.5 2.63261 2.55268 2.75979 2.64645 2.85355C2.74021 2.94732 2.86739 3 3 3C3.13261 3 3.25979 2.94732 3.35355 2.85355C3.44732 2.75979 3.5 2.63261 3.5 2.5V2H8.5V2.5C8.5 2.63261 8.55268 2.75979 8.64645 2.85355C8.74021 2.94732 8.86739 3 9 3C9.13261 3 9.25979 2.94732 9.35355 2.85355C9.44732 2.75979 9.5 2.63261 9.5 2.5V2H11V4H1V2H2.5ZM11 12H1V5H11V12Z" fill="currentColor"/>
  </svg>
);

const EllipsisIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 text-muted-foreground"
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
      className="peer h-4 w-4 rounded border border-border bg-background text-foreground accent-foreground dark:bg-[#c6c7f8] dark:accent-white"
    />
    <span className="sr-only">Select row</span>
  </label>
);

const StatusBadge = ({ status }: { status: OrderStatus }) => {
  const token = statusTokens[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs",
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
    className="flex h-10 w-10 items-center justify-center rounded-full text-xs font-semibold text-foreground"
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
  <div className="flex items-center justify-between px-6 pb-6 pt-4 text-sm text-muted-foreground">
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
            "flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium transition",
            item.active
              ? " bg-card text-foreground"
              : " text-foreground hover:bg-muted hover:text-foreground"
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
            <h1 className="text-lg font-semibold text-foreground">Orders List</h1>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg bg-muted p-1 py-3">
          <div className="flex items-center gap-2">
            <button type="button" className={actionButtonClass}>
              <PlusIcon />
              <span className="sr-only">Add order</span>
            </button>
            <button type="button" className={actionButtonClass}>
              <ListFilter className="h-4 w-4" />
              <span className="sr-only">Filter orders</span>
            </button>
            <button type="button" className={actionButtonClass}>
              <ArrowUpDown className="h-4 w-4" />
              <span className="sr-only">Sort orders</span>
            </button>
          </div>

          <div className="relative w-full max-w-[260px] mr-4 ">
            <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
              <IconSearch className="h-4 w-4 text-muted-foreground" />
            </span>
            <input
              type="search"
              placeholder="Search"
              className="h-11 w-full rounded-lg border border-border bg-card pl-10 pr-4 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/10"
            />
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl bg-background">
          <div className="min-w-[1100px]">
            <table className="min-w-full table-fixed">
              <thead className="text-xs font-semibold text-muted-foreground">
                <tr className="border-b border-border">
                  <th scope="col" className="w-8 py-2 text-left">
                    <Checkbox />
                  </th>
                  <th scope="col" className="px-6 py-2 text-left text-sm font-thin text-foreground">Order ID</th>
                  <th scope="col" className="px-6 py-2 text-left text-sm font-thin text-foreground">User</th>
                  <th scope="col" className="px-6 py-2 text-left text-sm font-thin text-foreground">Project</th>
                  <th scope="col" className="px-6 py-2 text-left text-sm font-thin text-foreground">Address</th>
                  <th scope="col" className="px-6 py-2 text-left text-sm font-thin text-foreground">Date</th>
                  <th scope="col" className="px-6 py-2 text-left text-sm font-thin text-foreground">Status</th>
                  <th scope="col" className="px-6 py-2 text-right text-sm font-thin" aria-label="Actions" />
                </tr>
              </thead>
              <tbody className="text-sm text-foreground">
                {orders.map((order, index) => (
                  <tr
                    key={`${order.id}-${index}`}
                    className={cn(
                      "transition border-b border-border hover:bg-muted/70 dark:hover:bg-muted/30",
                      order.selected
                        ? "bg-secondary/20 text-secondary-foreground"
                        : ""
                    )}
                  >
                    <td className="w-8 py-2 align-middle">
                      <Checkbox checked={order.selected} />
                    </td>
                    <td className="px-6 py-2 align-middle text-foreground">{order.id}</td>
                    <td className="px-6 py-2 align-middle">
                      <div className="flex items-center gap-3">
                        <Avatar {...order.user} />
                        <span className="text-foreground">{order.user.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-2 align-middle text-foreground">{order.project}</td>
                    <td className="px-6 py-2 align-middle text-foreground">
                      <span className="block truncate">{order.address}</span>
                    </td>
                    <td className="px-6 py-2 align-middle text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <CalendarIcon />
                        {order.dateLabel}
                      </span>
                    </td>
                    <td className="px-6 py-2 align-middle">
                      <StatusBadge status={order.status} />
                    </td>
                    <td className="px-6 py-2 align-middle text-right">
                      <button type="button" className="inline-flex justify-end text-muted-foreground hover:text-foreground">
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



