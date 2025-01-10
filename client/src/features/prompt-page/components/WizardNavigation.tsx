import { useWizard } from "react-use-wizard";
import { Button } from "@/components/ui/button";

interface WizardNavigationProps {
  showNext?: boolean;
  showBack?: boolean;
  onSubmit?: () => void; // Membuat onSubmit menjadi opsional
}

export const WizardNavigation: React.FC<WizardNavigationProps> = ({ 
  showNext = true, 
  showBack = true, 
  onSubmit 
}) => {
  const { nextStep, previousStep, isFirstStep, isLastStep } = useWizard();

  const handleNext = () => {
    if (isLastStep) {
      onSubmit();
    } else {
      nextStep(); 
    }
  };

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
      {showNext && (
        <Button
          size={"lg"}
          className="ml-auto font-bold text-lg"
          onClick={handleNext}
        >
          {isLastStep ? "Submit" : "Next"}
        </Button>
      )}
    </div>
  );
};
