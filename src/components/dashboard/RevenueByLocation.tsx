"use client";

import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

import { revenueByLocation } from "./constants";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export const RevenueByLocation = () => {
  const maxAmount = Math.max(...revenueByLocation.map((entry) => entry.amount));

  return (
    <div className="rounded-3xl bg-[#f7f9fb] py-6 px-3">
      <div>
        <p className="text-lg font-medium text-black">Revenue by Location</p>
      </div>

      <div className="p-5">
        <div className="relative h-48 overflow-hidden">
          <ComposableMap
            projectionConfig={{ scale: 225, center: [10, 15] }}
            style={{ width: "100%", height: "100%" }}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    stroke="#D6E2F5"
                    strokeWidth={0.5}
                    fill="#CBDDF7"
                  />
                ))
              }
            </Geographies>

            {revenueByLocation.map((entry) => (
              <Marker key={entry.city} coordinates={entry.coordinates}>
                <circle r={10} fill="#1C1F2E" stroke="#FFFFFF" strokeWidth={2} />
              </Marker>
            ))}
          </ComposableMap>
        </div>
      </div>

      <ul className="mt-6 space-y-5">
        {revenueByLocation.map((entry) => {
          const width = (entry.amount / maxAmount) * 100;

          return (
            <li key={entry.city} className="space-y-2 text-sm px-5 text-[#1C1F2E]">
              <div className="flex items-center justify-between">
                <span className="text-sm">{entry.city}</span>
                <span className="text-sm">{entry.value}</span>
              </div>
              <div className="h-1 rounded-full bg-[#E6EEF9]">
                <div
                  className="h-full rounded-full bg-[#B5CBF7]"
                  style={{ width: `${width}%` }}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
