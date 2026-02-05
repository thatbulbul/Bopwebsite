import { ReactNode } from "react";

interface CardProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  light?: boolean;
}

export default function Card({
  title,
  description,
  icon,
  light = true,
}: CardProps) {
  return (
    <div
      className={`rounded-2xl p-8 transition hover:scale-105 shadow-lg
        ${
          light
            ? "bg-white text-[#4b0055]"
            : "border border-white/20 text-white hover:bg-white hover:text-[#4b0055]"
        }`}
    >
      {icon && <div className="mb-4">{icon}</div>}

      <h3 className="text-xl font-semibold mb-2">
        {title}
      </h3>

      {description && (
        <p className="text-sm opacity-80">
          {description}
        </p>
      )}
    </div>
  );
}
