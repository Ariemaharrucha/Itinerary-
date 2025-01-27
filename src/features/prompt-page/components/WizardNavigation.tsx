import { useWizard } from "react-use-wizard";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast"

interface WizardNavigationProps {
  showNext?: boolean;
  showBack?: boolean;
  onSubmit?: () => void;
  isValid?: boolean;
}

export const WizardNavigation: React.FC<WizardNavigationProps> = ({ 
  showNext = true, 
  showBack = true, 
  onSubmit,
  isValid = true,
}) => {
  const { nextStep, previousStep, isFirstStep, isLastStep } = useWizard();
  const { toast } = useToast()

  const handleNext = () => {
    if (!isValid) {
      toast({
        variant: "destructive",
        description: "Silakan isi semua data yang diperlukan sebelum melanjutkan.",
      })
      return;
    }

    if (isLastStep) {
      if(onSubmit) onSubmit();
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
