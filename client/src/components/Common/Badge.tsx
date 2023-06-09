import React from "react";

interface BadgeProps {
  value: number;
}

const Badge: React.FC<BadgeProps> = ({ value }) => {
  return (
    <sup className="rounded-full bg-secondary text-center text-white py-0.5 px-1.5 text-sm">
      {value}
    </sup>
  );
};

export default Badge;
