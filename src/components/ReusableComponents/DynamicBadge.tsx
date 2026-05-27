import React from "react";

interface DynamicBadgeProps {
  title: string;
  icon?: React.ReactNode;
  className?: string;
}

const DynamicBadge: React.FC<DynamicBadgeProps> = ({
  title,
  icon = <span className="text-[#113217] text-sm">✲</span>,
  className = "",
}) => {
  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 text-xs sm:text-sm font-semibold tracking-wide shadow-sm text-gray-800 ${className}`}
    >
      {icon}
      <span className="leading-none">{title}</span>
    </div>
  );
};

export default DynamicBadge;
