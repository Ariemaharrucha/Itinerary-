import useFormState from "@/store/useStore";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { generateItenray } from "../services/get.itinerary";
import { vacationInterests } from "@/constant/interests";

export const useInterested = () => {
  const { stepData, setStepData, resetForm, setTravelPlan } = useFormState();
  const [selectedInterests, setSelectedInterests] = useState<string[]>(
    Array.isArray(stepData?.preferences) ? stepData.preferences : []
  );
  const [newInterests, setNewInterests] = useState<string>("");
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

  const handleNewInterests = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value.toLowerCase();
    setNewInterests(value);
    
    localStorage.setItem("newInterests", value);
    // Proses hanya nilai terakhir (setelah koma)
    const lastInterest = value.split(",").pop()?.trim() ?? "";
  
    // Pastikan nilai terakhir tidak ada di `vacationInterests` dan `selectedInterests`
    const isAlreadyInVacationInterests = vacationInterests.some(
      (interest) => interest.value.toLowerCase() === lastInterest
    );
    const isDuplicate = selectedInterests.includes(lastInterest);
  
    if (lastInterest.length > 1 && !isDuplicate && !isAlreadyInVacationInterests) {
      const updatedInterests = [...new Set([...selectedInterests, lastInterest])];
      setSelectedInterests(updatedInterests);
      setStepData("preferences", updatedInterests);
    }
  
    // console.log(lastInterest);
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
        setNewInterests("");
      } else {
        setError("Failed to generate itinerary. Please try again.");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return {
    selectedInterests,
    newInterests,
    setNewInterests,
    isLoading,
    isError,
    isValid,
    handleTogglePreferences,
    handleSubmit,
    handleNewInterests,
  };
};
