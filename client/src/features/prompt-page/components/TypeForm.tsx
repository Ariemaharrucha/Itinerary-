import useFormState from "@/store/useStore";
import { WizardNavigation } from "./WizardNavigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {useEffect, useState } from "react";
import { CardType } from "./CardType";
import { Input } from "@/components/ui/input";
import { tripTypes } from "@/constant/tripTypes";

export const TypeForm = () => {
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

  return (
    <section className=" w-2/3 m-auto ">
      <div className="text-center">
        <h1 className="mt-6 mb-8 text-3xl font-bold ">
          Apa jenis perjalanan yang Anda dan berapa modal anda?
        </h1>
        <div className="mb-6 flex gap-4">
          <Select value={currency} onValueChange={handleCurrency}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Mata uang" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Rp">Rp.</SelectItem>
              <SelectItem value="$">$</SelectItem>
            </SelectContent>
          </Select>
          <Input placeholder="Masukkan modal" value={amount} onChange={(e) => handleBudgetChange(e.target.value)}></Input>
        </div>
      </div>

      <div className="pb-5">
        <div className="grid grid-cols-12 gap-2">
          {tripTypes.map((trip) => (
            <CardType
              key={trip.value}
              icon={trip.icon}
              label={trip.label}
              value={trip.value}
              isSelected={selectedType === trip.value}
              onClick={() => handleSelectType(trip.value)}
            />
          ))}
        </div>
      </div>

      <WizardNavigation isValid={valid}/>
    </section>
  );
};

