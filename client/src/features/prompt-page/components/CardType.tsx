import { ReactNode } from "react";

interface CardTypeProps {
  icon: ReactNode;
  label: string;
  value: string;
  onClick: () => void;
  isSelected: boolean;
}

export const CardType = ({
  icon,
  label,
  value,
  isSelected,
  onClick,
}: CardTypeProps) => {
  return (
    <label
      className={`col-span-3 border rounded-lg px-4 pt-4 pb-12 flex justify-between items-center cursor-pointer transition ${
        isSelected ? "bg-green-400/80" : ""
      }`}
      onClick={onClick}
    >
      <div className="space-y-2">
        {icon}
        <p className="font-semibold">{label}</p>
      </div>
      <input type="radio" name="tripType" value={value} className="hidden" />
    </label>
  );
};
