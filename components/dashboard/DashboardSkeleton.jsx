"use client";

const SkeletonBlock = ({ className = "" }) => {
  return <div className={`animate-pulse rounded-3xl bg-gray-200 ${className}`} />;
};

const DashboardSkeleton = () => {
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <aside className="hidden lg:flex w-[270px] bg-white border-r border-gray-200 p-5 flex-col gap-6">
        <SkeletonBlock className="h-12 w-36 rounded-2xl" />
        <div className="space-y-3 pt-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <SkeletonBlock key={index} className="h-12 w-full rounded-xl" />
          ))}
        </div>
        <SkeletonBlock className="h-28 w-full mt-auto rounded-2xl" />
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-[75px] bg-white border-b border-gray-200 px-5 md:px-8 flex items-center justify-between">
          <div>
            <SkeletonBlock className="h-5 w-32 rounded-xl" />
            <SkeletonBlock className="h-3 w-44 rounded-xl mt-3" />
          </div>
          <div className="flex items-center gap-3">
            <SkeletonBlock className="h-12 w-12 rounded-2xl" />
            <SkeletonBlock className="h-12 w-40 rounded-2xl hidden md:block" />
          </div>
        </header>

        <main className="flex-1 overflow-hidden p-5 md:p-8">
          <div className="max-w-[1600px] mx-auto space-y-8">
            <SkeletonBlock className="h-56 w-full" />

            <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
              {Array.from({ length: 4 }).map((_, index) => (
                <SkeletonBlock key={index} className="h-36 w-full" />
              ))}
            </section>

            <section className="grid lg:grid-cols-3 gap-6">
              {Array.from({ length: 3 }).map((_, index) => (
                <SkeletonBlock key={index} className="h-72 w-full" />
              ))}
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardSkeleton;
