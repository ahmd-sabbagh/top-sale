const HomeCategoriesSkeleton = () => {
  return (
    <div>
      {/* Skeleton for Title */}
      <div className="h-6 w-48 rounded bg-gray-200 dark:bg-gray-700 animate-pulse mb-4" />

      {/* Skeleton for Categories */}
      <div className="mt-5 grid grid-cols-2 md:flex items-center flex-wrap gap-3">
        {Array.from({ length: 6 }).map((_, idx) => (
          <div
            key={idx}
            className="md:min-w-[187px] relative z-[2] px-3 flex flex-col items-center gap-2"
          >
            <div className="h-[71px] w-full rounded bg-gray-200 dark:bg-gray-700 animate-pulse" />
            <div className="h-4 w-24 rounded bg-gray-200 dark:bg-gray-700 animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCategoriesSkeleton;
