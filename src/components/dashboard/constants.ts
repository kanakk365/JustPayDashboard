export const stats = [
  {
    label: "Customers",
    value: "3,781",
    change: "+11.01%",
    tone: "positive" as const,
    accent: "#e3f5ff",
  },
  {
    label: "Orders",
    value: "1,219",
    change: "-0.03%",
    tone: "negative" as const,
    accent: "#f7f9fb",
  },
  {
    label: "Revenue",
    value: "$695",
    change: "+15.03%",
    tone: "positive" as const,
    accent: "#f7f9fb",
  },
  {
    label: "Growth",
    value: "30.1%",
    change: "+6.08%",
    tone: "positive" as const,
    accent: "#e5ecf6",
  },
];

export const revenueByLocation = [
  {
    city: "New York",
    value: "72K",
    amount: 72,
    coordinates: [-74.006, 40.7128],
  },
  {
    city: "San Francisco",
    value: "39K",
    amount: 39,
    coordinates: [-122.4194, 37.7749],
  },
  {
    city: "Sydney",
    value: "25K",
    amount: 25,
    coordinates: [151.2093, -33.8688],
  },
  {
    city: "Singapore",
    value: "61K",
    amount: 61,
    coordinates: [103.8198, 1.3521],
  },
];

export const projections = [
  { month: "Jan", actual: 18, projectedDelta: 2 },
  { month: "Feb", actual: 20, projectedDelta: 4 },
  { month: "Mar", actual: 18, projectedDelta: 3 },
  { month: "Apr", actual: 22, projectedDelta: 5 },
  { month: "May", actual: 14, projectedDelta: 3 },
  { month: "Jun", actual: 20, projectedDelta: 3 },
];

export const topSellingProducts = [
  {
    name: "ASOS Ridley High Waist",
    price: "$79.49",
    quantity: 82,
    amount: "$6,518.18",
  },
  {
    name: "Marco Lightweight Shirt",
    price: "$128.50",
    quantity: 37,
    amount: "$4,754.50",
  },
  {
    name: "Half Sleeve  Shirt",
    price: "$39.99",
    quantity: 64,
    amount: "$2,559.36",
  },
  {
    name: "Lightweight Jacket",
    price: "$20.00",
    quantity: 184,
    amount: "$3,680.00",
  },
  {
    name: "Marco Shoes",
    price: "$79.49",
    quantity: 64,
    amount: "$1,965.81",
  },
];

export const totalSalesBreakdown = [
  {
    label: "Direct",
    value: 300.56,
    color: "#1c1c1c",
  },
  {
    label: "Affiliate",
    value: 135.18,
    color: "#baedbd",
  },
  {
    label: "Sponsored",
    value: 154.02,
    color: "#95a4fc",
  },
  {
    label: "E-mail",
    value: 48.96,
    color: "#b1e3ff",
  },
];
