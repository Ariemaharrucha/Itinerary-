import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  text: string;
}

export const FeatureCard = ({ icon, text }: FeatureCardProps) => {
  return (
    <div className="w-60 flex justify-center items-center flex-col text-pretty space-y-3">
      <div className="size-16 border border-slate-500 rounded-full flex justify-center items-center">
        {icon}
      </div>
      <p className="text-center text-base">{text}</p>
    </div>
  );
};
