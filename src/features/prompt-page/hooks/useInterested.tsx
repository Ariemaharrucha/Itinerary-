import useFormState from "@/store/useStore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { generateItenray } from "../services/get.itinerary";

export const useInterested = () => {
  const { stepData, setStepData, resetForm, setTravelPlan } = useFormState();
  const [selectedInterests, setSelectedInterests] = useState<string[]>(
    Array.isArray(stepData?.preferences) ? stepData.preferences : []
  );
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isError, setError] = useState<string>("");
  const navigate = useNavigate();
  const isValid =
    !!selectedInterests &&
    !!stepData.budget &&
    !!stepData.type &&
    !!stepData.duration &&
    !!stepData.location;

  const handleTogglePreferences = (value: string) => {
    const updatedInterests = selectedInterests.includes(value)
      ? selectedInterests.filter((item) => item !== value)
      : [...selectedInterests, value];
    setSelectedInterests(updatedInterests);
    setStepData("preferences", updatedInterests);
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      setError(""); // Reset error state
      const response = await generateItenray(stepData);
      setTravelPlan(response);
      if (response) {
        navigate("/itinerary-preview");
        resetForm();
        setSelectedInterests([]);
      } else {
        setError("Failed to generate itinerary. Please try again.");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return {selectedInterests, isLoading, isError, isValid, handleTogglePreferences, handleSubmit};
};
