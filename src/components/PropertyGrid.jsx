import PropertyCard from "./PropertyCard";

export default function PropertyGrid({ properties, columns = 3 }) {
  const colClass =
    columns === 2
      ? "sm:grid-cols-2"
      : "sm:grid-cols-2 lg:grid-cols-3";

  if (!properties.length) {
    return (
      <div className="py-24 text-center">
        <p className="text-[15px] text-muted">
          No residences match your current filters. Try adjusting your search.
        </p>
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-1 ${colClass} gap-x-8 gap-y-14`}>
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}
