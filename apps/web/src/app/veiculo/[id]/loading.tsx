export default function ListingLoading() {
  return (
    <div className="min-h-screen bg-white">
      <div className="h-[68vh] min-h-[420px] w-full skeleton-shimmer" />
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-2">
            <div className="h-6 w-40 rounded-full skeleton-shimmer" />
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-24 rounded-2xl skeleton-shimmer" />
              ))}
            </div>
            <div className="h-40 rounded-2xl skeleton-shimmer" />
          </div>
          <div className="lg:col-span-1">
            <div className="h-80 rounded-2xl skeleton-shimmer" />
          </div>
        </div>
      </div>
    </div>
  );
}
