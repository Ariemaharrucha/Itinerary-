import {
  Card,
  CardContent,
//   CardDescription,
//  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

interface CardDescriptionProps {
  title: string;
  items?: string[];
  clasName?: string;
  icon?: React.ReactNode;
}

export const CardDescription: React.FC<CardDescriptionProps> = ({
  title,
  items,
  clasName,
  icon
}) => {
  return (
    <Card className={`mb-6 shadow-lg ${clasName} bg-blue-600 text-white border-[#BCCCDC]`}>
      <CardHeader>
        <CardTitle className="text-xl font-semibold flex items-center gap-2">{title} {icon}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5">
          {items?.map((item, index: number) => (
            <li key={index} className="mb-2">
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
