import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { IconSearch } from "@/components/icons";
import { ListFilter, ArrowUpDown } from "lucide-react";
import { Checkbox } from "./Checkbox";
import { StatusBadge } from "./StatusBadge";
import { Avatar } from "../ui/Avatar";
import { Pagination } from "./Pagination";
import { PlusIcon, CalendarIcon, EllipsisIcon } from "./OrdersIcons";
import { orders, actionButtonClass } from "./constants";

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
                        {order.dateLabel}
                      </span>
                    </td>
                    <td className="px-6 py-2 align-middle">
                      <StatusBadge status={order.status} />
                    </td>
                    <td className="px-6 py-2 align-middle text-right">
                      <button type="button" className="inline-flex justify-end text-muted-foreground hover:text-foreground">
                        <span className="sr-only">More actions</span>
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



