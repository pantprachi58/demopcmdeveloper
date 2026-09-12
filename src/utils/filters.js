// Single source of truth for the property filters used by both the home page
// hero search console and the /properties listing page.

export const LOCATION_OPTIONS = ["All Locations", "Dehradun", "Nainital", "Bangalore"];

export const TYPE_OPTIONS = [
  "All Types",
  "Residential",
  "Commercial",
  "Apartments",
  "Industrial",
  "Luxury Homes",
];

export const BUDGET_OPTIONS = ["Any Budget", "Under ₹3 Cr", "₹3 Cr – ₹5 Cr", "Above ₹5 Cr"];

export const STATUS_OPTIONS = ["All Status", "AVAILABLE", "NEW LAUNCH", "SOLD OUT"];

export const DEFAULT_FILTERS = {
  city: LOCATION_OPTIONS[0],
  type: TYPE_OPTIONS[0],
  budget: BUDGET_OPTIONS[0],
  status: STATUS_OPTIONS[0],
};

const OPTIONS_BY_KEY = {
  city: LOCATION_OPTIONS,
  type: TYPE_OPTIONS,
  budget: BUDGET_OPTIONS,
  status: STATUS_OPTIONS,
};

export function matchesBudget(priceValue, budget) {
  if (budget === "Under ₹3 Cr") return priceValue < 30000000;
  if (budget === "₹3 Cr – ₹5 Cr") return priceValue >= 30000000 && priceValue <= 50000000;
  if (budget === "Above ₹5 Cr") return priceValue > 50000000;
  return true;
}

export function filterProperties(list, filters) {
  return list.filter((p) => {
    if (filters.city !== DEFAULT_FILTERS.city && p.city !== filters.city) return false;
    if (filters.type !== DEFAULT_FILTERS.type && p.type !== filters.type) return false;
    if (filters.status !== DEFAULT_FILTERS.status && p.status !== filters.status) return false;
    if (!matchesBudget(p.priceValue, filters.budget)) return false;
    return true;
  });
}

/** Query string for /properties — only non-default values are carried. */
export function filtersToSearchParams(filters) {
  const params = new URLSearchParams();
  for (const key of Object.keys(DEFAULT_FILTERS)) {
    const value = filters[key];
    if (value && value !== DEFAULT_FILTERS[key]) params.set(key, value);
  }
  return params;
}

/** Reads filters back off the URL, ignoring anything that isn't a known option. */
export function filtersFromSearchParams(searchParams) {
  const filters = { ...DEFAULT_FILTERS };
  for (const key of Object.keys(DEFAULT_FILTERS)) {
    const value = searchParams.get(key);
    if (value && OPTIONS_BY_KEY[key].includes(value)) filters[key] = value;
  }
  return filters;
}
