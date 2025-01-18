import useFormState from "@/store/useStore";
import { useEffect, useState } from "react";

export const useTypeForm = () => {
    const { setStepData, stepData } = useFormState();
    const [selectedType, setSelectedType] = useState<string | undefined >(stepData.type ?? " "); 
    const [currency, setCurrency] = useState("");
    const [amount, setAmount] = useState("");
    const valid = !!currency && !!amount;
    
    useEffect(()=>{
      if(stepData.budget) {
        const [initialCurrency, initialAmount] = stepData.budget.split(" ");
        setCurrency(initialCurrency);
        setAmount(initialAmount);
      }
    },[stepData.budget])
  
    const updateCombinedBudget = (currency: string, amount: string) => {
      const budget = `${currency} ${amount}`;
      setStepData("budget", budget );
    };
  
    const handleSelectType = (type: string) => {
      setSelectedType(type);
      setStepData("type", type );
      console.log(type);
    };
  
    const handleCurrency = (value: string) => {
      setCurrency(value);
      updateCombinedBudget(value, amount);
    }
  
    const handleBudgetChange = (value: string) => {
      setAmount(value);
      updateCombinedBudget(currency, value);
    }

    return {selectedType, valid, currency, amount, handleSelectType, handleCurrency, handleBudgetChange }
}
