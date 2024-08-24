import React from "react";

interface PlusIconProps {
  width?: string;
  height?: string;
  color?: string;
}

const PlusIcon: React.FC<PlusIconProps> = ({
  width = "24",
  height = "24",
  color = "black",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 5v14m-7-7h14"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default PlusIcon;
