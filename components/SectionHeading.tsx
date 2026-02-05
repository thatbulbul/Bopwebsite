interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  center = false,
}: SectionHeadingProps) {
  return (
    <div className={`${center ? "text-center" : "text-left"} mb-12`}>
      <h2 className="text-3xl md:text-4xl font-bold text-[#4b0055]">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
