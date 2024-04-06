const EarnStats = ({
  stats,
}: {
  stats: { id: number; title: string; stat: string }[];
}) => {
  return (
    <div
      className="rounded-2xl border border-[#2D2D2D] p-8 md:grid md:grid-cols-5 md:grid-rows-none md:gap-8 md:space-y-0"
      style={{
        background: "linear-gradient(180deg, #111111 0%, #1C1C1C 100%)",
      }}
    >
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="border-[#2a2a2a] text-center md:text-left [&:not(:last-child)]:pb-8 md:[&:not(:last-child)]:border-r md:[&:not(:last-child)]:pb-0"
        >
          <p>{stat.title}</p>
          <p>{stat.stat}</p>
        </div>
      ))}
    </div>
  );
};

export { EarnStats };
