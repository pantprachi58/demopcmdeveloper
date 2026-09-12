import { LayoutGrid, List, ChevronDown } from "lucide-react";
import {
  LOCATION_OPTIONS,
  TYPE_OPTIONS,
  BUDGET_OPTIONS,
  STATUS_OPTIONS,
} from "../utils/filters";

function Select({ label, value, onChange, options }) {
  return (
    <div className="relative flex flex-col gap-2 min-w-[150px]">
      <label className="text-[10px] tracking-[0.16em] uppercase text-muted">{label}</label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="appearance-none w-full bg-transparent border-b border-ink/20 pb-2 pr-6 text-[14px] text-ink focus:outline-none focus:border-gold transition-colors"
        >
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <ChevronDown
          size={14}
          strokeWidth={1.5}
          className="absolute right-0 top-0.5 text-muted pointer-events-none"
        />
      </div>
    </div>
  );
}

export default function PropertyFilter({ filters, setFilters, view, setView, resultCount }) {
  const update = (key) => (value) => setFilters((f) => ({ ...f, [key]: value }));

  return (
    <div className="flex flex-col gap-8 border-y border-ink/10 py-8 mb-14">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="flex flex-wrap gap-x-10 gap-y-6">
          <Select
            label="Location"
            value={filters.city}
            onChange={update("city")}
            options={LOCATION_OPTIONS}
          />
          <Select
            label="Property Type"
            value={filters.type}
            onChange={update("type")}
            options={TYPE_OPTIONS}
          />
          <Select
            label="Budget"
            value={filters.budget}
            onChange={update("budget")}
            options={BUDGET_OPTIONS}
          />
          <Select
            label="Status"
            value={filters.status}
            onChange={update("status")}
            options={STATUS_OPTIONS}
          />
        </div>

        <div className="flex items-center gap-1 shrink-0">
          <button
            onClick={() => setView("grid")}
            aria-label="Grid view"
            className={`w-10 h-10 flex items-center justify-center border transition-colors ${
              view === "grid" ? "border-ink bg-ink text-ivory" : "border-ink/20 text-ink/50"
            }`}
          >
            <LayoutGrid size={15} strokeWidth={1.5} />
          </button>
          <button
            onClick={() => setView("list")}
            aria-label="List view"
            className={`w-10 h-10 flex items-center justify-center border transition-colors ${
              view === "list" ? "border-ink bg-ink text-ivory" : "border-ink/20 text-ink/50"
            }`}
          >
            <List size={15} strokeWidth={1.5} />
          </button>
        </div>
      </div>
      <p className="text-[13px] text-muted">{resultCount} residences found</p>
    </div>
  );
}
