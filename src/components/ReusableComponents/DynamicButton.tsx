import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

interface DynamicButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  variant?: "primary" | "secondary" | "dark";
  link?: string;
}

const DynamicButton: React.FC<DynamicButtonProps> = ({
  title,
  variant = "primary",
  className = "",
  link = "",
  ...props
}) => {
  const baseStyles = "group inline-flex items-center font-bold pl-6 pr-2 py-2 rounded-full text-sm tracking-wide shadow-sm transition-all duration-300 select-none";
  
  const variants = {
    primary: {
      btn: "bg-[#FFB057] hover:bg-[#e09c4d] text-[#111e38]",
      circle: "bg-[#111e38] text-[#FFB057]"
    },
    secondary: {
      btn: "bg-white hover:bg-slate-50 border border-slate-200 text-[#111e38]",
      circle: "bg-[#111e38] text-white"
    },
    dark: {
      btn: "bg-[#111e38] hover:bg-[#1b2d4f] text-white",
      circle: "bg-[#FFB057] text-[#111e38]"
    }
  };

  const currentVariant = variants[variant];
  const combinedClasses = `${baseStyles} ${currentVariant.btn} ${className}`;

  // Shared Inner Structure Content
  const InnerContent = () => (
    <>
      <span className="whitespace-nowrap">{title}</span>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center ml-4 group-hover:rotate-45 transition-transform duration-300 ${currentVariant.circle}`}>
        <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
      </div>
    </>
  );

  // 1. External URL Link Condition
  if (link && (link.startsWith("http") || link.startsWith("www"))) {
    return (
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={combinedClasses}
      >
        <InnerContent />
      </a>
    );
  }

  // 2. Client-Side SPA Internal Routing Link Condition (Matches your /, /home, /about, etc. routes)
  if (link) {
    return (
      <Link to={link} className={combinedClasses}>
        <InnerContent />
      </Link>
    );
  }

  // 3. Fallback Standard Button Native Option (Maintains full button attributes like onClick, type, disabled)
  return (
    <button className={combinedClasses} {...props}>
      <InnerContent />
    </button>
  );
};

export default DynamicButton;