import { useWizard } from "react-use-wizard";
import { Button } from "@/components/ui/button";

export const WizardNavigation = ({ showNext = true, showBack = true }) => {
  const { nextStep, previousStep, isFirstStep, isLastStep } = useWizard();

  return (
    <div className="flex justify-between items-center mt-8">
      {showBack && !isFirstStep && (
        <Button
          size={"lg"}
          className="font-bold text-lg"
          onClick={previousStep}
        >
          Back
        </Button>
      )}
      {showNext && !isLastStep && (
        <Button
          size={"lg"}
          className="ml-auto font-bold text-lg"
          onClick={nextStep}
        >
          Next
        </Button>
      )}
    </div>
  );
};
