interface StatItem {
  value: string;
  label: string;
}

interface StatsProps {
  stats: StatItem[];
}

export default function Stats({ stats }: StatsProps) {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {stats.map((item, index) => (
          <div key={index}>
            <h3 className="text-4xl font-bold text-[#4b0055]">
              {item.value}
            </h3>
            <p className="mt-2 text-gray-600">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
