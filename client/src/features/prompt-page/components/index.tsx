import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { LocationForm } from "./LocationForm";

export const PromptPage = () => {
  return (
    <div className="container mx-auto min-h-screen pb-2 ">
      <header className="text-center p-4">
        <p>1 of 4</p>
      </header>
      <div className="py-14 flex justify-center items-center">
        <Progress value={20} className="w-[60%] h-3" />
      </div>
      <LocationForm />
      <Button size={"lg"} className="mt-4 block ml-auto font-bold text-lg">
        Next
      </Button>
    </div>
  );
};
